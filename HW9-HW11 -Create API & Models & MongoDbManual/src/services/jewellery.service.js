const { jewellery } = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

 const createJewellery= async (reqBody) => {
    return jewellery.create(reqBody);
  };
  
  const getJewelleryList = async (req,res) => {
    // return jewellery.find();
    return jewellery.find({$or : [{is_available:true}]});
  };
  
  const deleteJewellery= async (jewelleryId) => {
    return jewellery.findByIdAndDelete(jewelleryId);
  };
  
  
  module.exports = {
    createJewellery,
    getJewelleryList,
    deleteJewellery
  };