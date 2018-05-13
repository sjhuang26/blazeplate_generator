const Generator = require('./generator')

module.exports = class extends Generator {
  async write () {
    return this.copyDir('./test/bar', './output/bar')
  }
}