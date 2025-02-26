import User from "../models/users.js";

const title = "login"

export default {

    login: (req, res) => {
        res.render("login", {title, page: "login"})
    },
    postLogin: async (req, res) => {
        const {email, password} = req.body;

        try {
            const user = await User.findOne({email, password});
            if (!user) {
                return res.status(400).json({
                    success: false,
                    message: "Wrong email or password",
                    messageType: "error"
                });

            }
            res.json({
                success: true,
                message: "Login successful",
                username: user.username,
                id:user.id
            });

        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
                messageType: "error"
            })
        }

    }


}