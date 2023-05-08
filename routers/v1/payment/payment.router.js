const express = require("express");
const {
  subscriptionPayment,
} = require("../../../controllers/payment.controller");
const router = express.Router();

router.route("/").post(subscriptionPayment);

module.exports = router;
