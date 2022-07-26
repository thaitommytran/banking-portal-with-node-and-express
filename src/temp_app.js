// Require Built-In Libraries
const fs = require("fs");
const path = require("path");

// Require the Express Framework
const express = require("express");
const app = express();

// Require Data Library
const { accounts, users, writeJSON } = require("./data");

// Require account routes
const accountRoutes = require("./routes/accounts.js");

// Require service routes
const servicesRoutes = require("./routes/services.js");

// Configure the View Directory and Engine
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

// Configure the Static Directory
app.use(express.static(path.join(__dirname, "public")));

// URL Encoded Middleware
app.use(express.urlencoded({ extended: true }));

// Read Account Data
// const accountData = fs.readFileSync(`${__dirname}/json/accounts.json`, "utf8");
// const accounts = JSON.parse(accountData);

// // Read User Data
// const userData = fs.readFileSync(`${__dirname}/json/users.json`, "utf8");
// const users = JSON.parse(userData);

// Create the Index Route
// Update the Index Route
app.get("/", (req, res) => {
  res.render("index", {
    title: "Account Summary",
    accounts: accounts
  });
});

// Use the Account Routes
app.use("/account", accountRoutes());

// // Create the Savings Account Route
// app.get("/savings", (req, res) => {
//   res.render("account", {
//     account: accounts.savings
//   });
// });

// // Create the Checking Account Route
// app.get("/checking", (req, res) => {
//   res.render("account", {
//     account: accounts.checking
//   });
// });

// // Create the Credit Account Route
// app.get("/credit", (req, res) => {
//   res.render("account", {
//     account: accounts.credit
//   });
// });

// Create the Profile Route
app.get("/profile", (req, res) => {
  res.render("profile", {
    user: users[0]
  });
});

// // Create the Transfer GET Route
// app.get("/transfer", (req, res) => {
//   res.render("transfer");
// });

// Use the Services Routes
app.use("/services", servicesRoutes());

// // Create the Transfer POST Route
// app.post("/transfer", (req, res) => {
//   // Calculate and Set the From Balance
//   accounts[req.body.from].balance -= req.body.amount;
//   // Calculate and Set the To Balance
//   accounts[req.body.to].balance += parseInt(req.body.amount, 10);
//   // // Convert Account Data to JSON
//   // const accountsJSON = JSON.stringify(accounts, null, 4);
//   // // Write Account Data to JSON file
//   // fs.writeFileSync(
//   //   path.join(__dirname, "json/accounts.json"),
//   //   accountsJSON,
//   //   "utf8"
//   // );
//   // Function Call Transfer
//   writeJSON();
//   // Redirect with a Message
//   res.render("transfer", { message: "Transfer Completed" });
// });

// // Add Payment Feature
// app.get("/payment", (req, res) => {
//   res.render("payment", {
//     account: accounts.credit
//   });
// });

// app.post("/payment", (req, res) => {
//   accounts.credit.balance -= req.body.amount;
//   accounts.credit.available += parseInt(req.body.amount, null, 10);
//   // const accountsJSON = JSON.stringify(accounts, null, 4);
//   // fs.writeFileSync(path.join(__dirname,'json/accounts.json'), accountsJSON, "utf8");
//   // Function Call Payments
//   writeJSON();
//   res.render("payment", {
//     message: "Payment Successful",
//     account: accounts.credit
//   });
// });

// Create a Server
app.listen(3000);
