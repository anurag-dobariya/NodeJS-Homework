const mongoose = require("mongoose");
const config = require("../config/config");

// create function for database mongoose connection 

const connectDb = async() =>{
    mongoose.connect(config.mongodb.url , config.mongodb.options)
    .then((data) =>{
        console.log("database connection successfully");
    })
    .catch((error) =>{
        console.log("Database connection error :" , error);
    });
};

module.exports = {connectDb};