import "regenerator-runtime";
import "dotenv/config";
import app from "./server";

const PORT = process.env.PORT || 4000;
const handleListening = () =>
  console.log(`✅ Wetube Server <http://localhost:${PORT}> is Listening...`);

app.listen(PORT, handleListening);
