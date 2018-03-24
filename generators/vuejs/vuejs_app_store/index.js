const _ = require('lodash')
const Generator = require('yeoman-generator')

// // // //

module.exports = class extends Generator {

  writing() {
    let app = this.options.build.app

    // client/src/store/index.js
    // TODO - move into separate generator class definition
    let storeModules = []
    _.each(app.schemas, (s) => {
      storeModules.push(s.identifier)
    })

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath(this.options.build.dest.vue.src + 'store/index.js'),
      { appSchema: app, storeModules: storeModules.join(",\n    ")  } // TODO - constantize indentation size?
    );

    this.fs.copyTpl(
      this.templatePath('./lib'),
      this.destinationPath(this.options.build.dest.vue.src + 'store/lib'),
      { } // TODO - constantize indentation size?
    );

  }

};

