const jwt = require('jsonwebtoken')
const {UnAuthorizedError} = require("../errors");

const authentication = async(req,res,next)=>{
    const AuthHeader = req.headers.authorization;
    if(!AuthHeader || !AuthHeader.startsWith('Bearer ')){
        throw new UnAuthorizedError('No Tokens Present')
    }
    const token = AuthHeader.split(' ')[1]
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        // console.log(decoded)
        const{id , username}=decoded
        req.user={id,username}
        
        next()
    } catch (error) {
        throw new UnAuthorizedError('Not Aurthorized')
    }
    // console.log(token)
}
module.exports =authentication 