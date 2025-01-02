const express = require('express');
const app = express();
const PORT = 7000;
const path = require('path')
const todoRoutes = require('./routes/todo.js')


// import ejs
app.set('view engine', 'ejs')
// app.set("views", path.join(__dirname , "views"))
// all rotes here
app.use(todoRoutes)
app.use(express.static("public"))



app.listen(PORT, () => {
    console.log(`port is working at ${PORT}`)
})