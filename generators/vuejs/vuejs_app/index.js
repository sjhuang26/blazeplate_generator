const Generator = require('yeoman-generator')

// // // //

module.exports = class extends Generator {

  // writing to file
  writing() {

    // client/**/*
    this.fs.copy(
      this.templatePath('./'),
      this.destinationPath(this.options.build.dest.vue.root)
    );

    // client/.* (dotfiles)
    this.fs.copy(
      this.templatePath('./.*'),
      this.destinationPath(this.options.build.dest.vue.root)
    );

  }

};

