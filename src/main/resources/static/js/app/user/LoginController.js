app.controller('LoginController', ['BookService', 'UserService', '$http', '$scope', function (BookService, UserService, $http, $scope) {

    $scope.login = function () {
        $scope.user = null;
        // creating base64 encoded String from username and password
        var base64Credential = btoa($scope.username + ':' + $scope.password);
        UserService.getUser(base64Credential).then(
            function (res) {
                $scope.password = null;
                if (res.authenticated) {
                    $scope.message = '';
                    $scope.user = res;
                    // setting the same header value for all request calling from this app
                    $http.defaults.headers.common['Authorization'] = 'Basic ' + base64Credential;
                } else {
                    $scope.message = 'Authentication Failed !';
                }
            },
            function (errResponse) {
                $scope.message = 'Authentication Failed !';
            }
        );
    };

}]);