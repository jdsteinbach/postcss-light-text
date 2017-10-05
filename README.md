# PostCSS Light Text [![Build Status][ci-img]][ci]

[PostCSS] plugin that adds webkit antialiasing for light text.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/jdsteinbach/postcss-light-text.svg
[ci]:      https://travis-ci.org/jdsteinbach/postcss-light-text

```css
.light-text {
  color: #eee;
}
```

```css
.light-text {
  color: #eee;
  -webkit-font-smoothing: antialiased;
}
```

## Usage

```js
var lightText = require('postcss-light-text');

postcss([ lightText ]);
```

## Options

The plugin defaults to a luminance value of `0.5`. If you'd like to change that, pass the following option:

```js
var lightText = require('postcss-light-text');

postCSS([ lightText({ luminance: 0.7 }) ]);
```

See [PostCSS] docs for examples for your environment.
