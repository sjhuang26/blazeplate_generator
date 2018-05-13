const Generator = require('./generator')

module.exports = class extends Generator {
  async write () {
    return this.copyTemplate(
      './test/foo.js',
      './output/foo.js',
      { foo: this.options.build.foo }
    )
  }
}