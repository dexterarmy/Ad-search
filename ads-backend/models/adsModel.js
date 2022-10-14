const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  primaryText: String,
  headline: String,
  description: String,
  CTA: String,
  imageUrl: String,
});

adSchema.index({ primaryText: "text", headline: "text", description: "text" });

adSchema.pre(/^find/, function (next) {
  this.populate({
    path: "companyId",
    select: "name url",
  });
  next();
});

const Ad = mongoose.model("Ad", adSchema);

module.exports = Ad;
