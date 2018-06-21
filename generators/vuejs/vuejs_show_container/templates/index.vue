
<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-12">
        <div class="card card-body">


          <!-- Bootstrap Modal Component -->
          <b-modal :id="'destroyModal'"
            :title="'Destroy <%= schema.label %>?'"
            @ok="onConfirmDestroy(model)"
            header-bg-variant='dark'
            header-text-variant='light'
            body-bg-variant='dark'
            body-text-variant='light'
            footer-bg-variant='danger'
            footer-text-variant='light'
            ok-variant='danger'
            ok-title='DESTROY'
            cancel-title='Cancel'
            cancel-variant='dark'
          >
            <p class="text-left">Are you sure you want to destroy this <%= schema.label %>?</p>
          </b-modal>

          <div class="row">
            <div class="col-sm-8">
              <h2>
                <%= schema.label %> Detail
              </h2>
            </div>
            <div class="col-sm-4 text-right">

              <!-- Edit -->
              <a class="btn btn-outline-warning btn-sm" :href="'#/<%= schema.identifier_plural %>/' + model._id + '/edit'">
                <i class="fa fa-fw fa-pencil"></i>
              </a>

              <!-- Destroy -->
              <button class="btn btn-sm btn-outline-danger" v-b-modal="'destroyModal'">
                <i class="fa fa-fw fa-trash"></i>
              </button>

            </div>
          </div>

          <table class="table table-striped" v-if='!fetching'>

            <!-- Table Header -->
            <tbody>
            <%_ for (index in schema.attributes) { _%>
            <%_ let attr = schema.attributes[index] _%>
            <%_ if (attr.datatype !== 'RELATION') { _%>
              <tr>
                <td>
                  <%= attr.label %>
                </td>
                <td>
                  {{model.<%= attr.identifier %>}}
                </td>
              </tr>
            <%_ } _%>
            <%_ } _%>
            </tbody>

          </table>
          <Loading v-else />

        </div>
      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import Loading from '@/components/Loading'

export default {
  props: ['id'],
  name: '<%= schema.identifier %>_show',
  metaInfo: {
    title: '<%= schema.label %>s - Show'
  },
  components: {
    Loading
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
