const User = require("../models/userModel.js")

exports.velidateEmail = (email)=>{
   return String(email).toLowerCase().match( /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)
}



