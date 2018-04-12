import { COLLECTION_GETTERS, MODEL_GETTERS, FILTER_GETTERS } from '../lib/mixins'

// <%= schema.label %> Module Getters
const getters = {
  ...COLLECTION_GETTERS,
  ...MODEL_GETTERS,
  ...FILTER_GETTERS,
  newModel: state => {
    return state.newModel
  }
}

export default getters
