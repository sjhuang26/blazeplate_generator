
// <%= schema.label %> Module mutations
const mutations = {
  fetching (state, isFetching) {
    state.fetching = isFetching
  },
  sync (state, collection) {
    state.collection = collection
  },
  current (state, { id }) {
    state.current = id
  }
}

export default mutations
