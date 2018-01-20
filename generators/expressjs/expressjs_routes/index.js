const Generator = require('yeoman-generator')

// // // //

module.exports = class extends Generator {

  // writing to file
  writing() {

    this.fs.copyTpl(
      this.templatePath('routes.js'),
      this.destinationPath(this.options.build.dest.expressjs.root + 'server/routes.js'),
      { appSchema: this.options.build.app }
    );

  }

}