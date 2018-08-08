// TODO - this file should be retired
const Codotype = require('./generators/app')

// Invoke Codotype directly with the ToDo List example
new Codotype({
  appconfig: require('./examples/todo-list.json'),
  buildId: 'app_5acfeea85535afdb753d55f7'
}).write()