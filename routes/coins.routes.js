const express = require("express");
const {
  getCoins,
  createCoin,
  updateCoin,
  deleteCoin,
  getCoinById,
} = require("../controllers/coins.controllers");
const { protect } = require("../middleware/auth.middleware");

const router = express.Router();

router.route("/").get(protect, getCoins).post(protect, createCoin);
router
  .route("/:id")
  .get(protect, getCoinById)
  .patch(protect, updateCoin)
  .delete(protect, deleteCoin);

module.exports = router;
