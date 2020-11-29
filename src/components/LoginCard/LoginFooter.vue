<template>
  <div class="d-flex justify-space-between mt-6">
    <v-btn
      class="text-none letter-spacing-0"
      style="margin-left: -12px;"
      color="secondary"
      text
      small
    >
      {{ $vuetify.lang.t('$vuetify.login.footer.language') }}
    </v-btn>
    <div style="margin-right: -12px;">
      <v-btn
        class="text-none letter-spacing-0"
        color="secondary"
        text
        small
      >
        {{ $vuetify.lang.t('$vuetify.login.footer.help') }}
      </v-btn>
      <v-btn
        class="text-none letter-spacing-0"
        color="secondary"
        text
        small
      >
        {{ $vuetify.lang.t('$vuetify.login.footer.privacy') }}
      </v-btn>
      <v-btn
        class="text-none letter-spacing-0"
        color="secondary"
        text
        small
      >
        {{ $vuetify.lang.t('$vuetify.login.footer.terms') }}
      </v-btn>
    </div>
  </div>
</template>
