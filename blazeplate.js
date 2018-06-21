let Blazeplate = require('./generators/app')

// Invoke Blazeplate directly with the ToDo List example
new Blazeplate({
  appconfig: require('./examples/todo-list.json'),
  buildId: 'app_5acfeea85535afdb753d55f7'
}).write()