const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Meme Schema
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

// Keyword Schema
const keySchema = new Schema({
  keys: {
    type: Array,
    required: true
  }
});

module.exports = {
  Meme: mongoose.model("Meme", memeSchema, "memes"),
  Key: mongoose.model("Key", keySchema, "keys")
};
