require('dotenv').config(); 
// require is used to import code from other files in JavaScript.

// config() in JavaScript loads program settings, simplifying access to crucial information like database connections or API keys.

const express = require('express');
// developers to create web applications by providing ready-made tools and structures. 
const mongoose = require('mongoose');
// developers to store and retrieve data in databases by providing a simple way to interact with them
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

//routes
const routes = require('./routes/routes');

app.use('/api', routes)




