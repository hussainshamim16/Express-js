const express = require("express");
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT;
const routes = require("./routes/crud.js");
const userRoutes = require("./routes/users.routes.js");
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connectDB = require("./config/db.js")




app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// crud routes
app.use(routes)
// user Routes
app.use(userRoutes)

app.set("view engine", "ejs")


connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MONGO DB connection failed !!! ", err);
    });

// app.listen(PORT, () => {
//     console.log("server is one")
// })