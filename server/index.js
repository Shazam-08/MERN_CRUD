const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(express.json());
const userModel = require("./models/Users");
dotenv.config();

mongoose.connect(process.env.MONGO_URI);

app.get("/getuser/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findById({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndUpdate(
      { _id: id },
      { name: req.body.name, email: req.body.email, age: req.body.age }
    )
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  userModel
    .findByIdAndDelete({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.get("/", (req, res) => {
  userModel
    .find({})
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
app.post("/create", (req, res) => {
  userModel
    .create(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("The server is running");
});
