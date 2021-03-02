require("dotenv").config();
const express = require("express");
const { connectDB } = require("./config/database.config");
const userRoutes = require("./routes/user.routes");
const coinRoutes = require("./routes/coins.routes");
const { errorHandler, notFound } = require("./middleware/error.middleware");

connectDB();
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/coins", coinRoutes);

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started successfuly on port ${port}`);
});
