// import fs from "fs/promises";
import User from "../models/users.js";


export default {

    login: (req, res) => {
        res.render("login", {message: null})
    },
    postLogin: async (req, res) => {
        const {email, password} = req.body;


        const user = await User.findOne({email, password});
        if (!user) {
            return res.render("login", {message: "Wrong email or password", messageType: "error"});

        }
        res.render("user-page", {username: user.username})
        // } postLogin: async (req, res) => {
        //     const {email, password} = req.body;
        //     let users =[]
        //     try {
        //         const data = await fs.readFile("./userinfo.json", "utf-8");
        //         users= JSON.parse(data);
        //     } catch (err) {
        //         console.log('No existing users file.');
        //     }
        //     const user = users.find(user => user.email === email && user.password === password);
        //     if (!user) {
        //         return res.render("login", {
        //             message: "Wrong email or password"
        //         })
        //     }
        //     res.render("user-page",{ username: user.username })
    }


}