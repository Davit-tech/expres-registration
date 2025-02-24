import express from "express";
import registerController from "../controllers/registerController.js";

const router = express.Router();


router.get("/register", registerController.register);
router.post("/register", registerController.postRegister);

export default router;