Accounts.onCreateUser(function(options, user) {
    var accessToken = user.services.github.accessToken,
        result,
        profile;

    result = Meteor.http.get('https://api.github.com/user', {
        params: {
            access_token: accessToken
        },
        headers: {
            "User-Agent": "Meteor/1.0"
        }
    });

    if (result.error) {
        console.log(result);
        throw result.error
    }

    profile = _.pick(result.data,
        'login',
        'name',
        'avatar_url',
        'url',
        'company',
        'blog',
        'location',
        'email',
        'bio',
        'html_url'
    );

    user.profile = profile;

    return user;
});

Meteor.startup(function() {
    var users = Meteor.users.find().fetch();
    _.each(users, function(userData) {
        var id = userData._id;
        var roles = ['geder'];
        if ( (userData.profile.login === 'luizsignorelli' || userData.profile.login === 'oniram') &&
              !Roles.userIsInRole(id, roles) ) {
            Roles.addUsersToRoles(id, ['geder']);
            console.log("Usuário "+userData.profile.login+" adicionado a role 'geder'");
        }
    });
});
