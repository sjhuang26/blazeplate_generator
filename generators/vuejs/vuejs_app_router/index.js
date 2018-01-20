// Generator index file
var Generator = require('yeoman-generator');
var classify = require('underscore.string/classify');
let ApplicationConfig;
const _ = require('lodash')

// // // //

module.exports = class extends Generator {

  // writing to file
  // TODO - remove hard-coded resource schema
  writing() {

    ApplicationConfig = this.options.build.app

    // Destination helpers & constants
    let destinationRoot = this.options.build.dest.destinationRoot
    let vueSrc = this.options.build.dest.vueSrc

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
    _.each(ApplicationConfig.schemas, (s) => {
      buildImport(s)
      buildModule(s)
    })

    this.fs.copyTpl(
      this.templatePath('router.js'),
      this.destinationPath(vueSrc + 'routers/index.js'),
      { appSchema: ApplicationConfig, routeImports: routeImports.join("\n"), routeModules: routeModules.join(",\n    ")  } // TODO - constantize indentation size?
    );

  }

};
