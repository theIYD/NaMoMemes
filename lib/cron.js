const cron = require("node-cron");
const getImages = require("./scraper");
const Meme = require("./db");

let memeArray = [
  "modi memes",
  "narendra modi memes",
  "acche din aa gaye memes",
  "kunal kamra modi memes"
];

let task = cron.schedule("* * * * *", async () => {
  console.log("Running every minute");
  let rand = memeArray[Math.floor(Math.random() * memeArray.length)];
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
    if (saveMemes) {
      console.log("Data saved");
    }
  } catch (err) {}
});
