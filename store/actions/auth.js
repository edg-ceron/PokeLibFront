export default {
  login ({ commit, dispatch, state }, {user, password}) {
    try {
      // const { payload } = await api.signin(email, password)
      // if(payload.verifiedAccount){
      //   if(payload.success) {
      //     commit('setToken', payload.token)
      //   }
      //   commit('setAuthenticationValues', {
      //     name: payload.name,
      //     token: payload.token,
      //     step: payload.step,
      //     id: payload.id,
      //     status: payload.status,
      //     statusName: payload.status_name,
      //     success: payload.success
      //   })
      // }
      // return payload
      console.log("sdsdsds", user, password)
    } catch (error) {
      // console.log('error', error)
      // dispatch('addTemporalNotification', { type: 'danger', message: error.message })
    }
  },
}
