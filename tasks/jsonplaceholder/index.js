import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";

import albumsRouter from "./routes/albumsRouter.js";
import commentsRouter from "./routes/commentsRouter.js";
import photosRouter from "./routes/photosRouter.js";
import postsRouter from "./routes/postsRouter.js";
import todosRouter from "./routes/todosRouter.js";
import usersRouter from "./routes/usersRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use(`/albums`, albumsRouter);
app.use(`/comments`, commentsRouter);
app.use(`/photos`, photosRouter);
app.use(`/posts`, postsRouter);
app.use(`/todos`, todosRouter);
app.use(`/users`, usersRouter);

app.listen(process.env.PORT, async () => {
  console.log(`listening on port: ${process.env.PORT}`);
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Database connected!`);
  } catch (error) {
    console.log(error);
  }
});
