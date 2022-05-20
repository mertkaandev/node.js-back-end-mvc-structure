// register controller

const User = require("../models/User");

  const register = async (req,res,next) => {

  const {name, email, password} = req.body
  try{
  const user = await User.create({
    name: name,
    email: email,
    password: password,
  });

  res.status(200).json({
      success: true,
      data: user
  })}
  catch(err){
    return next(err);
  };
};

module.exports = {register};