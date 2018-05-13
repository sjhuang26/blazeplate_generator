const fsExtra = require('fs-extra')

// // // //

// BlazeplateGenerator class definition
module.exports = class BlazeplateGenerator {
  constructor(options) {
    // console.log('NEW BP Generator')
    // console.log(options)

    // Assigns helper libraries to class variables
    this.fs = fsExtra

    // Assigns this.options
    // TODO - should this be `this.build`
    this.options = options;
    return this
  }

  // write
  // Method for write files to the filesystem
  async write () {
    console.log('NOTHING TO WRITE')
  }

  async composeWith (generatorClass) {
    let generatorInstance = new generatorClass(this.options)
    return generatorInstance.write()
  }

}