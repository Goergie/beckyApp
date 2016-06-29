dreamListApp.factory('sessionInjector', ['session', function(session) {
    var sessionInjector = {
        request: function(config) {
            if (session.user) {
                config.headers["Authorization"] = "token " + session.user.token;
            }
            return config;
        }
    };
    return sessionInjector;
}]);
