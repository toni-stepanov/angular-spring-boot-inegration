var app = angular.module('SecurityTestApp', ['ngStorage']);

// alert to get the user credentials. To avoid alert, set a header in every request
app.config([ '$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
} ]);

