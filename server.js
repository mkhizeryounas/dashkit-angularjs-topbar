const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
let port = 5000;

app.use("/app", express.static(path.join(__dirname, "app")));
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use(
  "/bower_components",
  express.static(path.join(__dirname, "bower_components"))
);

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(process.env.PORT || port, function() {
  console.log(`🚀 Server running on port ${port}`);
});
