const express = require('express');
require('./models/Users')
require('./services/passport');
const mongoose = require('mongoose')
const keys = require('./config/keys')

const app = express();

// Google Oauth routes
require('./routes/authRoutes')(app);

// Connecting to MongoDB
const connectMongoDB = async () =>{
    console.log('Trying to connect to Database')
    try{
        await mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    }
    catch(error){
        console.log(error)
    }
}

connectMongoDB()

const PORT = process.env.PORT || 5000;
app.listen(PORT);
