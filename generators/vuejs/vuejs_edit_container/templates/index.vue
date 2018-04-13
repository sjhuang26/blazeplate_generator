
<template>
  <div class="container">
    <a href="#/<%= schema.identifier_plural %>">Back</a>
    <h2><%= schema.label %> - Edit</h2>
    <hr>
    <<%= schema.label %>Form :model="model" v-if="model._id" />
    <div class="row">
      <div class="col-lg-12 text-right">

        <a href="#/<%= schema.identifier_plural %>" class="btn btn-outline-dark mr-2">
          <i class="fa fa-fw fa-times mr-1"></i>
          Cancel
        </a>

        <button class="btn btn-outline-success" @click="formSubmit(model)">
          <i class="fa fa-fw fa-plus mr-1"></i>
          Update <%= schema.label %>
        </button>

      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import <%= schema.label %>Form from '@/components/<%= schema.label %>Form'

export default {
  props: ['id'],
  name: '<%= schema.identifier %>_edit',
  metaInfo: {
    title: '<%= schema.label %> - Edit'
  },
  components: {
    <%= schema.label %>Form
  },
  created () {
    this.fetch(this.id)
    .then(() => {
      console.log('FETCHED')
      setTimeout(() => {
        console.log(this.$store.getters['<%= schema.identifier %>/model'])
        this.setEditModel(this.$store.getters['<%= schema.identifier %>/model'])
      }, 1000)
    })
  },
  computed: mapGetters({
    model: '<%= schema.identifier %>/editModel',
    fetching: '<%= schema.identifier %>/fetching'
  }),
  methods: {
    ...mapActions({
      fetch: '<%= schema.identifier %>/fetchModel',
      formSubmit: '<%= schema.identifier %>/updateModel'
    }),
    ...mapMutations({
      setEditModel: '<%= schema.identifier %>/editModel'
    })
  }
}
</script>
