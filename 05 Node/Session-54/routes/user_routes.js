const express=require('express');
const {addUser,getAllUsers, getUserById}=require('../controller/user_controller');

const router= express.Router();

router.route("/").get(getAllUsers).post(addUser);

router.route('/:id').get(getUserById)

module.exports=router;