var postcss = require('postcss');

var plugin = require('./');

function run(input, output, opts) {
  return postcss([ plugin(opts) ]).process(input)
    .then(result => {
      expect(result.css).toEqual(output);
      expect(result.warnings().length).toBe(0);
    });
}

test('change: light color', () => {
  return run(
    'a{color:#eee}',
    'a{color:#eee;-webkit-font-smoothing:antialiased}'
  );
});

test('no change: dark color', () => {
  return run(
    'a{color:#222}',
    'a{color:#222}'
  );
});
