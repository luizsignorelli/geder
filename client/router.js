Meteor.Router.add({
  '/': 'todaysLunch',
  '/dashboard': 'dashboard'
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  },

  'justGeder': function(page){
    if ( Roles.userIsInRole(Meteor.user()._id, ['geder']) )
      return page;
    else
      return 'accessDenied';
  }
});

Meteor.Router.filter( 'requireLogin', {only: ['todaysLunch', 'dashboard']} );
Meteor.Router.filter( 'justGeder', {only: ['dashboard']} );
