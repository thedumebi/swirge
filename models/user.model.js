const bcrypt = require("bcrypt");
const { DataTypes } = require("sequelize");
// const Coin = require("./coins.model");
const { sequelize } = require("../config/database.config");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    set(value) {
      this.setDataValue("password", bcrypt.hashSync(value, 10));
    },
  },
  createdAt: {
    type: "TIMESTAMP",
    defaultValue: DataTypes.NOW,
    field: "created_at",
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    field: "updated_at",
  },
});

// User.hasMany(Coin, {
//   onDelete: "cascade",
//   onUpdate: "cascade",
//   hooks: true,
//   foreignKey: "userId",
//   as: "User",
// });

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

User.sync();

module.exports = User;
