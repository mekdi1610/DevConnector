const loginController = require("../controllers/loginController");
// const paymentComtroller = require("../controllers/payment.controller");

const express = require("express");
const router = express.Router();


// User API helpers

router.post("/registerUser", loginController.registerUser);
router.post("/loginUser", loginController.loginUser);

module.exports = router;
