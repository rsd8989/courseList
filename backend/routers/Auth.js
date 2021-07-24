const express=require('express');
const AuthController=require('./../controllers/AuthController');
const router=express.Router();
//const verifyToken=require('./../middlewares/verifyToken');

router.post('/register',AuthController.register);
router.get('/login',AuthController.Login)
// router.get('/allUsers',verifyToken,AuthController.getAllUsers)

module.exports=router;