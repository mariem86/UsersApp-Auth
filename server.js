const express = require("express");
const connectDB = require("./config/db");
const passport = require("passport");
const auth = require("./routes/api/auth");
const users = require("./routes/api/users");

const app = express();

//Middlewares
app.use(express.json());
app.use(passport.initialize());

//Connect the db
connectDB();

//Routes
app.use("/api/auth", auth);
app.use("/api/users", users);

//Lunch the server
const port = process.env.PORT || 5000;

app.listen(port, err => {
  if (err) return console.log("Server is not running !!!");
  console.log(`Server is running on port ${port}...`);
});