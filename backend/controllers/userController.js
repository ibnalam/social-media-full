const Users = require("../models/userModel")
const {velidateEmail} = require("../helpers/validation.js")
const {validateLength} = require("../helpers/validateLengthName.js")
const {validateUserName} = require("../helpers/userName.js")
const {jwtoken} = require("../helpers/token.js")



const bcrypt = require('bcrypt');


const userController = async (req,res) =>{
  try {
    const {
      fName,
      lName,
      email,
      userName,
      password,
      bMonth,
      bDay,
      bYear,
      gender,
      varified
    } = req.body

    // email validation condition 01
    if(!velidateEmail(email)){
      return res.status(400).json({
        message: "Invalid Email Address"
      })
    }

    const checkMail = await Users.findOne({email})

    // existing email condition  02
    if(checkMail){
      return res.status(400).json({
        masage: "Email Already Exist"
      })
    }

    // firstname length condition here 
    if(!validateLength(fName, 3, 15)){
      return res.status(400).json({
        message : "FirstName should be minimum 3 and max 15 carecters"
      })
    }

        // Lastname length condition here 
    if(!validateLength(lName, 3, 15)){
      return res.status(400).json({
        message : "LastName should be minimum 3 and max 15 carecters"
      })
    }

        // password length condition here 
    if(!validateLength(password, 8, 40)){
      return res.status(400).json({
        message : "Password should be 8 carecter"
      })
    }


    // bcrypt password 
    const passBcrypted = await bcrypt.hash(password, 10)
    // console.log(passBcrypted);



    // username validation condition
    let tempUserName = fName + lName 
    let finalUserName = await validateUserName(tempUserName)





    const user = await new Users({
      fName,
      lName,
      email,
      userName: finalUserName,
      password: passBcrypted,
      bMonth,
      bDay,
      bYear,
      gender,
      varified
    }).save()

    const emailToken = jwtoken({ id: user._id.toString()}, "30m")                                  

    // console.log(emailToken);


    res.send(user)


  }
  catch (error) {
    res.status(404).json({
        message : "can't create user"
    })
  }
}

module.exports = userController

