const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();

//middlewares contianing routes
app.use(express.json());

app.use("/books", router); //localhose:5000/books

mongoose
  .connect(
    "mongodb+srv://admin:D6vceiQAuBiNnLPJ@cluster0.sncxf.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
