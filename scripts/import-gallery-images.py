from collections import deque
from pathlib import Path
import json
import re
import shutil

import numpy as np
from PIL import Image

PROJECT_ROOT = Path(__file__).resolve().parents[1]
SOURCE_DIR = PROJECT_ROOT / "public" / "images"
EXTRACTED_DIR = SOURCE_DIR / "extracted"
DATA_FILE = PROJECT_ROOT / "src" / "data" / "gallery.ts"
MIN_CANDIDATE_BYTES = 18_000


def natural_key(path: Path):
    return [int(part) if part.isdigit() else part for part in re.split(r"(\d+)", path.name)]


def connected_components(mask):
    height, width = mask.shape
    seen = np.zeros_like(mask, dtype=bool)
    for y in range(height):
        for x in range(width):
            if not mask[y, x] or seen[y, x]:
                continue
            queue = deque([(x, y)])
            seen[y, x] = True
            xs = []
            ys = []
            while queue:
                cx, cy = queue.popleft()
                xs.append(cx)
                ys.append(cy)
                for nx, ny in ((cx + 1, cy), (cx - 1, cy), (cx, cy + 1), (cx, cy - 1)):
                    if 0 <= nx < width and 0 <= ny < height and mask[ny, nx] and not seen[ny, nx]:
                        seen[ny, nx] = True
                        queue.append((nx, ny))
            yield min(xs), min(ys), max(xs) + 1, max(ys) + 1, len(xs)


def image_metrics(image: Image.Image):
    width = 96
    height = max(1, round(image.height * width / image.width))
    arr = np.asarray(image.convert("RGB").resize((width, height))).astype(np.float32)
    gray = arr.mean(axis=2)
    max_channel = arr.max(axis=2)
    min_channel = arr.min(axis=2)
    saturation = np.divide(max_channel - min_channel, max_channel, out=np.zeros_like(max_channel), where=max_channel > 0)
    colorful = ((saturation > 0.18) & (gray > 35) & (gray < 245)).mean()
    white = (gray > 225).mean()
    return float(colorful), float(white), float(gray.std())


def detect_photo_boxes(path: Path):
    image = Image.open(path).convert("RGB")
    target_width = 420
    target_height = round(image.height * target_width / image.width)
    small = image.resize((target_width, target_height))
    arr = np.asarray(small).astype(np.float32)
    gray = arr.mean(axis=2)
    max_channel = arr.max(axis=2)
    min_channel = arr.min(axis=2)
    saturation = np.divide(max_channel - min_channel, max_channel, out=np.zeros_like(max_channel), where=max_channel > 0)

    color_mask = (saturation > 0.22) & (gray > 35) & (gray < 238)
    color_mask[:20, :] = False
    color_mask[-20:, :] = False
    color_mask[:, :25] = False
    color_mask[:, -25:] = False

    cell = 7
    grid_h = target_height // cell
    grid_w = target_width // cell
    grid = np.zeros((grid_h, grid_w), dtype=bool)
    for yy in range(grid_h):
        for xx in range(grid_w):
            block = color_mask[yy * cell : (yy + 1) * cell, xx * cell : (xx + 1) * cell]
            grid[yy, xx] = block.mean() > 0.08

    for _ in range(2):
        padded = np.pad(grid, 1)
        grid = sum(
            padded[1 + dy : 1 + dy + grid_h, 1 + dx : 1 + dx + grid_w]
            for dy in (-1, 0, 1)
            for dx in (-1, 0, 1)
        ) >= 3

    scale_x = image.width / (grid_w * cell)
    scale_y = image.height / (grid_h * cell)
    boxes = []
    for x1, y1, x2, y2, area in connected_components(grid):
        ox1 = max(0, int(x1 * cell * scale_x) - 20)
        oy1 = max(0, int(y1 * cell * scale_y) - 20)
        ox2 = min(image.width, int(x2 * cell * scale_x) + 20)
        oy2 = min(image.height, int(y2 * cell * scale_y) + 20)
        box_width = ox2 - ox1
        box_height = oy2 - oy1
        aspect = box_width / box_height

        if box_width < 220 or box_height < 130 or area < 16:
            continue
        if box_width > image.width * 0.83 or box_height > image.height * 0.58:
            continue
        if aspect < 0.55 or aspect > 3.8:
            continue
        if ox1 < 70 and box_width < 360:
            continue

        crop = image.crop((ox1, oy1, ox2, oy2))
        colorful, white, std = image_metrics(crop)
        if colorful < 0.13 or white > 0.56 or std < 35:
            continue
        boxes.append((ox1, oy1, ox2, oy2))

    boxes = sorted(boxes, key=lambda box: (box[2] - box[0]) * (box[3] - box[1]), reverse=True)
    picked = []
    for box in boxes:
        box_area = (box[2] - box[0]) * (box[3] - box[1])
        keep = True
        for picked_box in picked:
            intersection = max(0, min(box[2], picked_box[2]) - max(box[0], picked_box[0])) * max(
                0, min(box[3], picked_box[3]) - max(box[1], picked_box[1])
            )
            picked_area = (picked_box[2] - picked_box[0]) * (picked_box[3] - picked_box[1])
            if intersection / min(box_area, picked_area) > 0.35:
                keep = False
                break
        if keep:
            picked.append(box)
    return image, picked[:5]


