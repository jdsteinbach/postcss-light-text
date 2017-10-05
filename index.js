const postcss = require('postcss');
const tinycolor = require('tinycolor2');

module.exports = postcss.plugin('postcss-light-text', opts => {
  const { luminance } = { luminance: 0.5, ...opts };
  return root => {
    root.walkRules(rule => {
      rule.walkDecls('color', decl => {
        if (tinycolor(decl.value).getLuminance() >= parseFloat(luminance)) {
          rule.append({ prop: '-webkit-font-smoothing', value: 'antialiased' });
        }
      });
    });
  };
});
