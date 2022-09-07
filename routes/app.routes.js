const loginController = require("../controllers/loginController");
const userController = require("../controllers//userController");
// const paymentComtroller = require("../controllers/payment.controller");

const express = require("express");
const router = express.Router();


// User API helpers
//login
router.post("/registerUser", loginController.registerUser);
router.post("/loginUser", loginController.loginUser);

//user
router.get("/viewUser", userController.findAll)

module.exports = router;
