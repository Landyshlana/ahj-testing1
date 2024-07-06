import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('Card Validator form', () => {
  const baseUrl = 'http://localhost:9001';
  let browser=null;
  let page=null;

 
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false, // show gui
      slowMo: 500,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });



  test('start', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('#form');
  });

  test('should add .valid  and .card-active class for valid  and found card', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#card_number');
    await input.type('4111111111111111');
    const submit = await form.$('.submit');
    await submit.click();
    await page.waitForSelector('#card_number.valid');
    await page.waitForSelector('.visa.card-active');
    await page.waitForSelector('.message-paiment.hidden');
  });

  test('should add .invalid class for invalid card', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#card_number');
    await input.type('4111111111110011');
    const submit = await form.$('.submit');
    await submit.click();
    await page.waitForSelector('#card_number.invalid');
    await page.waitForSelector('.message-paiment.hidden');
    await page.waitForSelector('.message-luna');
  });

  test('should add .hidden class for valid and not found card', async () => {
    await page.goto(baseUrl);
    const form = await page.$('#form');
    const input = await form.$('#card_number');
    await input.type('975700000000816');
    const submit = await form.$('.submit');
    await submit.click();
    await page.waitForSelector('#card_number.valid');
    await page.waitForSelector('.message-paiment');
    await page.waitForSelector('.message-luna.hidden');
  });

  
});