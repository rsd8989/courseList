const Users=require('./../modals/Users')
const jwt = require('jsonwebtoken');

const register=async (req,res)=>{
    const {username,password,email}=req.body
    try{
        const user=await Users.create({
            username,password,email
        })
        if(user){
            return res.send({registered:true})
        }else{
            return res.send("something went wrong")
        }
    }catch(err){
        return res.status(400).send(err);
    }
}

const Login=async (req,res,next)=>{
    const {email,password}=req.query;
    console.log(req.body)

    try{
        const user=await Users.findOne({
            email
        })
        
        if(user){
            console.log(user)
            if(user.password==password){
                jwt.sign({ _id:user._id,username:user.username }, process.env.JWT_TOKEN_SECRET, function(err, token) {
                    return res.send({verified:true,token})
                  });
            }else{
                throw {password:'invalid password'}
            }
            
            
        }else{
            throw {email:'invalid email'}
        }
    }catch(err){
        console.log(err)
        return res.status(400).send(err);
    }
}


    

module.exports.register=register;
module.exports.Login=Login
