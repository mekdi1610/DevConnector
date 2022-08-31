const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const passport = require("passport");
const { loginCheck } = require("./auth/passport")
loginCheck(passport);
const app = express();

dotenv.config();
// Mongo DB conncetion
const database = process.env.MONGO_URI;
mongoose.connect(database, {useUnifiedTopology: true, useNewUrlParser: true })
.then(() => console.log('Database connected'))
.catch(err => console.log(err));

app.use(express.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 4112;
app.listen(PORT, console.log("Server started at: " + PORT)) 