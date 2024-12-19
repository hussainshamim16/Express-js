const express = require('express');
const app = express();
const PORT = 7000;
const path = require('path')
const todoRoutes = require('./routes/todo.js')
// const todoRouter = require()
// console.log(todoRoutes)
app.use(todoRoutes)

app.get('/', (req, res) => {
    res.send("I Am Full Stack todo App")
})


app.listen(PORT, () => {
    console.log(`port is working at ${PORT}`)
})