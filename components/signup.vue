<template>
  <v-row justify="center" align="center">
    <v-card-title class="headline">
      <h5>Create an account</h5>    
    </v-card-title>
    <v-card-text>
      <v-form
        align="center"
        ref="form"
        v-model="valid"
        lazy-validation    
        @submit.prevent=""
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Firstname"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="passwordRules"
          :type="show1 ? 'text' : 'password'"
          label="Password"
          hint="At least 8 characters"
          required
          @click:append="show1 = !show1"
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <div v-if="signUpMessage">
          <v-alert 
            icon="mdi-shield-lock-outline"
            prominent
            text
            type="info"
          >
            {{ signUpMessage }}
        </v-alert>
        </div>
        <div v-else>
          <v-btn
            :disabled="!valid"
            color="deep-orange"
            class="mr-2 white--text"
            @click="signup"
            elevation="0"
          >
            sign up
          </v-btn>

          <v-btn
            class="mr-2"
            @click="reset"
            color="#CFD8DC"
            elevation="0"
          >
            Reset Form
          </v-btn>
        </div>        
      </v-form>
      <v-snackbar v-model="snackbar" color="error">
        {{ snackbarText }}
      </v-snackbar> 
    </v-card-text>
  </v-row>
</template>

<script>
  export default {
    data () {
      return {
        valid: true,
        show1: false,
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 8) || 'Password must be longer than 8 characters',
        ],     
        name: '',
        nameRules: [
          v => !!v || 'Firstname is required',
          v => (v && v.length <= 16) || 'Name must be less than 16 characters',
        ],
        email: '',
        emailRules: [
          v => !!v || 'Email is required',
          v => /.+@.+\..+/.test(v) || 'Email must be valid',
        ],
        checkbox: false,
        snackbar: false,
        snackbarText: 'No error message',
        signUpMessage: "",
      }
    },

    methods: {
      //function to reset form
      reset () {
        this.$refs.form.reset()
      },
      //function to create new user
      signup() {
        let formValidation = this.$refs.form.validate();

        if (formValidation) {
          this.$fire.auth
            .createUserWithEmailAndPassword(this.email, this.password)
            .then((userCredential) => {
              this.$fire.auth.currentUser
                .sendEmailVerification()
                .then(() => {
                  this.signUpMessage = ('Email verification has been sent to ' + this.email + '. Redirecting, please wait...')
                })
                .catch(function (error){
                  that.snackbarText = error.message
                  that.snackbar = true
                })

              const currentUser = this.$fire.auth.currentUser;
              currentUser
                .updateProfile({
                  displayName: this.name
                })
                .catch(function (error){
                  that.snackbarText = error.message
                  that.snackbar = true
                })

              const authUser = {
                uid: userCredential.user.uid,
                email: userCredential.user.email,
                displayName: this.name
              };
              setTimeout( () => this.$router.push({ path: '/'}), 15000);
            })
            .catch(function (error){
              that.snackbarText = error.message
              that.snackbar = true
            })
        }
      },
    },
  }
</script>

