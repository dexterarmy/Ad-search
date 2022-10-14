const express = require("express");
const companiesController = require("../controllers/companiesController");

const router = express.Router();

router.route("/").post(companiesController.createCompanies);
module.exports = router;
