module.exports = (targetOptions, indexHtml) => {
  // const i = indexHtml.indexOf('</body>');
  // const config = `<p>Configuration: ${targetOptions.configuration}</p>`;
  const strippedScripts = indexHtml.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi);
  return strippedScripts;
};