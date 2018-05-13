const Generator = require('../util/generator')
const ExpressApp = require('./expressjs_app')
const ExpressResource = require('./expressjs_resource')
const ExpressRoutes = require('./expressjs_routes')

module.exports = class ExpressJS extends Generator {
  async write () {
    await this.composeWith(ExpressApp)
    await this.composeWith(ExpressResource)
    await this.composeWith(ExpressRoutes)
  }
}