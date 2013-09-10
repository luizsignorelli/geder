Handlebars.registerHelper('currency', function (number) {
  return numeral(number).format("$0.00")
});
