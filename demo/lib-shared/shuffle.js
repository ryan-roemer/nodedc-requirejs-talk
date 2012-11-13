// Node.js hook boilerplate.
if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function(require) {
  // Looks like a normal "require".
  var _ = require('underscore');

  // Shuffle a list (space/comma separated).
  var shuffle = function (val) {
    val = val || "";
    return _.shuffle(val.split(/[\s,]+/));
  };

  // Return value is exported.
  return shuffle;
});
