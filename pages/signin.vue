<template>
  <v-row justify="center" align="center" class="pt-16">
        <v-card-title class="pb-12">
          <h3>Already registered ? Sign-in</h3>    
        </v-card-title>
        <v-card-text>
          <v-form align="center" ref="form" v-model="valid" lazy-validation @submit.prevent="">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="Email"
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

            <v-btn
              :disabled="!valid"
              color="blue darken-3"
              class="mr-2 white--text"
              @click="signin"
              elevation="0"
            >
              sign in
            </v-btn>

            <v-btn
              class="mr-2"
              @click="reset"
              color="#CFD8DC"
              elevation="0"
            >
              Reset Form
            </v-btn>

          </v-form>
          <v-snackbar v-model="snackbar" color="error">
            {{ errorMessage }}
          </v-snackbar>
        </v-card-text>
        <v-spacer />

  </v-row>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    show1: false,
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 8) || "Password must minimums 8 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],
    snackbar: false,
    errorMessage: "",
  }),

  methods: {
    //function to reset form
    reset () {
      this.$refs.form.reset()
    },
    //function to create new user
    signin() {
      let formValidation = this.$refs.form.validate();

      if (formValidation) {
        this.$fire.auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then((userCredential) => {
            const authUser = {
              uid: userCredential.user.uid,
              email: userCredential.user.email,
              displayName: userCredential.user.displayName
            };
            this.$store
              .dispatch("onAuthStateChangedAction", {
                authUser,
              })
              .then(() => {
                this.$router.replace("/profile");
              })
              .catch((error) => {
                console.log("User State error", error);
              });
          })
          .catch((error) => {
            console.log("Login error", error);
            this.snackbar = true;
            this.errorMessage = error.message;
          });
      }
    },
  },
};
</script>