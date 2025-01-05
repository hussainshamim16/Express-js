const routes = require("express").Router()


routes.get('/crud', (req, res) => {
    res.send("Iam fom routes")
})
// console.log(route)

module.exports = routes