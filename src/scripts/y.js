const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9492",
  database: "idp",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// API route to fetch users
app.get("/firstline", (req, res) => {
  db.query(
    "SELECT * FROM speed where `To Office Name` in ('Baireddipalle S.O','Bangarupalem S.O','Beerangi Kothakota S.O','Burakayalakota S.O','Chembakur S.O','Cherlopalle S.O','Chinnatippasamudram S.O','Chintaparthi S.O','Chowdepalle S.O','Dravidian University S.O','Gurramkonda S.O','Kalikiri S.O','Kolamasanapalle S.O','Kuppam S.O','Kurabalakota S.O','Madanapalle Bazar S.O','Madanapalle H.O','Mahal S.O Chittoor','Medikurthi S.O','Mogili Venkatagiri S.O','Mulakalacheruvu R.S. S.O','Nimmanapalle S.O','Palamaner S.O','Peddatippasamudram S.O','Punganur S.O','Rallabudugur S.O','Ramakuppam S.O','Rishivalley S.O','Royalpet S.O','Sodam S.O','Tarigonda S.O','Thamballapalle S.O','Vayalpad S.O','Venkatagirikota S.O') order by `To Office Name`",
    // "SELECT * FROM speed where `To Office Name` in ('Baireddipalle S.O','Bangarupalem S.O','Beerangi Kothakota S.O','Burakayalakota S.O','Chembakur S.O','Cherlopalle S.O','Chinnatippasamudram S.O','Chintaparthi S.O','Chowdepalle S.O','Dravidian University S.O','Gurramkonda S.O','Kalikiri S.O','Kolamasanapalle S.O','Kuppam S.O','Kurabalakota S.O','Madanapalle Bazar S.O','Madanapalle H.O','Mahal S.O Chittoor','Medikurthi S.O','Mogili Venkatagiri S.O','Mulakalacheruvu R.S. S.O','Nimmanapalle S.O','Palamaner S.O','Peddatippasamudram S.O','Punganur S.O','Rallabudugur S.O','Ramakuppam S.O','Rishivalley S.O','Royalpet S.O','Sodam S.O','Tarigonda S.O','Thamballapalle S.O','Vayalpad S.O','Venkatagirikota S.O') order by `To Office Name` into outfile 'D:/output/firstline.csv' fields terminated by ','  lines terminated by '\n'",
    // "SELECT * FROM parcel",
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    },
  );
});

app.get("/secondline", (req, res) => {
  db.query(
    "SELECT * FROM speed where `To Office Name` in ('Akkurthi S.O','AVILALA SO','Bhakarapet S.O','Buchinaidu Kandriga S.O','Chandragiri H.O','Chinnagottigallu S.O','Damalacheruvu S.O','Ekambarakuppam S.O','Gyarampalle kothapalle S.O','Kalakada S.O','Kallur S.O Chittoor','Karvetinagar S.O','Kattakindavenkatapuram S.O','Kovanur S.O','Mangalam S.O','Mangalampet S.O','Nagalapuram S.O Chittoor','Nagari S.O','Narasingapuram S.O Chittoor','Narayanavaram S.O','Nindra S.O','Pachikapallam S.O','Pakala S.O','Pallam S.O','Panagal S.O','Pannur S.O Chittoor','Papanaidupet S.O','Peddakannali S.O','Perumallapalle S.O','Piler S.O','Pissatur S.O','Puttur S.O','Renigunta S.O','Rompicherla S.O Chittoor','Satyavedu S.O','Settipalli S.O','Sri Bommarajapuram S.O','Sricity S.E.Z SO','Srikalahasti H.O','Thondamanadu S.O','Tiruchanoor S.O','Tirumala S.O Chittoor','Vadamalpet S.O','Varadaiahpalem S.O','Vepagunta S.O Chittoor','Yerpedu S.O') order by `To Office Name`",
    // "SELECT * FROM speed where `To Office Name` = 'Hyderabad NSH' order by `To Office Name`",
    // "SELECT * FROM parcel",
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    },
  );
});

app.get("/nellore", (req, res) => {
  db.query(
    // "SELECT * FROM speed where `To Office Name` in ('Akkurthi S.O','AVILALA SO','Bhakarapet S.O','Buchinaidu Kandriga S.O','Chandragiri H.O','Chinnagottigallu S.O','Damalacheruvu S.O','Ekambarakuppam S.O','Gyarampalle kothapalle S.O','Kalakada S.O','Kallur S.O Chittoor','Karvetinagar S.O','Kattakindavenkatapuram S.O','Kovanur S.O','Mangalam S.O','Mangalampet S.O','Nagalapuram S.O Chittoor','Nagari S.O','Narasingapuram S.O Chittoor','Narayanavaram S.O','Nindra S.O','Pachikapallam S.O','Pakala S.O','Pallam S.O','Panagal S.O','Pannur S.O Chittoor','Papanaidupet S.O','Peddakannali S.O','Perumallapalle S.O','Piler S.O','Pissatur S.O','Puttur S.O','Renigunta S.O','Rompicherla S.O Chittoor','Satyavedu S.O','Settipalli S.O','Sri Bommarajapuram S.O','Sricity S.E.Z SO','Srikalahasti H.O','Thondamanadu S.O','Tiruchanoor S.O','Tirumala S.O Chittoor','Vadamalpet S.O','Varadaiahpalem S.O','Vepagunta S.O Chittoor','Yerpedu S.O') order by `To Office Name`",
    "SELECT * FROM speed where `To Office Name` = 'Nellore ICH' order by `Bag Number`",
    // "SELECT * FROM parcel",
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    },
  );
});

app.get("/kadapa", (req, res) => {
  db.query(
    // "SELECT * FROM speed where `To Office Name` in ('Akkurthi S.O','AVILALA SO','Bhakarapet S.O','Buchinaidu Kandriga S.O','Chandragiri H.O','Chinnagottigallu S.O','Damalacheruvu S.O','Ekambarakuppam S.O','Gyarampalle kothapalle S.O','Kalakada S.O','Kallur S.O Chittoor','Karvetinagar S.O','Kattakindavenkatapuram S.O','Kovanur S.O','Mangalam S.O','Mangalampet S.O','Nagalapuram S.O Chittoor','Nagari S.O','Narasingapuram S.O Chittoor','Narayanavaram S.O','Nindra S.O','Pachikapallam S.O','Pakala S.O','Pallam S.O','Panagal S.O','Pannur S.O Chittoor','Papanaidupet S.O','Peddakannali S.O','Perumallapalle S.O','Piler S.O','Pissatur S.O','Puttur S.O','Renigunta S.O','Rompicherla S.O Chittoor','Satyavedu S.O','Settipalli S.O','Sri Bommarajapuram S.O','Sricity S.E.Z SO','Srikalahasti H.O','Thondamanadu S.O','Tiruchanoor S.O','Tirumala S.O Chittoor','Vadamalpet S.O','Varadaiahpalem S.O','Vepagunta S.O Chittoor','Yerpedu S.O') order by `To Office Name`",
    "SELECT * FROM speed where `To Office Name` = 'Cuddapah ICH' order by `Bag Number`",
    // "SELECT * FROM parcel",
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(results);
      }
    },
  );
});

app.get("/idctirupati", (req, res) => {
  db.query(
    "SELECT * FROM speed where `To Office Name` in('IDC TIRUPATI') order by `To Office Name`",
    // "call firstsecond()",
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        // res.json(results);
        res.send(results);
      }
    },
  );
});

app.get("/excelexport", (req, res) => {
  db.query("call excelexport()", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port http://localhost:3000");
});
