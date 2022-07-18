import fetchManager from '@/lib/fetchManager'

const API_URL = process.env.API_URL

export default {
  login: async (user) => {
    const response = await fetchManager(`${API_URL}/AuthenticationManagement/api/login`, {
      method: "POST",
      data: user
    })
    return  response
  },
}
