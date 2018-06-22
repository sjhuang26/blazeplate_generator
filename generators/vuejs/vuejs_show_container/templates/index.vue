
<template>
  <div class="container">

    <!-- ADD SHOW WIDGET BACK HERE -->
    <<%= schema.label %>ShowWidget :model="model" :fetching="fetching" />

    <div class="row">
      <%_ for (index in relationalViews) { _%>
      <div class="col-lg-12">
        <<%= relationalViews[index].name %> :header="'<%= relationalViews[index].name %>'" :fetching="true" :model="{}" :collection="[]" />
      </div>
      <%_ } _%>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import Loading from '@/components/Loading'
import <%= schema.label %>ShowWidget from '@/components/<%= schema.label %>ShowWidget'
<%_ for (index in relationalViews) { _%>
import <%= relationalViews[index].name %> from '@/components/<%= relationalViews[index].name %>'
<%_ } _%>

export default {
  props: ['id'],
  name: '<%= schema.identifier %>_show',
  metaInfo: {
    title: '<%= schema.label %>s - Show'
  },
  components: {
    <%= schema.label %>ShowWidget,
    <%_ if (relationalViews[0]) { _%>
    Loading,
    <%_ } else { _%>
    Loading
    <%_ } _%>
    <%_ for (index in relationalViews) { _%>
    <%_ if (Number(index) === relationalViews.length - 1) { _%>
    <%= relationalViews[index].name %>
    <%_ } else { _%>
    <%= relationalViews[index].name %>,
    <%_ } _%>
    <%_ } _%>
  },
  created () {
    this.fetch(this.id)
  },
  methods: mapActions({
    fetch: '<%= schema.identifier %>/fetchModel',
    onConfirmDestroy: '<%= schema.identifier %>/deleteModel'
  }),
  computed: mapGetters({
    model: '<%= schema.identifier %>/model',
    fetching: '<%= schema.identifier %>/fetching'
  })
}
</script>
