<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

    <a class="navbar-brand" href="#/">
      <strong><%=appSchema.label %></strong>
    </a>

	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
	    <span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
	    <ul class="navbar-nav mr-auto">

        <% for (i in headerLinks) { %>
        <li class="nav-item">
          <a class="nav-link" href="<%= headerLinks[i].href %>"><%= headerLinks[i].text %></a>
        </li>
        <% } %>

	    </ul>

	    <ul class="navbar-nav ml-auto">
        <!-- <li class="nav-item"> -->
          <!-- <a class="nav-link" href="#/schemas">Admin</a> -->
        <!-- </li> -->
	      <!-- <li class="nav-item"> -->
	        <!-- <a class="nav-link" href="#/auth/register">Register</a> -->
	      <!-- </li> -->
	      <!-- <li class="nav-item"> -->
	        <!-- <a class="nav-link" href="#/auth/login">Login</a> -->
	      <!-- </li> -->
	    </ul>
	  </div>
	</nav>
</template>

<script>
import store from '@/store'

// TODO - this should be split into a series of smaller components
export default {
  name: 'Navbar',
  computed: {
    allSchemas () {
      return store.getters['schema/collection']
    }
  }
}
</script>

<style lang="sass">

  .navbar-brand
    letter-spacing: .25rem !important
    font-family: sans-serif
    text-transform: uppercase
    font-weight: 100
    letter-spacing: 0.1rem

    strong
      font-weight: 400

    img.logo
      float: left
      margin-right: 0.4rem
      height: 2rem
      display: flex

</style>
