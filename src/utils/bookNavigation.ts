import { bookChapters, type BookChapter } from '../data/book';
import { searchDocs } from '../data/searchDocs';
export type ReadingChapter = BookChapter & { parentId: string; depth: number };
const digits: Record<string, number> = {
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9,
};
function ordinal(segment: string) {
  const value = segment.match(/^第([一二三四五六七八九十]+)[篇章节]/)?.[1];
  if (!value) return 0;
  if (!value.includes('十')) return digits[value] ?? 0;
  const [tens, units] = value.split('十');
  return (digits[tens] ?? 1) * 10 + (digits[units] ?? 0);
}
const collator = new Intl.Collator('zh-Hans-CN', { numeric: true });
function compareFiles(a: string, b: string) {
  const label = (segment: string) =>
    segment.replace(/\s+[a-f0-9]{20,}\.html?$/i, '').replace(/\.html?$/i, '');
  const aa = a.split('/').map(label),
    bb = b.split('/').map(label);
  for (let i = 0; i < Math.max(aa.length, bb.length); i += 1) {
    if (aa[i] === undefined) return -1;
    if (bb[i] === undefined) return 1;
    const difference = ordinal(aa[i]) - ordinal(bb[i]) || collator.compare(aa[i], bb[i]);
    if (difference) return difference;
  }
  return 0;
}
export const readingChapters: ReadingChapter[] = bookChapters.flatMap((root) => {
  const directory = `${root.part} ${root.title}/`;
  const children = searchDocs
    .filter((doc) => doc.file.startsWith(directory))
    .sort((a, b) => compareFiles(a.file, b.file))
    .map((doc, index) => ({
      id: `file:${doc.file}`,
      file: doc.file,
      title: doc.title,
      part: `${root.part} ${root.title}`,
      description: '',
      order: index,
      parentId: root.id,
      depth: doc.file.split('/').length - 1,
    }));
  return [{ ...root, parentId: root.id, depth: 0 }, ...children];
});
export function findReadingChapter(file: string | null, id: string | null) {
  return (
    (file
      ? readingChapters.find((c) => c.file === file)
      : readingChapters.find((c) => c.id === id)) ?? readingChapters[0]
  );
}
