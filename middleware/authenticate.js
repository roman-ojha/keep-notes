const jwt = require("jsonwebtoken");
const KeepNoteAppUserData = require("../models/userSchema");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.KeepNoteAppUserToken;
    const varifyToken = jwt.verify(token, process.env.SECRET_KEY);
    const rootUser = await KeepNoteAppUserData.findOne({
      _id: varifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not found");
    }
    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorize:Not token provided");
    console.log(err);
  }
};

module.exports = authenticate;
