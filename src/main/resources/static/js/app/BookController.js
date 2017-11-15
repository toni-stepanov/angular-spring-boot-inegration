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
                $scope.updateTaskDialogStatus = null;
                $scope.createForm = {};
            } else {
                $scope.message = 'Authentication Failed !';
            }
        }).error(function(error) {
            $scope.message = 'Authentication Failed !';
        });
    };

    $scope.getBooks = function () {
      $http.get('api/books').success(function (res) {
          $scope.books = res;
      }).error(function (error) {
          $scope.message = error;
      })
    };

    $scope.openUpdateDialog = function (id) {
        $scope.updateTaskDialogStatus = 'update';
        $scope.createForm.id = id;
        $http.get('api/books/' + id).success(function (res) {
            $scope.createForm.title = res.title;
            $scope.createForm.author = res.author;
        }).error(function (error) {
            $scope.message = error;
        });
        console.log('update : ' + id);
    };

    $scope.delete = function (id) {
        console.log('delete : ' + id);
        $http.delete('api/book/delete/' + id).success(function (res) {
            $scope.getBooks();
        }).error(function (error) {
            $scope.formMessage = error;
        });
    };

    $scope.createBook = function () {
        $scope.createForm.id = null;
        $http.post('api/book/create/', $scope.createForm).success(function (res) {
            $scope.getBooks();
        }).error(function (error) {
            $scope.formMessage = error;
        });
    };

    $scope.updateBook = function () {
        $http.put('api/book/update/' + $scope.createForm.id, $scope.createForm).success(function (res) {
            $scope.getBooks();
        }).error(function (error) {
            $scope.formMessage = error;
        });
    };

    $scope.openCreateDialog = function () {
        $scope.updateTaskDialogStatus = 'create';
    };

    $scope.logout = function () {
        $http.defaults.headers.common['Authorization'] = null;
        $scope.user = null;
        $scope.message = 'Successfully logged out';
    }

});