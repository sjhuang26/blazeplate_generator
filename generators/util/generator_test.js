const Generator = require('./generator')

// BlazeplateGenerator class definition
module.exports = class extends Generator {
  // TODO - this should be an async method...
  writing (options) {
    console.log('WRITING in TEST CLASS')
  }
}