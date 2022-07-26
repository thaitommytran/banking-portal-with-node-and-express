// Require Express
const express = require("express");
const router = express.Router();

// Require Data Library
const { accounts } = require("../data.js");

// Move Account Routes
// Move the Savings Account Route
router.get("/savings", (req, res) => {
  res.render("account", {
    account: accounts.savings
  });
});

// Move the Checking Account Route
router.get("/checking", (req, res) => {
  res.render("account", {
    account: accounts.checking
  });
});

// Move the Credit Account Route
router.get("/credit", (req, res) => {
  res.render("account", {
    account: accounts.credit
  });
});

// Export the Router
module.exports = {
  router
};
