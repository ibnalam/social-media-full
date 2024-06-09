const express = require("express")
const router = express.Router()
const {userController, activateVerifiedUser, login} = require("../../controllers/userController")



router.post("/", userController)
router.post("/activateuser", activateVerifiedUser)
router.post("/login", login)


module.exports = router