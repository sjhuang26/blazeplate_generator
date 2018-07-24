const Generator = require('../util/generator')
const FlaskAppBase = require('./flask_app_base')

module.exports = class Flask extends Generator {
  async write () {
    await this.composeWith(FlaskAppBase)
  }
}
