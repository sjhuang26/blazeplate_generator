// Generator index file
var Generator = require('yeoman-generator');
var classify = require('underscore.string/classify');
// const ApplicationConfig = require('./data')
const ApplicationConfig = require('./data.old.js')
const _ = require('lodash')

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

  // TODO - compose this of SMALLER Vue/Express specific generators
  // TODO - is there a way to conditionally run a generator?
  initializing(){
    this.composeWith(require.resolve('../vuejs_app_router'));
  }

  prompting() {
    // return this.prompt([
    //   // {
    //   //   type    : 'input',
    //   //   name    : 'name',
    //   //   message : 'Your resource name (i.e. user, blog_post, device_version, etc.)',
    //   //   default : 'blog_post' // Default to current folder name
    //   // }
    // ]).then((answers) => {
    // });
  }

  // writing to file
  // TODO - remove hard-coded resource schema
  writing() {

    // Destination helpers & constants
    // let destinationRoot = './' + ApplicationConfig.identifier + '_build/'
    let destinationRoot = './dist/' + ApplicationConfig.identifier + '/'
    let vueSrc = destinationRoot + 'vuejs_client/src/'

    // // // //
    // DOCKER-COMPOSE FILE
    if (generateDockerCompose) {

      // generated/docker-compose.yml
      this.fs.copyTpl(
        this.templatePath('../../docker_compose/templates/docker-compose.yml'),
        this.destinationPath(destinationRoot + 'docker-compose.yml'),
        {}
      );

    }

    // // // //
    // VUE.JS APPLICATION
    if (generateVue) {

      // client/**/*
      this.fs.copy(
        this.templatePath('../../vuejs_app/templates/'),
        this.destinationPath(destinationRoot + 'vuejs_client/')
      );

      // client/.*
      this.fs.copy(
        this.templatePath('../../vuejs_app/templates/.*'),
        this.destinationPath(destinationRoot + 'vuejs_client/')
      );

      // client/src/store/index.js
      // TODO - move into separate generator class definition
      let storeModules = []
      _.each(ApplicationConfig.schemas, (s) => {
        storeModules.push(s.identifier)
      })
      // for (index in appSchema.schemas) { %>
      // appSchema.schemas[index].identifier %><% if (index !== appSchema.schemas.length) { %>,<% }%>

      this.fs.copyTpl(
        this.templatePath('../../vuejs_store/templates/index.js'),
        this.destinationPath(vueSrc + '/store/index.js'),
        { appSchema: ApplicationConfig, storeModules: storeModules.join(",\n    ")  } // TODO - constantize indentation size?
      );

    }

    // // // //
    // EXPRESS.JS APPLICATION
    if (generateExpress) {

      // server/**/*
      this.fs.copy(
        this.templatePath('../../expressjs_app/templates/'),
        this.destinationPath(destinationRoot + 'expressjs/')
      );

      // server/routes.js
      this.fs.copyTpl(
        this.templatePath('../../expressjs_routes/templates/routes.js'),
        this.destinationPath(destinationRoot + 'expressjs/server/routes.js'),
        { appSchema: ApplicationConfig }
      );

      // server/README.md
      // this.fs.copyTpl(
      //   this.templatePath('../../expressjs_resource/templates/index.js'),
      //   this.destinationPath('./generated/server/api/' + schema.identifier + '/index.js'),
      //   { appSchema: ApplicationConfig }
      // );

    }

    // // // //
    // HANDLE ATTRIBUTES

    // Iterates over each schema in the ApplicationConfig.schemas array
    for (var i = ApplicationConfig.schemas.length - 1; i >= 0; i--) {

      // Isolates the individual schema
      let schema = ApplicationConfig.schemas[i]

      // // // //
      // VUE -> LIST CONTAINER
      if (generateList) {
        // client/src/containers/resource_list/index.vue
        this.fs.copyTpl(
          this.templatePath('../../list_container/templates/index.vue'),
          this.destinationPath(vueSrc + 'containers/' + schema.identifier + '_list/index.vue'),
          { schema: schema }
        );

        // client/src/containers/resource_list/layout.vue
        this.fs.copyTpl(
          this.templatePath('../../list_container/templates/components/layout.vue'),
          this.destinationPath(vueSrc + 'containers/' + schema.identifier + '_list/components/layout.vue'),
          { schema: schema }
        );

        // client/src/containers/resource_list/components/list.vue
        this.fs.copyTpl(
          this.templatePath('../../list_container/templates/components/list.vue'),
          this.destinationPath(vueSrc + 'containers/' + schema.identifier + '_list/components/list.vue'),
          { schema: schema  }
        );
      }

      // // // //
      // VUE -> SHOW CONTAINER
      if (generateShow) {
        // client/src/containers/resource_show/index.vue
        this.fs.copyTpl(
          this.templatePath('../../show_container/templates/index.vue'),
          this.destinationPath(vueSrc + 'containers/' + schema.identifier + '_show/index.vue'),
          { schema: schema  }
        );

        // client/src/containers/resource_show/layout.vue
        this.fs.copyTpl(
          this.templatePath('../../show_container/templates/components/layout.vue'),
          this.destinationPath(vueSrc + 'containers/' + schema.identifier + '_show/components/layout.vue'),
          { schema: schema  }
        );
      }

      // // // //
      // VUE -> EDIT CONTAINER
      if (generateEdit) {
        // client/src/containers/resource_edit/index.vue
        this.fs.copyTpl(
          this.templatePath('../../edit_container/templates/index.vue'),
          this.destinationPath(vueSrc + 'containers/' + schema.identifier + '_edit/index.vue'),
          { schema: schema }
        );

        // client/src/containers/resource_edit/layout.vue
        this.fs.copyTpl(
          this.templatePath('../../edit_container/templates/components/layout.vue'),
          this.destinationPath(vueSrc + 'containers/' + schema.identifier + '_edit/components/layout.vue'),
          { schema: schema }
        );
      }

      // // // //
      // VUE -> NEW_CONTAINER
      if (generateNew) {

        // client/src/containers/resource_new/index.vue
        this.fs.copyTpl(
          this.templatePath('../../new_container/templates/index.vue'),
          this.destinationPath(vueSrc + 'containers/' + schema.identifier + '_new/index.vue'),
          { schema: schema }
        );

        // client/src/containers/resource_new/layout.vue
        this.fs.copyTpl(
          this.templatePath('../../new_container/templates/components/layout.vue'),
          this.destinationPath(vueSrc + 'containers/' + schema.identifier + '_new/components/layout.vue'),
          { schema: schema }
        );
      }

      // // // //
      // VUE -> ROUTER
      if (generateRouter) {
        // client/src/routers/resource.js
        this.fs.copyTpl(
          this.templatePath('../../router/templates/router.js'),
          this.destinationPath(vueSrc + 'routers/' + schema.identifier + '.js'),
          { schema: schema }
        );
      }

      // // // //
      // VUE -> STORE
      if (generateStore) {
        // client/src/store/resource/actions.js
        this.fs.copyTpl(
          this.templatePath('../../store/templates/actions.js'),
          this.destinationPath(vueSrc + 'store/' + schema.identifier + '/actions.js'),
          { schema: schema }
        );

        // client/src/store/resource/factory.js
        this.fs.copyTpl(
          this.templatePath('../../store/templates/factory.js'),
          this.destinationPath(vueSrc + 'store/' + schema.identifier + '/factory.js'),
          { schema: schema }
        );

        // client/src/store/resource/getters.js
        this.fs.copyTpl(
          this.templatePath('../../store/templates/getters.js'),
          this.destinationPath(vueSrc + 'store/' + schema.identifier + '/getters.js'),
          { schema: schema }
        );

        // client/src/store/resource/index.js
        this.fs.copyTpl(
          this.templatePath('../../store/templates/index.js'),
          this.destinationPath(vueSrc + 'store/' + schema.identifier + '/index.js'),
          { schema: schema }
        );

        // client/src/store/resource/mutations.js
        this.fs.copyTpl(
          this.templatePath('../../store/templates/mutations.js'),
          this.destinationPath(vueSrc + 'store/' + schema.identifier + '/mutations.js'),
          { schema: schema }
        );

        // client/src/store/resource/state.js
        this.fs.copyTpl(
          this.templatePath('../../store/templates/state.js'),
          this.destinationPath(vueSrc + 'store/' + schema.identifier + '/state.js'),
          { schema: schema }
        );
      }

      // // // //
      // EXPRESS.JS RESOURCES

      // EXPRESS -> Model, Controller, API Router
      if (generateExpressResources) {

        // server/api/resource/resource.model.js
        this.fs.copyTpl(
          this.templatePath('../../expressjs_resource/templates/resource.model.js'),
          this.destinationPath(destinationRoot + 'expressjs/server/api/' + schema.identifier + '/' + schema.identifier + '.model.js'),
          { schema: schema }
        );

        // server/api/resource/resource.controller.js
        this.fs.copyTpl(
          this.templatePath('../../expressjs_resource/templates/resource.controller.js'),
          this.destinationPath(destinationRoot + 'expressjs/server/api/' + schema.identifier + '/' + schema.identifier + '.controller.js'),
          { schema: schema }
        );

        // server/api/resource/index.js
        this.fs.copyTpl(
          this.templatePath('../../expressjs_resource/templates/index.js'),
          this.destinationPath(destinationRoot + 'expressjs/server/api/' + schema.identifier + '/index.js'),
          { schema: schema }
        );

      }

    }

  }

};
