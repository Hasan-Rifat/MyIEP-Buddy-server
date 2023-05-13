const express = require("express");
const {
  generateText,
  crateGoal,
  getGoalData,
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
  getUserByEmail,
  deleteUserDataById,
} = require("../../../controllers/userData/userData.controller");

const router = express.Router();

// goal
router.route("/goal-generate-text").post(generateText);
router.route("/goal-create").post(crateGoal);
router.route("/goal/:id").get(getGoalData);

// present
router.route("/present-generate-text").post(presentGenerateText);
router.route("/present-create").post(cratePresent);

// accommodations
router.route("/accommodations-generate-text").post(accommodationsGenerateText);
router.route("/accommodations-create").post(crateAccommodations);

router.route("/:email").get(getUserByEmail).post(createUserData);
router.route("/:email/:id").get(getUserData).delete(deleteUserDataById);

module.exports = router;
