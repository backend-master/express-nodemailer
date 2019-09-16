const express = require("express");
const nodemailer = require("nodemailer");

const app = express();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "gatotyeah@gmail.com",
    clientId: "from_google_api",
    clientSecret: "from_google_api",
    refreshToken: "from_google_api"
  }
});

const mailOptions = {
  from: "Tes NodeJs <gatotyeah@gmail.com>",
  to: "azerino25@gmail.com",
  subject: "Test Email NodeJs",
  text: "Halo Dunia",
  html: "<h1><i>Ini Email ya gaes!</i></h1>"
};

app.get("/", (req, res) => {
  res.send("NODEMAILER");
});

app.get("/email", (req, res) => {
  transporter.sendMail(mailOptions, (err, res2) => {
    if (err) {
      console.log("Error gan!");
      res.send("Error gan!");
    } else {
      console.log("Email sukses terkirim!");
      res.send("Email sukses terkirim!");
    }
  });
});

app.listen(3210, () => console.log("Run @3210"));
