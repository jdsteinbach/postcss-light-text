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

test('change: custom luminance', () => {
  return run(
    'a{color:#ddd}',
    'a{color:#ddd;-webkit-font-smoothing:antialiased}',
    { luminance: 0.7 }
  );
});

test('no change: custom luminance', () => {
  return run(
    'a{color:#ccc}',
    'a{color:#ccc}',
    { luminance: 0.7 }
  );
});
