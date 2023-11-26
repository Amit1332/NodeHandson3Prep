const Router = require('express').Router()
const {ads,data}= require('../jsonData')
const {passwordValid, hashpaword, comparePassword} = require('../middlewares')
const jwt = require('jsonwebtoken')

const user = []
Router.get('/getData/:id',(req,res)=>{
   const userdata =  data.find((elem)=> elem.id==req.params.id)
    return res.send(userdata)
})


Router.get('/getData',(req,res)=>{
    const {type,id}=req.query
    const userdata =  data.filter((elem)=> elem.type==type && elem.id==id)
     return res.send(userdata)
 })



//  Router.post('/signup',async (req,res)=>{
//   const data = req.body
//   if(!data.email || !data.password){
//     return res.send({error:"please fill with email and Password"})

// }
// const isExist =user.find(elem=> elem.email===data.email)
// if(isExist){
//     return res.send({error:"user already exist"})

// }

//    data.password  =await bcrypt.hash(data.password,10)
//   user.push(data)
//   res.json({success:true,data:user, msg:"Register Successfully"})
//  })


const secretKey = "amitSingh"

 Router.post('/signup',passwordValid,async (req,res)=>{
    const data = req.body
    if(!data.email || !data.password){
            return res.send({error:"please fill with email and Password"})
        
        }
        const isExist =user.find(elem=> elem.email===data.email)
        if(isExist){
            return res.send({error:"user already exist"})
        
        }
        
     data.password = await hashpaword(data.password)
    user.push(data)
    const  token = jwt.sign({user:data.email},secretKey,{expiresIn:1*24*60*60*100})
    res.json({success:true,data:user,token:token, msg:"Register Successfully"})
   })
  


 
 Router.post('/login',passwordValid,(req,res)=>{ 
    const data = req.body  
    if(!data.email || !data.password){
        return res.send({error:"please fill with email and Password"})

    }
    let userAccount  = user.find(elem=>elem.email == data.email)
   
     if(userAccount){
            const checkpass =comparePassword(data.password,userAccount.password)
            if(checkpass){
                const  token = jwt.sign({user:data.email},secretKey,{expiresIn:1*24*60*60*100})
                res.json({success:true,email:user.email,token:token, msg:`${data.email} Login Successfully`})

            }
            return res.send({error:"Password is incorrect"})



     }
     else{
        res.json({error:"Please Signup first"})
     }
   })

   Router.get('/',(req,res)=>{
    const data = req.body
  
    res.json({success:true,user:user})
   })
module.exports=Router