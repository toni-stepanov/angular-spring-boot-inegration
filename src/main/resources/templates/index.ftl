<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tasks</title>
    <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>

<style>
    .margin-top-5 {
        margin-top: 10px;
    }
</style>
<body>

<div ng-app="SecurityTestApp" ng-controller="LoginController">
    <div class=" col-md-4 col-md-offset-4" ng-show="!user">
        <div class="panel panel-default">
            <div class="panel-heading">Login</div>
            <div class="panel-body">
                <div class="col-md-12">
                    <form ng-submit="login()">
                        <div class="form-group">
                            <label for="username">Username:</label>
                            <input type="txt" class="form-control" ng-model="username" id="username">
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <input type="password" class="form-control" id="pwd" ng-model="password">
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                        <div class="alert alert-info margin-top-5" ng-show="message">{{message}}</div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div ng-show="user" ng-controller="AppCtrl">

        <div class="panel panel-default">
            <div class="panel-heading">Welcome {{user.name}}</div>
            <div class="panel-body">
                <div class="col-md-12">
                    <a href="#" class="btn btn-default margin-top-5"
                       ng-click="logout()"> Logout </a>
                    <a href="#" class="btn btn-default margin-top-5"
                       ng-click="getBooks()">Get all books</a>
                    <a href="#" class="btn btn-default margin-top-5"
                       ng-click="openCreateDialog()">Create new book</a>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <h3 ng-show="books">List of books</h3>
                    <table class="table">
                        <tr ng-repeat="book in books">
                            <td ng-if="$odd" style="background-color:#f1f1f1">{{ book.title }}</td>
                            <td ng-if="$even">{{ book.title }}</td>
                            <td ng-if="$odd" style="background-color:#f1f1f1">{{ book.author }}</td>
                            <td ng-if="$even">{{ book.author }}</td>
                            <td>
                                <p data-placement="top" data-toggle="tooltip" title="Edit">
                                    <button class="btn btn-primary btn-xs" ng-click="openUpdateDialog(book.id)">
                                        <span class="glyphicon glyphicon-pencil"></span>
                                    </button>
                                </p>
                            </td>
                            <td>
                                <p data-placement="top" data-toggle="tooltip" title="Delete">
                                    <button
                                            class="btn btn-danger btn-xs" data-title="Delete"
                                            ng-click="delete(book.id)">
                                        <span class="glyphicon glyphicon-trash"></span>
                                    </button>
                                </p>
                            </td>
                        </tr>
                        </tr>
                    </table>
                </div>
                <div class="col-md-6 col-md-offset-1" ng-show="updateTaskDialogStatus">
                    <p ng-show="updateTaskDialogStatus === 'create'">Create book</p>
                    <p ng-show="updateTaskDialogStatus === 'update'">Update book</p>
                    <form>
                        <div class="form-group">
                            <label for="title">Title:</label>
                            <input type="txt" class="form-control" id="title" ng-model="createForm.title">
                        </div>
                        <div class="form-group">
                            <label for="author">Author:</label>
                            <input type="txt" class="form-control" id="author" ng-model="createForm.author">
                        </div>
                        <button type="submit" class="btn btn-default" ng-show="updateTaskDialogStatus == 'create'"
                                ng-click="createBook()">Submit
                        </button>
                        <button type="submit" class="btn btn-default" ng-show="updateTaskDialogStatus == 'update'"
                                ng-click="updateBook()">Submit
                        </button>
                        <div class="alert alert-info margin-top-5" ng-show="formMessage">Error happened:
                            {{formMessage}}
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>

</div>


<!-- Including Scripts -->
<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/ngstorage/ngStorage.min.js"></script>
<script type="text/javascript" src="js/app/app.js"></script>
<script type="text/javascript" src="js/app/book/BookService.js"></script>
<script type="text/javascript" src="js/app//user/UserService.js"></script>
<script type="text/javascript" src="js/app/user/LoginController.js"></script>
<script type="text/javascript" src="js/app/book/BookController.js"></script>
</body>
</html>