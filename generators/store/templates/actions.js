import Factory from './factory'

// // // //

// actions
// functions that causes side effects and can involve asynchronous operations.
const actions = {
  fetchCollection: ({ commit }) => Factory.fetchCollection({ commit }),

  create: ({ commit }, attributes) => Factory.create({ commit }, attributes),

  update: ({ commit }, attributes) => Factory.update({ commit }, attributes),

  destroy: ({ commit }, attributes) => Factory.destroy({ commit }, attributes)
}

// // // //

export default actions
