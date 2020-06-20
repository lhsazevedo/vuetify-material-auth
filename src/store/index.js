export default {
  state: {
    identifier: '',
    password: '',
    loading: false,
    disabled: false
  },

  mutations: {
    updateIdentifier (state, identifier) {
      state.identifier = identifier
    },

    updatePassword (state, password) {
      state.password = password
    },

    setLoading (state, loading) {
      state.loading = loading
    },

    setDisabled (state, disabled) {
      state.disabled = disabled
    }
  }
}
