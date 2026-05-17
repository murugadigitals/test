const puppy = require("puppeteer");

async function run() {
  const browser = await puppy.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://www.google.com/");
  await page.type("input", "puppeteer tutorial");
  await page.keyboard.press("y");
  //   await page.waitForNavigation();
  // await browser.close();
}
run();
