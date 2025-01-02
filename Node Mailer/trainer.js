import express from "express";
import { createTrainer, fetchTrainers } from "./controlers.js";

const router = express.Router();

router.post("/trainer", createTrainer);
router.get("/trainer", fetchTrainers);

export default router;