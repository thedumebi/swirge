const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database.config");
const User = require("./user.model");

const Coin = sequelize.define("Coin", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
  symbol: DataTypes.STRING,
  createdAt: {
    type: "TIMESTAMP",
    defaultValue: DataTypes.NOW,
    field: "created_at",
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    onUpdate: DataTypes.NOW,
    field: "updated_at",
  },
});

Coin.belongsTo(User, { as: "User", foreignKey: { allowNull: true } });

Coin.sync();

module.exports = Coin;
