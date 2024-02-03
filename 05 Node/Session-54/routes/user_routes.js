const express=require('express');
const {addUser}=require('../controller/user_controller');

const router= express.Router();

router.route("/").post(addUser);

module.exports=router;