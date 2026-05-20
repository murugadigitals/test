const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
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

app.post("/addUser", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }
  const query = "INSERT INTO users (name,email) VALUES (?,?)";
  db.query(query, [name, email], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
    res
      .status(201)
      .json({ message: "User added successfully", userId: result.insertId });
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
