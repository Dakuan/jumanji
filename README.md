Jumanji
=======

![stampede](http://www.kinomuseum.de/Rueckblende/OA-06/OA-06-pics/stampede.jpg)

## For when Safari goes wrong

There appears to be a bug in Safari and Mobile Safari where in private browsing mode it will add a `'Cache-Control': 'maxage=0'` header to a request while clearing the browser cache at the same time. Express will reasonably respond with a `304` status code. This causes Safari to attempt to load the page from its empty cache, leaving the user seeing...nothing.

Bad Safari.

Jumanji is a middleware component that hacks around this issue. It's not big and it's not clever but it's got users seeing pages again.

## Usage

```javascript
var express = require('express'),
    app = express(),
    jumanji = require('jumanji');

app.use(jumanji);

```

### Further Reading

* [Blog detailing another fix](http://tech.vg.no/2013/10/02/ios7-bug-shows-white-page-when-getting-304-not-modified-from-server/)
* [Commit to Expressjs dependency](https://github.com/visionmedia/node-fresh/commit/f2c79c24b411ce56e051d1c8bf91b9d6a33e4e49)
* [Expressjs dependency github issue](https://github.com/visionmedia/node-fresh/issues/8)
* [Why Apple won't fix it](https://bugs.webkit.org/show_bug.cgi?id=32829)
