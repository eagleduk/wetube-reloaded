import express from "express";
import { githubAuth, githubCallback } from "../controllers/githubController";
import { publicMiddleware } from "../localMiddleware";

const router = express.Router();

router.get("/", publicMiddleware, githubAuth);
router.get("/callback", publicMiddleware, githubCallback);

export default router;
