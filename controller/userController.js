const mongoose = require('mongoose');
const USERS = require('../models/userModel');
const jwt = require('jsonwebtoken')
const COURT = require('../models/courtModel');
const { response } = require('../app');

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
        res.status(200).json({ message: "login success",token,userdata });

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
const getCourtData = (req, res) => {
  COURT.find()
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res.status(500).json('server error');
    });
};

const getDatabyId = (req,res)=>{
  COURT.findOne({_id:req.query.id}).then((response)=>{

res.status(200).json(response)

  }).catch((err)=>{
    res.status(500).json('internal server error')
  })

}
  


module.exports = { doSignup,doLogin,getCourtData,getDatabyId};
