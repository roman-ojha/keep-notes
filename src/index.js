const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config({ path: "../config.env" });
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
require("../db/dbConnection");
const KeepNoteAppUserData = require("../models/userSchema");
app.use(express.json());
app.use(require("../router/route"));

// app.post("/register", (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// });

app.listen(PORT, () => {
  console.log("Server Start");
});
