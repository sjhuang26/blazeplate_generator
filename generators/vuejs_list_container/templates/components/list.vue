
<template>
  <table class="table table-striped table-hover">

    <!-- Table Header -->
    <thead>
    <% for (index in schema.attributes) { %>
      <th>
        <%= schema.attributes[index].label %>
        <i class="fa fa-fw fa-question-circle-o" v-b-tooltip.hover.bottom title="<%= schema.attributes[index].help %>" ></i>
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
        <% } else { %>
        <td>{{m.<%= schema.attributes[index].identifier %>}}</td>
        <% } %>
      <% } %>
        <!-- Edit <%= schema.label %>-->
        <td class='text-right'>
          <a class="btn btn-sm btn-outline-warning" :href=" '#/<%= schema.identifier_plural %>/' + m._id + '/edit' ">
            <i class="fa fa-fw fa-pencil"></i>
          </a>

          <!-- Destroy -->
          <button class="btn btn-sm btn-outline-danger" @click="confirmDestroy(m._id)">
            <i class="fa fa-fw fa-trash"></i>
          </button>
        </td>
      </tr>
    </tbody>

  </table>

</template>

<!-- // // // //  -->

<script>
import store from '@/store'

export default {
  props: ['collection'],
  methods: {
    confirmDestroy (id) {
      store.commit('<%= schema.identifier %>/remove', id)
      return store.dispatch('<%= schema.identifier %>/destroy', id)
    }
  }
}
</script>


