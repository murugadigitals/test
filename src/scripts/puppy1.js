const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("file:///D:/speed/public/docs/chennai%20ph.html", {
    waitUntil: "networkidle0",
  });

  await page.pdf({
    path: "rms-report.pdf",
    format: "A4",

    printBackground: true,

    displayHeaderFooter: true,

    headerTemplate: `
      <div style="width:100%; font-size:10px; text-align:center;border:1px solid black;">
        <h4 style="font-size:20px;">Department of Posts :: India<br>
        Tirupati TMO - 517501</h4>
      </div>
    `,

    footerTemplate: `
      <div style="width:100%; font-size:20px; display:flex; justify-content:space-between;align-items:center;">
      <div>   
        <div><h4><span style="text-decoration:underline">Note: All Bags were dealt in IT 2.0 Only.</span> <br>Report Printed On : <span class="date"></span><h4></div>   
        </div>
        <div>
        <span>Page <span class="pageNumber"></span> of Pages<span class="totalPages"></span></span>
        </div>
      </div>

    `,
    margin: {
      top: "100px",
      bottom: "100px",
      left: "20px",
      right: "20px",
    },
  });

  await browser.close();
})();
