const express = require("express");
const mySql = require("mysql2");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "9492",
  database: "branch",
});

connection.connect((err) => {
  if (err) {
    console.log("Database connection failed");
    console.log(err);
    return;
  }

  console.log("MySQL Connected");
});

app.delete("/delete/:id", (req, res) => {
  //   console.log(req.body);
  const id = req.params.id;
  const sql = "DELETE FROM speed WHERE id = ?";

  connection.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Error deleting data: ", err);
      return res.status(500).json({ error: "Failed to delete data" });
    } else {
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Data not found" });
      }
      return res.json({ message: "Data deleted successfully" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
