require("../models/db");
const Account = require("../models/Account");

/**
 * /api/account/{id}
 * GET account based on id
 */

exports.getAccount = async (req, res) => {
  let paramID = req.params.id;
  try {
    const account = await Account.findOne({ _id: paramID });
    res.json(account);
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

/**
 * /api/account/signup/{username}
 * POST create new account
 */

exports.createAccount = async (req, res) => {
   const newAccount = new Account({
      username: req.body.username
      // expand fields <<
      // check is data doesn't exsist yet
   });
  
   try {
      await newAccount.save();
      res.json(newAccount);
   }catch(err) {
      console.log(err.message);
      res.status(400).json({ message: err });
   }
}
