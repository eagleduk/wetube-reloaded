import express from "express";
import {
  getUpload,
  postUpload,
  watch,
  getEdit,
  postEdit,
  remove,
} from "../controllers/videoController";
import { uploadVideo } from "../localMiddleware";

const router = express.Router();

router.route("/:id([0-9a-f]{24})/remove").all(privateMiddleware).get(remove);
router
  .route("/:id([0-9a-f]{24})/edit")
  .all(privateMiddleware)
  .get(getEdit)
  .post(postEdit);
router.route("/:id([0-9a-f]{24})").get(watch);
router
  .route("/upload")
  .all(privateMiddleware)
  .get(getUpload)
  .post(uploadVideo.single("video"), postUpload);

export default router;
