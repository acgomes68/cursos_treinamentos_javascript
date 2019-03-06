(function(window) {
  //tries to get the indexedDB object wherever it is (if it exists)
  if(!window.indexedDB) {
    window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
  }

  //tries to open a database connection, configuring stuff like the "tables" (objectStores),
  //sets global error messages and get things ready to be executed whenever the connection has been estabilished
  function open(cb) {
    var that = this;
    this.request = indexedDB.open(this.name, this.version);

    this.request.onsuccess = function(ev) {
      that.dbReady = true;
      that.db = this.result;

      //global error
      that.db.onerror = function(ev) {
        cb(ev.target.error);
      };

      that.actionsToBeExecuted.forEach(function(el) {
        el(that.db);
      });
      that.actionsToBeExecuted.length = 0;

      if(cb) cb(null, ev.target.result);
    };

    this.request.onerror = function(ev) {
      if(cb) cb(ev.target.error);
    };

    this.request.onupgradeneeded = function(ev) {
      var db = ev.target.result,
          tbData, tbName;

      that.tablesToBeAdded.forEach(function(el) {
        tbName = el.tableName;
        delete el.name;
        db.createObjectStore(tbName, el);
      });
      that.tablesToBeAdded.length = 0;

      that.tablesToBeRemoved.forEach(function(el) {
        db.deleteObjectStore(el);
      });
      that.tablesToBeRemoved.length = 0;
    };
  }

  //gets a database transaction and passes it to a callback function
  function getTransaction(tables, cb) {
    if(this.dbReady) {
      cb(this.db.transaction(tables, 'readwrite'));
    } else {
      this.actionsToBeExecuted.push(function(db) {
        cb(db.transaction(tables, 'readwrite'));
      });
    }
  }

  //gets a database table and passes it to a callback function
  function getTable(tablename, cb) {
    this.getTransaction(tablename, function(xa) {
      cb(xa.objectStore(tablename));
    });
  }

  //adds a new row indto a table
  function addRow(tablename, row, cb) {
    this.getTable(tablename, function(tb) {
      tb.add(row).onsuccess = function(ev) {
        cb(ev.target.result);
      };
    });
  }

  //updates the fields of a row
  function updateRow(tablename, row, cb) {
    this.getTable(tablename, function(tb) {
      tb.put(row).onsuccess = function(ev) {
        cb(ev.target.result);
      };
    });
  }

  //removes a row from a table
  function deleteRow(tablename, rowId, cb) {
    this.getTable(tablename, function(tb) {
      tb.delete(rowId).onsuccess = function(ev) {
        cb(ev.target.result);
      };
    });
  }

  //creates a cursor and tries to iterate over the results, and then passes it to a callback function
  function query(tablename, cb) {
    var result = [];
    this.getTable(tablename, function(tb) {
      tb.openCursor().onsuccess = function(ev) {
        var cursor = ev.target.result;

        if(cursor) {
          result.push(cursor.value);
          cursor.continue();
        } else {
          cb(result);
        }
      };
    });
  }

  //adds a new "table" to the database. it requires DB version to be increased
  function addTable(options) {
    this.tablesToBeAdded.push(options);
    return this;
  }

  //removes a "table" from the database. it requires DB version to be increased
  function removeTable(tbName) {
    this.tablesToBeRemoved.push(tbName);
    return this;
  }

  function zonDB(dbName, dbVersion) {
    this.db = null;
    this.name = dbName;
    this.version = dbVersion;
    this.request = null;
    this.dbReady = false;
    this.tablesToBeAdded = [];
    this.tablesToBeRemoved = [];
    this.actionsToBeExecuted = [];
  }

  zonDB.prototype = {
    open: open,
    addTable: addTable,
    removeTable: removeTable,
    getTransaction: getTransaction,
    getTable: getTable,
    query: query,
    addRow: addRow,
    insertRow: addRow,
    updateRow: updateRow,
    deleteRow: deleteRow,
    removeRow: deleteRow
  };

  window.zonDB = zonDB;
})(this);