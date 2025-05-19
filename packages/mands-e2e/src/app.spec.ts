// / <reference types="@applitools/eyes-playwright/types/fixture" />
//import { expect, test } from '@playwright/test';

// import { expect,test } from "../../../node_modules/@applitools/eyes-playwright/types/fixture"

//import {expect, test} from "../../../node_modules/@applitools/eyes-playwright/types/fixture.js"

// @ts-ignore
import { expect,test,Eyes } from "@applitools/eyes-playwright/fixture";

test('should start page', async ({ page, eyes }) => {
  await page.goto('https://demo.applitools.com/app.html');
  // await eyes.check('Homepage', {
  //   fully: true,
  //   matchLevel: 'None',
  //   strictRegions: ['div.balance'],
  //   layoutBreakpoints: true,
  //   waitBeforeCapture: 3000
  // });
  await eyesCheck(eyes);
  expect(true).toBeTruthy();
});

async function eyesCheck(eyes:Eyes){
  await eyes.check('Homepage', {
    fully: true,
    matchLevel: 'None',
    strictRegions: ['div.balance', 'div.logged-user-i']
  })
}