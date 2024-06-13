const COURT = require('../models/courtModel')
const createcourt = (req,res)=>{
    COURT({
        courtName:req.query.name,
        location:req.query.location,
        number:req.query.number,
        address:req.query.address,
        description:req.query.description,
        courtImage:req.file.filename

    }).save().then(()=>{
        res.status(200).json('court created successfully')
    }).catch(err=>{
        console.log(err);
        res.status(401).json('court creation failed')
    })
}

module.exports = {createcourt}