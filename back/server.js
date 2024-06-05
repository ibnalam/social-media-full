// express impliment here 
const express = require('express')
const app = express()

// env impliment here 
const dotenv = require('dotenv')
dotenv.config()

// cors impliment here 
const cors = require("cors")
app.use(cors())

// router impliment here 
const router = require("./routes")
app.use(router)


// database impliment here 
const {connect} = require("./database/bdConfig")
connect()











// port set up here 

const port = process.env.PORT || 8000

app.listen(port,()=>{
    console.log('i am backend');
})














//  mongodb+srv://real:idVjIvjmAtvPxchJ@cluster0.ctphhq0.mongodb.net/ecom?retryWrites=true&w=majority