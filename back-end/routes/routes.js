const express = require("express");
const router = express.Router();
const {
  getUsersDetails
} = require("../controllers/userController");


router.get("/usersDetails", getUsersDetails);


module.exports = router;
