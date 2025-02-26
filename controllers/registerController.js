
import User from "../models/users.js";

const title = "Register";
export default {

    register: (req, res) => {
        res.render("register", {message: null, title, page: "register"});
    },
    postRegister: async (req, res) => {
        const {username, email, password} = req.body;
        const userHave = await User.findOne({email});
        if (userHave) {
            return res.status(400).json({
                success: false,
                message: "User with this email already exists. Please try another one",
                messageType: "error"
            });


        }
        const newUser = new User({username, email, password});
        try {
            await newUser.save();
            res.status(200).json({
                success: true,
                message: "Registration successful!",
                messageType: "success",

            });

        } catch (err) {
            console.error("Error registering user:", err);
            res.status(500).json({
                success: false,
                message: "An error occurred during registration",
                messageType: "error"
            });

        }


    }


}