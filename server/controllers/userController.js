require("../models/db");
const User = require("../models/User");

/**
 * /api/user/{id}
 * GET user based on id
 */

exports.getUser = async (req, res) => {
  let paramID = req.params.id;
  try {
    const user = await User.findOne({ _id: paramID });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

/**
 * /api/user/signup/{username}
 * POST create new user
 */

exports.createUser = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    // expand fields <<
    // check if data doesn't exsist yet
  });

  try {
    await newUser.save();
    res.json(newUser);
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ message: err });
  }
};
