// Node.js hook boilerplate.
if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

// Define wrapper gives us `require`
define(function(require) {
  // Looks like a normal `require` for Node.js.
  var _ = require('underscore');

  // Shuffle a list (space/comma separated).
  var shuffle = function (val) {
    val = val || "";
    return _.shuffle(val.split(/[\s,]+/));
  };

  // Return value is exported.
  return shuffle;
});
