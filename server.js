const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
let port = 5000;

app.use(
  express.static(path.join(__dirname), {
    etag: false
  })
);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(process.env.PORT || port, function() {
  console.log(`🚀 Server running on port ${port}`);
});
