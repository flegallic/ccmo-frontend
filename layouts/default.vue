<template>
<div id="app">
  <v-app>
    <navbar />
    <v-main>
      <v-container fluid ma-0 pa-0 >
        <Nuxt />
      </v-container>
    </v-main>
</v-app>
</div>
</template>



<script>
import navbar from "@/components/navbar.vue"

export default {
  name: 'DefaultLayout',
  components: {
    navbar
  },
}
</script>

<style lang="scss"></style>