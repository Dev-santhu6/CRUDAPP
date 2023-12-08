const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    EmployeeName: {
        required: true,
        type: String
    },
    Distination: {
        required: true,
        type: String
    },
    Deparment: {
        required: true,
        type: String
    },
    salary: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('EmployeeData', dataSchema)