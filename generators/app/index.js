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

  }

  // TODO - compose this of SMALLER Vue/Express specific generators
  // TODO - is there a way to conditionally run a generator?
  initializing(){

    // Fomats the build parameters for the generator
    // Mostly adds some additional metadata to each relation to simplify template rendering
    function formatBuild (build) {

        // Iterates over each schema
        build.app.schemas = _.map(build.app.schemas, (schema) => {

            // Iterates over all attributes, handles relations
            schema.attributes = _.map(schema.attributes, (attr) => {
                if (attr.datatype !== 'RELATION') return attr

                let relatedSchema = _.find(build.app.schemas, { _id: attr.datatypeOptions.schema_id })

                // console.log('REALTED SCHEMA???')
                // console.log(attr.datatypeOptions)
                // console.log(relatedSchema)

                // Pulls metadata from relatedSchema
                let { label, label_plural, identifier, identifier_plural, class_name } = relatedSchema
                attr.datatypeOptions.schema_label = label
                attr.datatypeOptions.schema_label_plural = label_plural
                attr.datatypeOptions.schema_identifier = identifier
                attr.datatypeOptions.schema_identifier_plural = identifier_plural
                attr.datatypeOptions.schema_class_name = class_name
                attr.datatypeOptions.lead_attr = relatedSchema.attributes[0].identifier
                return attr
            })

            return schema
        })

        // Defines the data to split up build.app.seeds by the records' respective schemas
        build.app.seed_data = {}
        _.each(build.app.schemas, (s) => {
            build.app.seed_data[s._id] = {
                identifier: s.identifier_plural,
                records: []
            }
        })

        // Iterates over each piece of seed data
        _.each(build.app.seeds, (seed) => {
            let seedObject = {}
            seedObject._id = { '$oid': seed._id }
            seedObject = {
                ...seedObject,
                ...seed.attributes
            }
            // Adds to build.app.seed_data object
            build.app.seed_data[seed.schema_id].records.push(seedObject)
        })

        return build
    }

    // Formats build before generation to minimize repeated code and formatting
    let build = formatBuild(this.options.build)

    // Client - VueJS
    this.composeWith(require.resolve('../vuejs/vuejs_app'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_app_navbar'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_app_router'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_app_store'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_auth'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_form_component'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_new_container'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_edit_container'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_list_container'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_router'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_show_container'), { build });
    this.composeWith(require.resolve('../vuejs/vuejs_store'), { build });

    // Server - ExpressJS
    this.composeWith(require.resolve('../expressjs/expressjs_app'), { build });
    this.composeWith(require.resolve('../expressjs/expressjs_routes'), { build });
    this.composeWith(require.resolve('../expressjs/expressjs_resource'), { build });

    // Infrastructure
    this.composeWith(require.resolve('../docker_compose'), { build });
    this.composeWith(require.resolve('../seed_data'), { build });

  }

};
