const Generator = require('../../util/generator')

// // // //

module.exports = class VueJsHomeContainer extends Generator {
  async write () {

    let { ui_framework } = this.options.build.app.stack
    let options = { ui_framework }

    // Bootstrap or Onsen?
    let appTemplate = ''
    if (options.ui_framework.id === 'bootstrap') {
      appTemplate = 'home.bootstrap.vue'
    } else if (options.ui_framework.id === 'onsenui') {
      appTemplate = 'home.onsen.vue'
    }

    // web_client/src/containers/main_home/index.vue
    await this.copyTemplate(
      this.templatePath(__dirname, appTemplate),
      this.destinationPath(this.options.build.dest.vue.src + 'containers/main_home/index.vue'),
      { }
    );

  }
}

