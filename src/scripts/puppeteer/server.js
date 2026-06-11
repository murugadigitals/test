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

              width: 100%;
              border-collapse: collapse;

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

              <th>S.NO</th>
              <th>Bag Number</th>
              <th>Type</th>
              <th>From Office</th>
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
              width: 100%;
              border-collapse: collapse;
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
          <h2>Cuddapah ICH Report</h2>

          <table>

            <tr>

              <th>S.NO</th>
              <th>Bag Number</th>
              <th>Type</th>
              <th>From Office</th>
              <th>To Office</th>

            </tr>

            ${rows}

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
         <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        >
        <div style="width:100%; font-size:10px; display:flex; justify-content:center; padding:0 20px;">
          <h1 style="text-align:center;font-size:20px;font-weight:bold;line-height:22px;">Department of Posts::India<br>Tirupati TMO - 517501<br><span style="text-decoration:underline">MailList To : Nellore TMO      SET : 2B   Dated : 19 - 05 - 2026 </span></h1>
        </div>
      `,

        footerTemplate: `
         <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        >
        <div style="width:100%; font-size:10px; display:flex; justify-content:space-between; padding:0 0px;line-height:1.2;">
          <div style="font-size:20px;font-weight:bold;margin-left:20px;"><span style="text-decoration:underline">All Bags Were dealt in IT 2.0 Only.</span><br>Report Printed On : <span class="date"></span></div>
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
