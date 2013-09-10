Meteor.publish('lunchRequests', function() {
  return LunchRequests.find({});
})
