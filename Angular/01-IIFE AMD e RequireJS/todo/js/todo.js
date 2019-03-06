define(['angular', 'controllers/task', 'angular-route'], 
  function(ng, Task) {

  var Todo = ng.module('Todo', ['ngRoute']);
  Todo.controller('Task', Task);

  Todo.config(function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
      templateUrl: 'partials/home.html',
      controller: Task
    });
  });

  return Todo;
});