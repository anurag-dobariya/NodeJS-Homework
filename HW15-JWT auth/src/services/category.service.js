const {category} = require("../models");

// create category
const createCategory = async (reqBody) =>{
    return category.create(reqBody);
};

// get category list 
const getCategoryList = async(req,res) =>{
    return category.find();
};

// get category details by id 
const getCategoryById = async(categoryId) =>{
    return category.findById(categoryId);
}

// delete category 
const deleteCategory = async(categoryId) =>{
    return category.findByIdAndDelete(categoryId);
};

// update category 
const updateCategory= async(categoryId , updateBody) =>{
    return category.findByIdAndUpdate(categoryId , {$set : updateBody});
};

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryById,
    deleteCategory,
    updateCategory
}