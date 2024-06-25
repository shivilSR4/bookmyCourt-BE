const { response } = require('../app')
const COURT = require('../models/courtModel')
const SCHEDULES = require('../models/courtShedulemodel')
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

const addtimeSlotdata = (req, res) => {
    // Corrected to log req.body
    const { startDate, endDate, cost, slots, courtID } = req.body;
    let currentDate = new Date(startDate);
    const lastDate = new Date(endDate);
  
    const slotObject = [];
  
    while (currentDate <= lastDate) { // Corrected to use currentDate
      for (let slot of slots) {
        slotObject.push({
          date: JSON.parse(JSON.stringify(currentDate)),
          slot: {
            name: slot.name,
            id: slot.id
          },
          cost: Number(cost), 
                courtId: courtID
        });
      }
      console.log(slotObject)
      currentDate.setDate(currentDate.getDate() + 1);
    }
    SCHEDULES.insertMany(slotObject)
    .then((response) => {
      res.status(200).json('Schedule created successfully');
    })
    .catch((err) => {
      console.error(err); // Log the error for debugging
      res.status(500).json('Internal server error');
    });
     // Send the response back if needed
  };
  

module.exports = {createcourt,addtimeSlotdata}