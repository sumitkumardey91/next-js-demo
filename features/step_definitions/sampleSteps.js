const { Given, Then } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

let browser, page;

Given('I open the homepage', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto("http://localhost:3000")
});

Then('I should see the page title as {string}', async function (expectedTitle) {
  const title = await page.title();
  console.log("====", title)
  if (title !== expectedTitle) {
    throw new Error(`Expected "${expectedTitle}", but got "${title}"`);
  }
  await browser.close();
});