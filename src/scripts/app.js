const express = require("express");

const { getDetails, addMobile, deleteMobile, updateMobile } = require("./db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});

app.get("/mobiles", (req, res) => {
  getDetails()
    .then((mobiles) => {
      res.send(mobiles);
    })
    .catch(() => {
      res.send("err");
    });
});

app.post("/mobiles", (req, res) => {
  addMobile(req.body.name, req.body.price, req.body.ram, req.body.storage)
    .then((mobiles) => {
      res.send(mobiles);
    })
    .catch(() => {
      res.send("err");
    });
});

app.put("/mobiles", (req, res) => {
  updateMobiles(
    req.body.name,
    req.body.price,
    req.body.ram,
    req.body.storage,
    req.body.id,
  )
    .then((mobiles) => {
      res.send(mobiles);
    })
    .catch(() => {
      res.send("err");
    });
});

app.delete("/mobiles", (req, res) => {
  deleteMobile(req.body.id)
    .then((mobiles) => {
      res.send(mobiles);
    })
    .catch(() => {
      res.send("err");
    });
});
