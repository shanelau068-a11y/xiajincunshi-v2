这里放人工整理后的老照片。

推荐按分类建文件夹，例如：

```text
public/images/gallery/老宅/某某老宅.jpg
public/images/gallery/人物/某某合影.jpg
public/images/gallery/教育/下津小学旧照.jpg
```

放入或删除图片后，运行：

```bash
npm run sync:gallery
```

脚本会把新增照片加入 `src/data/gallery.ts`，也会清理已经删除的图片记录。
