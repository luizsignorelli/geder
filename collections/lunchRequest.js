LunchRequests = new Meteor.Collection('lunchRequests');

Meteor.methods({
  removeAll: function(){
    LunchRequests.remove({})
  },

  cancelTodaysRequest: function(){
    lr = LunchRequests.findOne( { 'user.email': Geder.currentUserEmail(), date: Geder.today() } );
    if (lr) {
      LunchRequests.remove( lr._id );
      console.log(lr._id);
      console.log(lr.date);
    }
  }

});
