const express = require('express')
const app = express()

//Alternative
// const app = require('express')()



app.get("/",(req,res)=>{
    res.send("Hello World!!")
})





















app.listen(3000,()=>{
    console.log("NodeJS server has started at port 3000")
})

