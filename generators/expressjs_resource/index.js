// Generator index file
var Generator = require('yeoman-generator');
var classify = require('underscore.string/classify');

// // // //

module.exports = class extends Generator {

  prompting() {
    return this.prompt([
      {
        type    : 'input',
        name    : 'name',
        message : 'Your resource name (i.e. user, blog_post, device_version, etc.)',
        default : 'post' // Default to current folder name
      },
      {
        type    : 'input',
        name    : 'route',
        message : 'Your resource API route (i.e. users, blog_posts, device_versions, etc.)',
        default : 'posts' // Default to current folder name
      }
    ]).then((answers) => {
      this.name = answers.name.toLowerCase()
      this.route = answers.route.toLowerCase()
      this.title = classify(this.name)
    });
  }

  // writing to file
  paths() {
    this.destinationRoot();
    this.destinationPath('index.js')
  }

  // writing to file
  writing() {

    // server/api/resource/resource.model.js
    this.fs.copyTpl(
      this.templatePath('resource.model.js'),
      this.destinationPath('../server/api/' + this.name + '/' + this.name + '.model.js'),
      { resource_name: this.name, resource_title: this.title, resource_route: this.route }
    );

    // server/api/resource/resource.controller.js
    this.fs.copyTpl(
      this.templatePath('resource.controller.js'),
      this.destinationPath('../server/api/' + this.name + '/' + this.name + '.controller.js'),
      { resource_name: this.name, resource_title: this.title, resource_route: this.route }
    );

    // server/api/resource/index.js
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('../server/api/' + this.name + '/index.js'),
      { resource_name: this.name, resource_title: this.title, resource_route: this.route }
    );

    // Logs instructions to the user
    console.log(`\n\n Done! \n Add the following line to /server/routes.js \n (under 'Bootstrap API routes'): \n\n \t router.use('/${this.route}', require('./api/${this.name}')) \n\n`)

  }

};

