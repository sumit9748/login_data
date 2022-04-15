const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoute = require("./routes/auth");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
app.use(cors(
  origin = "*",
));
app.use(express.json());

app.use("/connect/auth", authRoute);


app.listen(5000, () => {
  console.log("Backend server is running!");
});