const express = require('express')
// express mey path es tarha sey import kartey hen 
const path = require('path')
const app = express()
const port = 4000

// view engin 
app.set("view engine", "ejs")
console.log(app.get('view engine'))

// >> static files Start 

// es ko karney key do tareekey hen sab sey pehly to dekho bhai jo neechey kaam  kia hey vesy bhi ho sakta hey varna ye vala
// ye Vala Static File start
// app.use(express.static("public"))
// ye kia os key badd jha dena hey odher serif ka name de do chal jay ga shi sey
// ye Vala Static File end

// ye dekhney key liye key jes file ka app path dey rhey  hey ho vo path target ho rha hey ya nehi
// console.log(__dirname,"../public")


// get path 
const relative = path.join(__dirname, "./public");
app.use(express.static(relative))

// >> static files End 

// hello world Start

// app.get('/', (req, res) => {
//   res.send('Hello world')
// })

// hello world End


// ab agger mujhey about per serif about kei html css js kei static files bhijni hen to mujhey ye karna hey 
app.get('/about', (req, res) => {
  // jab hamey koi file send karvani ho gi html css js kei to hamey send kei jagah send file likhna pery ga 
  // res.sendFile(path.resolve(__dirname+'/public/about.html'))
  res.render('about')
})


// dowload Functionality start
app.get('/download', (req, res) => {
  // jab hamey koi file download karvani hogi to ham res.download likhen gey or file ka path dey dey gey 
  res.download(path.resolve(__dirname + '/public/image.png'))
})
// dowload Functionality end


// Template Engine start
// agger hamey page mey dinamic ka karvana hey mattlab key user ka name or age render karvani hey screen per 
// to ham kese simple html file key bajjay ejs use karen gey ye khood hei hamaarei screen per data add kar dey 
// ga jo data routes mey ayy ga embed kar dey ga 

// pehly instaal karen ejs ko npm i ejs oskey baad aike midle weare laget ga app.set() ka jes mey ham "view engine", "ejs"  likhen gey
// takey hamari express js ko pata chal jay gey ham ejs use kar rhey hen 
// ager hamey test karna hey to ham likhey gey console.log(app.get("view engin"))

app.get('/', (req, res) => {
  // res.render ye server side rendering key liye use hota hey kesi spacific tempelate jesey ejs,jpg,png ko screen per render karvaney key liye
  // ab hamey yhan aike object den hey key or value 
  // jo key ham den gey osey ham apney ejs kei file mey kesei bhi tag key ander <%= key%> es formate mey dey den gey 
  res.render('index', {
    // (spacific id 1) ab agger hamey component vala kaam karna hey jesa key aike code agger bar bar repeat ho rha hey to ham os ka aike suprte ejs kei file bana len gey or osey
    // yhan call kerva len gey ham ab index.ejs mey ja ker ye kaam dekhen gey 
    // yhan app aike OBJECT key bana len or value khd ba khod print ho jay gei 
    heading: 'This File is Updated',




  })

})

// blogTitle 
// blogContent
// blogAuthor
// blogFile

app.get('/submit', (req, res) => {
res.render('index')
})

// Template Engine End

// express roter start  
// ap sab se pehly route key liye alag folder banay gey or os key ander indexedDB.js kei file den  gey 
// ab ham os file mey ja ker route ko initializ e karen gey 
// const roter = require('express').Router();
// os key baad ham router ko export aren gey 
// module.exports = router
// bilkol ham jesy app per use kartey hen http methods jesy app.get vesey hei ham router.get karen gey simple baaqi sara vesy hei ho ga 


// express roter end




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
