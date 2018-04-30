var express = require("express");
var router = express.Router();
var Campground = require("../models/campgrounds");

// ===========
// CAMPGROUNDS
// ===========

// show all campgrounds
router.get("/", function (req, res) {
    //Get ALL campgrounds
    Campground.find({}, function(err, Allcampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/index", { campgrounds: Allcampgrounds})
        }
    });
});


// post a new campground
router.post("/", isLoggedIn, function (req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    if (!name || !desc || !image) {
        res.redirect("/campgrounds/new");
    } else {
        Campground.create({
                name: name,
                image: image,
                description: desc,
                author: author
            },
            function (err, campground) {
                if (err) {
                    console.log(err);
                } else {
                    //redirect to the OTHER campgrounds
                    console.log(campground);
                    res.redirect("/campgrounds");
                }
            }
        );
    }
});

// this has to be before :id
router.get("/new", isLoggedIn, function (req, res) {
    res.render("campgrounds/new");
});

// shows more info 'bout camps
router.get("/:id", function (req, res) {
    Campground.findById(req.params.id, function (err, foundCampground) {
        if(err){
            console.log(err);
        } else {
            foundCampground.comments.forEach((element => {
                console.log(element);
            }));
            res.render("campgrounds/show", {campground: foundCampground});
        }
    });
});

// EDIT CAMPGROUND
router.get("/:id/edit", function (req, res) {
    Campground.findById(req.params.id, function (err, foundCampground) {
        if(err){
            console.log(err);
        } else {
            res.render("campgrounds/edit", {campground: foundCampground});
        }
    });
});
//UPDATE IT
router.put("/:id", function (req, res) {
   //find
    Campground.findByIdAndUpdate(req.params.id, req.body.campground, function (err, updatedCampground) {
        if(err){
            console.log("Ya gotta read that book pls");
        } else {
            res.redirect("/campgrounds/"+ req.params.id);
        }
    })
   //redirect
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
};
module.exports = router;