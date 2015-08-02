module.exports.register = function (Handlebars, options)  {
  Handlebars.registerHelper('stripPrefix', function(src) {
    return  src.replace(/^[^_]*_/, "");
  });
};
