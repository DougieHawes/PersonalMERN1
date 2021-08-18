require("dotenv").config();

const mongoUri = process.env.MONGODB_URI;
const port = process.env.PORT;

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/user", require("./routes/api/userRoute"));
app.use("/api/profile", require("./routes/api/profileRoute"));
app.use("/api/item", require("./routes/api/itemRoute"));
app.use("/api/post", require("./routes/api/postRoute"));

app.listen(port, console.log(`express app running on port:${port}`));

mongoose.connect(
  mongoUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("mongodb connected")
);
