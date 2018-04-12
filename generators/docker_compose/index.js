const _ = require('lodash')
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  writing() {

    // Returns boolean wether or not there is seed data
    // TODO - this is repeated in more than one place
    // it should be abstracted into some shared location
    function hasSeedData (build) {
      let hasSeeds = false
      _.each(build.app.seed_data, (s) => {
        if (s.records.length) {
          hasSeeds = true
        }
      })
      return hasSeeds
    }

    // generated/docker-compose-dev.yml
    this.fs.copyTpl(
      this.templatePath('docker-compose-dev.yml'),
      this.destinationPath(this.options.build.dest.root + 'docker-compose-dev.yml'),
      { container_name_prefix: this.options.build.app.identifier, seedData: hasSeedData(this.options.build) }
    )

    // generated/docker-compose-demo.yml
    this.fs.copyTpl(
      this.templatePath('docker-compose-demo.yml'),
      this.destinationPath(this.options.build.dest.root + 'docker-compose-demo.yml'),
      { container_name_prefix: this.options.build.app.identifier, seedData: hasSeedData(this.options.build) }
    )

    // generated/demo.sh
    this.fs.copyTpl(
      this.templatePath('demo.sh'),
      this.destinationPath(this.options.build.dest.root + 'demo.sh'),
      {}
    )

  }
}