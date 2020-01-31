<template>
  <div>
    <v-card
      class="pa-10"
      style="width: 450px; min-height: 500px; overflow: hidden;"
      outlined
    >
      <slot />
    </v-card>

    <login-footer/>
  </div>
</template>

<script>
import LoginFooter from './LoginFooter'

export default {
  components: {
    LoginFooter
  }
}
</script>
