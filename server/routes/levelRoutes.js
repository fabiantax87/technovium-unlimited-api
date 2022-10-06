const express = require("express");
const router = express.Router();
const levelController = require("../controllers/levelController");

router.get("/api/levels", levelController.getLevels);

module.exports = router;
