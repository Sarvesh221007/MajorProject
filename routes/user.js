const express = require("express");
const router = express.Router({ mergeParams: true });
// const ExpressError = require("../utills/ExpressError.js");
const wrapAsync = require("../utills/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");

// const validateListing = (req, res, next) => {
//     let { error } = listingSchema.validate(req.body);
//     if (error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         console.log(errMsg);
//         throw new ExpressError(400, errMsg);
//     } else {
//         next();
//     }
// };


router
    .route("/signup")
    .get(userController.renderSignupForm)
    .post(wrapAsync(userController.signup))


router
    .route("/login")
    .get(userController.loginForm)
    .post(
        saveRedirectUrl,
        passport.authenticate("local", {
            failureRedirect: "/login",
            failureFlash: true,
        }),
        userController.login
    )


router.get("/logout", userController.logout)

module.exports = router;