const mongoose = require("mongoose");
const config = require("config");
// const db = config.get("MONGODB_URI");
// const db = config.get("MONGODB_URI");
const db = process.env.MONGODB_URI;

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    // console.log(db);
    // await mongoose.connect(db, {});

    console.log("MongoDb connected");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
