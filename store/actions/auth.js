export default {
  login ({ commit, dispatch, state }, {user, password}) {
    try {
      console.log("Login", user, password)
    } catch (error) {
      // console.log('error', error)
    }
  },
}
