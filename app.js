const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("NODEMAILER");
});

app.listen(3210, () => console.log("server running @3210"));
