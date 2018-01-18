import _ from 'lodash'

// <%= schema.label %> Module Getters
const getters = {
  collection: state => {
    return state.collection
  },
  current: state => {
    return _.find(state.collection, { _id: state.current })
  },
  fetching: state => {
    return state.fetching
  }
}

export default getters
