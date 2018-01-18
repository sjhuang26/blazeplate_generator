// Generator index file
var Generator = require('yeoman-generator');
var classify = require('underscore.string/classify');
const ApplicationConfig = require('../resources/data.old.js')
const _ = require('lodash')

// // // //

module.exports = class extends Generator {

  // writing to file
  // TODO - remove hard-coded resource schema
  writing() {

    // Destination helpers & constants
    // let destinationRoot = './' + ApplicationConfig.identifier + '_build/'
    let destinationRoot = './dist/' + ApplicationConfig.identifier + '/'
    let vueSrc = destinationRoot + 'vuejs_client/src/'

    let routeImports = []
    let routeModules = []

    function buildImport (s) {
      routeImports.push(`import { ${ s.label }ListRoute, ${ s.label }ShowRoute, ${ s.label }NewRoute, ${ s.label }EditRoute } from './${ s.identifier }'`)
    }

    function buildModule (s) {
      routeModules.push(`${ s.label }ListRoute`)
      routeModules.push(`${ s.label }NewRoute`)
      routeModules.push(`${ s.label }EditRoute`)
      routeModules.push(`${ s.label }ShowRoute`)
    }

    // client/src/store/index.js
    // TODO - move into separate generator class definition
    // _.each(ApplicationConfig.schemas, (s) => {
    //   buildImport(s)
    //   buildModule(s)
    // })

    this.fs.copyTpl(
      this.templatePath('app_navbar.vue'),
      this.destinationPath(vueSrc + 'containers/app_navbar/components/layout.vue'),
      { appSchema: ApplicationConfig }
    );

  }

};
