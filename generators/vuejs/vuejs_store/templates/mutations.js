import _ from 'lodash'
import { NEW_<%= schema.label.toUpperCase() %> } from './constants'
import { COLLECTION_MUTATIONS, MODEL_MUTATIONS, FILTER_MUTATIONS } from '@/store/lib/mixins'

// <%= schema.label %> Module Mutations
export default {
  ...COLLECTION_MUTATIONS,
  ...FILTER_MUTATIONS,
  ...MODEL_MUTATIONS,
  resetNewModel (state) {
    state.newModel = _.cloneDeep(NEW_<%= schema.label.toUpperCase() %>)
  },
  editModel (state, model) {
    state.editModel = _.cloneDeep(model)
  }
}
