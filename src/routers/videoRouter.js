import express from "express";
import { home } from "../controllers/videoController";

const router = express.Router();

router.get("/", home);

export default router;
