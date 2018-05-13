const Generator = require('./generator')

// BlazeplateGenerator class definition
module.exports = class extends Generator {
  async write () {
    console.log('WRITING in TEST CLASS VUE')
  }
}