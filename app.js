const express = require("express");
const mongoose = require("mongoose");
const app = express();

//middlewares contianing routes

app.use("/", (req, res, next) => {
  res.send("This is the starting app");
});

mongoose
  .connect(
    "mongodb+srv://admin:D6vceiQAuBiNnLPJ@cluster0.sncxf.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
