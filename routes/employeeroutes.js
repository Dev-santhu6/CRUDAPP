const express = require('express');

const router = express.Router()

module.exports = router;

//model connect
const Model = require('../model/employeemodel');



//post

router.post('/post', async (req, res) => {
    const data = new Model({
        EmployeeName: req.body.EmployeeName,
        Deparment: req.body.Deparment,
        Distination: req.body.Distination,
        salary: req.body.salary

    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
