import express from "express";
import morgan from "morgan";

/* Router */
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4000;
const logger = morgan("dev");

const app = express();

app.use(logger);

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);

const handleListening = () =>
  console.log(`✅ Wetube Server <http://localhost:${PORT}> is Listening...`);

app.listen(PORT, handleListening);
