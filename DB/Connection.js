const mongoose = require('mongoose');

const URI = "mongodb+srv://name:password@cluster0.xsrgo.mongodb.net/dbname?retryWrites=true&w=majority";

const connectDB = async() =>{
    await mongoose.connect(URI,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db is connected..hurrayyyyyyyyyyy');
}

module.exports = connectDB; 
