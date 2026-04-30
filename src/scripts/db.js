const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "9492",
  database: "idp",
});

function getDetails() {
  let query = "SELECT * FROM mobiles";
  con.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
    // con.end();
  });
}

function addMobile(n, p, r, s) {
  let query = "insert into speed (name,price,ram,storage) values (?,?,?,?)";
  return new Promise(function (success, reject) {
    con.query(query, function (err, rows) {
      if (err) {
        reject(err);
      } else {
        success(rows);
      }
    });
  });
}

function updateMobile(n, p, r, s, id) {
  let query = "update moblies set name=?,price=?,ram=?,storage=? where id=?";
  return new Promise(function (success, reject) {
    con.query(query, [n, p, r, s, id], function (err, rows) {
      if (err) {
        reject(err);
      } else {
        success(rows);
      }
    });
  });
}

function deleteMobile(id) {
  let query = "DELETE FROM mobiles WHERE id=?";
  return new Promise(function (success, reject) {
    con.query(query, [id], function (err, rows) {
      if (err) {
        reject(err);
      } else {
        success(rows);
      }
    });
  });
}

// getDetails();

module.exports = {
  getDetails,
  addMobile,
  updateMobile,
  deleteMobile,
};
