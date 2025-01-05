const express = require("express");
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT;
const routes = require("./routes/crud.js");
const mongoose = require('mongoose');
// const MONGO_URI = "mongodb+srv://hussainshamim:xrIb4c6M30V5qP3K@firstdatabase.ba0zu.mongodb.net/?retryWrites=true&w=majority&appName=FirstDatabase";

mongoose.connect(
    'mongodb+srv://hussainshamim:xrIb4c6M30V5qP3K@cluster0.mongodb.net/FirstDatabase?retryWrites=true&w=majority'
)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(routes)
app.set("view engine","ejs")

app.get("/", (req, res) => {
    res.render("Iam Home Page")

})

app.listen(PORT, () => {
    console.log("server is one")
})