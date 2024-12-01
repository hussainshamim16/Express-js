const express = require('express')
const path = require('path')
const app = express()
const port = 4000


// static files

// test path 
// console.log(__dirname,"../public")


const relative = path.join(__dirname,"./public"); 
app.use(express.static(relative))
// get path 

// hello world

app.get('/', (req, res) => {
  res.send(`red`)
})

// Basic routing
// get post put delete
app.get('/about',(req,res)=>{
  res.send("i am muhammad hussain shamim")
})
app.post('/user',(  req,res)=>{
  res.send("user is  post")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})