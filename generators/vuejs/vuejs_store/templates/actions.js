import router from '@/routers'
import { $GET, $POST, $PUT, $DEL } from '@/store/lib/helpers'

const API_ROOT = '/api/<%= schema.identifier_plural %>'

// // // //

export default {
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
