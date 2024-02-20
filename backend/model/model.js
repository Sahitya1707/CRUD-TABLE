const mongoose = require("mongoose");
const tableSchema = new mongoose.Schema(
  {
    avatarImg: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
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
