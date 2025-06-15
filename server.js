const express = require("express");
const fs = require("fs");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/artikel", (req, res) => {
  fs.readFile("artikel.json", (err, data) => {
    if (err) {
      res.status(500).send("Gagal membaca data");
    } else {
      res.setHeader("Content-Type", "application/json");
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});