// Require Built-In Libraries
const fs = require("fs");
const path = require("path");

// Require the Express Framework
const express = require("express");
const app = express();

// Configure the View Directory and Engine
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// Configure the Static Directory
app.use(express.static(path.join(__dirname, "public")));

// Read Account Data
const accountData = fs.readFileSync(`${__dirname}/json/accounts.json`, "utf8");
const accounts = JSON.parse(accountData);

// Read User Data
const userData = fs.readFileSync(`${__dirname}/json/users.json`, "utf8");
const users = JSON.parse(userData);

// Create the Index Route
// Update the Index Route
app.get("/", (req, res) => {
  res.render("index", {
    title: "Account Summary",
    accounts: accounts
  });
});

// Create the Savings Account Route
app.get("/savings", (req, res) => {
  res.render("account", {
    account: accounts.savings
  });
});

// Create the Checking Account Route
app.get("/checking", (req, res) => {
  res.render("account", {
    account: accounts.checking
  });
});

// Create the Credit Account Route
app.get("/credit", (req, res) => {
  res.render("account", {
    account: accounts.credit
  });
});

// Create the Profile Route
app.get("/profile", (req, res) => {
  res.render("profile", {
    user: users[0]
  });
});

// Create a Server
app.listen(3000, () => {
  console.log("PS Project Running on port 3000!");
});
