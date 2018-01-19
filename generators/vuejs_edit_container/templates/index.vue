
<template>
  <LayoutView :model="model"/>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout.vue'
import store from '@/store'

export default {
  name: '<%= schema.identifier %>_edit',
  components: {
    LayoutView
  },
  metaInfo: {
    title: '<%= schema.label %>s - Edit' // title is now "TITLE - <%= schema.label %> - Edit"
  },
  props: ['id'],
  created () {
    store.dispatch('<%= schema.identifier %>/fetchCollection')
    store.commit('<%= schema.identifier %>/current', { id: this.id })
  },
  computed: {
    model () {
      return store.getters['<%= schema.identifier %>/current']
    }
  }
}
</script>
