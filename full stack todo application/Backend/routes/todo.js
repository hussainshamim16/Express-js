const express = require('express')
const app = express()
const routes = require('express').Router()
const bodyparser = require('body-parser')

app.use(bodyparser)

const AllTodos = [
    {
        id : 1,
        Book: "The Smart Way To Learn JavaScript",
        Price: 21
    },
    {
        id : 2,
        Book: "Python Lerner's",
        Price: 19
    },
    {
        id : 3,
        Book: "Ejs Scripters",
        Price: 10
    }

]


routes.get('/todos', (req, res) => {
    res.json(AllTodos)
})


routes.post('/todos', (req, res) => {
    const responce = req.body
    console.log(responce)
    res.json({ message: "adding todo" })
    // console.log(req.body)
})

module.exports = routes