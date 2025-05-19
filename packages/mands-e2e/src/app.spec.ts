// @ts-ignore
import { expect,test,Eyes } from "@applitools/eyes-playwright/fixture";

test('should start page', async ({ page, eyes }) => {
  await page.goto('https://demo.applitools.com/app.html');
  await eyes.check('Homepage', {
    fully: true,
    matchLevel: 'None',
    strictRegions: ['div.balance'],
    layoutBreakpoints: true,
    waitBeforeCapture: 3000
  });
  expect(true).toBeTruthy();
});
