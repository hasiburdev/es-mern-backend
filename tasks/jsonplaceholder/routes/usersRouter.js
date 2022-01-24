import express from "express";
import {
  createUser,
  getUser,
  getUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:userId", getUser);

export default router;
