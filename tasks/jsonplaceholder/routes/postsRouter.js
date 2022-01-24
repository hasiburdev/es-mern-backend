import express from "express";
import {
  createPost,
  getPost,
  getPosts,
  createPosts,
} from "../controllers/postController.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:postId", getPost);
router.post("/", createPost);
router.post("/many", createPosts);

export default router;
