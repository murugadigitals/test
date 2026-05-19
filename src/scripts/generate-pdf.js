const puttpy = require("puppeteer");
const open = require("open").default;

async function generatePDF() {
  const browser = await puttpy.launch();
  const page = await browser.newPage();
  // await page.goto("https://gmail.com", { waitUntil: "networkidle0" });
  await page.setContent(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;      
          }
          .container {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {  
            color: #333;
          }
          p { 
            color: #666;
          }
        </style>
      </head>
      <body>  
        <div class="container">
          <h1>First Line of Code</h1>
          <p>This PDF was generated using Puppeteer.</p>
          <p>Sri Hari Muppori</p>
        </div>
      </body>
    </html>
  `);
  const pdfPath = "./pdf/firstline100.pdf";

  await page.pdf({
    path: "./pdf/firstline100.pdf",
    format: "A4",

    application: {
      printBackground: true,
    },
    displayHeaderFooter: true,
    headerTemplate: `
      <div style="font-size: 10px; text-align: center; width: 100%; padding: 5px 0;">
        <span class="date"></span>
      </div>
    `,
    footerTemplate: `
      <div style="font-size: 10px; text-align: center; width: 100%; padding: 5px 0;">
        <span class="pageNumber "></span> / <span class="totalPages"></span>
      </div>
    `,
  });
  await open(pdfPath);
  await browser.close();
}

generatePDF();
