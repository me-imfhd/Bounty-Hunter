const jwt = require("jsonwebtoken");

const secret = "SecretSecretSecret";

function authenticatejwt(req, res, next){
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(403).json({msg: "Where is the auth header buddy?"})
    }
    const token = authHeader.split(" ")[1];
    jwt.verify(token,secret,(err,user)=>{
        if(err){
            return res.status(403).json({msg: "invalid token"})
        }
        req.headers["userId"] = user.id;
        next();
    })
}

module.exports = {
    authenticatejwt,
    secret
}