const routes = require("express").Router()

routes.get('/', (req, res) => {
    res.render("index")
})


// users collection
const users = [
    {
        id: 101,
        name: "ali ahmed",
        age: 29,
        Inclass: "16th",
    },
    {
        id: 102,
        name: "Sahbaz Rao",
        age: 12,
        Inclass: "10th",
    },
    {
        id: 103,
        name: "Shukat Imail",
        age: 18,
        Inclass: "12th",
    }
]

// get all users
routes.get("/users", (req, res) => {
    res.status(200).json(users)
})

// get one user
routes.get("/users/:id", (req, res) => {
    console.log(req.params.id)
    const macth = users.find((user)=> user.id === +req.params.id)
    res.status(200).json(macth)
})

// create a user
routes.post("/users", (req, res) => {
    const { id, name, age, Inclass } = req.body;
    if (!id || !name || !age || !Inclass) {
        res.status(400).json({ error: "Please provide all required fields" })
    }
    const newUser = { id, name, age, Inclass }
    const add = users.push(newUser)
    res.status(201).json({
        message: "user is Add"
        , data: newUser
    })
})

// edit users
routes.put("/users/:id", (req, res) => {
    console.log("id",req.params.id)
    console.log("value",req.body)
    const macth = users.find((user)=> user.id === +req.params.id)
    macth.name = req.body.name
    res.status(200).json({
        message: "user is updated",
        data: macth
    })
})

// delete users
routes.delete("/users/:id", (req, res) => {
    console.log("id",req.params.id)
    const macth = users.find((user)=> user.id === +req.params.id)
    users.splice(users.indexOf(macth),1)
    res.status(200).json({
        message: "user is deleted",
        data: users
    })
})

module.exports = routes