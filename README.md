# 下津村史数字馆 · 第二版

新版独立于第一版，源码和资料保存在本仓库。React + Vite + TypeScript + Tailwind CSS 4，静态网站，无数据库。

- 网站：https://shanelau068-a11y.github.io/xiajincunshi-v2/
- 源码：https://github.com/shanelau068-a11y/xiajincunshi-v2
- 本机目录：`E:\Shane\下津村史CODEX\xiajincunshi-v2`
- 第一版目录 `xiajin-digital-museum` 不受新版更新影响。

## 安装和本地运行

建议 Node.js 22 或更新的受支持版本：

```bash
npm ci
npm run dev
```

按终端显示的地址打开。直接双击源码的 index.html 不能运行 React 项目。需要同一 Wi-Fi 的手机预览时可运行 `npm run dev:lan`；已发布的网址不要求电脑保持开启。

## 内容和界面位置

|内容|文件位置|
|---|---|
|页面与布局|`src/pages/`、`src/components/`、`src/styles.css`|
|十一项主目录|`src/data/book.ts`|
|村史原文和分章|`public/book/`|
|人物志|`src/data/people.ts`|
|大事记|`src/data/timeline.ts`|
|族谱关系|`src/data/genealogy.ts`|
|Excel 整理表导出|`src/data/genealogyReference.ts`|
|照片|`src/data/gallery.ts`、`public/images/`|
|地点与坐标|`src/data/places.ts`|
|公开待核记录|`src/data/review.json`，发布前自动生成|

## 更新村史和目录

把 HTML 与关联图片按原文件夹结构放到 `public/book/`。主目录里的 `file` 要与实际文件名一致；电子书阅读目录会从全文索引建立篇、章、节顺序。

可以导入整套原文：

```bash
npm run import:book -- "你的HTML资料文件夹"
npm run clean:book-icons
npm run import:search
```

修改任意 HTML 后必须执行 `npm run import:search`，否则发布前检查会提示索引不同步。它只重建搜索数据，不改原文。首页会记录上一次读到的章节，阅读字号仅保存在当前浏览器。

## 添加人物和大事记

人物须依据第七篇，大事记须依据第十篇：

```bash
npm run import:people
npm run import:timeline
```

脚本从实际目录找原文，不会在来源缺失或结果为空时清空已有数据。重建会覆盖对应生成数组；已有人工补充时，先保留原文件并对比导入结果。也可直接添加记录，保持 id 唯一，并填写对应 sourceFile。人物详情与大事记展开内容均有原文链接。

## 族谱校对

网站正在使用 `src/data/genealogy.ts`。父母、配偶、子女使用唯一 id 关联；同名不等于同一人。男性世数用结构化字段：

```ts
generation: 36,
generationName: '启',
generationSystem: '桃坑',
generationEvidence: '原文明确记载',
```

原文未写明的不凭姓名猜测。亲子关系推定必须有一致的世数锚点，标为 `亲子关系推定`；女性不显示辈序。原配、继配并列而未写明生母时，不指定某位妻子为所有子女的生母。

自动导入只生成待核草稿，不覆盖已校对数据：

```bash
npm run import:genealogy
```

输出 `tmp/genealogy-import-draft.ts`。Excel 参考表放 `tmp/genealogy-reference.xlsx` 后：

```bash
npm run import:genealogy-reference
npm run merge:genealogy-reference
```

输出候选合并草稿 `tmp/genealogy-reference-draft.ts`，不能未经核对就覆盖正式文件。`reports/genealogy-quarantine.json` 保留从第一版移出的误抽和称谓重复记录。

## 添加或删除照片

新增照片建议放：

```text
public/images/gallery/老宅/照片名.jpg
public/images/gallery/人物/照片名.jpg
```

然后运行：

```bash
npm run sync:gallery
```

删除图片后也执行同一命令，清掉不存在的图库记录。给照片补充准确题名、年代、分类、说明和来源。自动裁出的照片只属初筛，网页标为说明待核。完整扫描 PDF 保留在本机，因超过 GitHub 单文件限制未上传；JPG 扫描件和网站引用图片保留。

## 地图资料

`src/data/places.ts` 中尚未核实的名称和坐标保留 `coordinateStatus: '待校对'`。默认不在地图显示示例位置，用户可单独查看示意点。只有核实准确的地点才能改为 `已定位`。

默认 OpenStreetMap 底图；可按 `.env.example` 设置天地图或自定义瓦片。外部地图网络失败时，文字资料仍可查看。地图服务的浏览器 Key 是公开配置，不可填入后台私钥或其他账户凭据。

## 校验与发布

```bash
npm run build:pages
npx playwright install chromium
npm run test:browser
npm audit --audit-level=moderate
```

发布构建自动检查：原文文件、搜索索引、照片路径、族谱断链/自指/祖先环、父母性别及关系对称，并回归之前确认的关键人物。结构错误会停止发布。待核史料不等于程序错误，继续保留在“资料与校对”页面。

`dist/` 是完整构建目录，保留 index.html、assets/、book/、images/、.nojekyll、release.json 的相对层级。无需手改 HTML 或 Hash 文件名。HashRouter 地址如 `#/genealogy` 兼容 GitHub Pages 刷新。

GitHub Actions 在 main 更新时自动安装、审计、构建、执行浏览器验证并发布。只需通过 GitHub Desktop 提交并推送本项目源码，等待仓库 Actions 成功，网址保持不变。不要将 node_modules、临时 Excel、环境凭据或 dist 混入 main。

`dist/release.json` 记录版本、发布提交、待核数量及原文 SHA-256，便于核对线上是哪一版。

## 准确性边界

当前有 662 位族谱人物、268 位人物志、110 条大事记和75张照片。通过结构检查不能替代历史考证。人口统计口径、山地面积、刘景官职、同名身份、外嫁子女姓氏及地点实测仍须核实；对应记录见“资料与校对”与 `reports/content-audit.md`。

每次重要资料修订应保留出处、修订原因和版本。GitHub 保存源码历史，第一版与第二版各自独立。资料整理署名 ShaneLau 保留在关于页联系方式中。
