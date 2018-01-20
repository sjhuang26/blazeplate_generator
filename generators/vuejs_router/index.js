// Generator index file
var Generator = require('yeoman-generator');
var classify = require('underscore.string/classify');

// // // //

module.exports = class extends Generator {

  // writing to file
  writing() {

    // client/src/store/resource/actions.js
    this.fs.copyTpl(
      this.templatePath('router.js'),
      this.destinationPath('../src/routers/' + this.name + '.js'),
      { resource_name: this.name, resource_title: this.title, resource_route: this.route }
    );

    // Logs instructions
    let import_snippet = `import { ${this.title}ListRoute, ${this.title}ShowRoute, ${this.title}NewRoute, ${this.title}EditRoute } from './${this.name}'`
    let route_snippet = `
      ${this.title}ListRoute,
      ${this.title}ShowRoute,
      ${this.title}NewRoute,
      ${this.title}EditRoute,
    `

  }

};