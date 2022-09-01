//js
const passport = require("passport");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
//For Register Page
const registerView = (req, res) => {
  res.render("register", {});
};
//Post Request for Register

exports.registerUser = (req, res) => {
  console.log(req.body)
  const { email, password, confirm, role } = req.body;
  if (!email || !password || !confirm || !role) {
    console.log("Fill empty fields");
  }
  //Confirm Passwords
  if (password !== confirm) {
    console.log("Password must match");
  } else {
    //Validation
    User.findOne({ email: email }).then((user) => {
      if (user) {
        console.log("email exists");
        return "Email exists"
      } else {
        //Validation
        const newUser = new User({
          
          email,
       
          password,
          role
        });
        //Password Hashing
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then(newUser)
              .catch((err) => console.log(err));
          })
        );
        }
    });
  }
};
// For View
const loginView = (req, res) => {
  res.render("login", {});
};
//Logging in Function
exports.loginUser = (req, res, next) => {
  const { email, password } = req.body;
  //Required
  if (!email || !password) {
    console.log("Please fill in all the fields");
    res.render("login", {
      email,
      password,
    });
  } else {
    passport.authenticate("local", {
      successRedirect: "Success",
      failureRedirect: "/login",
      failureFlash: true,
    })(req, res, next);
  }
};
// module.exports = {
//   registerView,
//   loginView,
//   registerUser,
//   loginUser,
// };