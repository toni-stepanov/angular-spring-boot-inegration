app.controller('AppCtrl', ['BookService', 'UserService', '$http', '$scope', function (BookService, UserService, $http, $scope) {

    $scope.updateTaskDialogStatus = null;
    $scope.createForm = {};

    $scope.getBooks = function () {
        BookService.getBooks().then(
            function (response) {
                $scope.books = response;
            },
            function (errResponse) {
                console.error('Error while extracting books');
                $scope.message = errResponse;
            }
        );
    };

    $scope.delete = function (id) {
        console.log('delete : ' + id);
        BookService.deleteBook(id).then(
            function (response) {
                $scope.getBooks();
            },
            function (errResponse) {
                $scope.formMessage = errResponse;
            }
        );
    };

    $scope.createBook = function () {
        BookService.createBook($scope.createForm).then(
            function (response) {
                console.log('Book created successfully');
                $scope.getBooks();
                $scope.formMessage = null;
            },
            function (errResponse) {
                console.error('Error while creating Book');
                $scope.formMessage = errResponse;
            }
        );
    };

    $scope.updateBook = function () {
        BookService.updateBook($scope.createForm).then(
            function (response) {
                $scope.getBooks();
                $scope.formMessage = null;
            },
            function (errResponse) {
                console.error('Error while updating Book');
                $scope.formMessage = errResponse;
            }
        );
    };

    $scope.logout = function () {
        $http.defaults.headers.common['Authorization'] = null;
        $scope.user = null;
        $scope.message = 'Successfully logged out';
    };

    $scope.openUpdateDialog = function (id) {
        console.log('update book with id : ' + id);
        $scope.updateTaskDialogStatus = 'update';
        $scope.createForm.id = id;
        $scope.formMessage = null;
        BookService.getBook(id).then(
            function (response) {
                $scope.createForm.title = response.title;
                $scope.createForm.author = response.author;
            },
            function (errResponse) {
                $scope.formMessage = errResponse;
            }
        );
    };

    $scope.openCreateDialog = function () {
        $scope.createForm = {};
        $scope.updateTaskDialogStatus = 'create';
        $scope.formMessage = null;
    };

}]);