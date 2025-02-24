import express from 'express';
import homePageController from "../controllers/home-pageController.js"
import login from './login.js';
import register from './register.js';

const router = express.Router();

router.get("/", homePageController.homePage)


router.use(login);
router.use(register);

export default router;