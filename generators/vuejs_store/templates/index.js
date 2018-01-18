import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import user from './user'
import notification from './notification'
<% for (index in appSchema.schemas) { %>
import <%= appSchema.schemas[index].identifier %> from './<%= appSchema.schemas[index].identifier %>'
<% } %>
// Vuex Initialization
// TODO - should this be done elsewhere?
Vue.use(Vuex)

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  modules: {
    auth,
    user,
    notification,
    <%= storeModules %>
  },
  plugins: [createPersistedState()]
})
