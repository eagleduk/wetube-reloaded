import express from "express";
import { getEdit, postEdit } from "../controllers/userController";
import { privateMiddleware, uploadAvatar } from "../localMiddleware";

const router = express.Router();

router
  .route("/edit")
  .all(privateMiddleware)
  .get(getEdit)
  .post(uploadAvatar.single("avatar"), postEdit);

export default router;
