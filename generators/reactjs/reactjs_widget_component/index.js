const Generator = require('../../util/generator');

module.exports = class ReactJSWidgetComponent extends Generator {
  async write() {
    const rootDest = this.options.build.dest.client.src;

    for (let schema of this.options.build.app.schemas) {
      const dest = rootDest + schema.identifier + '/';
      await this.ensureDir(dest);
      await this.copyTemplate(
        this.templatePath(__dirname, 'list.js'),
        this.destinationPath(dest + schema.class_name + 'ListWidget.js'),
        { schema }
      )
      await this.copyTemplate(
        this.templatePath(__dirname, 'show.js'),
        this.destinationPath(dest + schema.class_name + 'ShowWidget.js'),
        { schema }
      )
    }
  }
}
