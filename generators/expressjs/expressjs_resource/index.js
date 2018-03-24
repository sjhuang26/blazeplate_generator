const Generator = require('yeoman-generator')

// // // //

module.exports = class extends Generator {

  // writing to file
  writing() {

    // Destination helpers & constants
    let dest = this.options.build.dest.expressjs.root

    // Iterates over each schema in the this.options.build.app.schemas array
    for (var i = this.options.build.app.schemas.length - 1; i >= 0; i--) {

      // Isolates the individual schema
      let schema = this.options.build.app.schemas[i]

      // server/api/resource/resource.model.js
      // TODO - find related schemas BEFORE rendering this template
      // let relatedSchema = _.find(allSchemas, { _id: attr.datatypeOptions.schema_id })
      this.fs.copyTpl(
        this.templatePath('resource.model.js'),
        this.destinationPath(dest + 'server/api/' + schema.identifier + '/' + schema.identifier + '.model.js'),
        { schema: schema }
      );

      // server/api/resource/resource.controller.js
      this.fs.copyTpl(
        this.templatePath('resource.controller.js'),
        this.destinationPath(dest + 'server/api/' + schema.identifier + '/' + schema.identifier + '.controller.js'),
        { schema: schema }
      );

      // server/api/resource/index.js
      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath(dest + 'server/api/' + schema.identifier + '/index.js'),
        { schema: schema }
      );

    } // End loop
  }

};

