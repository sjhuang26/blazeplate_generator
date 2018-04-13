// Generator index file
var Generator = require('yeoman-generator');
var classify = require('underscore.string/classify');

// // // //

module.exports = class extends Generator {

  writing() {

    let vueSrc = this.options.build.dest.vue.src

    // Iterates over each schema in the this.options.build.app.schemas array
    for (var i = this.options.build.app.schemas.length - 1; i >= 0; i--) {

      // Isolates the individual schema
      let schema = this.options.build.app.schemas[i]

      // client/src/containers/resource_edit/index.vue
      this.fs.copyTpl(
        this.templatePath('index.vue'),
        this.destinationPath(vueSrc + 'containers/' + schema.identifier + '_edit/index.vue'),
        { schema: schema }
      )

    } // END LOOP

  }

};

