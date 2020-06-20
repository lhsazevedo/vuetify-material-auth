import Vue from 'vue'
import Vuex from 'vuex'
import store from '@/store/index.js'

Vue.use(Vuex)

const vuexStore = new Vuex.Store(store)

export default vuexStore
