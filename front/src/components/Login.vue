<template>
  <div class="container">
    <header class="header">
      <a href="">
        <img alt="crunchyroll logo" src="../assets/cr_logo.png">
      </a>
    </header>
    <div class="floatingLayout">
      <div class="contentBlock">
        <div class="loginLayout">
          <v-app>
            <v-form
                ref="form"
                v-model="valid"
            >
              <h1 class="loginHeader">Log In</h1>
              <div class="inputsContainer">
                <v-text-field
                    v-model="username"
                    label="Email or Username"
                    required
                ></v-text-field>

                <v-text-field
                    type="password"
                    v-model="password"
                    label="Password"
                    required
                ></v-text-field>
              </div>
              <div class="submitBtn">
                <v-btn
                    color="orange"
                    width="100%"
                    class="mr-4"
                    @click="connexion"
                >
                  LOG IN
                </v-btn>
              </div>
            </v-form>
            <span class="passwordReset">
                <a id="resetLink">Forgot password?</a>
            </span>
          </v-app>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data: () => ({
    valid: true,
    password: '',
    username: '',
    usernameRules: [
      v => !!v || 'Username is required',
      v => (v && v.length <= 10) || 'Username must be less than 10 characters',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

  }),
  methods: {
    connexion() {
      this.$refs.form.connexion()
    },
  },
}
</script>

<style>
.container {
  box-sizing: border-box;

}

.floatingLayout {
  margin-bottom: 4rem;
  margin-top: 4rem;
  text-align: center;
}

.loginLayout {
  width: 25rem;
  justify-content: center;
  margin: auto auto 4rem;
}

.loginHeader {
  font-weight: 500;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.submitBtn {
  width: 100%;
  margin-bottom: 1.5rem;
  font-weight: bold;

}

.passwordReset {
  text-transform: uppercase;
}

#resetLink {
  font-weight: bold;
  color: #939393;
  font-size: 1rem;
}

#resetLink:hover {
  color: #707070;
}

</style>