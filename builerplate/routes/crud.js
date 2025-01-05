const routes = require("express").Router()

routes.get('/', (req, res) => {
    res.render("index")
})



routes.get("/users", (req, res) => {
    const users = [
        {
            id: 101,
            name: "ali ahmed",
            age: 29,
            class: "16th",
        },
        {
            id: 102,
            name: "Sahbaz Rao",
            age: 12,
            class: "10th",
        },
        {
            id: 103,
            name: "Shukat Imail",
            age: 18,
            class: "12th",
        }
    ]
    res.status(200).json(users)
})

module.exports = routes