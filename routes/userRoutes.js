import express from "express"
import * as userController from "../controllers/userController.js"
const router = express.Router();
router.get("/get", userController.getUsers);
router.post("/login", userController.authUser);
router.post("/register", userController.createUser);
export default router