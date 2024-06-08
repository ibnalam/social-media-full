const User = require("../models/userModel.js")

exports.validateUserName = async (username) => {
    let isTrue = false
    do{

        let user = await User.findOne({username})
        if(user){
            username += (+new Date() * Math.random()).toString().substring(0, 1)
            isTrue = true
        }else{
            isTrue = false
        }
        
    } while(isTrue)

    return username
}



// console.log((+new Date() * Math.random()).toString().substring(0,1));