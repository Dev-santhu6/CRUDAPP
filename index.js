require('dotenv').config(); 
// require is used to import code from other files in JavaScript.
// dot used to access the config function
// config() in JavaScript loads program settings, simplifying access to crucial information like database connections or API keys.

const express = require('express');
// developers to create web applications by providing ready-made tools and structures. 
const mongoose = require('mongoose');
// developers to store and retrieve data in databases by providing a simple way to interact with them
const mongoString = process.env.DATABASE_URL;
// mongoString is a variable holding the database connection URL retrieved from the environment variables.

mongoose.connect(mongoString);
// .connect() is a function provided by Mongoose that establishes the connection.
const database = mongoose.connection;
// 
database.on('error', (error) => {
    console.log(error)
})
// error handling function when connected to MongoDB database
//.on helps make your code interactive and responsive.
database.once('connected', () => {
    console.log('Database Connected');
})
// This is useful when you only want a particular action to occur the first time an event occurs, and not every time it happens.
const app = express();

app.use(express.json());
//creating the express library.
//it uses the use method to add a middleware that will parse JSON responses from requests.

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})
// start paying attention to requests on a specific port or network address.

//routes
// const routes = require('./routes/routes');

// app.use('/api', routes)



//employee routes
const employeeroutes = require('./routes/employeeroutes');

app.use('/api', employeeroutes)






