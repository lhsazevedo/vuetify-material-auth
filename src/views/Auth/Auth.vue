<template>
  <v-container
    class="fill-height justify-center"
    :class="{ 'align-start': $vuetify.breakpoint.xsOnly }"
    fluid
  >
    <login-card
      :loading="loading"
      :disabled="disabled"
    >
      <router-view @next="onNext" />
    </login-card>
  </v-container>
</template>

<script>
import LoginCard from '@/components/LoginCard/LoginCard'

export default {

  components: { LoginCard },
  data: () => ({
    loading: false,
    disabled: false
  }),

  methods: {
    onNext (data) {
      this.loading = true
      this.disabled = true
      setTimeout(() => {
        this.loading = false
        this.disabled = false
        this.$router.push({ name: 'password' })
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
  .letter-spacing-0 {
    letter-spacing: 0 !important;
  }

  .text-decoration-none {
    text-decoration: none !important;
  }
</style>
