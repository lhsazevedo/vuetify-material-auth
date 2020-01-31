<template>
  <component :is="component">
    <slot />
  </component>
</template>

<script>
import LoginCardDesktop from './LoginCardDesktop'
import LoginCardMobile from './LoginCardMobile'

export default {
  computed: {
    component () {
      return (this.$vuetify.breakpoint.xsOnly) ? LoginCardMobile : LoginCardDesktop
    }
  }
}
</script>
