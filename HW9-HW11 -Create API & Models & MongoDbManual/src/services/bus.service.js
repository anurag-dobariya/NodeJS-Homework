const { bus } = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

 const createBus= async (reqBody) => {
    return bus.create(reqBody);
  };
  
  const getBusList = async (req,res) => {
    // return bus.find();
    return bus.find({$or : [{is_active : true}]});
  };
  
  const deleteBus= async (busId) => {
    return bus.findByIdAndDelete(busId);
  };
  
  
  module.exports = {
    createBus,
    getBusList,
    deleteBus
  };