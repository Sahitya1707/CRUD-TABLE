const express = require("express");
const app = express();
const cors = require("cors");

// setting the port to for the backend

const port = process.env.PORT || 301;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`App running on ${port}`);
});
