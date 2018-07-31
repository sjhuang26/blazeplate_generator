const Generator = require('../../util/generator');

module.exports = class ReactJsAuth extends Generator {
  async write() {
    const dest = this.options.build.dest.client.src + 'auth/';

    await this.ensureDir(dest);

    await this.copyTemplate(
      this.templatePath(__dirname, 'Login.js'),
      this.destinationPath(dest + 'Login.js')
    )

    await this.copyTemplate(
      this.templatePath(__dirname, 'Register.js'),
      this.destinationPath(dest + 'Register.js')
    )
  }
}
