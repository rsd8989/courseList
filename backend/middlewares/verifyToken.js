const jwt=require('jsonwebtoken')

const verifyToken=async (req,res,next)=>{
    console.log("verifhy called")
    let login_token;
    if(req.query.login_token){
        login_token=req.query.login_token
    }else if(req.body.login_token){
        login_token=req.body.login_token
    }
    console.log(req.query)
    console.log(req.body)
    //const {login_token}=req.query || req.body;
    //console.log(req.query)
   // console.log(login_token)
    jwt.verify(login_token, process.env.JWT_TOKEN_SECRET, function(err, decoded) {
        if(err){
            //console.log(err)
            return res.status(400).send('invalid login token')
        }else{
            //console.log(decoded)
            req.user_id=decoded._id;
            next();
        }
      });
    

}
module.exports=verifyToken;