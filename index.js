// Making server

require('dotenv').config()
const express = require('express')
const app = express()

//const port = 4000  beacuse it is used in .env file


// by default open
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//  about open when hit on api
app.get('/about',(req,res)=>{
    res.send('hey i am faiz from bihar bgs doing betch in final year now i able do work in front end and back end')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})