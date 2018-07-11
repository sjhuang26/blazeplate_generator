const Generator = require('../util/generator')
const FalconAppBase = require('./falcon_app_base')

module.exports = class Falcon extends Generator {
  async write () {
    await this.composeWith(FalconAppBase)
  }
}