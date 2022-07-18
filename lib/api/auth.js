import fetchManager from '@/lib/fetchManager'
import { urlQueryData } from '@/lib/utils'

// const API_URL = process.env.API_URL
const API_URL = 'http://localhost:8080'

export default {
  login: async (user) => {
    const response = await fetchManager(`${API_URL}/AuthenticationManagement/api/login`, {
      method: "POST",
      data: user
    })
    return  response
  },
}
