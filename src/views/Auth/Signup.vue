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
              {{ $vuetify.lang.t('$vuetify.auth.sign-up.title') }}
            </span>
          </div>
          <h1 class="text-h5 mb-6">
            {{ $vuetify.lang.t('$vuetify.auth.sign-up.create') }}
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
                    :label="$vuetify.lang.t('$vuetify.auth.sign-up.firstname')"
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
                    :label="$vuetify.lang.t('$vuetify.auth.sign-up.lastname')"
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
                :label="$vuetify.lang.t('$vuetify.auth.sign-up.email')"
                name="login"
                type="text"
                hide-details="auto"
                :hint="$vuetify.lang.t('$vuetify.auth.sign-up.email-hint')"
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
                    :label="$vuetify.lang.t('$vuetify.auth.sign-up.password')"
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
                {{ $vuetify.lang.t('$vuetify.auth.sign-up.password-props') }}
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
                {{ $vuetify.lang.t('$vuetify.auth.sign-up.instead') }}
              </v-btn>
              <v-btn
                class="text-none letter-spacing-0"
                style="min-width: 88px;"
                color="primary"
                depressed
                @click="wip"
              >
                {{ $vuetify.lang.t('$vuetify.auth.sign-up.next') }}
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
