const express = require("express");
const adsController = require("../controllers/adsController");

const router = express.Router();

router.route("/").get(adsController.getAds);
router.route("/:id").patch(adsController.updateAds);
router.route("/:keywords").get(adsController.getAd);
module.exports = router;
