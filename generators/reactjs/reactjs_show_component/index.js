const Generator = require('../../util/generator');

module.exports = class ReactJSListComponent extends Generator {
  async write() {
    const dest = this.options.build.dest.client.src;

    for (let schema of this.options.build.app.schemas) {
      await this.copyTemplate(
        this.templatePath(__dirname, 'component.js'),
        this.destinationPath(dest + schema.class_name + 'Show.js'),
        { schema }
      )
    }
  }
}
