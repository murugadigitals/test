const express = require("express");
const mysqal = require("mysql2");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysqal.createConnection({
  host: "localhost",
  user: "root",
  password: "9492",
  database: "branch",
});

// app.put("/update/:id", (req, res) => {
app.put("/update", (req, res) => {
  //   const id = req.params.id;
  const { name, email } = req.body;
  //   const sql = "UPDATE users SET Name = ?, Email = ? WHERE SNO = ?";
  const sql = "UPDATE users SET Email=? WHERE Name=?";

  //   db.query(sql, [name, email, id], (err, result) => {
  db.query(sql, [email, name], (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send("Error updating user");
    } else {
      res.send("User updated successfully");
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
