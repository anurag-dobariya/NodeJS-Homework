const { hotel } = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

const createHotel= async (reqBody) => {
  return hotel.create(reqBody);
};

const getHotelList = async (req,res) => {
  // return hotel.find();
  return hotel.find({$or : [{is_open : true}]});
};

const deleteHotel= async (hotelId) => {
  return hotel.findByIdAndDelete(hotelId);
};


module.exports = {
  createHotel,
  getHotelList,
  deleteHotel
};