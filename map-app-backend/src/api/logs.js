const express = require('express');
const router = express.Router();
const logEntry = require('../models/logEntry');


router.get('/',async ( req,res,next) => {
try {
    const entries = await logEntry.find();
    res.json(entries)
} catch(error) {
    next(error)
}
})

router.post('/', async (req,res,next) => {
    try {
        const newLogEntry = new logEntry(req.body)
        const createdEntry = await newLogEntry.save();  //This is used to save data that is sent to the DB 
        res.json(createdEntry)

    } catch(error) {
        console.log(error.constructor.name)
        error.constructor.name === 'ValidationError' && res.status(422) 
        next(error)
    }
   
})



module.exports = router;


