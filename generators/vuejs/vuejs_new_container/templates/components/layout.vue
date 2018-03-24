
<template>
  <div class="container">
    <a href="#/<%= schema.identifier_plural %>">Back</a>
    <h2><%= schema.label %> - New</h2>
    <hr>
    <<%= schema.label %>Form/>
    <div class="row">
      <div class="col-lg-12 text-right">

        <a href="#/<%= schema.identifier_plural %>" class="btn btn-outline-dark mr-2">
          <i class="fa fa-fw fa-times mr-1"></i>
          Cancel
        </a>

        <!-- <button class="btn btn-outline-success" @click="validateAttributes()" v-if="record._id"> -->
          <!-- <i class="fa fa-fw fa-plus mr-1"></i> -->
          <!-- Update {{ schema.label }} -->
        <!-- </button> -->

        <button class="btn btn-outline-success" @click="formSubmit()">
          <i class="fa fa-fw fa-plus mr-1"></i>
          Create <%= schema.label %>
        </button>

      </div>
    </div>

  </div>
</template>

<!-- // // // //  -->

<script>
import store from '@/store'
import <%= schema.label %>Form from '@/components/<%= schema.label %>Form'
export default {
  name: '<%= schema.identifier %>_new',
  components: {
    <%= schema.label %>Form
  },
  methods: {
    formSubmit () {
      return store.dispatch('<%= schema.identifier %>/create')
    }
  }
}
</script>


