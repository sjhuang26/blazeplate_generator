// Generator index file
var Generator = require('yeoman-generator');
var classify = require('underscore.string/classify');
const ApplicationConfig = require('../resources/data.old.js')
const _ = require('lodash')

// // // //

module.exports = class extends Generator {

  // writing to file
  // TODO - remove hard-coded resource schema
  writing() {

    // Destination helpers & constants
    // let destinationRoot = './' + ApplicationConfig.identifier + '_build/'
    let destinationRoot = './dist/' + ApplicationConfig.identifier + '/'
    let vueSrc = destinationRoot + 'vuejs_client/src/'

    let headerLinks = []

    function buildHeaderLink (s) {
      headerLinks.push({ text: s.label_plural, href: '#/' + s.identifier_plural })
    }

    // client/src/store/index.js
    _.each(ApplicationConfig.schemas, (s) => {
      buildHeaderLink(s)
    })

    console.log(headerLinks)

    this.fs.copyTpl(
      this.templatePath('app_navbar.vue'),
      this.destinationPath(vueSrc + 'containers/app_navbar/components/layout.vue'),
      { appSchema: ApplicationConfig, headerLinks: headerLinks }
    );

  }

};
