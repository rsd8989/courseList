const Courses=require('./../modals/Courses')
const jwt = require('jsonwebtoken');

const registerCourse=async (req,res,next)=>{

    try{
        const course=await Courses.create({
            course_id:req.body.course_id,
            user_id:req.user_id
        })
        if(course){
            return res.send("course registerd sucfesfullyu")
        }
    }catch(err){
        return res.status(400).send("somethig went wrong")
    }
    
}

const getCourses=async (req,res,next)=>{

    try{
        const courses=await Courses.find({user_id:req.user_id});
        if(courses){
            return res.send(courses)
        }
    }catch(err){
        console.log(err)
        return res.status(400).send("something went wrong")
    }
    
}

module.exports.registerCourse=registerCourse
module.exports.getCourses=getCourses;