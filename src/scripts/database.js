const mysql = require("mysql2");
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9492",
  database: "idp",
});
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the database");
});

app.get("/api/data", (req, res) => {
  //   const query = "SELECT * FROM speed where `To Office Name` in ('?')";
  const query = "SELECT * FROM speed;";
  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching data from the database:", err);
      res.status(500).json({ error: "Error fetching data from the database" });
      return;
    }
    res.json(results);
  });
});

app.post("/api/data", (req, res) => {
  const { searchItem } = req.body;
  const query = "SELECT * FROM speed WHERE `To Office Name` = ?";
  db.query(query, [searchItem], (err, results) => {
    if (err) {
      console.error("Error fetching data from the database:", err);
      res.status(500).json({ error: "Error fetching data from the database" });
      return;
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
