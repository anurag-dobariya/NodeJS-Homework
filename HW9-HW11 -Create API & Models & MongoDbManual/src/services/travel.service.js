const {travel} = require("../models");

 /**
  *  @param {object} reqBody
  * @returns {Promise<User>}
  */

 const createTravel = async (reqBody) =>{
    return travel.create(reqBody);
 };

 const getTravelList = async(req , res)=>{
   //  return travel.find();
    return travel.find({$or: [{is_active: true}]});
 };

 const deleteTravel = async(travelId)=>{
    return travel.findByIdAndDelete();
 };

 module.exports = {
    createTravel,
    getTravelList,
    deleteTravel
 }