const title = "home-page";

export default {
    homePage:(req, res) => {
        res.render("index",{message: null,title});
    }
}