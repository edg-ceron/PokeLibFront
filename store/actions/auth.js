import api from '@/lib/api'

export default {
  async login ({ commit, dispatch, state }, {user, password}) {
      const data = {user, password}
      const response = await api.login(data)
      return response
  },
}
