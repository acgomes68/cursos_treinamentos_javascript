define(['angular', '../localdb/db'], function(ng, db) {
  function Task($scope, $rootScope, $timeout) {
    $scope.title = "My tasks";
    $scope.taskName = null;
    $scope.tasks = null;
    $scope.taskId = null;

    function getRowIndex(taskId) {
      var i=0,
          len = $scope.tasks.length;

      for(i; i < len; i++) {
        if($scope.tasks[i].id == taskId) {
          return i;
        }
      }
    }

    function loadTasks() {
      db.query('tasks', function(res) {
        $scope.tasks = res;
        $scope.$digest();
      });
    }

    $scope.saveTask = function() {
      var task = {name: $scope.taskName};

      if($scope.taskId) {
        task.id = $scope.taskId;
        updateTask(task);
        return;
      }

      db.addRow('tasks', task, function(data) {
          task.id = data;
          $scope.tasks.push(task);
          $scope.taskName = null;
          $scope.$digest();
        });
    };

    function updateTask(task) {
      db.updateRow('tasks', task, function(data) {
        $scope.taskName = '';
        $scope.taskId = null;
        var idx = getRowIndex(data);
        $scope.tasks[idx] = task;
        $scope.$digest();
      });
    }

    $scope.removeTask = function(taskId) {
      $scope.tasks.forEach(function(obj, idx) {
        if(obj.id == taskId) {
          db.deleteRow('tasks', taskId, function() {
            $scope.tasks.splice(idx, 1);
            $scope.$digest();
          });
        }
      });
    };

    $scope.editTask = function(taskId) {
      $scope.taskId = taskId;
      var task = $scope.tasks.filter(function(task, idx) {
        if(task.id == taskId) return task;
      })[0];

      $scope.taskName = task.name;
    };

    loadTasks();

  }

  return Task;
});