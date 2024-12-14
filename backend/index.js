const express = require("express");
// const { connection } = require("./controllers/db");
const mongoose = require("mongoose");

// const { Router } = require("./routes/productRoute");

const app = express();
// convert reqest coming from the user json to string
app.use(express.json());

app.get("/products", (req, res) => {
  res.send("products");
});
app.get("/", (req, res) => {
  res.send("App is working");
});

// app.post("/products", (req, res) => {
//   const data = req.body;
//   console.log(data, "data");
//   // res.send()
//   res.send("products");
// });

const port = 8080;
app.listen(`${port}`, async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://username:password@cluster0.mhfnh.mongodb.net/myDatabase?retryWrites=true&w=majority`
    );
    console.log("Sucessfully connected to Database");
  } catch (error) {
    console.log("Failed to connect to Database");
  }
  console.log(`App is listening at ${port}`);
});
