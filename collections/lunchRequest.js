LunchRequests = new Meteor.Collection('lunchRequests');

Meteor.methods({
  removeAll: function(){
    LunchRequests.remove({})
  },

  cancelTodaysRequest: function(){
    LunchRequests.remove( { 'user.email': Geder.currentUserEmail(), date: Geder.today() } );
  }

});
