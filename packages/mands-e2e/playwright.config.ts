import { EyesFixture } from '../../node_modules/@applitools/eyes-playwright/dist/fixture';
import type { PlaywrightTestConfig } from '@playwright/test';
import { defineConfig, devices } from '@playwright/test';

import { baseConfig, baseURL } from '../../playwright.config.base';



const config: PlaywrightTestConfig = defineConfig<EyesFixture>({
  ...baseConfig,
  reporter: '@applitools/eyes-playwright/reporter',
  use: {
    baseURL: 'http://localhost:4200/',
    eyesConfig: {
      type: 'ufg',
      /* The following and other configuration parameters are documented at: https://applitools.com/tutorials/playwright/api/overview */
      //apiKey: '', // alternatively, set this via environment variable APPLITOOLS_API_KEY
      // serverUrl: 'https://eyes.applitools.com',

      failTestsOnDiff: 'afterAll',
      // appName: 'My App',
      // matchLevel: 'Strict',
      batch: { name: 'My Batch' },
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
      sendDom: true,
      //layoutBreakpoints: true,
    
    }
  }
});

export default config;
