Template.todaysLunch.todaysRequests = function () {
  return LunchRequests.find({ date: Geder.today() }).count();
};

Template.todaysLunch.alreadyRequested = function () {
  if ( Meteor.user() )
    return LunchRequests.find({ 'user.email': Geder.currentUserEmail(), date: Geder.today() }).count() == 1;
  else
     return false;
};

Template.todaysLunch.events({
  'click #request' : function (e, template) {
    var user = _.pick(Meteor.user().profile,
        'name',
        'avatar_url',
        'email'
    );
    var selectedMarmita = template.find('#marmita').value;
    var marmita = Geder.marmitas[selectedMarmita];

    LunchRequests.insert( { user: user, value: marmita.value, valuePayed: 0, date: Geder.today() });
  },
  'click #cancel-request' : function () {
    todaysRequest = LunchRequests.findOne( { 'user.email': Geder.currentUserEmail(), date: Geder.today() } );
    Meteor.call('cancelTodaysRequest', todaysRequest._id, function(error, removed) {
      if (error){
        console.log("Erro");
        console.log(error);
      }
      console.log(removed);
    });
  }
});
