
<template>
  <div class="container">

    <div class="row">
      <div class="col-lg-8">
        <h2>
          <%= schema.label_plural %>
        </h2>
      </div>

      <div class="col-lg-4 text-right">
        <a class='btn btn-outline-success' href="#/<%= schema.identifier_plural %>/new">
          <i class="fa fa-fw fa-plus mr-2"></i>
          New <%= schema.label %>
        </a>
      </div>
    </div>

  	<div class="row">
  		<div class="col-lg-12">

        <!-- Fetching -->
        <p class='lead' v-if="fetching">
          <i class="fa fa-2x fa-spin fa-spinner"></i>
        </p>

        <!-- EmptyView -->
        <!-- TODO - abstract into ListView -->
        <p class='lead' v-if="!collection[0]">
          EMPTY
        </p>

        <!-- ListView -->
  			<ListView :collection="collection"></ListView>

  		</div>
  	</div>
  </div>
</template>

<!-- // // // //  -->

<script>
import ListView from './list.vue'
import store from '@/store'

export default {
  props: ['collection'],
  computed: {
    fetching () {
      return store.getters['<%= schema.identifier %>/fetching']
    }
  },
  components: {
    ListView
  }
}
</script>


