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

app.listen(7000, () => {
  console.log("Server started on port 7000");
});
