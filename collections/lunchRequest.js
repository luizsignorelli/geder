LunchRequests = new Meteor.Collection('lunchRequests');

Meteor.methods({
  removeAll: function(){
    LunchRequests.remove({})
  },

  cancelTodaysRequest: function(id){
    LunchRequests.remove( id );
    return true;
  }

});
