import express from "express";
import {
  getEdit,
  postEdit,
  getChange,
  postChange,
  see,
} from "../controllers/userController";
import { privateMiddleware, uploadAvatar } from "../localMiddleware";

const router = express.Router();

router
  .route("/edit")
  .all(privateMiddleware)
  .get(getEdit)
  .post(uploadAvatar.single("avatar"), postEdit);

router.route("/change").all(privateMiddleware).get(getChange).post(postChange);

router.route("/:id").get(see);

export default router;
