// Simple server.
var path = require('path'),
  express = require('express'),
  shuffle = require('../lib-shared/shuffle'),
  app = express(),
  PUBLIC_DIR = path.join(__dirname, "../"),
  ADDR = "127.0.0.1",
  PORT = 3003;

app.configure(function() {
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(app.router);
  app.use(express.favicon());
  app.use(express.static(PUBLIC_DIR));
});

app.get("/shuffle", function (req, res) {
  var input = req.param('val'),
    shuffled = shuffle(input);

  return res.json(shuffled, 200);
});

app.listen(PORT, ADDR);
console.log("Server started on port " + PORT + ".");
