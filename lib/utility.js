const Key = require("./db").Key;
const Meme = require("./db").Meme;

// Add keyword to existing array
async function addKeyword(id, keyword) {
  const newKey = await Key.findOneAndUpdate(
    { _id: id },
    { $push: { keys: keyword } },
    { new: true }
  );

  if (newKey) {
    return true;
  }
}

// Get memes from db
async function getMemes(count) {
  const memes = await Meme.aggregate([{ $sample: { size: count } }]);
  if (memes) {
    return memes;
  }
}

// Get memes with pagination
async function getMemesPagination(page, count) {
  const memes = await Meme.find({})
    .skip(page * count)
    .limit(count)
    .exec();

  if (memes) {
    return memes;
  }
}

// Get latest memes
async function getLatestMemes(count) {
  const memes = await Meme.find({})
    .sort({ createdAt: -1 })
    .limit(count)
    .exec();
  if (memes) {
    return memes;
  }
}

module.exports = { addKeyword, getMemes, getMemesPagination, getLatestMemes };
