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
      console.log('UPDATED')
    })
    .catch((err) => {
      commit('fetching', false)
      console.log('ERR!')
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
      console.log('UPDATED')
    })
    .catch((err) => {
      commit('fetching', false)
      console.log('ERR!')
      throw err
    })
  },
  deleteModel ({ state, commit }, <%= schema.identifier %>Model) {
    commit('fetching', true)
    $DEL(`${API_ROOT}/${<%= schema.identifier %>Model._id}`)
    .then((<%= schema.identifier %>) => {
      commit('fetching', false)
    })
    .catch((err) => {
      commit('fetching', false)
      throw err // TODO - better error handling
    })
  }
}
