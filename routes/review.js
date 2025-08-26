const express = require("express");
const router = express.Router({ mergeParams: true }); // Merge params to access ":id"
const wrapAsync = require("../utills/wrapAsync.js");
const {validateReview,isLoggedIn,isReviewAuthor} = require("../middleware.js")
const reviewController = require("../controllers/reviews.js");


// Create Review Route
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

// Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;



module.exports=router;







//Anupam Bhaiya
// const express = require("express");
// const router = express.Router();
// const wrapAsync = require("../utills/wrapAsync.js");
// const ExpressError = require("../utills/ExpressError.js");
// const { listingSchema, reviewSchema } = require("../schema.js");
// const Review = require("../models/review.js")
// const Listing = require("../models/listing.js");


// const validateReview = (req, res, next) => {
//     let { error } = reviewSchema.validate(req.body);
//     if (error) {
//         let errMsg = error.details.map((el) => el.message).join(",");
//         throw new ExpressError(400, errMsg);
//     } else {
//         next();
//     }
// };

// //Reviews
// //Post routes
// router.post("/:id", (async (req, res) => {
//     let listing = await Listing.findById(req.params.id);
//     const newReviews = new Review(req.body);
//     const reviewnNew = await newReviews.save();
//     if (listing) {
//         const existingReviews = listing.reviews;
//         existingReviews.push(reviewnNew.id)
//         await listing.save();
//     }
//     res.redirect(`/listings/${listing._id}`);
// }))


// //delete review
// router.delete("/:reviewId", wrapAsync(async (req, res) => {
//     let { id, reviewId } = req.params;
//     await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
//     await Review.findByIdAndDelete(reviewId);

//     res.redirect(`/listings/${id}`);
// }));


// module.exports = router;