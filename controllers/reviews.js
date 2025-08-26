const ExpressError = require("../utills/ExpressError.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");


module.exports.createReview = async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    if (!listing) {
        throw new ExpressError(404, "Listing not found");
    }
    const newReview = new Review(req.body.review);

    newReview.author = req.user._id;
    // console.log(newReview)

    listing.reviews.push(newReview); // Push new review into the listing's reviews array
    await newReview.save();
    await listing.save();
    req.flash("success", "New review created!")
    res.redirect(`/listings/${listing._id}`);
}


module.exports.destroyReview
 = async (req, res) => {
    const { id, reviewId } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); // Remove review from listing
    await Review.findByIdAndDelete(reviewId); // Delete the review
    req.flash("success","Listings deleted!")
    res.redirect(`/listings/${id}`);
}