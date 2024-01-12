// db connection
// let express = require("express");
let dbConnection = require("../db/dbconfig");
let bcrypt = require("bcrypt");
let { StatusCodes } = require("http-status-codes");
let jwt = require("jsonwebtoken")
// const statusCodes = require("status-codes");

async function register(req, res) {
  let { username, firstname, lastname, email, password } = req.body;

  if (!email || !password || !firstname || !lastname || !username) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please provide all required fields" });
  }
  try {
    let [user] = await dbConnection.query(
      "select username,userid from users where username = ? or email =? ",
      [username, email]
    );
    if (user.length > 0) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "user already existed" });
    }
    if (password.length <= 8) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "password must be at least 8 characters" });
    }
    // encrypt the password
    let salt = await bcrypt.genSalt(10);
    let hashedpassword = await bcrypt.hash(password, salt);
    await dbConnection.query(
      "INSERT INTO users (username, firstname, lastname, email, password) VALUES (?,?,?,?,?)",
      [username, firstname, lastname, email, hashedpassword]
    );
    return res.status(StatusCodes.CREATED).json({ msg: "user register" });
  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "someting went wrong,try again later!" });
  }
}
async function login(req, res) {
  let { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: "please enter all required fields" });
  }
  // 
  try {
    let [user] = await dbConnection.query(
      "select username,userid,password from  users where email =?",
      [email]
    );
    if(user.length==0){
return res.status(StatusCodes.BAD_REQUEST).json({msg:"invalid creadntial"})
}
// compair password
 let isMatch = await bcrypt.compare(password,user[0].password);
if(!isMatch){
return res.status(StatusCodes.BAD_REQUEST).json({msg:"invalid creadntial"});
}
let username = user[0].username
let userid = user[0].userid;
let token = jwt.sign({username, userid}, process.env.JWT_SECRET, {expiresIn:"1d"})
return res.status(StatusCodes.OK).json({msg:"user login successful", token,username})
// return res.json({user:user[0].password})


  } catch (error) {
    console.log(error.message);
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ msg: "something went to wrong, try again later!" });
  }
}
async function checkUser(req, res) {
let username = req.user.username
let userid = req.user.userid
res.status(StatusCodes.OK).json({msg: "valid user", username, userid})

}
module.exports = { register, login, checkUser };
