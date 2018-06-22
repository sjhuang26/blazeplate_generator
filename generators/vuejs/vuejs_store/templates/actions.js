import router from '@/routers'
import { $GET, $POST, $PUT, $DEL } from '@/store/lib/helpers'

const API_ROOT = '/api/<%= schema.identifier_plural %>'

// // // //

export default {
  <%_ for (index in schema.attributes) { _%>
  <%_ let attr = schema.attributes[index] _%>
  <%_ if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'OWNS_MANY') { _%>
  // GET /api/<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier_plural %> OWNS MANY
  // fetch<%= attr.datatypeOptions.schema_label_plural %>
  fetch<%= attr.datatypeOptions.schema_label_plural %> ({ state, commit, getters, dispatch }) {
    commit('fetching', true)
    const model = getters['model']
    $GET(API_ROOT + '/' + model._id + '/<%= attr.datatypeOptions.schema_identifier_plural %>')
    .then((<%= schema.identifier_plural %>) => {
      commit('collection', <%= schema.identifier_plural %>)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Fetch error', context: 'danger', dismissible: true }, { root: true })
      throw err // TODO - better error handling
    })
  },
  <%_ } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'HAS_MANY') { _%>
  // GET /api/<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier_plural %> HAS MANY
  // fetch<%= attr.datatypeOptions.schema_label_plural %>
  fetch<%= attr.datatypeOptions.schema_label_plural %> ({ state, commit, getters, dispatch }) {
    commit('fetching', true)
    const model = getters['model']
    $GET(API_ROOT + '/' + model._id + '/<%= attr.datatypeOptions.schema_identifier_plural %>')
    .then((<%= schema.identifier_plural %>) => {
      commit('collection', <%= schema.identifier_plural %>)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Fetch error', context: 'danger', dismissible: true }, { root: true })
      throw err // TODO - better error handling
    })
  },
  <%_ } else if (attr.datatype === 'RELATION' && attr.datatypeOptions.relationType === 'BELONGS_TO') { _%>
  // GET /api/<%= schema.identifier_plural %>/:id/<%= attr.datatypeOptions.schema_identifier %>
  // fetch<%= attr.datatypeOptions.schema_label %>
  fetch<%= attr.datatypeOptions.schema_label %> ({ state, commit, getters, dispatch }) {
    commit('fetching', true)
    const model = getters['model']
    $GET(API_ROOT + '/' + model._id + '/<%= attr.datatypeOptions.schema_identifier %>')
    .then((<%= schema.identifier_plural %>) => {
      commit('collection', <%= schema.identifier_plural %>)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Fetch error', context: 'danger', dismissible: true }, { root: true })
      throw err // TODO - better error handling
    })
  },
  <%_ } _%>
  <%_ } _%>

  // GET /api/<%= schema.identifier_plural %>
  fetchCollection ({ state, commit, dispatch }) {
    commit('fetching', true)
    $GET(API_ROOT)
    .then((<%= schema.identifier_plural %>) => {
      commit('collection', <%= schema.identifier_plural %>)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Fetch error', context: 'danger', dismissible: true }, { root: true })
      throw err // TODO - better error handling
    })
  },
  // GET /api/<%= schema.identifier_plural %>/:id
  fetchModel ({ state, commit, dispatch }, <%= schema.identifier %>Id) {
    commit('fetching', true)
    $GET(`${API_ROOT}/${<%= schema.identifier %>Id}`)
    .then((<%= schema.identifier %>) => {
      commit('model', <%= schema.identifier %>)
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Fetch error', context: 'danger', dismissible: true }, { root: true })
      throw err // TODO - better error handling
    })
  },
  // POST /api/<%= schema.identifier_plural %>
  createModel ({ state, commit, dispatch }, <%= schema.identifier %>Model) {
    commit('fetching', true)
    $POST(`${API_ROOT}`, {
      body: <%= schema.identifier %>Model
    })
    .then((<%= schema.identifier %>) => {
      commit('fetching', false)
      router.push(`/<%= schema.identifier_plural %>`)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Create error', context: 'danger', dismissible: true }, { root: true })
      throw err
    })
  },
  // PUT /api/<%= schema.identifier_plural %>/:id
  updateModel ({ state, commit }, <%= schema.identifier %>Model) {
    commit('fetching', true)
    $PUT(`${API_ROOT}/${<%= schema.identifier %>Model._id}`, {
      body: <%= schema.identifier %>Model
    })
    .then((<%= schema.identifier %>) => {
      commit('fetching', false)
      router.push(`/<%= schema.identifier_plural %>/${<%= schema.identifier %>._id}`)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Update error', context: 'danger', dismissible: true }, { root: true })
      throw err
    })
  },
  // DELETE /api/<%= schema.identifier_plural %>/:id
  deleteModel ({ state, commit }, <%= schema.identifier %>Model) {
    commit('fetching', true)
    $DEL(`${API_ROOT}/${<%= schema.identifier %>Model._id}`)
    .then((<%= schema.identifier %>) => {
      commit('fetching', false)
      let collection = _.filter(state.collection, (m) => { return m._id !== <%= schema.identifier %>Model._id })
      commit('collection', collection)
      router.push(`/<%= schema.identifier_plural %>`)
    })
    .catch((err) => {
      commit('fetching', false)
      commit('notification/add', { message: 'Destroy error', context: 'danger', dismissible: true }, { root: true })
      throw err // TODO - better error handling
    })
  }
}
