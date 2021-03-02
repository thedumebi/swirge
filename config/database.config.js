const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite3",
});

const connectDB = async () => {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database", error);
  }
};

module.exports = { connectDB, sequelize };
