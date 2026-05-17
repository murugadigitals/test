const puttpy = require("puppeteer");

async function generatePDF() {
  const browser = await puttpy.launch();
  const page = await browser.newPage();
  await page.goto("https://gmail.com", { waitUntil: "networkidle0" });
  await page.pdf({
    path: "./pdf/firstline.pdf",
    format: "A4",
  });
  await browser.close();
}

generatePDF();
