<template>
  <div class="d-flex flex-column h-100 w-100 pa-6">
    <div class="flex-grow-1">
      <slot />
    </div>
    <login-footer />
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
