<template>
  <component
    :is="component"
    v-bind="$attrs"
  >
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
