import express from 'express';
import userController from '../controllers/loginController.js';

const router = express.Router();


router.get("/login", userController.login);
router.post("/login", userController.postLogin);

export default router;