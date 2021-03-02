const asyncHandler = require("express-async-handler");
const Coin = require("../models/coins.model");

// @desc Get all coins
// @route GET /api/coins/
// @access Private
const getCoins = asyncHandler(async (req, res) => {
  console.log(req.user.dataValues.id);
  const coins = await Coin.findAll({
    order: [["created_at", "DESC"]],
    where: { userId: req.user.dataValues.id },
  });
  res.json(coins);
});

// @desc Get all coins
// @route GET /api/coins/
// @access Private
const getCoinById = asyncHandler(async (req, res) => {
  const coin = await Coin.findOne({
    where: { id: req.params.id, userId: req.user.dataValues.id },
  });
  if (coin) {
    res.status(200).json(coin);
  } else {
    res.status(404);
    throw new Error("Coin not found");
  }
});

// @desc Create a coin
// @route POST /api/coins/
// @access Private
const createCoin = asyncHandler(async (req, res) => {
  console.log(req.body);
  console.log(req.user.dataValues.id);
  const { name, price, symbol } = req.body;
  const coin = await Coin.create({
    name,
    price,
    symbol,
  });
  coin.setUser(req.user);
  if (coin) {
    res.status(200).json(coin);
  } else {
    res.status(401);
    throw new Error("invalid input");
  }
});

// @desc Update a coin
// @route PATCH /api/coins/:id
// @access Private
const updateCoin = asyncHandler(async (req, res) => {
  const coin = await Coin.findOne({
    where: { id: req.params.id, userId: req.user.dataValues.id },
  });
  if (coin) {
    coin.update(req.body);
    coin.reload();
    res.status(200).json(coin);
  } else {
    res.status(404);
    throw new Error("Coin not found");
  }
});

// @desc Delete a coin
// @route DELETE /api/coins/:id
// @access Private
const deleteCoin = asyncHandler(async (req, res) => {
  const coin = await Coin.findOne({
    where: { id: req.params.id, userId: req.user.dataValues.id },
  });
  if (coin) {
    coin.destroy();
    res.status(200).json({ message: "Coin Deleted" });
  } else {
    res.status(404);
    throw new Error("Coin not found");
  }
});

module.exports = { getCoins, getCoinById, createCoin, updateCoin, deleteCoin };
