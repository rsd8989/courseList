const mongoose=require('mongoose');
const user_schema=mongoose.Schema({
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        match: [/\S+@\S+\.\S+/, 'email is invalid']
    }
})

const UserModal=mongoose.model('Users',user_schema,'users');
module.exports=UserModal;