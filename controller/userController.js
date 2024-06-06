const mongoose = require('mongoose');
const USERS = require('../models/userModel');

const doSignup = (req, res) => {
  USERS({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    password: req.body.password
  }).save()
    .then(() => {
      res.status(200).json({ message: "success" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "failed" });
    });
};

module.exports = { doSignup };
