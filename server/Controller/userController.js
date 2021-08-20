const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwt_decode = require("jwt-decode");
const User = require("../Models/user"); // import user model

//  signin user api controller

async function signin(req, res) {
  try {
    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });

    if (!existingUser)
      return res.status(404).json({ message: "user doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "invalid credentials" });
    // console.log('hello');

    // console.log('hello')
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "shaktiman",
      { expiresIn: "1y" }
    );
    var decoded = jwt_decode(token);
    userEmail = decoded.email;
    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: "something went wrong " });
  }
}

// signup api controller

async function signup(req, res) {
  const { fullName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });

    if (existingUser)
      return res.status(400).json({ message: "user already exist " });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      fullName,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      "shaktiman",
      { expiresIn: "1y" }
    );
    var decoded = jwt_decode(token);
    userEmail = decoded.email;

    res.status(201).json({ result, token });
  } catch (err) {
    res.status(500).json({ message: "something went wrong " });
    console.log(err);
  }
}

// logout api controller    from front-end

async function logout(req, res) {
  try {
    console.log("hello");
    // await req.logout();
    req.session = null;
    console.log("session null");
    return res.redirect("/");
  } catch (err) {
    console.log(err);
  }
}

// GET USER DETAILS
async function profile(req, res) {
  const details = await User.findOne({ where: { email: userEmail } });
  // console.log(details);
  let fullName = details.dataValues.fullName;
  let email = details.dataValues.email;

  res.json({
    fullName: fullName,
    email: email,
  });
}

// exporting all  users function controller

module.exports = {
  signin: signin,
  signup: signup,
  profile: profile,
};
