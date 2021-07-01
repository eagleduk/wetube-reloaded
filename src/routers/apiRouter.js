import express from "express";
import {
  videoViewEnded,
  addVideoComment,
  deleteComment,
} from "../controllers/apiController";

const router = express.Router();

router.get("/video/:id([0-9a-f]{24})", videoViewEnded);
router.post("/video/:id([0-9a-f]{24})/comment", addVideoComment);
router.delete("/comment/:id([0-9a-f]{24})", deleteComment);

export default router;
