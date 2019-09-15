const express = require("express");
const mongoose = require("mongoose");
const dbFuncs = require("./lib/utility");
const app = express();

require("dotenv").config();

// Connect mongoose
mongoose
  .connect(process.env.MONGODB)
  .then(db => {
    console.log("MongoDB connected");
    if (process.env.DEV) {
      require("./lib/cron");
    }
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
    const saveKeyword = await dbFuncs.addKeyword(id, keyword);
    if (saveKeyword) {
      res.status(200).json({ message: "Keyword added" });
    }
  }
});

// Home route
app.get("/", (req, res, next) => {
  res.status(200).json({
    version: require("./package.json").version,
    message: "NaMo Memes API"
  });
});

// Show memes
app.get("/memes/:count", async (req, res, next) => {
  const count = parseInt(req.params.count) || 10;
  const memes = await dbFuncs.getMemes(count);
  if (memes) {
    res.status(200).json(memes);
  }
});
