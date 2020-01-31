<template>
  <v-container
    class="fill-height justify-center"
    :class="{ 'align-start': $vuetify.breakpoint.xsOnly }"
    fluid
  >
    <login-card>
      <router-view />
    </login-card>
  </v-container>
</template>

<script>
import LoginCard from '@/components/LoginCard/LoginCard'

export default {
  components: { LoginCard }
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
