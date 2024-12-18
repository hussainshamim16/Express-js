const express = require('express')
// express mey path es tarha sey import kartey hen 
const path = require('path')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
// uuid matlab key hamarey todo ko aike alag sey aike id milley gei 
// const uid = require("uuid")

// view engin 
app.set("view engine", "ejs")
console.log(app.get('view engine'))

// todo adding middle weare
// function Custom_Middlewear(req,res,next){
// console.log("running Middleweare")
// next()
// }


// perams ko ko ham json mey use karney key liye ye code likhen  gey 
app.use(bodyParser.json());

// todo adding middle weare end

// >> static files Start 

// es ko karney key do tareekey hen sab sey pehly to dekho bhai jo neechey kaam  kia hey vesy bhi ho sakta hey varna ye vala
// ye Vala Static File start
// app.use(express.static("public"))
// ye kia os key badd jha dena hey odher serif ka name de do chal jay ga shi sey
// ye Vala Static File end

// ye dekhney key liye key jes file ka app path dey rhey  hey ho vo path target ho rha hey ya nehi
// console.log(__dirname,"../public")


// get path 
// const relative = path.join(__dirname, "./public");
// app.use(express.static(relative))

// >> static files End 

// hello world Start

// app.get('/', (req, res) => {
//   res.send('Hello world')
// })

// hello world End


// ab agger mujhey about per serif about kei html css js kei static files bhijni hen to mujhey ye karna hey 
// app.get('/about', (req, res) => {
//   // jab hamey koi file send karvani ho gi html css js kei to hamey send kei jagah send file likhna pery ga 
//   // res.sendFile(path.resolve(__dirname+'/public/about.html'))
//   res.render('about')
// })


// dowload Functionality start
// app.get('/download', (req, res) => {
//   // jab hamey koi file download karvani hogi to ham res.download likhen gey or file ka path dey dey gey 
//   res.download(path.resolve(__dirname + '/public/image.png'))
// })
// dowload Functionality end


// Template Engine start
// agger hamey page mey dinamic ka karvana hey mattlab key user ka name or age render karvani hey screen per 
// to ham kese simple html file key bajjay ejs use karen gey ye khood hei hamaarei screen per data add kar dey 
// ga jo data routes mey ayy ga embed kar dey ga 

// pehly instaal karen ejs ko npm i ejs oskey baad aike midle weare laget ga app.set() ka jes mey ham "view engine", "ejs"  likhen gey
// takey hamari express js ko pata chal jay gey ham ejs use kar rhey hen 
// ager hamey test karna hey to ham likhey gey console.log(app.get("view engin"))

// app.get('/', (req, res) => {
//   // res.render ye server side rendering key liye use hota hey kesi spacific tempelate jesey ejs,jpg,png ko screen per render karvaney key liye
//   // ab hamey yhan aike object den hey key or value 
//   // jo key ham den gey osey ham apney ejs kei file mey kesei bhi tag key ander <%= key%> es formate mey dey den gey 
//   res.render('index', {
//     // (spacific id 1) ab agger hamey component vala kaam karna hey jesa key aike code agger bar bar repeat ho rha hey to ham os ka aike suprte ejs kei file bana len gey or osey
//     // yhan call kerva len gey ham ab index.ejs mey ja ker ye kaam dekhen gey 
//     // yhan app aike OBJECT key bana len or value khd ba khod print ho jay gei 
//     heading: 'This File is Updated',




//   })

// })

// blogTitle 
// blogContent
// blogAuthor
// blogFile

// app.get('/submit', (req, res) => {
// res.send('rehmat')
// })

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

// ham abhi aike todo app bana rhey hen 
let todos = [
  {
    id: 1,
    Title: 'python',
    inUsing: false,
  },
  {
    id: 2,
    Title: 'javascript',
    inUsing: true,
  },
  {
    id: 3,
    Title: 'c#',
    inUsing: false,
  }
]
app.get('/', (req, res) => {
  res.send("hello")
})
// console.log(todos[1].id)

// get all todos
app.get('/todos', (req, res) => {
  res.json(todos)
})

// get single todo 
app.get('/todos/:id', (req, res) => {
  // (req) ka matlab jo request aai hey or perams ye dekhney key liye hey key kia request kei gai hey or id object sey nikaalney key liye 
  // console.log(req.params.id)
  // apney todo ko check karney key liye ham ye condision lagay gey 
  const todoCheck = todos.filter((todo) => todo.id == req.params.id);
  // console.log(todoCheck)
  res.json(todoCheck)
})
console.log(new Date())

// add todo
app.post('/todos', (req, res) => {
  // todo add karney sey pehly meny aike middle wear fnc banaya hey jo post karney mey maddad dekha hey 
  // line number 
  // default mey ham json empty rakhen gey 
  // abhi hamey aike pekage install karna hey body parser
  // ab ham bodyparser use karne gey 
  let body = req.body
  console.log("check body pareser get body of todo", body)
  todos.push({ id: new Date(), ...body })
  res.json(todos)
})
// put ka matlab edit 
app.put('/todos/:id', (req, res) => {
  let finder = todos.find((todo) => todo.id == req.params.id);
  if (finder) {
    finder.Title = req.body.Title
    finder.inUsing = req.body.inUsing
    res.json(todos)
  } else {
    res.send("no todos found")
  }
})

// delete
app.delete('/todos/:id', (req, res) => {
 let findinger = todos.findIndex(todo => todo.id == req.params.id)
 todos.splice(findinger,1)
  res.json(todos)
})


app.get('/tod', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/all aplication/todo.js'))
})


// yhan sey ye listning kar rha hey 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
