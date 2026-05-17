const puppy = require("puppeteer");
const path = require("path");

async function generateHTML() {
  const browser = await puppy.launch({ headless: false });
  const page = await browser.newPage();
  const html = `
    <html>
    <head>
        <style>
            body { font-family: Arial; }
            h1{
                color: blue;}
        </style>
        <link
href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
rel="stylesheet"
/>
    </head>
    <body>
        <h1>Hello World</h1>
        <div>
            lorem1000 ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque!
        </div>
        <div>
            lorem1000 ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque!
        </div>
        <div>
            <input type="text" placeholder="Enter your name" class='form-control w-25' /><br/><br/>
             <input type="email" placeholder="Enter your email" class='form-control w-25' /><br/><br/>
             <input type="password" placeholder="Enter your password" class='form-control w-25' /><br/><br/>
             <input type="password" placeholder="Enter your password" class='form-control w-25' /><br/><br/>
             <input type="password" placeholder="Enter your password" class='form-control w-25' /><br/><br/>
             <input type="password" placeholder="Enter your password" class='form-control w-25' /><br/><br/>
             <select>
                <option value="">Select your country</option>
                <option value="usa">USA</option>
                <option value="usa">India</option>
                <option value="usa">Hyderabad</option>
                </select><br/><br/>

        </div>
        
    </body>
    </html>
    `;

  await page.setContent(html, { waitUntil: "networkidle0" });

  await page.screenshot({ path: "./screenshots/2.png", fullPage: true });

  await page.pdf({
    path: "./pdf/example1.pdf",
    format: "A4",
  });

  //   await browser.close();
}

generateHTML();
