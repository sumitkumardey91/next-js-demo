
const assert = require('assert')
const { Given, Then, When, setDefaultTimeout, AfterAll, Before } = require('@cucumber/cucumber');
const { chromium } = require('playwright')

let browser;
let page;
let testData;
setDefaultTimeout(120 * 1000);

AfterAll(async () => {
    await browser.close();
});


Given('user is on login page', async () => {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto('http://localhost:3000/login');

});

When('user tries to login with credentials', async (table) => {
    testData = table.hashes();
});

Then('login result should be validated', async () => {
    for (const row of testData) {
        await page.waitForSelector('#username', { state: 'visible' });
        await page.waitForSelector('#password', { state: 'visible' });

        await page.fill('#username', row.username || '');
        await page.fill('#password', row.password || '');
        await page.click('#login-btn');

        if (row.result === 'success') {
            const success = await page.textContent('#success');
            assert.strictEqual(success, row.message);
           
        } else {
            const error = await page.textContent('#error-msg');
            assert.strictEqual(error, row.message);
        }

        page = await browser.newPage();
        await page.goto('http://localhost:3000/login')
    }
});
