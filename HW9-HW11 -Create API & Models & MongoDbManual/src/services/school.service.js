const { school } = require("../models");

/**
 * @param {object} reqBody
 *@returns {Promise<User>}
 */

const createSchool = async (reqBody) => {
    return school.create(reqBody)
};

const getSchoolList = async(req , res) =>{
    // return school.find();
    return school.find({$or : [{is_open: true}]});
};

const deleteSchool = async (schoolId) => {
    return schhol.findByIdAndDelete(schoolId);
};

module.exports = {
    createSchool,
    getSchoolList,
    deleteSchool
};