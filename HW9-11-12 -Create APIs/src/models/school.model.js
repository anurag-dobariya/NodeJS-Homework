const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema(
    {
        school_name:{
            type: String,
            trim:true
        },
        school_address:{
            type:String,
            trim:true
        },
        school_email:{
            type:String,
            trim:true
        },
        school_contact:{
            type:Number,
            trim:true
        },
        is_open:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const school = mongoose.model("school" , schoolSchema);
module.exports = school;