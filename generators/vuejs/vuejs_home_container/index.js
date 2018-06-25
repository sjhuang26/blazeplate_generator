const Generator = require('../../util/generator')

// // // //

module.exports = class VueJsHomeContainer extends Generator {
  async write () {

    let { ui_framework } = this.options.build.app.stack
    let options = { ui_framework }

    // Bootstrap / Onsen UI framework
    let appTemplate = `home.${options.ui_framework.id}.vue`

    // web_client/src/containers/main_home/index.vue
    await this.copyTemplate(
      this.templatePath(__dirname, appTemplate),
      this.destinationPath(this.options.build.dest.vue.src + 'containers/main_home/index.vue'),
      { }
    )

  }
}

