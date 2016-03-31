require('dotenv').config();

// Set up database
var fs = require("fs");
var dbFile = "./dnbot-db.db";
var exists = fs.existsSync(dbFile);

if(!exists) {
  console.log("Creating DB file.");
  fs.openSync(dbFile, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(dbFile);

// Initialize database
db.serialize(function() {
  if(!exists) {
    db.run("CREATE TABLE Stories (id TEXT, title TEXT, comment TEXT, url TEXT)");
  }

  insertStory("0", "Test Story", "");
});

console.log("Welcome to DN Bot!");

setInterval(function() {
  // Make DN API request
  console.log("Making DN API Request");

  // Get top ten stories
  console.log("Got top ten stories!");

  // Check if already published
  console.log("Checking if already published");

  // Post to Facebook
  console.log("Posting to Facebook");

  console.log("\n");
}, 1500);
