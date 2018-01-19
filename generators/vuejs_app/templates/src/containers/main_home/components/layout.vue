<template>

  <div class="row h-100 align-items-center">
    <div class="col-lg-12">

      <div class="row my-2">
        <div class="col-lg-12 text-center">
          <p class="welcome-text">WELCOME</p>
        </div>
      </div>

      <div class="row my-2">
        <div class="col-lg-12 text-center">
          <p class="lead"><a href="https://github.com/blazeplate" target="_blank">Blazeplate</a> is an open-source tool for generating boilerplate code.</p>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'main_home',
    computed: {
    }
  }
</script>

<style lang="sass">
  img.welcome-logo
    height: 4rem
    width: 4rem

  .welcome-text
    letter-spacing: .6rem
    font-weight: 300
    font-size: 2rem
</style>
