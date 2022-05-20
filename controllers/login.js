// login controller

const login = async (req,res,next) => {

  res.status(200).json({
    knowledge: "Login Page Controller"
  })

};

module.exports = {login};