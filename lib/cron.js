const cron = require("node-cron");
const getImages = require("./scraper");
const db = require("./db");

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

  memes.forEach(meme => {
    db.get("memes")
      .push({ date: Date.now(), url: meme.url, type: meme.type })
      .write();
  });
});
