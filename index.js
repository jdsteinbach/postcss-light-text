const postcss = require('postcss');
const tinycolor = require('tinycolor2');

module.exports = postcss.plugin('postcss-light-text', opts => {
  const {luminance} = {luminance: .5, ...opts};
  return root => {
    root.walkRules(rule => {
      rule.walkDecls('color', decl => {
        console.log(tinycolor(decl.value).getLuminance());
        if (tinycolor(decl.value).getLuminance() >= parseFloat(luminance)) {
          rule.append({prop: '-webkit-font-smoothing', value: 'antialiased'});
        }
      });
    });
  };
});
