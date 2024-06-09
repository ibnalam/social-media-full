const Users = require("../models/userModel")
const {velidateEmail} = require("../helpers/validation.js")
const {validateLength} = require("../helpers/validateLengthName.js")
const {validateUserName} = require("../helpers/userName.js")
const {jwtoken} = require("../helpers/token.js")
const jwt = require("jsonwebtoken")



const bcrypt = require('bcrypt');
const { sendVarifiedEmail } = require("../helpers/mailer.js")


exports.userController = async (req,res) =>{
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
    
    const url = `${process.env.BASE_URL}/activate/${emailToken}`
    sendVarifiedEmail(user.email,user.fName,url)

    const token = jwtoken({ id: user._id.toString()}, "7d")  

    // console.log(emailToken);


    res.send({
      id: user._id,
      username: user.userName,
      profilePicture: user.profilePicture,
      fName: user.fName,
      lName: user.lName,
      token: token,
      varified: user.varified,
      massage: "Registration Success, Please activate your email for start"
    })


  }
  catch (error) {
    res.status(404).json({
        message : "can't create user"
    })
  }
}





exports.activateVerifiedUser = async (req, res)=>{
  try{
    const {token} = req.body
   
    const user = jwt.verify(token, process.env.SECRET_TOCKEN)
    const check = await Users.findById(user.id)
    

    if(check.varified === true){
      return res.status(401).json({
        massage: "This Email is already verifyed"
      })
    }else {
      await Users.findByIdAndUpdate(user.id,{varified: true})
      return res.status(200).json({
        massage: "Account has beeen activated Successfull"
      })
    }
  }
  catch(err){
    res.status(400).json({
      massage: err.massage
    })
  }
}




exports.login = async (req, res) => {
  try{
    const {email, password} = req.body
    const user = await Users.findOne({email})
    if(!user){
      return  res.status(400).json({
        massage: "The Email Address you entired is not aconnected to an account "
      })
    }
    const check = await bcrypt.compare(password, user.password)
    if(!check){
     return res.status(400).json({
        massage: "Invalid credintial error , Plase try again"
      })
    }
    const token = jwtoken({ id: user._id.toString()}, "7d")  

    res.send({
      id: user._id,
      username: user.userName,
      profilePicture: user.profilePicture,
      fName: user.fName,
      lName: user.lName,
      token: token,
      varified: user.varified,
      massage: "Log In  Success"
    })
    
  }catch(error) {
    res.status(400).json({
      massage: error.massage
    })
  }
}






