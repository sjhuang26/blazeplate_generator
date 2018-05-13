const Generator = require('./generator')
const MyGenerator = require('./generator_test')
const VueGenerator = require('./generator_test_vue')

module.exports = class extends Generator {
  async write () {

    console.log('RUNNING TEST')
    await this.composeWith(MyGenerator)
    await this.composeWith(VueGenerator)
    console.log('DONE')

  }
}