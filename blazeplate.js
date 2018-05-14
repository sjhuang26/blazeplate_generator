let Blazeplate = require('./generators/app')

// Invoke Blazeplate directly
new Blazeplate({
  appconfig: require('./configs/example_04.json'),
  buildId: 'app_5acfeea85535afdb753d55f7'
}).write()