<template>
  <div class="flex flex-column align-start align-self-start justify-start">
    <h1>Welcome to your dashboard</h1>
    <p>You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</p>
    <v-btn @click="$router.push('/auth/signout')">Logout</v-btn>
  </div>
</template>

<script>

export default {
  
}
</script>
