const puppy = require("puppeteer");

async function openWebsite() {
  const browser = await puppy.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https:/google.com");
}

// openWebsite();

async function takeScreenshot() {
  const browser = await puppy.launch({ headless: false });
  const page = await browser.newPage();
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  await page.goto("https:/google.com");
  await page.screenshot({
    path: `./screenshots/google1 ${today.toDateString()}.png`,
  });
  //   await browser.close();
}

takeScreenshot();
