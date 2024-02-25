const express = require("express");
require("dotenv").config();
// creates an express application
const app = express();
const cors = require("cors");
const connectDB = require("./config/db.js");
connectDB();
// path to route
const tableRoute = require("./route/tableRoute");

// setting the port to for the backend

const port = process.env.PORT || 301;
// we should use the cors for cross origin resource sharing so that we can get the data on client web applicaton which are of different domain from server web application which are seperate domain.
app.use(cors());
//express.json is a middleware function used to parse in epress js
app.use(express.json());

app.use("/api/table", tableRoute);

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
