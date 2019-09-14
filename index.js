const express = require("express");
const mongoose = require("mongoose");
const addKeyword = require("./lib/utility");
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

// Add keywords
app.post("/keyword", async (req, res, next) => {
  const id = req.query.id;
  const keyword = req.query.keyword;
  if (keyword) {
    const saveKeyword = await addKeyword(id, keyword);
    if (saveKeyword) {
      res.status(200).json({ message: "Keyword added" });
    }
  }
});
