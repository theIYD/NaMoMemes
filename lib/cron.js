const cron = require("node-cron");
const getImages = require("./scraper");
const Meme = require("./db").Meme;
const Keys = require("./db").Key;

let memeArray = [];

// Find all keywords
Keys.find({})
  .then(obj => {
    memeArray = obj[0].keys;
  })
  .catch(err => console.error(err));

// Start the cron job
let task = cron.schedule("* * * * *", async () => {
  console.log("Running every minute");
  console.log("Array", memeArray);
  let rand = memeArray[Math.floor(Math.random() * memeArray.length)];
  console.log("Keyword ", rand);
  let memes = await getImages(rand);
  let results = [];
  memes.forEach(async meme => {
    let newMeme = new Meme({
      url: meme.url
    });
    results.push(newMeme);
  });

  try {
    const saveMemes = await Meme.insertMany(results, { ordered: false });
    console.log(saveMemes);
    if (saveMemes) {
      console.log("Data saved");
    }
  } catch (err) {}
});
