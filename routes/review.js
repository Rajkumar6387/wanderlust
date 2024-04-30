const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware");
const reviewController = require("../controllers/reviews.js");

//Reviews
// Post Route
router.post("/",
    validateReview,
    isLoggedIn,
    wrapAsync(reviewController.createreview)
);

// Delete Review Route

router.delete("/:reviewId",
    isLoggedIn,
    isReviewAuthor,
    wrapAsync(reviewController.destroyReview)
);

module.exports = router;