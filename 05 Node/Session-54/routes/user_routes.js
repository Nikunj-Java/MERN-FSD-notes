const express=require('express');
const {addUser,getAllUsers}=require('../controller/user_controller');

const router= express.Router();

router.route("/").get(getAllUsers).post(addUser);

module.exports=router;