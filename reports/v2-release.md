# 第二版交付检查

版本：2.0.0。日期：2026-10-14。

新版位于独立目录 xiajincunshi-v2，第一版 xiajin-digital-museum 不变。

## 已验证

- TypeScript 与 Vite 发布构建通过。
- 4 项资料回归检查通过，包含曾经人工确认的世数、亲子、配偶、性别和导入保护。
- 20 项浏览器检查通过，覆盖桌面、手机、平板、320px 窄屏、章节顺序、字号记忆、阅读进度、搜索、族谱、图库、资料页和 HTML 清理。
- 完整 npm 依赖审计未发现已知漏洞。
- Git 暂存文件不包含 node_modules、dist、临时 Excel、环境凭据或超过单文件大小限制的 PDF。
- 网页保留来源及待核标注。44 项待核记录是原文和资料问题，不能当作已经审定；471 位未明确世数的男性继续待考。

## 版本与发布

main 保存源码和原文，GitHub Actions 在校验通过后发布静态页面。release.json 记录发布提交、版本、资料数量和原文校验值。网站地址：

https://shanelau068-a11y.github.io/xiajincunshi-v2/

仓库地址：

https://github.com/shanelau068-a11y/xiajincunshi-v2

历史检查 reports/audit-summary.md 属于第一版检查记录。第二版最新资料问题在 reports/content-audit.md 和网页“资料与校对”中。
