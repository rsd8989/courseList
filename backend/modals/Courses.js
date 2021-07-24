const mongoose=require('mongoose');
const courses_schema=mongoose.Schema({
    course_id:{
        type:Number,
        required:true
    },
    user_id:{
        type:mongoose.Schema.ObjectId,
        ref:'Users',
    }
})

const CourseModal=mongoose.model('Courses',courses_schema,'courses');
module.exports=CourseModal;