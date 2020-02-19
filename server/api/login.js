const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const User = require("../models/User");

router.post("/login-user", (req, res) => {
  const user = req.body;
  User.findOne(user)
    .then(user => res.json(user))
    .catch(err => res.status(404).json({ error: "error" }));
});

module.exports = router;
