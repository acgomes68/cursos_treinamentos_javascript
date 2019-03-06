window.name = "NG_DEFER_BOOTSTRAP!";

requirejs.config({
  baseUrl: './js',

  paths: {
    'bootstrap': '../lib/bootstrap.min',
    'angular': '../lib/angular.min',
    'angular-route': '../lib/angular-route.min',
    'zondb': '../lib/zondb'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },

    'angular-route': {
      deps: ['angular']
    },

    'zondb': {
      exports: 'zonDB'
    }
  }
});

require(['todo'], function(todo) {
  angular.element().ready(function() {
      angular.resumeBootstrap();
  });
});