const express=require('express');
const {addUser,getAllUsers, getUserById, deleteUserById,updateUserById}=require('../controller/user_controller');

const router= express.Router();

router.route("/").get(getAllUsers).post(addUser);

router.route('/:id').get(getUserById).delete(deleteUserById).put(updateUserById);

module.exports=router;