'use strict';

var fasApp = angular.module('fasApp', ['ngRoute','ngResource']).config(function($routeProvider) {
        $routeProvider.when('/home', {
            controller: 'HomeController',
            templateUrl: 'partials/home.html'
        }).when('/matricula', {templateUrl: 'partials/matricula.html', controller: 'MatriculaCtrl'})
        .when('/disciplina', {templateUrl: 'partials/disciplina.html', controller:'DisciplinaCtrl'})
        .when('/secretaria', {templateUrl: 'partials/secretaria.html', controller:'SecretariaCtrl'})
        .when('/secretariaDetails', {templateUrl: 'partials/secretariaDetails.html', controller:'SecretariaCtrl'})
            .otherwise({redirectTo: '/home'});
    });

fasApp.controller('HomeController', function($scope){
$scope.title = {nome: 'Trabalho de FAS2'};
})