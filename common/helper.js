Geder = {};

Geder.today = function() {
  return moment().milliseconds(0).seconds(0).minutes(0).hours(0).toDate()
};

Geder.currentUserEmail = function() {
  return Meteor.user().profile.email;
}

Geder.currentUserTodaysLunch = function(){
  return { 'user.id': Meteor.user()._id,
            date:     Geder.today()
         };
}

Geder.marmitas = {
  default: { value: 3.00 },
  small: { value: 15.00 },
  medium: { value: 21.00 },
  large: { value: 30.00 }
}
