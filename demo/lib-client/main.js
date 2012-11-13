// Configure require.
require.config({
  shim: {
    "bootstrap": {
      deps: ["jquery"],
      exports: "$"
    }
  },

  // Define paths to libraries.
  paths: {
    "underscore": "vendor/underscore-min-1.4.2",
    "jquery":     "vendor/jquery-min-1.8.1",
    "bootstrap":  "vendor/bootstrap-min-2.2.1",
    "shuffle":    "../lib-shared/shuffle"
  },
});

require([
  "bootstrap",
  "shuffle"
], function($, shuffle) {
  $(function () {
    // Bind shuffle to the client side form.
    $("form#client").submit(function () {

      // var shuffle = function (val) {
      //   val = val || "";
      //   return _.shuffle(val.split(/[\s,]+/));
      // };

      try {
        console.log(shuffle);
        console.log(shuffle("1 2 3 4"));
      } catch (err) {
        console.log(err.stack);
        return false;
      }

      return false;

      var input = $("form#client #input").val(),
        shuffled = shuffle("1"),
        $output = $("form#client #output");

      console.log("TODO HERE SHUFFLED", _, shuffled);
      $output.text(shuffled);

      return false;
    });
  });
});