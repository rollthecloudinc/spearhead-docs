const parser = require('node-html-parser');
module.exports = (opt, indexHtml) => {
  if (!opt.configuration || opt.configuration === null || configuration === '') {
    return indexHtml;
  } else {
    const root = parser.parse(indexHtml);
    root.querySelectorAll('script').forEach(n => {
      if (n.toString().indexOf('data-retain') === -1) {
        n.remove();
      }
    });
    return root.toString();
  }
};