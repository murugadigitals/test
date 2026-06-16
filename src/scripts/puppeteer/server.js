const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9492",
  database: "branch",
});

app.get("/nellore", async (req, res) => {
  const sql = `
    SELECT * FROM speed
    WHERE \`To Office Name\` = 'Nellore ICH'
    ORDER BY \`To Office Name\` ASC
  `;

  db.query(sql, async (err, results) => {
    if (err) {
      console.error(err);

      return res.status(500).send("DB Error");
    }

    try {
      const browser = await puppeteer.launch();

      const page = await browser.newPage();

      let rows = "";

      results.forEach((row, i) => {
        rows += `
          <tr>
            <td>${i + 1}</td>
            <td>${row["Bag Number"]}</td>
            <td>${row["Bag Type"]}</td>
            <td>${row["From Office Name"]}</td>
            <td>
              ${row["To Office Name"]}
            </td>
          </tr>
        `;
      });

      const html = `

        <html>
        <head>
          <style>
            body {
              font-family: Arial;
            }
            table {
              width: 90%;
              border-collapse: collapse;
              margin: auto;
            }

            th, td {
              border: 1px solid black;
              padding: 5px;
              text-align: center;
            }

            th {
              background-color: #f2f2f2;
            }

          </style>
        </head>
        <body>
          <h2>
            Nellore ICH Report
          </h2>

          <table>
            <tr>
              <th style="width:50px;">S.NO</th>
              <th style="width:150px;">Bag Number</th>
              <th style="width:100px;">Bag Type</th>
              <th style="width:150px;">From Office</th>
              <th>To Office</th>
            </tr>
            ${rows}
          </table>
        </body>
        </html>
      `;

      await page.setContent(html, {
        waitUntil: "networkidle0",
      });

      const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
      });

      await browser.close();

      // SEND PDF
      res.set({
        "Content-Type": "application/pdf",
        "Content-Disposition": "attachment; filename=nellore.pdf",
      });

      res.send(pdfBuffer);
    } catch (error) {
      console.log(error);

      res.status(500).send("PDF Error");
    }
  });
});

app.get("/kadapa", async (req, res) => {
  const sql = `
    SELECT * FROM speed
    WHERE \`To Office Name\` = 'Cuddapah ICH'
    ORDER BY \`To Office Name\` ASC
  `;

  db.query(sql, async (err, results) => {
    if (err) {
      console.error(err);

      return res.status(500).send("DB Error");
    }

    try {
      const browser = await puppeteer.launch();

      const page = await browser.newPage();

      let rows = "";

      results.forEach((row, i) => {
        rows += `
          <tr style="font-weight:bold;">
            <td>${i + 1}</td>
            <td>${row["Bag Number"]}</td>
            <td>${row["Bag Type"]}</td>
            <td>${row["From Office Name"]}</td>
            <td>
              ${row["To Office Name"]}
            </td>
          </tr>
        `;
      });

      const html = `

        <html>
        <head>
          <style>
            body {
              font-family: Arial;
            }
            table {
              width: 90%;
              border-collapse: separate;
              margin: auto;
              border-spacing: 0;
            }
            th, td {
              border: 1px solid black;
              padding: 5px;
              text-align: center;
            }
            th {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
        <img src="../../../public/images/logo.png">
          <table>
            <tr style="height:45px";>
              <th style="width:50px;border-top-left-radius:5px;">S.NO</th>
              <th style="width:120px;">Bag Number</th>
              <th style="width:70px;">Bag Type</th>
              <th style="width:100px;">From Office</th>
              <th style="width:150px;border-top-right-radius:5px;">To Office</th>
            </tr>
            ${rows}
            <tr>
              <td colspan="5" style="border-bottom-left-radius:5px;border-bottom-right-radius:5px;font-weight:bold;">Total Bags : ${results.length}</td>
          </table>
        </body>
        </html>
      `;

      await page.setContent(html, { waitUntil: "networkidle0" });

      const pdfBuffer = await page.pdf({
        format: "A4",
        printBackground: true,
        displayHeaderFooter: true,

        headerTemplate: `
         
        <div style="width:100%; font-size:10px; display:flex; justify-content:center; padding:0 20px;line-height:1.6;">
          <h1 style="text-align:center;font-size:20px;font-weight:bold;line-height:22px;">Department of Posts::India<br>Tirupati TMO - 517501<br><span style="text-decoration:underline">MailList To : Cuddapah TMO &nbsp;&nbsp;      SET : 2B  &nbsp;&nbsp; Dated : 19 - 05 - 2026 </span></h1>
        </div>
      `,

        footerTemplate: `
         
        <div style="width:100%; font-size:10px; display:flex; justify-content:space-between; padding:0 0px;line-height:1.2;">
          <div style="font-size:20px;font-weight:bold;margin-left:20px;"><span style="text-decoration:underline">Note : All Bags Were dealt in IT 2.0 Only.</span><br>Report Printed On : <span class="date"></span></div>
          <div style="font-size:20px;font-weight:bold;margin-right:20px;text-align:end;"><span style="text-decoration:underline">Page <span class="pageNumber"></span> of Pages <span class="totalPages"></span></span><br>+91&nbsp;&nbsp; 7396128940<br>+91&nbsp;&nbsp; 8121963271</div>
        </div>
      `,

        margin: {
          top: "120px",
          bottom: "120px",
          left: "20px",
          right: "20px",
        },
      });

      await browser.close();

      // SEND PDF
      res.set({
        "Content-Type": "application/pdf",

        "Content-Disposition": "attachment; filename=kadapa.pdf",
      });

      res.send(pdfBuffer);
    } catch (error) {
      console.log(error);

      res.status(500).send("PDF Error");
    }
  });
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
