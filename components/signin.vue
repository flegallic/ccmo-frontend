<template>
  <v-row align="center" justify="center" class="pt-16">
    <v-card-title class="pb-12">
      <h3>Already registered ? Sign-in</h3>    
    </v-card-title>
    <v-card-text>
      <v-form align="center" ref="form" v-model="valid" lazy-validation @submit.prevent="" >
        <v-text-field
          v-model="auth.email"
          :rules="emailRules"
          label="Email"
          required >
        </v-text-field>

        <v-text-field
          v-model="auth.password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          :type="show1 ? 'text' : 'password'"
          label="Password"
          hint="At least 8 characters"
          required
          @click:append="show1 = !show1" >
        </v-text-field>

        <v-btn
          :disabled="!valid"
          color="blue darken-3"
          class="mr-2 white--text"
          @click="login"
          elevation="0" >sign in
        </v-btn>

        <v-btn
          class="mr-2"
          @click="reset"
          color="#CFD8DC"
          elevation="0" >Reset Form
        </v-btn>
      </v-form>
      <v-snackbar v-model="snackbar" color="error">
        {{ snackbarText }}
      </v-snackbar>
    </v-card-text>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      show1: false,
      snackbar: false,
      snackbarText: 'No error message',
      auth: {
        email: '',
        password: ''
      },
      passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must minimums 8 characters",
      ],
      emailRules: [
        (v) => !!v || "Email is required",
        (v) => /.+@.+\..+/.test(v) || "Email must be valid",
      ],
    }
  },
  methods: {
    //function to reset form
    reset () {
      this.$refs.form.reset()
    },
    login() {
      let that = this
      this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
      .catch(function (error){
        that.snackbarText = error.message
        that.snackbar = true
      }).then((user) => {
        //we are signed in
        $nuxt.$router.push('/')
      })
    },
    forgotPassword() {
      let that = this
      this.$fire.auth.sendPasswordResetEmail(this.auth.email)
      .then(function (){
        that.snackbarText = 'reset link sent to ' + that.auth.email
        that.snackbar = true
      })
      .catch(function (error) {
        that.snackbarText = error.message
        that.snackbar = true
      })
    }
  }
}
</script>

<style>

</style>