import express from "express";
import { videoViewEnded } from "../controllers/apiController";

const router = express.Router();

router.get("/video/:id([0-9a-f]{24})", videoViewEnded);

export default router;
