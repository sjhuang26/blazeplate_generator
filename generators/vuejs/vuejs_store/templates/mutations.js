import { COLLECTION_MUTATIONS, MODEL_MUTATIONS, FILTER_MUTATIONS } from '@/store/lib/mixins'

// <%= schema.label %> Module Mutations
export default {
  ...COLLECTION_MUTATIONS,
  ...FILTER_MUTATIONS,
  ...MODEL_MUTATIONS
}
