const Generator = require('../../util/generator');

module.exports = class ReactJsAppCore extends Generator {
  async write() {
    const dest = this.options.build.dest.client.src
    const appSchema = this.options.build.app

    console.log(this.options.build.app)
    await this.copyTemplate(
      this.templatePath(__dirname, 'app.js'),
      this.destinationPath(dest + 'app.js'),
      { d: 1, appSchema: appSchema }
    )
  }
}
