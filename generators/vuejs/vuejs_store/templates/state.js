import { COLLECTION_STATE, MODEL_STATE, FILTER_STATE } from '@/store/lib/mixins'

// <%= schema.label %> Module State
export default {
  ...COLLECTION_STATE,
  ...MODEL_STATE,
  ...FILTER_STATE,
  newModel: {},
  editModel: {}
}
