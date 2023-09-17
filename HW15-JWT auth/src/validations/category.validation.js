const joi = require("joi");

// create category 
const createCategory = {
    body : joi.object().keys({
        category_name : joi.string().required().trim(),
        category_disc : joi.string().required().trim()
    })
};

module.exports = {
    createCategory
}