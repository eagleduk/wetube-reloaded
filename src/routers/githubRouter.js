import express from "express";
import { githubAuth, githubCallback } from "../controllers/githubController";

const router = express.Router();

router.get("/", githubAuth);
router.get("/callback", githubCallback);

export default router;
