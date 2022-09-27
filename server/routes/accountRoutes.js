const express = require("express");
const router = express.Router();
const accountController = require("../controllers/accountController");

router.get("/api/account/:id", accountController.getAccount);

router.post("/api/account/signup", accountController.createAccount);

module.exports = router;
