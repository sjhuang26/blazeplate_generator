let Blazeplate = require('./generators/app')

// TODO - pass build configuration into Blazeplate Generator directly,
// Replace appconfig & fs.readFile() code
new Blazeplate({
  appconfig: './configs/example_04.json',
  buildId: 'app_5acfeea85535afdb753d55f7'
}).write()