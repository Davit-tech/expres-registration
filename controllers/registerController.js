// import fs from "fs/promises";
import User from "../models/users.js";


export default {
    register: (req, res) => {
        res.render("register", {message: null});
    },
    postRegister: async (req, res) => {
        const {username, email, password} = req.body;
        const userHave = await User.findOne({ email });
        if (userHave) {
            return res.render("register", {
                message: "User with this email already exists. Please try another one",
                messageType: "error"
            });


        }
        const newUser = new User({username, email, password});
        try {
            await newUser.save();
            res.render("login", {message: "Registration successful!", messageType: "success"});

        } catch (err) {
            console.error("Error registering user:", err);
            res.render("register", {message: "An error occurred during registration", messageType: "error"});

        }


        // }, postRegister: async (req, res) => {
        //     const {username, email, password} = req.body;
        //
        //     let users = [];
        //
        //     try {
        //         const data = await fs.readFile("./userinfo.json", "utf8");
        //         users = JSON.parse(data);
        //     } catch (error) {
        //         console.log('No existing users file, starting fresh.');
        //     }
        //     const userHave = users.find(user => user.email === email);
        //     if (userHave) {
        //         return res.render("register", {
        //             message: " A user with this email already exists. Please try another email."
        //         });
        //
        //     }
        //     users.push({username, email, password});
        //     await fs.writeFile("./userinfo.json", JSON.stringify(users, null, 2));
        //     res.render("login", {
        //         message: "Registration was successful. Please log in to your account."
        //     },);
        //
    }


}