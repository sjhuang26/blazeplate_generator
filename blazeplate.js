let BlazeplateGenerator = require('./generators/app')

new BlazeplateGenerator({ appconfig: './configs/example_04.json', buildId: 'app_5acfeea85535afdb753d55f7' }).write()