const jwt = require('jsonwebtoken')
const {badRequestError} = require("../errors");

  

const login = async(req,res)=>{
    const {username,password}=req.body
    if(!username || !password) {
        throw new badRequestError('Please provide valid Username and Password')
    };
    const id = new Date().getDate()
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30days'})
    console.log(username,password);
    res.status(200).json({msg:'User Created',token})
    
}

const dashboard = async(req,res)=>{
    // console.log(req.user)
    const luckynumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, ${req.user.username}`,
    secret:`Your Token:${luckynumber}`})
    
    
}
module.exports={login,dashboard}