define(['zondb'], function(zonDB) {
  var todoDB = new zonDB('todoDB', 1);

  todoDB.addTable({
    tableName: 'tasks',
    autoIncrement: true,
    keyPath: 'id'
  });

  function getTasks(cb) {
    todoDB.query('tasks', cb);
  }

  function saveTask(task, cb) {
    todoDB.addRow('tasks', task, cb);
  }

  function updateTask(task, cb) {
    todoDB.updateRow('tasks', task, cb);
  }

  function removeTask(taskId, cb) {
    todoDB.deleteRow('tasks', taskId, cb);
  }

  todoDB.open();
  return todoDB;
});

