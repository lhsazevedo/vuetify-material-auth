<template>
  <v-container
    class="fill-height justify-center"
    fluid
  >
    <div>
      <v-card
        class="pa-10"
        style="width: 450px; min-height: 500px"
        outlined
      >
        <router-view />
      </v-card>
      <div class="d-flex justify-space-between mt-6">
        <v-btn class="text-none letter-spacing-0" style="margin-left: -12px;" color="secondary" text small>English (United States)</v-btn>
        <div style="margin-right: -12px;">
          <v-btn class="text-none letter-spacing-0" color="secondary" text small>Help</v-btn>
          <v-btn class="text-none letter-spacing-0" color="secondary" text small>Privacy</v-btn>
          <v-btn class="text-none letter-spacing-0" color="secondary" text small>Terms</v-btn>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style lang="scss">
  .letter-spacing-0 {
    letter-spacing: 0 !important;
  }

  .text-decoration-none {
    text-decoration: none !important;
  }
</style>
