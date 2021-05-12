import express from "express";
import morgan from "morgan";

const PORT = 4000;
const logger = morgan("dev");

const app = express();

app.use(logger);

const handleListening = () =>
  console.log(`✅ Wetube Server <http://localhost:${PORT}> is Listening...`);

app.listen(PORT, handleListening);
