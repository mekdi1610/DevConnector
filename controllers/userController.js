
const { response } = require("express");
const req = require("express/lib/request");
const userService = require("../services/userService");


exports.findAll = (req, res, next) => {
  //var role =req.jwt.devconnector["x-user-id"]
  if(req.jwt.devconnector["x-role"]=="Admin"){
    var model = {
      email: req.body.email,
    };
    userService.getUsers(model, (error, results) => {
      if (error) {
        return next(error);
      } else {
        return res.status(200).send({
          message: "Sucess",
          data: results,
        });
      }
    });
  }
  else{
    return res.status(401).send({
      message: "Unauthorized",
      
    });
  }
  };
  exports.findOne = (req, res, next) => {
    console.log(req.body)
   // hashPassword(req.body.password)
    var model = {
      email: req.body.email
    };
    userService.getOne(model, (error, results) => {
      if (error) {
        return next(error);
      } else {
        console.log("login",results);
  
        return res.status(200).send(results
          )
      }
    });
  };
  
