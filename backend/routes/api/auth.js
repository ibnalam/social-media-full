const express = require("express")
const userController = require("../../controllers/userController")
const router = express.Router()


router.post("/", userController)
router.post("/", (req, res)=> {
    console.log(req.body);
})

module.exports = router