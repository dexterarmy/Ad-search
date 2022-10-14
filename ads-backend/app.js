const express = require("express");
const cors = require("cors");
const companiesRouter = require("./routes/companiesRoutes");
const adsRouter = require("./routes/adsRoutes");

const app = express();

app.use(cors());

app.use(express.json({ limit: "10kb" }));

app.use("/companies", companiesRouter);
app.use("/ads", adsRouter);

module.exports = app;
