const puppy = require("puppeteer");
const path = require("path");

async function generateHTML() {
  const browser = await puppy.launch({ headless: false });
  const page = await browser.newPage();
  const imgPath = path.join(__dirname, "public", "images", "logo.png");
  const imageUrl = `file:///${imgPath.replace(/\\/g, "/")}`;
  console.log("Image URL:", imageUrl);
  console.log(__dirname);
  const html = `
    <html>
    <head>
        <style>
            body { font-family: Arial; }
            h1{
                color: blue;}
        </style>
    </head>
    <body>
        <h1>Hello World</h1>
        <div>
            // <img src="${imageUrl}" alt='Logo' width='200'>
        </div>
    </body>
    </html>
    `;

  await page.setContent(html, { waitUntil: "networkidle0" });

  await page.screenshot({ path: "example.png", fullPage: true });
  //   await browser.close();
}

generateHTML();
