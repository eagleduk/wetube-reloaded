import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";
import { privateMiddleware, publicMiddleware } from "../localMiddleware";

const router = express.Router();

router.get("/", home);
router.get("/search", search);
router.route("/join").all(publicMiddleware).get(getJoin).post(postJoin);
router.route("/login").all(publicMiddleware).get(getLogin).post(postLogin);
router.get("/logout", privateMiddleware, logout);

export default router;
