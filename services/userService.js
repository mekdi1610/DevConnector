
const { User } = require("../models/User");
const { response } = require("express");




async function getUsers(params, callback) {
    const userName = params.username;
    console.log(userName)
    var condition = userName
      ? {
          userName: { $regex: new RegExp(userName), $option: "i" },
        }
      : {};
      console.log(condition)
  
    User
      .find({})
      .then((response) => {
        return callback(null, response);
      })
      .catch((error) => {
        return callback(error);
      });
  }

  module.exports = {
    getUsers
  };
  