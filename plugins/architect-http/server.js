// Configures the core http server
"use strict";

var http = require("http");

module.exports = function (options, imports, register) {

  var debug = imports.debug('http');
  debug("start");

  // Create basic api
  var api = {
    getModule: function(){
      return http;
    },
    startServer: function (app, port, host) {
      // Create app and add to server
      debug("create server");
      var server = http.createServer(app);

      var actualHost = host || options.host || null;
      var actualPort = port || options.port;

      if (actualHost) {
        server.listen(actualPort, actualHost, listenCallback);
      } else {
        server.listen(actualPort, listenCallback);
      }

      function listenCallback(err) {
        if (err) {
          debug("error starting server at http://" + actualHost + ":" + actualPort);
          process.exit(1);
        } else {
          debug("http server listening at http://" + actualHost + ":" + actualPort);
          return server;
        }
      }
    }
  };


  debug("register http");
  register(null, {
    "http": api
  });

};

