<template>
  <div>
    <v-card class="d-flex justify-center mb-12" flat tile >
      <v-card class="pa-12 pt-14" outlined tile width="500" height="500">
        <signin />
      </v-card>
      <v-card color="blue darken-3" class="pa-12 pt-16" outlined tile width="500" height="500">
        <v-row justify="center" align="center" class="pt-16" >
          <v-card-title class="pb-10">
            <h3 class="text-right white--text">Hello, friends</h3>
          </v-card-title>
          <v-card-text class="font-weight-lighter">
            <p class="text-center white--text">Learn about using the CCO dashboard to manage the visibility into cloud cost and find the best way to optimize your cloud resources management.</p>
          </v-card-text>

          <v-card-actions>
            <v-btn class="white--text" href="/auth/signup" outlined elevation="0" >sign up</v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import signin from "@/components/signin.vue"

  export default {
    components: {
      signin,
    },
  }
</script>