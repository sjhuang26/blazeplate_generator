// Generator index file
var Generator = require('../../util/generator');
var classify = require('underscore.string/classify');

// // // //

module.exports = class VueJsShowContainer extends Generator {

  async write() {

    let vueSrc = this.options.build.dest.vue.src

    // Iterates over each schema in the this.options.build.app.schemas array
    for (var i = this.options.build.app.schemas.length - 1; i >= 0; i--) {

      // Isolates the individual schema
      let schema = this.options.build.app.schemas[i]

      await this.ensureDir(vueSrc + 'containers/' + schema.identifier + '_show')

      // Isolates RelationlalViews for show container
      let relationalViews = []
      for (index in schema.attributes) {
        let attr = schema.attributes[index]
        if (attr.datatype === 'RELATION') {

          let relation = {
            name: '',
            type: 'LIST'
          }

          if (attr.datatypeOptions.relationType === 'HAS_MANY') {
            relation.name = `${attr.datatypeOptions.schema_class_name}ListWidget`
            relation.type = 'LIST'
          } else if (attr.datatypeOptions.relationType === 'OWNS_MANY') {
            relation.name = `${attr.datatypeOptions.schema_class_name}ListWidget`
            relation.type = 'LIST'
          } else {
            relation.name = `${attr.datatypeOptions.schema_class_name}ShowWidget`
            relation.type = 'LIST'
          }

          relationalViews.push(relation)
        }
      }

      console.log(relationalViews[0])

      // client/src/containers/resource_show/index.vue
      await this.copyTemplate(
        this.templatePath(__dirname, 'index.vue'),
        this.destinationPath(vueSrc + 'containers/' + schema.identifier + '_show/index.vue'),
        { schema, relationalViews }
      );

    } // END LOOP

  }

};

