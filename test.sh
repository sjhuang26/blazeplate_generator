yo blazeplate --force --appconfig=./configs/example_01.json
glob-run js-beautify --max_preserve_newlines 1 -r -s 2 'generated_apps/app_name/web_api/server/**/*.js'

# '**/*.html'
# glob-run cat src/\*.js