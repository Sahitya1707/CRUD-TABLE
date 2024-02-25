const express = require("express");
const router = express.Router();
const Table = require("../model/model");

router.post("/add", async (req, res) => {
  //   console.log(req.body);
  const { firstName, lastName, email, contactNumber, img } = req.body;
  const newTable = new Table({
    firstName,
    lastName,
    emailId: email,
    contact: contactNumber,
    avatarImg: img,
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
  console.log(newTable);
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
