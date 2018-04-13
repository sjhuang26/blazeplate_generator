
<template>
  <table class="table table-striped table-hover">

    <!-- Table Header -->
    <thead>
    <% for (index in schema.attributes) { %>
      <th>
        <%= schema.attributes[index].label %>
        <% if (schema.attributes[index].help) { %>
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="<%= schema.attributes[index].help %>" ></i>
        <% } %>
      </th>
    <% } %>
      <th></th>
    </thead>

    <!-- Table Body -->
    <tbody>

      <!-- Empty Table Row -->
      <tr class='tr-warning' v-if="!collection[0]">
        <% for (index in schema.attributes) { %>
        <% if (index === '0') { %>
        <td>Empty</td>
        <% } else { %>
        <td></td>
        <% } %>
        <% } %>
        <td></td>
      </tr>

      <tr v-for="m in collection" :key="m._id">
      <% for (index in schema.attributes) { %>
      <% let attr = schema.attributes[index] %>
        <% if (attr.unique) { %>
        <td>
          <a :href=" '#/<%= schema.identifier_plural %>/' + m._id ">
            {{ m.<%=attr.identifier%> }}
          </a>
        </td>
        <% } else if (attr.datatype === 'BOOL') { %>
        <td>
          <span>
            <i class="fa fa-fw fa-check-square-o" v-if="m.<%=attr.identifier%>"></i>
            <i class="fa fa-fw fa-square-o" v-if="!m.<%=attr.identifier%>"></i>
          </span>
        </td>
        <% } else if (attr.datatype === 'HAS_MANY') { %>
        <td>
          {{ m.<%=attr.identifier%>.length }}
        </td>
        <% } else { %>
        <td>{{m.<%= schema.attributes[index].identifier %>}}</td>
        <% } %>
      <% } %>
        <!-- Edit <%= schema.label %>-->
        <td class='text-right'>
          <a class="btn btn-sm btn-outline-primary" :href=" '#/<%= schema.identifier_plural %>/' + m._id">
            <i class="fa fa-fw fa-eye"></i>
          </a>

          <a class="btn btn-sm btn-outline-warning" :href=" '#/<%= schema.identifier_plural %>/' + m._id + '/edit' ">
            <i class="fa fa-fw fa-pencil"></i>
          </a>

          <button class="btn btn-sm btn-outline-danger" v-b-modal="'modal_' + m._id">
            <i class="fa fa-fw fa-trash"></i>
          </button>

          <!-- Bootstrap Modal Component -->
          <b-modal :id="'modal_' + m._id"
            :title="'Destroy <%= schema.label %>?'"
            @ok="onConfirmDestroy(m)"
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

        </td>
      </tr>
    </tbody>

  </table>

</template>

<!-- // // // //  -->

<script>
import { mapActions } from 'vuex'

export default {
  props: ['collection'],
  methods: mapActions({
    onConfirmDestroy: '<%= schema.identifier %>/deleteModel'
  })
}
</script>


