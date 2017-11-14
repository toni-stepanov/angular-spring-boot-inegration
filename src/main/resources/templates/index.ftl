<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Spring Boot Security</title>
    <link rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>

<style>
    .margin-top-5 {
        margin-top: 10px;
    }
</style>
<body>

<div ng-app="SecurityTestApp" ng-controller="AppCtrl">
    <div class=" col-md-4 col-md-offset-4" ng-show="!user">
        <div class="panel panel-default" ng-show="!user">
            <div class="panel-heading">Login</div>
            <div class="panel-body">
                <div class="col-md-12">
                    <form ng-submit="login()">
                        <div class="form-group">
                            <label for="username">Username:</label> <input type="txt"
                                                                           class="form-control" ng-model="username"
                                                                           id="username">
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label> <input type="password"
                                                                      class="form-control" id="pwd" ng-model="password">
                        </div>
                        <button type="submit" class="btn btn-default">Submit</button>

                        <div class="alert alert-info margin-top-5" ng-show="message">{{message}}</div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="panel panel-default" ng-show="user">
        <div class="panel-heading">Welcome {{user.name}}</div>
        <div class="panel-body">
            <div class="col-md-12">
                <a href="#" class="btn btn-default margin-top-5"
                   ng-click="logout()"> Logout </a>
                <a href="#" class="btn btn-default margin-top-5"
                   ng-click="getAdminResouce()">Admin Resource</a>
                <a href="#" class="btn btn-default margin-top-5"
                   ng-click="getUserResouce()">User Resource</a>
                <div class="alert alert-info margin-top-5" ng-show="message">{{message}}</div>
                <pre ng-show="resource" class="  margin-top-5">{{resource|json}}</pre>
            </div>
        </div>
    </div>

</div>


<!-- Including Scripts -->
<script src="bower_components/angular/angular.min.js"></script>
<#--<script-->
<#--src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>-->
<script type="text/javascript" src="js/app/app.js"></script>
<script type="text/javascript" src="js/app/UserService.js"></script>
<script type="text/javascript" src="js/app/UserController.js"></script>
</body>
</html>