'use strict';

app.factory('BookService', ['$http', '$localStorage', '$q', function ($http, $localStorage, $q) {


    var factory = {
        createBook: createBook,
        updateBook: updateBook,
        getBooks: getBooks,
        deleteBook: deleteBook,
        getBook: getBook
    };

    function createBook(book) {
        console.log('Creating Book');
        var deferred = $q.defer();
        $http.post('api/book/create/', book)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Error while creating Book : ' + errResponse.data.errorMessage);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function updateBook(book) {
        console.log('Updating Book with id : ' + book.id);
        var deferred = $q.defer();
        $http.put('api/book/update/' + book.id, book)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Error while updating book : ' + errResponse.data.errorMessage);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function getBooks() {
        console.log('Get books');
        var deferred = $q.defer();
        $http.get('api/books')
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Error while extracting books : ' + errResponse.data.errorMessage);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function deleteBook(id) {
        console.log('delete Book with id:' + id);
        var deferred = $q.defer();
        $http.delete('api/book/delete/' + id)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Error while deleting book : ' + errResponse.data.errorMessage);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    function getBook(id) {
        console.log('get Book with id:' + id);
        var deferred = $q.defer();
        $http.delete('api/books/' + id)
            .then(
                function (response) {
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    console.error('Error while getting book : ' + errResponse.data.errorMessage);
                    deferred.reject(errResponse);
                }
            );
        return deferred.promise;
    }

    return factory;
}
]);