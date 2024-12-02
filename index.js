const express = require('express')
// express mey path es tarha sey import kartey hen 
const path = require('path')
const app = express()
const port = 4000


// >> static files Start 

// testing path 
// console.log(__dirname,"../public")


// get path 
const relative = path.join(__dirname,"./public"); 
app.use(express.static(relative))

// >> static files End 

// hello world Start

app.get('/', (req, res) => {
  res.send('Hello world')
})

// hello world End


// ab agger mujhey about per serif about kei html css js files bhijni hen to mujhey ye karna hey 
app.get('/about',(req,res)=>{
  // jab hamey koi file send karvani ho gi html css js kei to hamey send kei jagah send file likhna pery ga 
  res.sendFile(path.resolve(__dirname+'/public/about.html'))
})







// // Basic routing
// // get post put delete
// app.get('/about',(req,res)=>{
//   res.send("i am muhammad hussain shamim")
// })
// app.post('/user',(  req,res)=>{
//   res.send("user is  post")
// })


// yhan sey ye listning kar rha hey 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})