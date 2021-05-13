import express from "express";
import { home } from "../controllers/userController";

const router = express.Router();

router.get("/", (req, res) => home);

export default router;
