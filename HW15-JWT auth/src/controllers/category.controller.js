const { categoryService } = require("../services");

// create category 
const createCategory = async (req, res) => {
    try {
        const reqBody = req.body;
        const category = await categoryService.createCategory(reqBody);
        if (!category) {
            throw new Error("Something went wrong , please try again later..");
        }

        res.status(200).json({
            success: true,
            message: "category created successfully.",
            data: category
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// get category list
const getCategoryList = async (req, res) => {
    try {
        const getList = await categoryService.getCategoryList(req, res);

        res.staus(200).json({
            success: true,
            message: "Get category list successfully.",
            data: getList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// get category details by id 
const getCategoryById = async (req, res) => {
    try {
        const getCategoryDetails = await categoryService.getCategoryById(req.params.categoryId);
        if (!getCategoryDetails) {
            throw new Error("category not found!");
        }

        res.status(200).json({
            success: true,
            message: "category details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// delete category 
const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const categoryExists = await categoryService.getCategoryById(categoryId);
        if (!categoryExists) {
            throw new Error("category not found!");
        }

        await categoryService.deleteCategory(categoryId);

        res.status(200).json({
            success: true,
            message: "category deleted successfully.",
          });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// update category details 
const updateCategory = async(req,res) =>{
    try {
        const categoryId = req.params.categoryId;
        const categoryExists = await categoryService.getCategoryById(categoryId);
        if(!categoryExists){
            throw new Error("category not found.");
        }

        await categoryService.updateCategory(categoryId , req.body);

        res.status(200).json({
            success:true,
            message:"category details updated successfully."
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

module.exports = {
    createCategory,
    getCategoryList,
    getCategoryById,
    deleteCategory,
    updateCategory
}