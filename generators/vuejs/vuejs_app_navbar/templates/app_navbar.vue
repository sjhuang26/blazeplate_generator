<template>
	<nav class="navbar navbar-expand-lg fixed-top">

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
	      <li class="nav-item">
	        <a class="nav-link" href="#/auth/register">Register</a>
	      </li>
	      <li class="nav-item">
	        <a class="nav-link" href="#/auth/login">Login</a>
	      </li>
        <!-- <li class="nav-item" v-if="currentUser"> -->
          <!-- <a class="nav-link" href="#/user/profile">{{currentUser.username}}</a> -->
        <!-- </li> -->
	    </ul>
	  </div>
	</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Navbar',
  computed: mapGetters({
    isAuthenticated: 'auth/is_authenticated',
    isMentor: 'auth/isMentor',
    isAdmin: 'auth/isAdmin',
    currentUser: 'auth/current_user'
  }),
  methods: mapActions({
    logout: 'auth/logout'
  })
}
</script>

<style lang="sass">

  .navbar-brand
    letter-spacing: .25rem !important
    font-family: sans-serif
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
