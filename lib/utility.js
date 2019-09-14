const Key = require("./db").Key;

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

module.exports = addKeyword;
