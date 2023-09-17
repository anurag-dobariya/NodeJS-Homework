const mongoose = require("mongoose");

// creating schema(structure) for category model
const categorySchema = new mongoose.Schema(
    {
        category_name:{
            type:String,
            trim:true
        },
        category_disc:{
            type:String,
            trim:true
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
);

const category = mongoose.model("category" , categorySchema);
module.exports = category;