// Require Express
const express = require("express");
const router = express.Router();

// Require Data Library
const { accounts, writeJSON } = require("../data");

// Move Services Routes
// Move the Transfer GET Route
router.get("/transfer", (req, res) => {
  res.render("transfer");
});

// Move the Transfer POST Route
router.post("/transfer", (req, res) => {
  // Calculate and Set the From Balance
  accounts[req.body.from].balance -= req.body.amount;
  // Calculate and Set the To Balance
  accounts[req.body.to].balance += parseInt(req.body.amount, 10);
  // Function Call Transfer
  writeJSON();
  // Redirect with a Message
  res.render("transfer", { message: "Transfer Completed" });
});

// Move Payment Feature
// Move the Payment GET Route
router.get("/payment", (req, res) => {
  res.render("payment", {
    account: accounts.credit
  });
});

// Move the Payment POST Route
router.post("/payment", (req, res) => {
  accounts.credit.balance -= req.body.amount;
  accounts.credit.available += parseInt(req.body.amount, null, 10);
  // Function Call Payments
  writeJSON();
  res.render("payment", {
    message: "Payment Successful",
    account: accounts.credit
  });
});

// Export the Router
module.exports = {
  router
};
