const express = require("express");
const app = express();

require("./lib/cron");

app.listen(7000, () => {
  console.log("Server started on port 7000");
});
