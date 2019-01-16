var express      = require('express');
var app          = express();
var mongoose     = require("mongoose");
mongoose.connect("mongodb://localhost/yelp_camo");
var passport     = require("passport");
var LocalStrategy= require("passport-LOCAL");
var methodOverride = require("method-override");
var path         = require('path');
var Campground   = require("./models/campgrounds");
// var Comment      = require("./models/comment");
var User         = require("./models/user");
var favicon      = require('serve-favicon');
var logger       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var seedDB       = require("./seeds");

// requiring routes so this ish actually does something
var commentRoutes = require("./routes/comments");
var campgroundRoutes = require("./routes/campground");
var indexRoutes = require("./routes/index");

// seeding da database
// seedDB();

// view engine setup
app.set ('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "T H I C C",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    // ok so why da fuck is there req.user auth part 5
    res.locals.currentUser = req.user;
    next();
});

app.use(indexRoutes);
app.use("/campgrounds/:id", commentRoutes);
app.use("/campgrounds", campgroundRoutes);

// index page
app.get("/", function (req, res) {
    res.render("landing");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
