const Generator = require('../../util/generator')

// // // //

module.exports = class ReactJsBase extends Generator {
  async write () {

    // Defines requisite destination variables
    this.options.build.dest.client.root = this.options.build.dest.root + 'react_client/'
    this.options.build.dest.client.src = this.options.build.dest.client.root + 'src/'

    // Ensures presence of client directory
    await this.ensureDir(this.options.build.dest.client.root)

    // Copies application base templates
    await this.copyDir(
      __dirname + '/templates',
      this.options.build.dest.client.root
    )

  }
}