def scan_number(name: str):
    match = re.search(r"\((\d+)\)", name)
    return int(match.group(1)) if match else None


def category_for(source_name: str):
    if source_name.startswith("1下津村史序言"):
        return "序言合影"
    number = scan_number(source_name)
    if number is None:
        return "其他待分"
    if 1 <= number <= 60:
        return "村貌风物"
    if 61 <= number <= 119:
        return "乡村建设"
    if 120 <= number <= 149:
        return "人物照片"
    if 150 <= number <= 183:
        return "祠堂古建"
    if 184 <= number <= 205:
        return "教育影像"
    return "其他待分"


def title_for(source_name: str, index: int):
    number = scan_number(source_name)
    if source_name.startswith("1下津村史序言"):
        return f"序言照片 {number or index}"
    if number:
        return f"扫描页 {number} 提取照片 {index}"
    return f"村史扫描提取照片 {index}"


def write_gallery(records):
    body = """export type GalleryPhoto = {
  id: string;
  title: string;
  year: string;
  category: string;
  image: string;
  description: string;
  sourcePage?: string;
};

export const galleryPhotos: GalleryPhoto[] = """
    body += json.dumps(records, ensure_ascii=False, indent=2)
    body += ";\n"
    DATA_FILE.write_text(body, encoding="utf-8")


def main():
    if not SOURCE_DIR.exists():
        raise SystemExit(f"未找到图片目录：{SOURCE_DIR}")

    if EXTRACTED_DIR.exists():
        shutil.rmtree(EXTRACTED_DIR)
    EXTRACTED_DIR.mkdir(parents=True, exist_ok=True)

    source_files = sorted(
        [path for path in SOURCE_DIR.glob("*.jpg") if path.is_file()],
        key=natural_key,
    )
    records = []
    photo_count = 0

    for source in source_files:
        image, boxes = detect_photo_boxes(source)
        for index, box in enumerate(boxes, start=1):
            safe_stem = source.stem.replace(" ", "_")
            file_name = f"{safe_stem}_photo_{index:02d}.jpg"
            target = EXTRACTED_DIR / file_name
            image.crop(box).save(target, quality=92)
            if target.stat().st_size < MIN_CANDIDATE_BYTES:
                target.unlink()
                continue
            photo_count += 1
            records.append(
                {
                    "id": f"scan-photo-{photo_count:03d}",
                    "title": title_for(source.name, index),
                    "year": "村史扫描件",
                    "category": category_for(source.name),
                    "image": f"/images/extracted/{file_name}",
                    "description": "由村史扫描页自动初筛裁出，建议后续人工校对标题、年代和人物说明。",
                    "sourcePage": source.name,
                }
            )

    if not records:
        records = [
            {
                "id": f"scan-page-{index:03d}",
                "title": source.stem,
                "year": "村史扫描件",
                "category": "原始扫描页",
                "image": f"/images/{source.name}",
                "description": "未检测到可裁切照片区域，先显示原始扫描页。",
                "sourcePage": source.name,
            }
            for index, source in enumerate(source_files, start=1)
        ]

    write_gallery(records)
    print(f"扫描 JPG：{len(source_files)} 张")
    print(f"提取候选照片：{len(records)} 张")
    print(f"输出目录：{EXTRACTED_DIR.relative_to(PROJECT_ROOT)}")
    print(f"已生成：{DATA_FILE.relative_to(PROJECT_ROOT)}")


if __name__ == "__main__":
    main()
