
<template>

  <div class="container">

    <div class="row">
      <div class="col-lg-12">
        <div class="card card-body">

          <div class="row">
            <div class="col-lg-8">
              <h2>
                <%= schema.label %> Detail
              </h2>
            </div>
            <div class="col-lg-4 text-right">

              <!-- Edit Link -->
              <a class="btn btn-outline-warning btn-sm" :href="'#/<%= schema.identifier_plural %>/' + model._id + '/edit'">
                <i class="fa fa-fw fa-pencil"></i>
              </a>

              <!-- Opens Destroy Confirmation Modal -->
              <button class="btn btn-outline-danger btn-sm" v-b-modal.confirm-modal>
                <i class="fa fa-fw fa-trash"></i>
              </button>

              <!-- Bootstrap Modal Component -->
              <b-modal id="confirm-modal" title="Destroy <%= schema.label %>?" @ok="onConfirm">
                <p class="my-4">Are you sure you want to destroy this <%= schema.label %>?</p>
              </b-modal>

            </div>
          </div>

          <table class="table table-striped">

            <!-- Table Header -->
            <tbody>
            <% for (index in schema.attributes) { %>
            <% if (schema.attributes[index].datatype !== 'HAS_MANY') { %>
              <tr>
                <td>
                  <%= schema.attributes[index].label %>
                </td>
                <td>
                  {{model.<%= schema.attributes[index].identifier %>}}
                </td>
              </tr>
            <% } %>
            <% } %>
            </tbody>

          </table>

        </div>
      </div>
    </div>

  </div>

</template>

<!-- // // // //  -->

<script>
import store from '@/store'

export default {
  props: ['model'],
  methods: {
    onConfirm () {
      return store.dispatch('<%= schema.identifier %>/destroy', this.model._id)
    }
  }
}
</script>


