const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "ajay is a good boy"; //this should be kept safe. we did not have to show to others

// ROUTE1: Create a user using : POST "/api/auth/createuser", No login required
router.post(
  "/createuser", // end point
  [
    body("name", "Enter a Valid Name. Must have Atleast 3 Characters").isLength(
      { min: 3 }
    ),
    body("email", "Enter a Valid Email").isEmail(),
    body(
      "password",
      "Enter a Valid Password. Must Have Atleast 8 Characters"
    ).isLength({ min: 8 }),
  ],
  async (req, res) => {
    let success = false;
    // if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    try {
      // check whether ther user with this email exists already or not
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return res
          .status(400)
          .json({success, error: "Sorry a User with this Email already exist!" });
      }
      const salt = await bcrypt.genSalt(10);
      // secPass = bcrypt.hash(password,salt)
      const secPass = await bcrypt.hash(req.body.password, salt);
      // Create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      //   .then(user => res.json(user))
      //   .catch(err=> {console.log(err)
      // res.json({error: "Please enter a valid Unique Email",message: err.message})});
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);

      console.log(authtoken);
      // res.json(user);

      success = true;
      res.json({success, authtoken });
      //catch error
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error"); // if error occured i will send status code
    }
  }
);

// ROUTE2 : authenticate a user using : POST "/api/auth/login", No login required
router.post(
  "/login", // end point
  [
    body("email", "Enter a Valid Email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    // if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Plese try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };

      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;

      res.json({success, authtoken });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error"); // if error occured i will send status code
    }
  }
);

// ROUTE3 : get logged in user details : POST "/api/auth/getuser", Login required
router.post("/getuser",fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user)
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error"); // if error occured i will send status code
  }
});
module.exports = router;
