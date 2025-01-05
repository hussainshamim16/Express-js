const routes = require("express").Router()


routes.get('/crud', (req, res) => {
    res.send("Iam fom routes")
})
routes.get('/', (req, res) => {
    res.render("index")
})
// console.log(route)

module.exports = routes