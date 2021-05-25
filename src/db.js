import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

const handlerErrorConnection = (error) =>
  console.log(`❌ Database Connection failed`);

db.on("error", handlerErrorConnection);

const handlerSuccessConnection = () =>
  console.log(`✅ Database Connection Success`);

db.once("open", handlerSuccessConnection);
