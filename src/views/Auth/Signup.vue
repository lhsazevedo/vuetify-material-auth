<template>
  <div>
    <v-container class="pa-0">
      <v-row
        align="center"
        justify="space-between"
      >
        <v-col
          cols="7"
        >
          <div class="mb-4">
            <span class="text-h6 text--secondary">
              <img
                src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
                alt=""
                width="24"
                style="vertical-align: middle;"
              >
              Vuetify
            </span>
          </div>
          <h1 class="text-h5 mb-6">
            Create your Vuetify Account
          </h1>
          <v-form>
            <v-container class="pa-0">
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    ref="input"
                    class="mb-2"
                    label="First name"
                    name="login"
                    type="text"
                    hide-details="auto"
                    outlined
                    :error-messages="error"
                    dense
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    ref="input"
                    class="mb-2"
                    label="Last name"
                    name="login"
                    type="text"
                    hide-details="auto"
                    outlined
                    :error-messages="error"
                    dense
                  />
                </v-col>
              </v-row>
              <v-text-field
                ref="input"
                class="mb-2"
                label="Your email address"
                name="login"
                type="text"
                hide-details="auto"
                hint="You'll need to confirm that this email belongs to you."
                persistent-hint
                outlined
                :error-messages="error"
                dense
              />
              <v-row>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    ref="input"
                    class="mb-2"
                    label="Password"
                    name="login"
                    type="text"
                    hide-details="auto"
                    outlined
                    :error-messages="error"
                    dense
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    ref="input"
                    class="mb-2"
                    label="Confirm"
                    name="login"
                    type="text"
                    hide-details="auto"
                    outlined
                    :error-messages="error"
                    dense
                  />
                </v-col>
              </v-row>
              <div class="body-2">
                Use 8 or more characters with a mix of letters, numbers & symbols
              </div>
            </v-container>
          </v-form>
          <div class="transition-wrapper">
            <div class="d-flex justify-space-between mt-8">
              <v-btn
                class="text-none letter-spacing-0"
                style="margin-left: -16px;"
                color="primary"
                text
                @click="$router.push({ name: 'signin' })"
              >
                Sign in instead
              </v-btn>
              <v-btn
                class="text-none letter-spacing-0"
                style="min-width: 88px;"
                color="primary"
                depressed
                @click="wip"
              >
                Next
              </v-btn>
            </div>
            <!-- <transition :name="transitionName">
              <router-view @next="$emit('next', $event)" />
            </transition> -->
          </div>
        </v-col>

        <v-col
          cols="4"
        >
          <img
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            alt="Vuetify Logo"
            class="w-100 h-auto"
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { wip } from '@/helpers.js'

export default {
  data: () => ({
    transitionName: '',
    error: ''
  }),

  methods: {
    wip
  }
}
</script>
