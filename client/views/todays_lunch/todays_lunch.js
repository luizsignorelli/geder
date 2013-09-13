Template.todaysLunch.todaysRequests = function () {
  return LunchRequests.find({ date: Geder.today() }).count();
};

Template.todaysLunch.alreadyRequested = function () {
  if ( Meteor.user() )
    return LunchRequests.find( Geder.currentUserTodaysLunch() ).count() == 1;
  else
     return false;
};

Template.todaysLunch.events({
  'click #request' : function (e, template) {
    var currentUser = Meteor.user();
    var user = _.pick(currentUser.profile,
        'name',
        'avatar_url',
        'email'
    );
    user.id = currentUser._id;
    var selectedMarmita = template.find('#marmita').value;
    var marmita = Geder.marmitas[selectedMarmita];

    LunchRequests.insert( { user: user, value: marmita.value, valuePayed: 0, date: Geder.today() });
  },
  'click #cancel-request' : function () {
    todaysRequest = LunchRequests.findOne( Geder.currentUserTodaysLunch() );
    Meteor.call('cancelTodaysRequest', todaysRequest._id, function(error, removed) {
      if (error){
        console.log("Erro");
        console.log(error);
      }
      console.log(removed);
    });
  }
});
