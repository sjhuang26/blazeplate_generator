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

      // client/src/store/resource/actions.js
      this.fs.copyTpl(
        this.templatePath('actions.js'),
        this.destinationPath(vueSrc + 'store/' + schema.identifier + '/actions.js'),
        { schema: schema }
      );

      // client/src/store/resource/getters.js
      this.fs.copyTpl(
        this.templatePath('getters.js'),
        this.destinationPath(vueSrc + 'store/' + schema.identifier + '/getters.js'),
        { schema: schema }
      );

      // client/src/store/resource/index.js
      this.fs.copyTpl(
        this.templatePath('index.js'),
        this.destinationPath(vueSrc + 'store/' + schema.identifier + '/index.js'),
        { schema: schema }
      );

      // client/src/store/resource/mutations.js
      this.fs.copyTpl(
        this.templatePath('mutations.js'),
        this.destinationPath(vueSrc + 'store/' + schema.identifier + '/mutations.js'),
        { schema: schema }
      );

      // client/src/store/resource/state.js
      this.fs.copyTpl(
        this.templatePath('state.js'),
        this.destinationPath(vueSrc + 'store/' + schema.identifier + '/state.js'),
        { schema: schema }
      );

    } // END LOOP

  }

};

