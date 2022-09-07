const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const auth = require("./middleware/auth")
const session = require('express-session');
const {unless} = require("express-unless");

dotenv.config();
const passport = require("passport");
const { loginCheck } = require("./auth/passport");
loginCheck(passport);

//BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret:'devconnector',
    saveUninitialized: true,
    resave: true
  }));

app.use(express.json());

// Mongo DB conncetion
const database = process.env.MONGO_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('Database connected'))
.catch(err => console.log(err));
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
auth.authenticateToken.unless = unless;
app.use(
  auth.authenticateToken.unless({
    path: [
      { url: "/api/viewUsers", methods: ["GET"] }
    ]
  })
 
);


app.use("/api", require("./routes/app.routes"));

app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 4112;
app.listen(PORT, console.log("Server started at: http://localhost:"+PORT)) 