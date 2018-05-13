const Generator = require('../util/generator')
const VueApp = require('./vuejs_app')
const VueAppNavbar = require('./vuejs_app_navbar')
const VueAppRouter = require('./vuejs_app_router')

// const VueAppStore = require('./vuejs_app_store')
// const VueAuth = require('./vuejs_auth')
// const VueRouter = require('./vuejs_router')
// const VueStore = require('./vuejs_store')
// const VueForm_component = require('./vuejs_form_component')
// const VueNewContainer = require('./vuejs_new_container')
// const VueEditContainer = require('./vuejs_edit_container')
// const VueListContainer = require('./vuejs_list_container')
// const VueShowContainer = require('./vuejs_show_container')

module.exports = class VueJs extends Generator {
  async write () {
    await this.composeWith(VueApp)
    await this.composeWith(VueAppNavbar)
    await this.composeWith(VueAppRouter)
  }
}