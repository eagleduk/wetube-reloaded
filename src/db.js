import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube_2021", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handlerErrorConnection = (error) =>
  console.log(`❌ Database Connection failed`);

db.on("error", handlerErrorConnection);

const handlerSuccessConnection = () =>
  console.log(`✅ Database Connection Success`);

db.once("open", handlerSuccessConnection);
