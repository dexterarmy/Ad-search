const mongoose = require("mongoose");
const Ad = require("../models/adsModel");
const Company = require("../models/companiesModel");

exports.getAds = async (req, res, next) => {
  const ads = await Ad.find();
  res.status(200).json({ status: "success", body: ads });
};

exports.updateAds = async (req, res, next) => {
  const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ status: "success", body: ad });
};

// business logic
exports.getAd = async (req, res, next) => {
  // const ads = await Ad.aggregate([
  //   {
  //     $match: { $text: { $search: `${req.params.keywords}` } },
  //   },
  // ]);

  let companies;

  if (req.params.keywords) {
    companies = await Company.aggregate([
      {
        $match: { name: { $regex: req.params.keywords, $options: "i" } },
      },
    ]);
  } else {
    return res.status(400).json({ message: "please provide the input" });
  }

  if (companies.length !== 0) {
    const companyData = await Ad.find({ companyId: companies[0]?._id });
    return res.status(200).json({
      status: "success",
      body: companyData,
    });
  }

  const ads = await Ad.aggregate([
    {
      $match: {
        $or: [
          { primaryText: { $regex: req.params.keywords, $options: "i" } },
          { headline: { $regex: req.params.keywords, $options: "i" } },
          { description: { $regex: req.params.keywords, $options: "i" } },
        ],
      },
    },

    // {
    //   $lookup: {
    //     from: "companies",
    //     localField: "companyId",
    //     foreignField: "_id",
    //     as: "companyId",
    //   },
    // },
    // {
    //   $unwind: "$companyId",
    // },
  ]);

  const arr = ads.map((ad) => ad._id);
  const allAds = await Ad.find({ _id: { $in: arr } });

  res.status(200).json({
    status: "success",
    body: allAds,
  });
};
