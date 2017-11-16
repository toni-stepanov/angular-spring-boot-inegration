'use strict';

app.factory('UserService', ['$http', '$q', function ($http, $q) {


    var factory = {
        getUser: getUser
    };

    function getUser(base64Credential) {
        console.log('Getting user');
        var deferred = $q.defer();
        $http.get('user', {
            headers: {
                // setting the Authorization Header
                'Authorization': 'Basic ' + base64Credential
            }
        }).then(
            function (response) {
                deferred.resolve(response.data);
            },
            function (errResponse) {
                console.error('Error while getting user : ' + errResponse.data.errorMessage);
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    return factory;
}
]);