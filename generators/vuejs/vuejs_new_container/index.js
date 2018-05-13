// Generator index file
var Generator = require('../../util/generator');
var classify = require('underscore.string/classify');

// // // //

module.exports = class VueJsNewContainer extends Generator {

  async write() {

    let vueSrc = this.options.build.dest.vue.src

    // Iterates over each schema in the this.options.build.app.schemas array
    for (var i = this.options.build.app.schemas.length - 1; i >= 0; i--) {

      // Isolates the individual schema
      let schema = this.options.build.app.schemas[i]

      await this.ensureDir(vueSrc + 'containers/' + schema.identifier + '_new')

      // client/src/containers/resource_new/index.vue
      await this.copyTemplate(
        this.templatePath(__dirname, 'index.vue'),
        this.destinationPath(vueSrc + 'containers/' + schema.identifier + '_new/index.vue'),
        { schema: schema }
      )

    } // END LOOP

  }

};

