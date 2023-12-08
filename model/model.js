const mongoose = require('mongoose');
//imports the Mongoose library into your code. 
//It allows you to interact with MongoDB using a convenient and structured way provided by Mongoose.

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

//This creates a new Mongoose schema for your data. 
//A schema defines the structure of your data and any rules or constraints on that data.
// the schema defines that the data should have a 'name' property, which is a required string, and an 'age' property, which is a required number.

module.exports = mongoose.model('Data', dataSchema)
//A model is a way to interact with a MongoDB collection.
// This allows you to use the model to perform operations on the MongoDB collection associated with the 'Data' model.
