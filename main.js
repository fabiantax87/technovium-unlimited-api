const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require("./server/routes/userRoutes.js");
app.use("/", routes);

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
