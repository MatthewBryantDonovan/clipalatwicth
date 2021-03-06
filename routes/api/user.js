/////////////////  Dependencies /////////////////
const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("passport");

// Matches with "/api/users/create"
router.route("/create")
.post(usersController.create);

// Matches with "/api/users/login"
router.route("/login")
.post(passport.authenticate('local', 
{
  successRedirect: "/",
  failureRedirect: "/login"
}
));

// Matches with "/api/users/logout"
router.route("/logout")
.delete(usersController.logout)
.get(usersController.logout);

// Matches with "/api/users/updateimage"
router.route("/updateimage")
.put(usersController.updateImage);

// Exporting router
module.exports = router;