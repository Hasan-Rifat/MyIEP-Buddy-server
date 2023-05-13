const express = require("express");
const {
  generateText,
  crateGoal,
} = require("../../../controllers/userData/goal.controller");
const {
  accommodationsGenerateText,
  crateAccommodations,
} = require("../../../controllers/userData/accommodations.controller");
const {
  presentGenerateText,
  cratePresent,
} = require("../../../controllers/userData/present.controller");
const {
  getUserData,
  createUserData,
} = require("../../../controllers/userData/userData.controller");

const router = express.Router();

router.route("/:email").post(createUserData);
router.route("/:email/:id").get(getUserData);

// goal
router.route("/goal-generate-text").post(generateText);
router.route("/goal-create").post(crateGoal);

// present
router.route("/present-generate-text").post(presentGenerateText);
router.route("/present-create").post(cratePresent);

// accommodations
router.route("/accommodations-generate-text").post(accommodationsGenerateText);
router.route("/accommodations-create").post(crateAccommodations);

module.exports = router;
