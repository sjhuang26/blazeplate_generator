import _ from 'lodash'
import { NEW_<%= schema.label.toUpperCase() %> } from './constants'
import { COLLECTION_MUTATIONS, MODEL_MUTATIONS } from '@/store/lib/mixins'

// <%= schema.label %> Module Mutations
export default {
  <%_ for (index in schema.relations) { _%>
  <%_ let rel = schema.relations[index] _%>
  <%= rel.state %> (state, <%= rel.state %>) {
    state.<%= rel.state %> = <%= rel.state %>
  },
  <%_ } _%>
  ...COLLECTION_MUTATIONS,
  ...MODEL_MUTATIONS,
  resetNewModel (state) {
    state.newModel = _.cloneDeep(NEW_<%= schema.label.toUpperCase() %>)
  },
  editModel (state, model) {
    state.editModel = _.cloneDeep(model)
  }
}
