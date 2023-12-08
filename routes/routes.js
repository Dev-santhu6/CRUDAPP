const express = require('express');
//require('express') is a way to bring in the functionality provided by the 'express' module. In Node.js,
// require is used to include external modules or libraries.

const router = express.Router()
//creates an Express Router
module.exports = router;

const Model = require('../model/model');
//require the model.js with that path way


router.post('/post', async (req, res) => {
    //This line defines a route for handling HTTP POST requests at the '/post' endpoint using the Express router (router).
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })
//Create a new piece of data using a predefined model. The data's 'name' and 'age' come from the incoming request's body.
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    //Save Data to Database:It attempts to save the created data object to the database. If successful, it responds with a status code of 200 (OK) and sends the saved data as a JSON response.
    catch (error) {
        res.status(400).json({message: error.message})
    }
})
    //Handle Errors:If an error occurs during the data saving process, it catches the error and responds with a status code of 400 (Bad Request), along with a JSON object containing an error message.


router.get('/getAll', async (req, res) =>
//The code is using an async function called "getAll" that takes in two parameters: req and res.
{
    try{
        const data = await Model.find();
        res.json(data)
    }
    //02.Retrieve Data from Database:It attempts to retrieve data from the database using the Model.find() method. This method is commonly used in MongoDB and Mongoose to find all documents in a collection. The retrieved data is then sent as a JSON response
    catch(error){
        res.status(500).json({message: error.message})
    }
    //03.Handle Errors:it catches the error and responds with a status code of 500 (Internal Server Error), along with a JSON object containing an error message.
})

