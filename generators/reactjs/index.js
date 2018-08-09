const Generator = require('../util/generator')
const ReactJsAppBase = require('./reactjs_app_base')
const ReactJsAppCore = require('./reactjs_app_core')
const ReactJsAuth = require('./reactjs_auth')
const ReactJsRoutes = require('./reactjs_routes')
const ReactJsListComponent = require('./reactjs_list_component')
const ReactJsNewComponent = require('./reactjs_new_component')
const ReactJsEditorComponent = require('./reactjs_editor_component')
const ReactJsShowComponent = require('./reactjs_show_component')
const ReactJsEditComponent = require('./reactjs_edit_component')
const ReactJsWidgetComponent = require('./reactjs_widget_component')

module.exports = class ReactJs extends Generator {
  async write () {
    await this.composeWith(ReactJsAppBase)
    await this.composeWith(ReactJsAppCore)
    await this.composeWith(ReactJsAuth)
    await this.composeWith(ReactJsRoutes)
    await this.composeWith(ReactJsListComponent)
    await this.composeWith(ReactJsNewComponent)
    await this.composeWith(ReactJsEditorComponent)
    await this.composeWith(ReactJsShowComponent)
    await this.composeWith(ReactJsEditComponent)
    await this.composeWith(ReactJsWidgetComponent)
  }
}
