const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const {categoryValidation} = require("../../validations");
const {categoryController} = require("../../controllers");

const router = express.Router();

// create category 
router.post(
    "/create-category",
    auth(),
    validate(categoryValidation.createCategory),
    categoryController.createCategory
);

// get category list 
router.get(
    "/list",
    auth(),
    categoryController.getCategoryList
);

// get category by id 
router.get(
    "/get-category-details/:categoryId",
    auth(),
    categoryController.getCategoryById
)

// delete category 
router.delete(
    "/delete-category/:categoryId",
    auth(),
    categoryController.deleteCategory
)

// update category 
router.put(
    "update-category/:categoryId",
    auth(),
    categoryController.updateCategory
)

module.exports = router;