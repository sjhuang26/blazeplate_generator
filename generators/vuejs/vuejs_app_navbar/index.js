const _ = require('lodash')
const Generator = require('yeoman-generator')
const classify = require('underscore.string/classify')

// // // //

module.exports = class extends Generator {

  // writing to file
  // TODO - remove hard-coded resource schema
  writing() {

    let app = this.options.build.app
    let destinationRoot = this.options.build.dest.root
    let vueSrc = this.options.build.dest.vue.src

    let headerLinks = []

    function buildHeaderLink (s) {
      headerLinks.push({ text: s.label_plural, href: '#/' + s.identifier_plural })
    }

    // client/src/store/index.js
    _.each(app.schemas, (s) => {
      buildHeaderLink(s)
    })


    this.fs.copyTpl(
      this.templatePath('app_navbar.vue'),
      this.destinationPath(vueSrc + 'containers/app_navbar/components/layout.vue'),
      { appSchema: app, headerLinks: headerLinks }
    );

  }

};
