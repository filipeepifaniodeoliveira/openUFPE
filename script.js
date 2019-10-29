var app = angular
  .module('openacademy', ['ui.router','chart.js']);

// Definindo Rotas
app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  
  $urlRouterProvider.otherwise('/');
  
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })
    .state('downloads', {
      url: '/downloads',
      templateUrl: 'views/downloads.html',
      controller: 'downloadsCtrl'
    })
    .state('consultas', {
      url: '/consultas',
      templateUrl: 'views/consultas.html',
      controller: 'consultasCtrl'
    })
    .state('indicadores', {
      url: '/indicadores',
      templateUrl: 'views/indicadores.html',
      controller: 'indicadoresCtrl'
    })
    .state('gerador', {
      url: '/gerador',
      templateUrl: 'views/gerador.html',
      controller: 'geradorCtrl'
    });
    
    // Utilizando o HTML5 History API
    // $locationProvider.html5Mode(true);
});


