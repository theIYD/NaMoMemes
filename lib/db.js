// Setup the DB
// const low = require("lowdb");
// const FileSync = require("lowdb/adapters/FileSync");

// const adapter = new FileSync("db.json");
// const db = low(adapter);
// db.defaults({ memes: [] }).write();

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const memeSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      index: {
        unique: true
      }
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meme", memeSchema, "memes");
