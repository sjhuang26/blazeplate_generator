const _ = require('lodash')
const Generator = require('yeoman-generator')

// // // //

module.exports = class extends Generator {

  writing() {
    let app = this.options.build.app

    this.fs.copyTpl(
      this.templatePath('./store'),
      this.destinationPath(this.options.build.dest.vue.src + 'store'),
      { } // TODO - pass authentication options here
    );

    this.fs.copyTpl(
      this.templatePath('./containers'),
      this.destinationPath(this.options.build.dest.vue.src + 'containers'),
      { } // TODO - pass authentication options here
    );

  }

};

