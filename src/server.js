import "./db";
import "./models/Video";

import express from "express";
import session from "express-session";
import morgan from "morgan";
import MongoStore from "connect-mongo";

/* Router */
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import { localMiddelware } from "./localMiddleware";

const logger = morgan("dev");

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(
  // cookie 에 관한 여러가지 옵션을 결정한다.
  session({
    secret: process.env.SECRET_KEY,
    //
    resave: true,
    // site 에 접속시 cookie 생성 여부
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URL,
    }),
  })
);

app.use(localMiddelware);

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

export default app;
