import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import initializeDatabase from "./src/db/index.js";
import createTrainer from "./controlers.js";
import fetchTrainers from "./controlers.js";

dotenv.config();

const app = express();


app.use(express.json()); 
app.use(cors()); 


app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});


app.use("/api/v1/courses", createTrainer);
app.use("/api/v1/students", fetchTrainers);


initializeDatabase()
  .then(() => {
    const PORT = process.env.PORT || 5000; 
    app.listen(PORT, () => {
      console.log(`🚀 Server is live at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Failed to connect to the database:", error.message);
  });
