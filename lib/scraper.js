const Scraper = require("images-scraper"),
  google = new Scraper.Google();

async function getImages(name) {
  try {
    let results = await google.list({
      keyword: `${name}`,
      num: 20,
      detail: true
    });

    if (results) {
      return results;
    }
  } catch (err) {
    console.error(err);
  }
}

module.exports = getImages;
