Template.dashboard.todaysLunchRequests = function () {
  return LunchRequests.find({ date: Geder.today() });
};

Template.dashboard.total = function () {
  var r = LunchRequests.find({ date: Geder.today() }).fetch()
  return _.reduce(r, function(memo, request){ return memo + request.value; }, 0);
}

Template.dashboard.totalPayed = function () {
  var r = LunchRequests.find({ date: Geder.today() }).fetch()
  return _.reduce(r, function(memo, request){ return memo + request.valuePayed; }, 0);
}

Template.lunchRequest.events({
  'submit .pay-form': function(e, template) {
    e.preventDefault();
    var form = $(e.target);
    var requestId = this._id;
    var request = this;

    var valuePayed = $(form).find("input[type=number]").val();

    var updateProperties = {
      valuePayed: numeral(valuePayed).value(),
      valueToPay: request.value - valuePayed,
      valueToRecieve: valuePayed - request.value
    }

    LunchRequests.update( requestId, {$set: updateProperties} )
  }
});
