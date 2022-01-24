import express from "express";
import {
  createTodo,
  createTodos,
  getTodo,
  getTodos,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodos);
router.get("/:todoId", getTodo);
router.post("/", createTodo);
router.post("/many", createTodos);

export default router;
