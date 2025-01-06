const routes = require("express").Router()

routes.get('/', (req, res) => {
    res.render("index")
})


// student collection
const student = [
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

// get all student
routes.get("/student", (req, res) => {
    res.status(200).json(student)
})

// get one user
routes.get("/student/:id", (req, res) => {
    console.log(req.params.id)
    const macth = student.find((user)=> user.id === +req.params.id)
    res.status(200).json(macth)
})

// create a user
routes.post("/student", (req, res) => {
    const { id, name, age, Inclass } = req.body;
    if (!id || !name || !age || !Inclass) {
        res.status(400).json({ error: "Please provide all required fields" })
    }
    const newUser = { id, name, age, Inclass }
    const add = student.push(newUser)
    res.status(201).json({
        message: "user is Add"
        , data: newUser
    })
})

// edit student
routes.put("/student/:id", (req, res) => {
    console.log("id",req.params.id)
    console.log("value",req.body)
    const macth = student.find((user)=> user.id === +req.params.id)
    macth.name = req.body.name
    res.status(200).json({
        message: "user is updated",
        data: macth
    })
})

// delete student
routes.delete("/student/:id", (req, res) => {
    console.log("id",req.params.id)
    const macth = student.find((user)=> user.id === +req.params.id)
    student.splice(student.indexOf(macth),1)
    res.status(200).json({
        message: "user is deleted",
        data: student
    })
})

module.exports = routes