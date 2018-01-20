// Generator index file
var Generator = require('yeoman-generator')

module.exports = class extends Generator {

  // writing to file
  writing() {

    // generated/docker-compose.yml
    this.fs.copyTpl(
      this.templatePath('docker-compose.yml'),
      this.destinationPath(this.options.build.dest.root + 'docker-compose.yml'),
      {}
    )

  }

}