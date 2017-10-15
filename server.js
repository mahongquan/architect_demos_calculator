#!/usr/bin/env node
console.log("======")
var path = require('path');
var architect = require("architect");

var configPath = path.join(__dirname, "config.js");
console.log(architect);
var config = architect.loadConfig(configPath);
console.log("creatApp")
architect.createApp(config, function (err, app) {
  if (err) throw err;
  console.log("app ready");
});
