Accounts.loginServiceConfiguration.remove({
    service : 'github'
});

Accounts.loginServiceConfiguration.insert({
    service : 'github',
    clientId: Meteor.settings.github.clientId,
    secret  : Meteor.settings.github.secret
});
