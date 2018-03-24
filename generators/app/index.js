const _ = require('lodash')
const fs = require('fs')
const Generator = require('yeoman-generator')
const classify = require('underscore.string/classify')

// // // //

module.exports = class extends Generator {

  // constructor
  // Sets required input parameters
  constructor(args, opts) {
    super(args, opts);

    // Global build configuration
    let build = {
      dest: {
        root: null,
        vue: {},
        expressjs: {}
      }
    }

    // TODO - Yoeman argument/option best practices
    let rawConfig = fs.readFileSync(opts['appconfig'])
    build.app = JSON.parse(rawConfig)

    // // // //
    // Destination helpers & constants

    build.dest.root = './generated_apps/' + build.app.identifier + '/'

    // VueJS
    build.dest.vue.root = build.dest.root + 'web_client/'
    build.dest.vue.src = build.dest.vue.root + 'src/'

    // ExpressJS
    build.dest.expressjs.root = build.dest.root + 'web_api/'

    //
    // // // //

    // Sets this.options.build
    this.options.build = build
    console.log(build) // DEBUG

  }

  // TODO - compose this of SMALLER Vue/Express specific generators
  // TODO - is there a way to conditionally run a generator?
  initializing(){

    // TODO - format build before generation to minimize
    let build = this.options.build

    // Client - VueJS
    this.composeWith(require.resolve('../vuejs/vuejs_app'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_app_navbar'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_app_router'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_app_store'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_form_component'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_new_container'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_edit_container'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_list_container'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_router'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_show_container'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_store'), { build });

    // Server - ExpressJS
    this.composeWith(require.resolve('../expressjs/expressjs_app'), { build: this.options.build });
    this.composeWith(require.resolve('../expressjs/expressjs_routes'), { build: this.options.build });
    this.composeWith(require.resolve('../expressjs/expressjs_resource'), { build: this.options.build });

    // Infrastructure
    this.composeWith(require.resolve('../docker_compose'), { build: this.options.build });

  }

};
