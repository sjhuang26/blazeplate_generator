
# Blazeplate generate
# yo blazeplate --force --appconfig=./configs/example_01.json
yo blazeplate --force --appconfig=./configs/example_04.json --buildId=app_5acfeea85535afdb753d55f7

# JS Beautify
glob-run js-beautify --max_preserve_newlines 1 -r -s 2 'build/app_5acfeea85535afdb753d55f7/classroom_app/web_api/server/**/*.js'

# Turns whitespace markers into actual whitespace (SERVER)
rexreplace '// // // // BLAZEPLATE WHITESPACE\n' '\n' build/app_5acfeea85535afdb753d55f7/classroom_app/web_api/server/api/**/*.js
rexreplace '// // // // BLAZEPLATE WHITESPACE' '' build/app_5acfeea85535afdb753d55f7/classroom_app/web_api/server/api/**/*.js
# rexreplace '// // // // BLAZEPLATE WHITESPACE\n' '\n' build/app_5acfeea85535afdb753d55f7/classroom_app/web_api/server/api/**/*.controller.js
# rexreplace '// // // // BLAZEPLATE WHITESPACE\n' '\n' build/app_5acfeea85535afdb753d55f7/classroom_app/web_api/server/api/**/index.js

# rexreplace '// // // // BLAZEPLATE WHITESPACE' '' build/app_5acfeea85535afdb753d55f7/classroom_app/web_api/server/api/**/*.model.js
# rexreplace '// // // // BLAZEPLATE WHITESPACE' '' build/app_5acfeea85535afdb753d55f7/classroom_app/web_api/server/api/**/*.controller.js

# # # # #

# Client beautify
# glob-run js-beautify --max_preserve_newlines 1 -r -s 2 'build/app_5acfeea85535afdb753d55f7/classroom_app/web_client/src/**/*.js'

# Turns whitespace markers into actual whitespace (SERVER)
# rexreplace '// // // // BLAZEPLATE WHITESPACE\n' '\n' build/app_5acfeea85535afdb753d55f7/classroom_app/web_client/src/**/*.js
# rexreplace '// // // // BLAZEPLATE WHITESPACE' '' build/app_5acfeea85535afdb753d55f7/classroom_app/web_client/src/**/*.js

# # # # #

# Vue Beautify
# glob-run vue-beautify -r --max_preserve_newlines=0 -s=2 -a=1 -S=keep 'build/app_5acfeea85535afdb753d55f7/classroom_app/web_client/src/containers/**/*.vue'

# TODO - can we use ESLINT to auto-lint things like trailing commas?
