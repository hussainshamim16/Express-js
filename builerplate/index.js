const express = require("express");
const app = express();
const PORT = process.env.PORT;
const dotenv = require('dotenv').config()
const routes = require("./routes/crud.js");
const connectDB = require("./config/db.js")

app.use(CrudRoutes)
app.use(express.static("public"))
app.set("view engine","ejs")

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log("MONGO DB connection failed !!! ", err);
//   });


// app.get("/", (req, res) => {
//     res.render("index")

// })

app.listen(PORT, () => {
    console.log(`server is running at ${process.env.PORT}`)
})