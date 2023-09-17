const mongoose = require("mongoose");

// creating schema(structure) for user model
const userschema = new mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true
        },
        last_name:{
            type:String,
            trim:true
        },
        email:{
            type:String,
            trim:true
        },
        password:{
            type:String
        },
        is_active:{
            type:Boolean,
            default:false
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
) ;

const user = mongoose.model("user" , userschema);
module.exports = user;