const express = require("express");
const router = express.Router();
const wrapAsync = require("../utills/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
// const { index,create } = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js")

const upload = multer({ storage })

const listingController = require("../controllers/listings.js");

router
    .route("/")
    .get(wrapAsync(listingController.index))//index routes
    .post(isLoggedIn, upload.single('listing[image]'),validateListing, wrapAsync(listingController.createListing))//create routes

    
//Create new listing
router.get("/new", isLoggedIn, listingController.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))//show routes
    .patch(isLoggedIn, isOwner,upload.single('listing[image]'), validateListing, wrapAsync(listingController.updateListing))//Update routes
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing))//delete routes


//Edit Routes
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));


module.exports = router;