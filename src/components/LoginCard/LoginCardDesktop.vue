<template>
  <div>
    <v-card
      style="width: 450px; min-height: 500px; overflow: hidden;"
      outlined
      :disabled="disabled"
    >
      <v-progress-linear v-if="loading" indeterminate />
      <div class="pa-10">
        <slot />
      </div>
    </v-card>

    <login-footer/>
  </div>
</template>

<script>
import LoginFooter from './LoginFooter'

export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  components: {
    LoginFooter
  }
}
</script>
