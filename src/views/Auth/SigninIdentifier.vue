<template>
  <div>
    <div class="text-center">
      <h1 class="headline mb-2">Sign in</h1>
      <span class="d-inline-block mb-8">Use your Vuetify Account</span>
    </div>

    <v-form>
      <v-text-field
        class="mb-2"
        label="Email or phone"
        name="login"
        type="text"
        hide-details="auto"
        outlined
      ></v-text-field>
      <a href="" class="d-inline-block body-2 text-decoration-none font-weight-bold mb-8">Forgot email?</a>
    </v-form>

    <div class="body-2 text--secondary mb-8">
      Not your computer? Use a Private Window to sign in.
      <a href="" class="text-none text-decoration-none font-weight-bold">Learn more</a>
    </div>
    <div class="d-flex justify-space-between">
      <v-btn class="text-none letter-spacing-0" style="margin-left: -16px;" color="primary" text>Create account</v-btn>
      <v-btn @click="$router.push({ name: 'password' })" class="text-none letter-spacing-0" style="min-width: 88px;" color="primary" depressed>Next</v-btn>
    </div>
  </div>
</template>
