import { COLLECTION_GETTERS, MODEL_GETTERS } from '../lib/mixins'

// <%= schema.label %> Module Getters
const getters = {
  ...COLLECTION_GETTERS,
  ...MODEL_GETTERS,
  newModel: state => {
    return state.newModel
  },
  editModel: state => {
    return state.editModel
  }
}

export default getters
