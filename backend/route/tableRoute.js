const express = require("express");
const router = express.Router();
const Table = require("../model/model");

// multer can be used as a middle ware to send files to the backend from frontend
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log(req, file);
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    // console.log(file.mimetype);
    // console.log(file.mimetype.split("/"));
    // let extensionArray = file.mimetype.split('/')
    // let extension = extensionArray[extensionArray.length -1]

    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.post("/add", upload.single("img"), async (req, res) => {
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
});
router.get("/get", (req, res) => {
  // console.log("get method");
  Table.find()
    .then((data) => {
      return res.status(200).json({ data });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
