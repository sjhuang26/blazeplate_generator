const Generator = require('yeoman-generator')

// // // //

module.exports = class extends Generator {

  // writing to file
  writing() {

    // TOOD - deprecate ApplicationConfig
    let ApplicationConfig = this.options.build.app

    // Destination helpers & constants
    let destinationRoot = this.options.build.dest.root

    // Iterates over each schema in the ApplicationConfig.schemas array
    for (var i = ApplicationConfig.schemas.length - 1; i >= 0; i--) {

      // Isolates the individual schema
      let schema = ApplicationConfig.schemas[i]

      // server/api/resource/resource.model.js
      this.fs.copyTpl(
        this.templatePath('resource.model.js'),
        this.destinationPath(destinationRoot + 'expressjs/server/api/' + schema.identifier + '/' + schema.identifier + '.model.js'),
        { schema: schema }
      );

      // server/api/resource/resource.controller.js
      this.fs.copyTpl(
        this.templatePath('resource.controller.js'),
        this.destinationPath(destinationRoot + 'expressjs/server/api/' + schema.identifier + '/' + schema.identifier + '.controller.js'),
        { schema: schema }
      );

      // server/api/resource/index.js
      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath(destinationRoot + 'expressjs/server/api/' + schema.identifier + '/index.js'),
        { schema: schema }
      );

    } // End loop
  }

};

