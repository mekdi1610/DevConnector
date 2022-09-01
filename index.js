const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const session = require('express-session');
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

app.use("/api", require("./routes/app.routes"));

app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 4112;
app.listen(PORT, console.log("Server started at: http://localhost:"+PORT)) 