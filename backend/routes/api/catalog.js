const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res, next) => {
  // console.log("in here");
  const parent = req.body.parentName;
  const time = req.body.time;
  const student = req.body.studentName;
  const parentEmail = req.body.parentEmail;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "email",
      pass: "password",
    },
  });

  var mailOptions = {
    from: "bittukumar.r17@gmail.com",
    to: parentEmail,
    subject: "NotchUp Trial Class Booked successfully",
    text: "Dear "+parent+"\n"+student+"'s class at "+time+" has been successfully booked.",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(401).json(error)
    } else {
      console.log("Email sent: " + info.response);
      res.json(info.response);
    }
  });
});

module.exports = router;
