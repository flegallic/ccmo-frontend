<template>
  <div>
    <v-card class="d-flex justify-center mb-12 pt-10" flat tile >
      <v-card color="deep-orange" class="pa-12 pt-16" outlined tile width="500" height="500">
        <v-row justify="center" align="center" class="pt-16" >
          <v-card-title class="pb-10">
            <h3 class="text-center white--text">Welcome back</h3>
          </v-card-title>
          <v-card-text class="font-weight-lighter">
            <p class="text-center white--text">To keep connected please login with your credentials</p>
          </v-card-text>

          <v-card-actions>
            <v-btn class="white--text" href="/auth/signin" outlined elevation="0" >sign in</v-btn>
          </v-card-actions>
        </v-row>
      </v-card>

      <v-card class="pa-12 pt-14" outlined tile width="500" height="500">
        <signup />
      </v-card>
    </v-card>
  </div>
</template>

<script>
import signup from "@/components/signup.vue"

  export default {
    components: {
      signup,
    },
  }
</script>

