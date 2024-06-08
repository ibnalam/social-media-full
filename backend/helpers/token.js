const jwt = require("jsonwebtoken")

exports.jwtoken = (user, expiredIn) =>{
    return jwt.sign(user, process.env.SECRET_TOCKEN, {
        expiresIn: expiredIn
    })
}