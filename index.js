const express = require("express");
const mongoose = require("mongoose");
const app = express();

require("dotenv").config();

// Connect mongoose
mongoose
  .connect(process.env.MONGODB)
  .then(db => {
    console.log("MongoDB connected");
    require("./lib/cron");
  })
  .catch(err => {
    console.error(err);
  });

// Start the server
let port = process.env.PORT || 7000;
app.listen(port, () => {
  console.log("Server started on port " + port);
});
