
<template>
  <v-ons-page>
    <!-- <Toolbar :title="'Home'" /> -->

    <v-ons-card>
      <img src="https://monaca.io/img/logos/download_image_onsenui_01.png" alt="Onsen UI" style="width: 100%">
      <div class="title">
        Awesome framework
      </div>
      <div class="content">
        <div>
          <v-ons-button><v-ons-icon icon="ion-thumbsup"></v-ons-icon></v-ons-button>
          <v-ons-button><v-ons-icon icon="ion-share"></v-ons-icon></v-ons-button>
        </div>
        <v-ons-list>
          <v-ons-list-header>Bindings</v-ons-list-header>
          <v-ons-list-item>Vue</v-ons-list-item>
          <v-ons-list-item>Angular</v-ons-list-item>
          <v-ons-list-item>React</v-ons-list-item>
        </v-ons-list>
      </div>
    </v-ons-card>

  </v-ons-page>
</template>

<!-- // // // //  -->

<script>
// import Toolbar from '@/components/Toolbar'

export default {
  name: 'main_home',
  // components: {
  //   Toolbar
  // },
  metaInfo: {
    title: 'Main - Home'
  }
}
</script>
