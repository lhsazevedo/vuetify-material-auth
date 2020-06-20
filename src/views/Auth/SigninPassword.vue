<template>
  <div>
    <div class="text-center w-100">
      <h1 class="text-h5 mb-2">Welcome</h1>
      <v-chip
        class="mb-10"
        @click="$router.push({ name: 'signin' })"
        outlined
        link
      >
        <v-avatar left>
          <v-icon color="secondary">mdi-account-circle</v-icon>
        </v-avatar>
        email@example.com
        <v-avatar right>
          <v-icon color="secondary">mdi-chevron-down</v-icon>
        </v-avatar>
      </v-chip>

      <v-form>
        <v-text-field
          class="mb-10"
          :append-icon="show ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
          label="Enter your password"
          name="password"
          :type="show ? 'input' : 'password'"
          hide-details="auto"
          outlined
          @click:append="show = !show"
        ></v-text-field>
      </v-form>

      <div class="d-flex justify-space-between">
        <v-btn class="text-none letter-spacing-0" style="margin-left: -16px;" color="primary" text>Forgot password?</v-btn>
        <v-btn @click="$router.push({ name: 'password' })" class="text-none letter-spacing-0" style="min-width: 88px;" color="primary" depressed>Next</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false
  }),

  computed: {
    password: {
      get () {
        return this.$store.state.password
      },
      set (value) {
        this.$store.commit('updatePassword', value)
      }
    }
  },

  methods: {
    nop () {

    }
  }
}
</script>
