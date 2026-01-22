// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',

    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: 2,
    workers: 2,
    reporter: 'html',

    use: {
        headless: false,
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chrome',
            use: {
                viewport: null,
                launchOptions: { args: ['--start-maximized'] },
                screenshot: "only-on-failure",
                trace: 'retain-on-failure'
            },
        },
    ],
});
