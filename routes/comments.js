var express = require("express");
var router = express.Router({mergeParams: true});
var Comment      = require("../models/comment");
var Campground = require("../models/campgrounds");

// ===============
// COMMENTS ROUTES
// ===============

// comments new
router.get("/comments/new", isLoggedIn, function (req, res) {
    // find camp by id
    Campground.findById(req.params.id, function (err, campground) {
        if(err){
            console.log("rhubarb" + err);
        } else {
            res.render("comments/new", {campground: campground});
        }
    });
});

// comments create
router.post("/", isLoggedIn, function (req, res) {
    // find camp with id
    Campground.findById(req.params.id, function (err, campground) {
        if (err) {
            console.log(err);
            res.redirect("/campgrounds");
        } else {
            Comment.create(req.body.comment, function (err, comment) {
                if(err){
                    console.log(err);
                } else {
                    console.log(req.user.username);
                    comment.author.id = req.user._id;
                    comment.author.username = req.user.username;
                    comment.save();
                    campground.comments.push(comment);
                    console.log(campground.comments, comment);
                    campground.save();
                    res.redirect("/campgrounds/" + campground._id);
                }
            });
        }
    });
    // create comment
    // comment to campground
    // redirect to show
});

//middleware
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

module.exports = router;