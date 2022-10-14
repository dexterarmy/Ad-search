const Company = require("../models/companiesModel");

exports.createCompanies = async (req, res, next) => {
  const doc = await Company.create(req.body);
  res.status(200).json({ status: "success", body: doc });
};
