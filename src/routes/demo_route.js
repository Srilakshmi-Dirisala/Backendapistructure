const express=require('express');
const {getDemoController}=require("../controllers/demo_controller");
var router=express.Router();

router.get('/getDemo',getDemoController)

module.exports=router