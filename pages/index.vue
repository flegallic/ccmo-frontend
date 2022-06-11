<template>
  <v-container fluid ma-0 pa-0 >
    <v-row>
      <v-col>
        <v-card
          color="grey lighten-4"
          flat
          tile
        >
          <v-toolbar dense>
            <v-spacer></v-spacer>
            <v-badge
              bordered
              bottom
              color="deep-purple accent-4"
              dot
              offset-x="10"
              offset-y="10"
              class="mx-2"
            >Hi, {{ $nuxt.$fire.auth.currentUser.displayName }} 
              <v-avatar size="40">
                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
              </v-avatar>
            </v-badge>

            <v-btn
              class="mx-2 elevation-0"
              fab
              x-small
              color="info">
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn
              @click="$router.push('/auth/signout')"
              class="mx-2 elevation-0"
              fab
              x-small
              color="error" >
              <v-icon>mdi-export</v-icon>
            </v-btn>
          </v-toolbar>
        </v-card>
        
      </v-col>
    </v-row>
    <v-row justify="center" align="center" width="100%">

    </v-row>
  </v-container>
</template>

<script>
export default { }
</script>
