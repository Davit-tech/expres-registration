import express from 'express';
import homePageController from "../controllers/home-pageController.js"
import userRouter from "./users.js"

const router = express.Router();

router.get("/", homePageController.homePage)

router.use('/user/', userRouter);


export default router;