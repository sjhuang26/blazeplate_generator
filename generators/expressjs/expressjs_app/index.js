const Generator = require('yeoman-generator')

// // // //

module.exports = class extends Generator {

  // writing to file
  writing() {

    // server/**/*
    this.fs.copy(
      this.templatePath('./'),
      this.destinationPath(this.options.build.dest.expressjs.root)
    );

    // server/.* (dotfiles)
    this.fs.copy(
      this.templatePath('./.*'),
      this.destinationPath(this.options.build.dest.expressjs.root)
    );

  }

}