const express = require("express");
const router = express.Router();
const Table = require("../model/model");

// multer can be used as a middle ware to send files to the backend from frontend
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const path = require("path");
const upload = multer({ dest: "./uploads" });

router.post("/add", upload.single("img"), async (req, res) => {
  console.log(req.file);

  const { firstName, lastName, email, contactNumber, img } = req.body;

  const newTable = new Table({
    firstName,
    lastName,
    emailId: email,
    contact: contactNumber,
    avatarImg: req.file.filename,
  });
  newTable
    .save()
    .then((success) => {
      return res.status(200).json({ message: "book has been saved" });
    })
    .catch((err) => {
      {
        console.log(err);
      }
    });
  //   console.log(newTable);
  //   newTable.save().then((success) => {
  //     return res.status(200).json({ message: "book has been saved." });
  //   });
  await console.log(`Add route has been reached.`);
  try {
    console.log(`hi`);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
