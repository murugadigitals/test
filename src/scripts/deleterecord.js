const express = require("express");
const mysql = require("mysql2");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9492",
  database: "idp",
});

app.delete("/deleteuser", (req, res) => {
  const { name } = req.body;

  if (!name) {
    // return res.status(400).json({ error: "Bag Number Required" });
  }

  const sql = "delete from users where name=?";

  db.query(sql, [name], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
    }
    res.send("User deleted successfully");
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
