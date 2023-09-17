const express = require("express");
const validate = require("../../middlewares/validate");
const {userValidation} = require("../../validations");
const {userController} = require("../../controllers");

const router = express.Router();

// create user 
router.post(
    "/create-user",
    validate(userValidation.createUser),
    userController.createUser
);

// get user list 
router.get(
    "/list",
    userController.getUserList
);

// get user by id 
router.get(
    "/get-user-details/:userId",
    userController.getUserById
)

// delete user 
router.delete(
    "/delete-user/:userId",
    userController.deleteUser
)

// update user 
router.put(
    "update-user/:userId",
    userController.updateUser
)

module.exports = router;