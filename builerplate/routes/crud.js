const CrudRoutes = require("express").Router()


CrudRoutes.get('/crud', (req, res) => {
    res.send("Iam fom CrudRoutes")
})
CrudRoutes.get('/', (req, res) => {
    res.render("index")
})
// console.log(route)

module.exports = CrudRoutes