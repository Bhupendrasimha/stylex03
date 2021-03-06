const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const routes = require("./routes/routes");
const usersData = require("./mockData");
const Users = require("./models/user");

const app = express();
const db = mongoose.connection;

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/admin", routes);
console.log(process.env.URI);
mongoose.connect(
  process.env.BASE_URI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (error) => {
    if (error) console.log(`error connecting database : ${error}`);
    else console.log("Database is successfully connected");
  }
);

db.once("open", async (req, res) => {
  if ((await Users.countDocuments().exec()) > 0) {
    console.log("Users Data already added in the collection");
    return;
  }

  Users.insertMany(usersData)
    .then(() => console.log("Users Data added Successfully"))
    .catch((err) => console.log(`Error : ${err}`));
});

app.listen(5000, () => {
  console.log(`server running on port 5000`);
});
