import express from "express";
import {
  getUpload,
  postUpload,
  watch,
  getEdit,
  postEdit,
  remove,
} from "../controllers/videoController";

const router = express.Router();

router.route("/:id([0-9a-f]{24})/remove").get(remove);
router.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
router.route("/:id([0-9a-f]{24})").get(watch);
router.route("/upload").get(getUpload).post(postUpload);

export default router;
