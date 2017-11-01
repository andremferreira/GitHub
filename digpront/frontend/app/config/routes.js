angular.module('digitalProntuario').config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('welcome', {
        url: "/welcome",
        templateUrl: "welcome/welcome.html"
      }).state('consultas', {
        url: "/consultas?page",
        templateUrl: "consultas/tabs.html"
      }).state('pacientes', {
        url: "/pacientes",
        templateUrl: "pacientes/pacientes.html"
      })
  
      $urlRouterProvider.otherwise('/welcome')
  }])
  