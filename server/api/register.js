const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");

router.get("/", (req, res) => {
  res.json("register api route");
});

router.post("/create-user", (req, res) => {
  const newUser = new User({
    user: req.body.user,
    pass: req.body.pass
  });

  newUser.save().then(users => res.json(users));
});

module.exports = router;
