const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const accountRoutes = require("./server/routes/accountRoutes.js");
const levelRoutes = require("./server/routes/levelRoutes.js");
app.use("/", accountRoutes, levelRoutes);

app.get("/", (req, res) => {
  res.send("technovium unlimited api");
});

app.listen(port, () => console.log(`listening on http://localhost:${port}`));
