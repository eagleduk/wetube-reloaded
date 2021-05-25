import express from "express";
import {
  getJoin,
  postJoin,
  getLogin,
  postLogin,
  logout,
} from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const router = express.Router();

router.get("/", home);
router.get("/search", search);
router.route("/join").get(getJoin).post(postJoin);
router.route("/login").get(getLogin).post(postLogin);
router.get("/logout", logout);

export default router;
