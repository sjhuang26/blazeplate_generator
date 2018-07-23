const Generator = require('../../util/generator')

// // // //

module.exports = class FalconResource extends Generator {
  async write () {
    const dest = this.options.build.dest.server.root

    for (let schema of this.options.build.app.schemas) {
      await this.copyTemplate(
        this.templatePath(__dirname, 'resource.py'),
        this.destinationPath(dest + schema.identifier + '.py'),
        { schema: schema }
      )
    }
  }
}

