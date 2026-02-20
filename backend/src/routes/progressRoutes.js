
import express from "express";
import { getProgress, markComplete } from "../controllers/progressController.js";
import verifyToken from "../middleware/authMiddleware.js"; // your existing middleware ✅

const router = express.Router();

router.get("/", verifyToken, getProgress);             // GET  /api/progress
router.post("/complete", verifyToken, markComplete);   // POST /api/progress/complete

export default router;