const _ = require('lodash')
const fs = require('fs')
const Helpers = require('../util/helpers')
const BlazeplateGenerator = require('../util/generator')
const Generators = require('./generators')
const classify = require('underscore.string/classify')

// // // //

module.exports = class extends BlazeplateGenerator {

  // constructor
  // Sets required input parameters
  constructor(options) {

    // Invokes super
    super(options)

    // // // //
    // TODO - abstract this into helpers.js

    // Global build configuration
    let build = {
      dest: {
        id: '',
        root: null,
        out: '',
        vue: {},
        expressjs: {}
      }
    }

    // Debugging
    console.log('APP CONFIG')
    console.log(options)

    // TODO - Yoeman argument/option best practices
    let rawConfig = fs.readFileSync(options['appconfig'])
    build.app = JSON.parse(rawConfig)

    // Isolates the buildId
    const buildId = options['buildId']
    build.id = buildId

    // // // //
    // Destination helpers & constants
    // TODO - use this.env.cwd & path library, instead of hardcoded relative path
    build.dest.out = './build/' + buildId + '/'
    build.dest.root = build.dest.out + build.app.identifier + '/'

    // VueJS
    build.dest.vue.root = build.dest.root + 'web_client/'
    build.dest.vue.src = build.dest.vue.root + 'src/'

    // ExpressJS
    build.dest.expressjs.root = build.dest.root + 'web_api/'

    //
    // // // //

    // Sets this.options.build
    this.options = { build: Helpers.formatBuild(build) }
    // console.log('DONE WITH CONSTRUCTOR')

    return this

  }

  // TODO - compose this of SMALLER Vue/Express specific generators
  // TODO - is there a way to conditionally run a generator?
  async write () {

    console.log('GENERATING')
    console.log(this.options)

    // Creates project build directories
    // await this.ensureDir(this.options.build.dest.out)
    await this.ensureDir(this.options.build.dest.root)

    // Formats build before generation to minimize repeated code and formatting
    // let build = formatBuild(this.options.build)


    // TODO - replace Yoeman with mem-fs-editor & custom build system
    // https://github.com/SBoudrias/mem-fs-editor

    // Client - VueJS
    // await this.composeWith(require.resolve('../vuejs/vuejs_app'), { build });
    // await this.composeWith(require.resolve('../vuejs/vuejs_app_navbar'), { build });
    // await this.composeWith(require.resolve('../vuejs/vuejs_app_router'), { build });
    // await this.composeWith(require.resolve('../vuejs/vuejs_app_store'), { build });
    // await this.composeWith(require.resolve('../vuejs/vuejs_auth'), { build });
    // await this.composeWith(require.resolve('../vuejs/vuejs_form_component'), { build });
    // await this.composeWith(require.resolve('../vuejs/vuejs_new_container'), { build });
    // await this.composeWith(require.resolve('../vuejs/vuejs_edit_container'), { build });
    // await this.composeWith(require.resolve('../vuejs/vuejs_list_container'), { build });
    // await this.composeWith(require.resolve('../vuejs/vuejs_router'), { build });
    // await this.composeWith(require.resolve('../vuejs/vuejs_show_container'), { build });
    // await this.composeWith(require.resolve('../vuejs/vuejs_store'), { build });

    // Server - ExpressJS
    await this.composeWith(Generators.ExpressJS)

    // Infrastructure & Seed Data
    await this.composeWith(Generators.SeedData);
    await this.composeWith(Generators.DockerCompose);
    console.log('GENERATED ALL')

  }

};
