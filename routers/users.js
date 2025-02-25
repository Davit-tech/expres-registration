import express from 'express';
import userController from '../controllers/loginController.js';
import registerController from "../controllers/registerController.js";


const router = express.Router();


router.get("/login", userController.login);
router.post("/login", userController.postLogin);


router.get("/register", registerController.register);
router.post("/register", registerController.postRegister);
router.get("/user-page", (req, res) => {
    res.render("user-page", {title: "User Page"});
});


export default router;