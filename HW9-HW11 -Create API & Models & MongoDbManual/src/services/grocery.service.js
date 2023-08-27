const { grocery } = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

 const createGrocery= async (reqBody) => {
    return grocery.create(reqBody);
  };
  
  const getGroceryList = async (req,res) => {
    // return grocery.find();
    return grocery.find({$or: [{is_open: true}]});
  };
  
  const deleteGrocery= async (groceryId) => {
    return grocery.findByIdAndDelete(groceryId);
  };
  
  
  module.exports = {
    createGrocery,
    getGroceryList,
    deleteGrocery
  };