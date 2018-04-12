
<template>
  <LayoutView :model="model"/>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import LayoutView from './components/layout.vue'

export default {
  props: ['id'],
  name: '<%= schema.identifier %>_edit',
  components: {
    LayoutView
  },
  metaInfo: {
    title: '<%= schema.label %>s - Edit' // title is now "TITLE - <%= schema.label %> - Edit"
  },
  created () {
    this.fetch()
  },
  methods: mapActions({
    fetch: '<%= schema.identifier %>/fetchModel'
  }),
  computed: mapGetters({
    model: '<%= schema.identifier %>/model'
  })
}
</script>
