const express = require("express");
const {
  subscriptionPayment,
  getAllUser,
  getSingleUser,
} = require("../../../controllers/payment.controller");
const router = express.Router();

router.route("/").get(getAllUser); //.post(subscriptionPayment);
router.route("/:email").get(getSingleUser);

module.exports = router;
