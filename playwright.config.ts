import { defineConfig } from '@playwright/test';

process.env.NO_PROXY = [process.env.NO_PROXY, '127.0.0.1', 'localhost'].filter(Boolean).join(',');
process.env.no_proxy = process.env.NO_PROXY;

export default defineConfig({
  testDir: './tests/browser',
  timeout: 30000,
  workers: 2,
  reporter: [['list'], ['html', { outputFolder: 'reports/browser', open: 'never' }]],
  use: {
    baseURL: 'http://127.0.0.1:5197/xiajincunshi-v2/',
    channel: 'chromium',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1280, height: 900 } } },
    {
      name: 'mobile',
      use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
    },
  ],
  webServer: {
    command: 'node scripts/serve-pages.js',
    url: 'http://127.0.0.1:5197/xiajincunshi-v2/',
    reuseExistingServer: false,
  },
});
