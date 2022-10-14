const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: String,
  url: String,
});

companySchema.index({ name: "text" });

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
