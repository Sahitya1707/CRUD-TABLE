const mongoose = require("mongoose");
const tableSchema = new mongoose.Schema(
  {
    avatarImg: {
      type: String,
      // required: true,
    },
    firstName: {
      type: String,
      // required: true,
    },
    lastName: {
      type: String,
      // required: true,
    },
    emailId: {
      type: String,
      // required: true,
    },
    contact: {
      type: String,
      // required: true,
    },
  },
  {
    timestamps: true,
  }
);

//creation of model named Table using mongoose.model() function
const Table = mongoose.model("Table", tableSchema);
//exporting your model
module.exports = Table;
