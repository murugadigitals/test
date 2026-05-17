const express = require("express");
const mysql = require("mysql2");
const puppeteer = require("puppeteer");

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9492",
  database: "branch",
});

app.get("/nellore", async (req, res) => {
  db.query(
    "SELECT * FROM speed where `To Office Name` in ('Nellore ICH','Cuddapah ICH') order by `To Office Name` asc",
    // "SELECT * FROM speed where `To Office Name`='Nellore ICH'",
    async (err, results) => {
      if (err) {
        console.error(err);
        return res.status(500).send("DB Error");
      }

      // ✅ Build table rows
      let rows = "";
      results.forEach((row, i) => {
        rows += `
        <tr>
          <td>${i + 1}</td>
          <td>${row["Bag Number"]}</td>
          <td>${row["Bag Type"]}</td>
          <td>${row["From Office Name"]}</td>
          <td style="text-align:start;text-indent:10px">${row["To Office Name"]}</td>
        </tr>
      `;
      });

      // ✅ HTML
      const html = `
      <html>
      <head>
        <style>
          body { font-family: Arial; }
          table { width: 100%; border-collapse: collapse;margin:auto; }
          th, td { border: 1px solid black; padding: 5px; text-align: center; }
        </style>
      </head>
      <body>
        <h3 style="text-align:center;">RMS Mail Report</h3>
        <table style="border-collapse:separate;border-spacing:0px;">
          <tr>
            <th style="height:45px;border-top-left-radius:5px; width=20px;">S.NO</th>
            <th style="width:180px;">Bag Number</th>
            <th style="width:100px;">Type</th>
            <th style="width:150px;">From</th>
            <th style="border-top-right-radius:5px;width:270px;">To</th>
          </tr>
          ${rows}
          <tr>
            <td style="border-bottom-left-radius:5px;">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td style="border-bottom-right-radius:5px;">&nbsp;</td>
        </table>
      </body>
      </html>
    `;

      // ✅ Puppeteer
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.setContent(html, { waitUntil: "networkidle0" });

      const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
        path: "d:/output/hyderabad.pdf",

        displayHeaderFooter: true,

        headerTemplate: `
        <div>
          <h1 style="text-align:center;font-size:20px;font-weight:bold;text-decoration:underline">RMS Mail Report</h1>
        </div>
      `,

        footerTemplate: `
        <div style="width:100%; font-size:10px; display:flex; justify-content:space-between; padding:0 0px;line-height:1.2;">
          <div style="font-size:20px;font-weight:bold;margin-left:20px;"><span style="text-decoration:underline">All Bags Were dealt in IT 2.0 Only.</span><br>Report Printed On : <span class="date"></span></div>
          <div style="font-size:20px;font-weight:bold;margin-right:20px;text-align:end;"><span style="text-decoration:underline">Page <span class="pageNumber"></span> of Pages <span class="totalPages"></span></span><br>+91 7396128940<br>+91 8121963271</div>
        </div>
      `,

        margin: {
          top: "100px",
          bottom: "120px",
          left: "20px",
          right: "20px",
        },
      });

      await browser.close();

      // ✅ Send PDF
      res.set({
        "Content-Type": "application/pdf",
        // "Content-Disposition": "attachment; filename=report.pdf",
      });

      res.send(pdfBuffer);
    },
  );
});

app.listen(3000, () => console.log("Server running on port 3000"));
