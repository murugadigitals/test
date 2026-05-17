const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// DB connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9492",
  database: "idp",
});

db.connect((err) => {
  if (err) {
    console.error("DB Error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

// ➕ CREATE
app.post("/adduser", (req, res) => {
  const { name, email } = req.body;

  const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
  db.query(sql, [name, email], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User added", id: result.insertId });
  });
});

// 📥 READ
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
});

// ✏️ UPDATE
app.put("/updateuser/:id", (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;

  const sql = "UPDATE users SET name=?, email=? WHERE id=?";
  db.query(sql, [name, email, id], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "User updated" });
  });
});

// ❌ DELETE
app.delete("/deleteuser/:id", (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM users WHERE id=?", [id], (err, result) => {
    if (err) return res.status(500).json(err);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted" });
  });
});

app.listen(3000, () => console.log("Server running http://localhost:3000"));
