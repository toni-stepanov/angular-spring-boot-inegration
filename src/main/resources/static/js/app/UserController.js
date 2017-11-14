app.controller('AppCtrl', function($http, $scope) {
    $scope.user = null;

    $scope.login = function() {
        // creating base64 encoded String from username and password
        var base64Credential = btoa($scope.username + ':' + $scope.password);
        console.log('calling user');
        $http.get('user', {
            headers : {
                // setting the Authorization Header
                'Authorization' : 'Basic ' + base64Credential
            }
        }).success(function(res) {
            $scope.password = null;
            if (res.authenticated) {
                $scope.message = '';
                // setting the same header value for all request calling from this app
                $http.defaults.headers.common['Authorization'] = 'Basic ' + base64Credential;
                $scope.user = res;
            } else {
                $scope.message = 'Authentication Failed !';
            }
        }).error(function(error) {
            $scope.message = 'Authentication Failed !';
        });
    };

    $scope.logout = function () {
        $http.defaults.headers.common['Authorization'] = null;
        $scope.user = null;
        $scope.message = 'Successfully logged out';
    }


});