// Generator index file
var Generator = require('yeoman-generator');
var classify = require('underscore.string/classify');

// // // //

module.exports = class extends Generator {

  // writing to file
  paths() {
    this.destinationRoot();
    this.destinationPath('index.js')
  }

  // writing to file
  writing() {

    // client/src/containers/resource_list/index.vue
    this.fs.copyTpl(
      this.templatePath('index.vue'),
      this.destinationPath('../src/containers/' + this.name + '_list/index.vue'),
      { resource_name: this.name, resource_title: this.title, resource_route: this.route }
    );

    // client/src/containers/resource_list/layout.vue
    this.fs.copyTpl(
      this.templatePath('components/layout.vue'),
      this.destinationPath('../src/containers/' + this.name + '_list/components/layout.vue'),
      { resource_name: this.name, resource_title: this.title, resource_route: this.route }
    );

    // client/src/containers/resource_list/components/list.vue
    this.fs.copyTpl(
      this.templatePath('components/list.vue'),
      this.destinationPath('../src/containers/' + this.name + '_list/components/list.vue'),
      { resource_name: this.name, resource_title: this.title, resource_route: this.route }
    );

  }

};

