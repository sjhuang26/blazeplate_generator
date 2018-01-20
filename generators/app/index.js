const _ = require('lodash')
const fs = require('fs')
const Generator = require('yeoman-generator')
const classify = require('underscore.string/classify')

// TOOD - deprecate ApplicationConfig
let ApplicationConfig;

// // // //
// Appliation Flags

// Node/Express.js Server Application
let generateExpress = false
let generateExpressResources = false

// Vue.js Client Application
let generateVue = false
let generateStore = false
let generateRouter = false
let generateList = false
let generateShow = false
let generateEdit = false
let generateNew = false

// Infrastructure
let generateDockerCompose = false

// Set flags:
generateStore = true
generateRouter = true
generateList = true
generateShow = true
generateEdit = true
generateNew = true
generateVue = true

generateExpress = true
generateDockerCompose = true
generateExpressResources = true

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
    build.dest.vue.root = build.dest.root + 'vuejs_client/'
    build.dest.vue.src = build.dest.vue.root + 'src/'

    // ExpressJS
    build.dest.expressjs.root = build.dest.root + 'expressjs/'

    //
    // // // //

    // TODO - deprecate `ApplicationConfig`
    this.options.build = build
    console.log(build)
    ApplicationConfig = this.options.build.app

  }

  // TODO - compose this of SMALLER Vue/Express specific generators
  // TODO - is there a way to conditionally run a generator?
  initializing(){

    // Client - VueJS
    this.composeWith(require.resolve('../vuejs/vuejs_app'), { build: this.options.build });
    this.composeWith(require.resolve('../vuejs/vuejs_app_navbar'), { build: this.options.build });
    this.composeWith(require.resolve('../vuejs/vuejs_app_router'), { build: this.options.build });
    this.composeWith(require.resolve('../vuejs/vuejs_app_store'), { build: this.options.build });
    this.composeWith(require.resolve('../vuejs/vuejs_edit_container'), { build: this.options.build });
    this.composeWith(require.resolve('../vuejs/vuejs_list_container'), { build: this.options.build });
    this.composeWith(require.resolve('../vuejs/vuejs_new_container'), { build: this.options.build });
    this.composeWith(require.resolve('../vuejs/vuejs_router'), { build: this.options.build });
    this.composeWith(require.resolve('../vuejs/vuejs_show_container'), { build: this.options.build });
    this.composeWith(require.resolve('../vuejs/vuejs_store'), { build: this.options.build });

    // Server - ExpressJS
    this.composeWith(require.resolve('../expressjs/expressjs_app'), { build: this.options.build });
    this.composeWith(require.resolve('../expressjs/expressjs_routes'), { build: this.options.build });
    this.composeWith(require.resolve('../expressjs/expressjs_resource'), { build: this.options.build });

    // Infrastructure
    this.composeWith(require.resolve('../docker_compose'), { build: this.options.build });

  }

};
