const bcrypt = require('bcryptjs')

const userMiddleware= (req,res,next)=>{
    console.log("routes middleware");
    next()
}

const passwordValid= (req,res,next)=>{
   if( req.body.password.length<5){
    return res.json({error:"password should be greater than length 5"})
   }
   next()
}
const hashpaword=async function(password){
password = await bcrypt.hash(password,10)
return password

}
const comparePassword=async function(password,){
    bcrypt.compareSync(data.password,userAccount.password)
    return password
    
    }
module.exports ={userMiddleware,passwordValid,hashpaword,comparePassword}