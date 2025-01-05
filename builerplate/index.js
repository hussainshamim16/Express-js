const express = require("express");
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT;
const routes = require("./routes/crud.js")

app.use(routes)
app.set("view engine","ejs")

app.get("/", (req, res) => {
    res.render("Iam Home Page")

})

app.listen(PORT, () => {
    console.log("server is one")
})