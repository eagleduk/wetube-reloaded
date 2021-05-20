import express from "express";
import { home, search } from "../controllers/videoController";

const router = express.Router();

router.get("/", home);
router.get("/search", search);

export default router;
