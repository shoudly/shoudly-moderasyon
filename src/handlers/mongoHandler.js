const mongoose = require("mongoose");
const settings = require("../configs/settings.json");
require('dotenv').config({ path: '.env' });

mongoose.connect(process.env.mongoUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to DB");
});

mongoose.connection.on("error", () => {
  console.error("Connection Error!");
});
