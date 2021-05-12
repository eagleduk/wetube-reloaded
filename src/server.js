import express from "express";

const PORT = 4000;

const app = express();

const handleListening = () =>
  console.log(`✅ Wetube Server <http://localhost:${PORT}> is Listening...`);

app.listen(PORT, handleListening);
