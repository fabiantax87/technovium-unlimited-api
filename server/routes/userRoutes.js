const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/api/test",function() {console.log("hello world!")} );

router.get("/api/users", userController.getAllUsers);

router.get("/api/user/:id", userController.getUser);

router.post("/api/user/signup", userController.createUser);

router.post("/api/user/login", userController.loginUser);

module.exports = router;
