const Generator = require('../util/generator')
const ReactJsAppBase = require('./reactjs_app_base')

module.exports = class ReactJs extends Generator {
  async write () {
    await this.composeWith(ReactJsAppBase)
  }
}