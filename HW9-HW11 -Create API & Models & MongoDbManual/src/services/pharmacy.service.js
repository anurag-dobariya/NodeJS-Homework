const { pharmacy } = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

 const createPharmacy= async (reqBody) => {
    return pharmacy.create(reqBody);
  };
  
  const getPharmacyList = async (req,res) => {
    // return pharmacy.find();
    return pharmacy.find({$or : [{is_available:true}]});
  };
  
  const deletePharmacy= async (pharmacyId) => {
    return pharmacy.findByIdAndDelete(pharmacyId);
  };
  
  
  module.exports = {
    createPharmacy,
    getPharmacyList,
    deletePharmacy
  };