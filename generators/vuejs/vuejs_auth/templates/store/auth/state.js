
// Auth Module State
const state = {
  token: localStorage.token || '',
  fetching: false,
  logging_in: false,
  current_user: {},
  login_user: {
    email: 'foo@bar.com',
    password: 'abc123',
    errors: {}
  },
  register_user: {
    name: 'Name Namerson',
    email: 'foo@bar.com',
    github: {
      login: 'boofar'
    },
    password: 'abc123',
    passwordverify: 'abc123',
    errors: {}
  }
}

export default state
