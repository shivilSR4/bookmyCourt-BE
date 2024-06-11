const mongoose = require('mongoose');
const USERS = require('../models/userModel');
const jwt = require('jsonwebtoken')

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

const doLogin = async (req, res) => {
  try {
   
    const userdata = await USERS.findOne({ email: req.body.email });

    
    if (userdata) {
     
      if (userdata.password === req.body.password) {

        const token = jwt.sign({userId:userdata._id,name:userdata.name,email:userdata.email,role:userdata.role},process.env.JWT_PASSWORD,{expiresIn:'2d'})
        res.status(200).json({ message: "login success",token });

      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "internal server error" });
  }
}

  


module.exports = { doSignup,doLogin};
