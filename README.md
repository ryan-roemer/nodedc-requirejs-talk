Node.DC - RequireJS/AMD Talk
============================

Talk presentation and demo materials for my 11/13/2012 [Node.DC][meetup]
talk, "[Shared Code with RequireJS][meetup]".

[nodedc]: http://nodedc.github.com/
[meetup]: http://www.meetup.com/node-dc/events/89233812/


Building the Slide Deck
=======================

To re-build this slide deck from Jade sources:

    $ npm install
    $ npm run-script watch


Demo Application
================

To run the demo application server showing off shared frontend/backend code:

    $ npm install
    $ npm run-script server


Licenses
========
All code not otherwise specified is Copyright 2012 Ryan Roemer.
Released under the MIT License.

Deck
----

[deck.js][deckjs] is Copyright Caleb Troughton and dual licensed under the
MIT and GPL licenses.

The [CodeMirror deck.js extension][cm] is Copyright Irene Ros and dual licensed
under the MIT and GPL licenses.

The [mnml deck.js theme][mnml] is Copyright Laurens Duijvesteijn and dual
licensed under the MIT and GPL licenses.

Included libraries:

* jQuery: MIT and GPL
* Modernizr: MIT and BSD
* CoffeeScript: MIT

Demo
----

Included libraries:

* Underscore: MIT
* Bootstrap: Apache
* jQuery: MIT and GPL
* RequireJS: BSD

[tb]: https://ryan-roemer.github.com/deck.js-starter/archive/master.tar.gz
[demo]: http://ryan-roemer.github.com/deck.js-starter
[gh]: https://github.com/ryan-roemer/deck.js-starter
[deckjs]: https://github.com/imakewebthings/deck.js
[jade]: http://jade-lang.com
[cm]: https://github.com/iros/deck.js-codemirror
[cs]: http://coffeescript.org/
[mnml]: https://github.com/duijf/mnml
