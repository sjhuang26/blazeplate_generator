import Vue from 'vue'
import Vuex from 'vuex'
// TODO - auth should be dynamicallly included
import auth from './auth'
import notification from './notification'
<% for (index in appSchema.schemas) { %>
import <%= appSchema.schemas[index].identifier %> from './<%= appSchema.schemas[index].identifier %>'
<% } %>
// // // // BLAZEPLATE WHITESPACE
// Vuex Initialization
// TODO - should this be done elsewhere?
Vue.use(Vuex)
// // // // BLAZEPLATE WHITESPACE
export default new Vuex.Store({
  modules: {
    auth,
    notification,
    <%= storeModules %>
  }
})
// // // // BLAZEPLATE WHITESPACE
