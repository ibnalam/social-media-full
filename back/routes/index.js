const express = require('express')
const router = express.Router()
const api = require("./api")


const baseurl = process.env.BASE_API_URL
router.use(baseurl, api)



module.exports = router