// Require Built-In Libraries
const fs = require("fs");
const path = require("path");

// Transition Account Data to Data Library
const accountData = fs.readFileSync(`${__dirname}/json/accounts.json`, "utf8");
const accounts = JSON.parse(accountData);

// Transition User Data to Data Library
const userData = fs.readFileSync(`${__dirname}/json/users.json`, "utf8");
const users = JSON.parse(userData);

// Write JSON Function
const writeJSON = () => {
  // Write JSON Function Body
  const accountsJSON = JSON.stringify(accounts, null, 4);
  fs.writeFileSync(
    path.join(__dirname, "json/accounts.json"),
    accountsJSON,
    "utf8"
  );
};

// Export Data and Function
module.exports = {
  accounts,
  users,
  writeJSON
};
