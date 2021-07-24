const express=require('express');
const CoursesController=require('./../controllers/CoursesController');
const router=express.Router();
const verifyToken=require('./../middlewares/verifyToken');

router.post('/register',verifyToken,CoursesController.registerCourse);
router.get('/getCourses',verifyToken,CoursesController.getCourses)
// router.get('/login',AuthController.Login)
// router.get('/allUsers',verifyToken,AuthController.getAllUsers)

module.exports=router;