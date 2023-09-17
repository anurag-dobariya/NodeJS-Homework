const { userService } = require("../services");

// create user 
const createUser = async (req, res) => {
    try {
        const reqBody = req.body;
        const user = await userService.createUser(reqBody);
        if (!user) {
            throw new Error("Something went wrong , please try again later..");
        }

        res.status(200).json({
            success: true,
            message: "User created successfully.",
            data: user
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// get user list
const getUserList = async (req, res) => {
    try {
        const getList = await userService.getUserList(req, res);

        res.staus(200).json({
            success: true,
            message: "Get user list successfully.",
            data: getList
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// get user detailsby id 
const getUserById = async (req, res) => {
    try {
        const getUserDetails = await userService.getUserById(req.params.userId);
        if (!getUserDetails) {
            throw new Error("User not found!");
        }

        res.status(200).json({
            success: true,
            message: "User details get successfully!",
            data: getDetails,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// delete user 
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const userExists = await userService.getUserById(userId);
        if (!userExists) {
            throw new Error("User not found!");
        }

        await userService.deleteUser(userId);

        res.status(200).json({
            success: true,
            message: "User deleted successfully.",
          });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

// update user details 
const updateUser = async(req,res) =>{
    try {
        const userId = req.params.userId;
        const userExists = await userService.getUserById(userId);
        if(!userExists){
            throw new Error("User not found.");
        }

        await userService.updateUser(userId , req.body);

        res.status(200).json({
            success:true,
            message:"user details updated successfully."
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
};

module.exports = {
    createUser,
    getUserList,
    getUserById,
    deleteUser,
    updateUser
}