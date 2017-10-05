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
postcss([ require('postcss-light-text') ]);
```

See [PostCSS] docs for examples for your environment.
