// eslint-disable-next-line @typescript-eslint/no-var-requires
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("dist"));

// Fix the 404 for any non root route: https://router.vuejs.org/guide/essentials/history-mode.html#HTML5-Mode
app.use("/*", (req, res) => {
  res.sendFile("index.html", { root: "dist" });
});

app.listen(port, () => {
  console.log(`Express.js listening on port ${port}`);
});
