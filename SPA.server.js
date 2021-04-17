// Express
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const compression = require("compression");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const PORT = process.env.PORT || 3000;

const STATIC = path.resolve(__dirname, "PUBLIC");
const INDEX = path.resolve(STATIC, "index.html");

const app = express();
app.use(bodyParser.json());

// compress all responses
app.use(compression());
// Static content
app.use(express.static(STATIC));

// All GET request handled by INDEX file
app.get("*", function (req, res) {
  req.headers["Bypass-Tunnel-Reminder"] = "YEAdoIT";
  res.sendFile(INDEX);
});

// Start server
app.listen(PORT, function () {
  console.log("Server up and running on http://localhost:" + PORT + "/");
});
