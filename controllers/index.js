

// API for our root route

exports.index_get = (req, res) => {
    // res.send("Welcome to our Blog App");
    res.render("home/index", {welcomeMessage: "Welcome to Wine App"});
}