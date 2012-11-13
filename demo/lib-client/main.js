// Configure require.
require.config({
  shim: {
    "underscore": {
      exports: "_"
    },
    "bootstrap": {
      deps: ["jquery"],
      exports: "$"
    }
  },

  // Define paths to libraries.
  paths: {
    "underscore": "vendor/underscore-min-1.4.2",
    "jquery":     "vendor/jquery-min-1.8.1",
    "bootstrap":  "vendor/bootstrap-min-2.2.1"
  },
});

require([
  "jquery",
  "../lib-shared/shuffle",
  "bootstrap"
], function($, shuffle) {
  $(function () {
    // Bind shuffle to the client side form.
    $("form#client").submit(function () {
      var input = $("form#client #input").val(),
        $output = $("form#client #output");

      $output.text(shuffle(input).join(", "));

      return false;
    });

    // AJAX get shuffle with the server side form.
    $("form#server").submit(function () {
      var input = $("form#server #input").val(),
        $output = $("form#server #output");

      $.ajax({
        url: "/shuffle",
        data: {
          val: input
        },
        success: function (shuffled) {
          $output.text(shuffled.join(", "));
        },
        dataType: "json"
      });

      return false;
    });
  });
});