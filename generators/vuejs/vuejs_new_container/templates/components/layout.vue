
<template>
  <div class="container">
    <a href="#/<%= schema.identifier_plural %>">Back</a>
    <h2><%= schema.label %> - New</h2>
    <hr>

    <form v-on:submit.prevent="formSubmit">
    <% for (index in schema.attributes) { %>
    <% let attr = schema.attributes[index] %>
      <div class="col-lg-12">
        <div class="form-group">
          <label class='mb-0'>
            <%= attr.label %>
            <% if (attr.required) { %><span class='text-danger'>*</span><% } %>
          </label>
          <small class="form-text text-muted mb-2"><%= attr.help %></small>
        <% if (attr.datatype === 'BOOL') { %>
          <input type="checkbox" class="form-control" v-model="model.<%=attr.identifier%>">
        <% } else if (attr.datatype === 'TEXT') { %>
          <input type="text" class="form-control" placeholder="<%= attr.label %>" v-model="model.<%=attr.identifier%>">
        <% } else if (attr.datatype === 'NUMBER') { %>
          <input type="number" class="form-control" placeholder="<%= attr.label %>" v-model="model.<%=attr.identifier%>">
        <% } else if (attr.datatype === 'DATE') { %>
          <input type="date" class="form-control" placeholder="<%= attr.label %>" v-model="model.<%=attr.identifier%>">
        <% } else if (attr.datatype === 'BELONGS_TO') { %>
          <select type="text" class="form-control" placeholder="<%= attr.label %>" v-model="model.<%=attr.identifier%>">
            <option :value="<%=attr.datatypeOptions.schema_identifier%>._id" v-for="<%=attr.datatypeOptions.schema_identifier%> in <%= attr.datatypeOptions.schema_identifier_plural %>">{{ <%= attr.datatypeOptions.schema_identifier %>.<%= attr.datatypeOptions.schema_label_attr %> }}</option>
          </select>
        <% } else if (attr.datatype === 'HAS_MANY') { %>
          <select type="text" multiple class="form-control" placeholder="<%= attr.label %>" v-model="model.<%=attr.identifier%>">
            <option :value="<%=attr.datatypeOptions.schema_identifier%>._id" v-for="<%=attr.datatypeOptions.schema_identifier%> in <%= attr.datatypeOptions.schema_identifier_plural %>">{{ <%= attr.datatypeOptions.schema_identifier %>.<%= attr.datatypeOptions.schema_label_attr %> }}</option>
          </select>
        <% } %>
        </div>
      </div>
    <% } %>

      <!-- <div class="form-group"> -->
        <!-- <button class="btn btn-primary">Create</button> -->
      <!-- </div> -->

      <div class="row">
        <div class="col-lg-12 text-right">

          <button class="btn btn-outline-dark mr-2">
            <i class="fa fa-fw fa-times mr-1"></i>
            Cancel
          </button>

          <!-- <button class="btn btn-outline-success" @click="validateAttributes()" v-if="record._id"> -->
            <!-- <i class="fa fa-fw fa-plus mr-1"></i> -->
            <!-- Update {{ schema.label }} -->
          <!-- </button> -->

          <button class="btn btn-outline-success">
            <i class="fa fa-fw fa-plus mr-1"></i>
            Create <%= schema.label %>
          </button>

        </div>
      </div>

    </form>
  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'

export default {
  name: '<%= schema.identifier %>_new',
  data () {
    return {
      model: {}
    }
  },
  computed: {
    <% for (index in schema.attributes) { %>
    <% let attr = schema.attributes[index] %>
    <% if (attr.datatype === 'BELONGS_TO' || attr.datatype === 'HAS_MANY') { %>
    <%=attr.datatypeOptions.schema_identifier_plural%> () {
      this.$store.dispatch('<%= attr.datatypeOptions.schema_identifier %>/fetchCollection')
      return this.$store.getters['<%= attr.datatypeOptions.schema_identifier %>/collection']
    }
    <% } %>
    <% } %>
  },
  methods: {
    formSubmit () {
      return store.dispatch('<%= schema.identifier %>/create', this.model)
    }
  }
}
</script>


