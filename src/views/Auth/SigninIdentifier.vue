<template>
  <div>
    <div class="text-center">
      <h1 class="headline mb-2">
        Sign in
      </h1>
      <span class="d-inline-block mb-8">Use your Vuetify Account</span>
    </div>

    <v-form @submit.prevent="next">
      <v-text-field
        ref="input"
        v-model="identifier"
        class="mb-2"
        label="Email or phone"
        name="login"
        type="text"
        hide-details="auto"
        outlined
        :disabled="disabled"
        :error-messages="error"
      />
      <a
        href="#"
        class="d-inline-block text-body-2 text-decoration-none font-weight-bold mb-8"
        @click="wip"
      >Forgot email?</a>
    </v-form>

    <div class="text-body-2 text--secondary mb-8">
      Not your computer? Use a Private Window to sign in.
      <a
        href="#"
        class="d-inline-block text-none text-decoration-none font-weight-bold"
      >Learn more</a>
    </div>
    <div class="d-flex justify-space-between">
      <v-btn
        class="text-none letter-spacing-0"
        style="margin-left: -16px;"
        color="primary"
        text
        @click="$router.push({ name: 'signup' })"
      >
        Create account
      </v-btn>
      <v-btn
        class="text-none"
        style="min-width: 88px;"
        color="primary"
        depressed
        @click="next"
      >
        Next
      </v-btn>
    </div>
  </div>
</template>

<script>
import { wip } from '@/helpers.js'

export default {
  data: () => ({
    error: null,
    disabled: false
  }),

  computed: {
    identifier: {
      get () {
        return this.$store.state.identifier
      },
      set (value) {
        this.$store.commit('updateIdentifier', value)
      }
    }
  },

  methods: {
    next () {
      if (!this.validEmail(this.identifier)) {
        this.error = 'Enter an valid email address'
        this.$refs.input.focus()
        return
      }

      this.error = null
      this.$emit('next', this.identifier)
      // this.$router.push({ name: 'password' })
    },

    validEmail (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },

    wip
  }
}
</script>
