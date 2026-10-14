import { test, expect } from '@playwright/test';

test('所有页面在仓库子目录下可访问且无脚本报错', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  const badResponses: string[] = [];
  page.on('response', (r) => { if (r.url().startsWith('http://127.0.0.1:5197/') && r.status() >= 400) badResponses.push(r.url()); });
  for (const route of ['', 'book', 'search?q=纯语', 'timeline', 'people', 'genealogy', 'gallery', 'map', 'about', 'sources']) {
    await page.goto(`./#/${route}`);
    await expect(page.locator('h1').first()).toBeVisible();
    if (route === 'book') await expect(page.locator('.book-content')).toContainText('2019');
    if (route === 'gallery') {
      await expect(page.locator('main img').first()).toBeVisible();
      await expect.poll(() => page.locator('main img').first().evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBeTruthy();
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), route).toBeTruthy();
  }
  expect(errors).toEqual([]);
  expect(badResponses).toEqual([]);
});

test('搜索能定位当前章节且损坏的历史不会白屏', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('xiajin-search-history', 'broken json'));
  await page.goto('./#/search?q=纯语');
  await expect(page.locator('mark').first()).toHaveText('纯语');
  await page.locator('main a').filter({ hasText: '窟尾沟' }).first().click();
  await expect(page.locator('.book-content mark').filter({ hasText: /^纯语$/ }).first()).toBeVisible();
  await page.goto('./#/search?q=纯语');
  await page.locator('input').fill('刘策');
  await page.locator('form button').click();
  await page.locator('main a').filter({ hasText: /^纯语$/ }).click();
  await expect(page.locator('input')).toHaveValue('纯语');
});

test('女性无辈序、配偶分组与三代关系准确', async ({ page }, testInfo) => {
  await page.goto('./#/genealogy');
  await expect(page.locator('aside h2')).toHaveText('刘雄宣');
  for (const name of ['刘戴慧', '刘惠璇', '刘纯语']) {
    const node = page.locator('section button').filter({ hasText: name }).last();
    await expect(node).toBeVisible();
    await expect(node).not.toContainText('字辈');
  }
  await expect(page.locator('section button').filter({ hasText: '刘镒齐' })).toContainText('第38世 泽字辈');
  await expect(page.locator('aside a').first()).toHaveAttribute('href', /#\/book\?file=/);
  const widths = await page.locator('section button').filter({ hasText: /刘雄宣|刘惠璇|刘戴慧/ }).evaluateAll((nodes) => nodes.filter((n) => (n as HTMLElement).offsetHeight >= 90).map((n) => n.getBoundingClientRect().width));
  expect(new Set(widths).size).toBe(1);
  await page.screenshot({ path: `reports/genealogy-${testInfo.project.name}.png`, fullPage: true });
  await page.locator('input').fill('刘永淡');
  await expect(page.locator('aside h2')).toHaveText('刘永淡');
  for (const name of ['刘玉琴', '刘锐泽', '刘玉花', '刘耀怀', '刘玉珊']) await expect(page.locator('section button').filter({ hasText: name }).last()).toBeVisible();
  await page.locator('input').fill('刘策');
  await expect(page.locator('aside')).toContainText('第19世 日字辈');
  await page.reload();
  await expect(page.locator('aside h2')).toHaveText('刘雄宣');
});

test('目录的内部链接在数字馆内打开、字号调节可用', async ({ page }) => {
  await page.goto('./#/book?chapter=origin');
  await expect(page.locator('.book-content')).toContainText('刘氏');
  const link = page.locator('.book-content a').filter({ hasText: '刘氏' }).first();
  await expect(link).toHaveAttribute('href', /^#\/book\?/);
  await link.click();
  await expect(page.locator('article h1').first()).toContainText('刘氏');
  await page.getByRole('button', { name: '增大字号' }).click();
  await expect(page.locator('article').first()).toContainText('当前字号 21px');
  await expect(page.locator('.book-content')).toContainText('桃坑');
});

test('图库大图可打开关闭', async ({ page }) => {
  await page.goto('./#/gallery');
  await page.locator('main button').filter({ has: page.locator('img') }).first().click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByRole('button', { name: '关闭大图' }).click();
  await expect(page.getByRole('dialog')).toHaveCount(0);
});

test('导入 HTML 中的脚本与事件被清理', async ({ page }) => {
  await page.route('**/book/**', (route) => route.fulfill({
    contentType: 'text/html',
    body: '<html><body><style>body{display:none}</style><h1>测试章节</h1><script>window.__unsafe=1</script><p onclick="window.__unsafe=2">正文保留</p><a href="javascript:window.__unsafe=3">危险链接</a></body></html>',
  }));
  await page.goto('./#/book');
  await expect(page.locator('.book-content')).toContainText('正文保留');
  expect(await page.locator('.book-content').evaluate((node) => node.querySelectorAll('script,style,[onclick],a[href^="javascript:"]').length)).toBe(0);
  expect(await page.evaluate(() => (window as Window & { __unsafe?: number }).__unsafe)).toBeUndefined();
});

test('平板宽度没有菜单和家族树横向溢出', async ({ page }) => {
  await page.setViewportSize({ width: 1024, height: 768 });
  await page.goto('./#/genealogy');
  await expect(page.locator('aside h2')).toHaveText('刘雄宣');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
});

test('第二版目录连续阅读并保存字号和阅读进度', async ({ page }) => {
  await page.goto('./#/book?chapter=origin');
  await expect(page.locator('.book-content')).toContainText('刘氏');
  await page.getByRole('button', { name: '下一章', exact: true }).click();
  await expect(page.locator('article h1').first()).toHaveText('第一章 刘氏');
  await page.getByRole('button', { name: '增大字号' }).click();
  await page.reload();
  await expect(page.locator('article').first()).toContainText('当前字号 21px');
  await page.goto('./#/');
  await expect(page.getByRole('link', { name: '继续阅读：第一章 刘氏' })).toBeVisible();
});

test('待核地标不冒充实测位置，查询无结果不显示别人的家族树', async ({ page }) => {
  await page.goto('./#/map');
  await expect(page.getByRole('checkbox', { name: '显示待核示意点' })).not.toBeChecked();
  await expect(page.locator('.village-map-marker')).toHaveCount(0);
  await page.goto('./#/genealogy');
  await page.getByRole('textbox', { name: '搜索族谱姓名' }).fill('不存在的名字');
  await expect(page.locator('.family-node')).toHaveCount(0);
  await expect(page.locator('.family-tree')).toContainText('未找到这个姓名');
});

test('主页和窄屏族谱截图，无横向裁切', async ({ page }, testInfo) => {
  await page.goto('./#/');
  await expect.poll(() => page.locator('.hero-photo').evaluate((img: HTMLImageElement) => img.complete && img.naturalWidth > 0)).toBeTruthy();
  await page.screenshot({ path: `reports/home-${testInfo.project.name}.png`, fullPage: true });
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto('./#/genealogy');
  await expect(page.locator('aside h2')).toHaveText('刘雄宣');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBeTruthy();
});
