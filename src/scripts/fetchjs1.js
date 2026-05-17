var userName = document.getElementById("txtUser").value;
const puppeteer = require("puppeteer");
function bodyload() {
  var today = new Date();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var mdate = `${today.getDate()}-${months[today.getMonth()]}-${today.getFullYear()}`;
  var datetime = `${today.getDate()}-${months[today.getMonth()]}-${today.getFullYear()} ${today.toLocaleTimeString()}`;

  document.querySelector("h4").innerHTML = `

            Department of Posts :: India <br> Tirupati TMO - 517501<br><u><span id="mlName"> Maillist To : Cuddapah TMO </span>  &nbsp;&nbsp;&nbsp;          SET : 2B   &nbsp;&nbsp;    Dated : ${mdate}</u>
            
            <br>`;
  document.querySelector("h4").style.textAlign = "center";
  document.querySelector("h4").style.fontSize = "22px";

  document.getElementById("leftTxt").innerHTML =
    `<h4 style="font-size: 22px;"><span style="text-decoration:underline">Note: All Bags were dealt in IT 2.0 Olny.</span> <br>Report Printed On : ${datetime}</h4>`;

  document.getElementById("rightTxt").innerHTML = `
                <h4 style="font-size: 22px;">
                  <span class="bi bi-whatsapp">&nbsp;+91 7396128940</span><br>
                  <span class="bi bi-telephone">&nbsp;+91&nbsp; 8121963271</span><br>
                  <span class="bi bi-envelope-at"> msharipdtr@gmail.com</span>
                </h4>
                `;
  document.getElementById("rightTxt").style.textAlign = "right";
}
function bagCount() {
  var sp = 0;
  var pl = 0,
    temp = 0;
  var total = 0;

  data.forEach((emp, index) => {
    temp = `${emp["Bag Type"]}`;
    if (temp == "SP") {
      sp++;
    } else if (temp == "PL") {
      pl++;
    }
    total = sp + pl;

    var tr = document.createElement("tr");
    tr.style.textAlign = "center";
    tr.innerHTML = `
                            <td>${index + 1}</td>
                            <td style="width:140px">${emp["Bag Number"]}</td >
                            <td id="PL" style="width:60px">${emp["Bag Type"]}</td>
                            <td style="width:120px">${emp["From Office Name"]}</td>
                            <td style ="width:230px;text-align:start;text-indent:10px"> ${emp["To Office Name"]}</td >
                            `;
    document.querySelector("tbody").appendChild(tr);
  });

  document.getElementById("tableContainter").classList.add("col-12");

  document.getElementById("mlName").textContent =
    "MailList To : MG-2 Tirupati HUB - 2B";
  document.getElementById("speed").textContent = sp;
  document.getElementById("parcel").textContent = pl;
  document.getElementById("total1").textContent = total;
  window.print();
  window.location.reload();
}

async function firstLineBags() {
  const res = await fetch("http://localhost:3000/firstline");
  const data = await res.json();
  bagCount();
}

async function secondLineBags() {
  const res = await fetch("http://localhost:3000/secondline");
  const data = await res.json();

  bagCount();
  document.getElementById("mlName").textContent =
    "MailList To : MG-2 Tirupati TMO - 1";

  window.print();
  window.location.reload();
}

async function mlNellore() {
  const res = await fetch("http://localhost:3000/nellore");
  const data = await res.json();
  bagCount();
}

async function mlKadapa() {
  const res = await fetch("http://localhost:3000/kadapa");
  const data = await res.json();
  bagCount();
}

async function mlIdcTirupati() {
  const res = await fetch("http://localhost:3000/idctirupati");
  const data = await res.json();
  bagCount();
}
