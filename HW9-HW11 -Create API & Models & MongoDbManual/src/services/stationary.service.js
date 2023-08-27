const {stationary} = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

 const createStationary= async (reqBody) => {
    return stationary.create(reqBody);
  };
  
  const getStationaryList = async (req,res) => {
    // return stationary.find();
    return stationary.find({$or : [{is_open : true}]});
  };
  
  const deleteStationary= async (stationaryId) => {
    return stationary.findByIdAndDelete(stationaryId);
  };
  
  module.exports = {
    createStationary,
    getStationaryList,
    deleteStationary
  };