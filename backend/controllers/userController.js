const Users = require("../models/userModel")

const bcrypt = require('bcrypt');


const userController = async (req,res) =>{
  try {
    const {
      fName,
      lName,
      userName,
      email,
      password,
      bMonth,
      bDay,
      bYear,
      gender,
      varified
    } = req.body

    const user = await new Users({
      fName,
      lName,
      userName,
      email,
      password,
      bMonth,
      bDay,
      bYear,
      gender,
      varified
    }).save()
    res.send(user)


  }
  catch (error) {
    res.status(404).json({
        message : "can't create user"
    })
  }
}

module.exports = userController

