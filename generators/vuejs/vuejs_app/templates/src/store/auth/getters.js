
// Project Module Getters
const getters = {
  fetching: state => {
    return state.fetching
  },
  token: state => {
    return state.token || false
  },
  user: state => {
    return state.user
  },
  isAuthenticated: state => {
    return !!state.token
  }
}

export default getters
