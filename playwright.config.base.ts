import { PlaywrightTestConfig } from '@playwright/test';

// @ts-ignore
import { EyesFixture } from '@applitools/eyes-playwright/fixture';
import { defineConfig, devices } from '@playwright/test';

export const baseURL = process.env.E2E_BASE_URL || 'http://localhost:4200/';

const eyesBaseConfig = {
  /* The following and other configuration parameters are documented at: https://applitools.com/tutorials/playwright/api/overview */
  //apiKey: '', // alternatively, set this via environment variable APPLITOOLS_API_KEY
  // serverUrl: 'https://eyes.applitools.com',

  // failTestsOnDiff: false,
  // appName: 'My App',
  // matchLevel: 'Strict',
  batch: { name: 'NX e2e Tests',  notifyOnCompletion: true},
  // proxy: {url: 'http://127.0.0.1:8888'},
  // stitchMode: 'CSS',
  // matchTimeout: 0,
  // waitBeforeScreenshots: 50,
  // saveNewTests: true,
  browsersInfo: [
    { name: 'chrome', width: 375, height: 667 }, // Mobile
    { name: 'chrome', width: 768, height: 1024 }, // Tablet
    { name: 'chrome', width: 1440, height: 900 }, // Desktop
  ],
}

export const baseConfig: PlaywrightTestConfig = defineConfig<EyesFixture>({
  retries: 0,
  // maxFailures: 2,
  timeout: 120000,
  use: {
    baseURL,
    eyesConfig: eyesBaseConfig,
  },
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'], 
        eyesConfig: {
          ...eyesBaseConfig, 
          browsersInfo:[
            { name: 'chrome', width: 1440, height: 900 },
            { name: 'firefox', width: 1024, height: 768 },
          ],
          failTestsOnDiff: 'afterAll',
        }
      },
    },
  ],
});
