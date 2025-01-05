const express = require("express");
const app = express();
const dotenv = require('dotenv').config()
const PORT = process.env.PORT;
const routes = require("./routes/crud.js");
const connectDB = require("./config/db.js")

app.use(routes)
app.set("view engine","ejs")
app.use(express.static("public"))




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
    console.log("server is one")
})