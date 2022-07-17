import fetchManager from '@/lib/fetchManager'
import { urlQueryData } from '@/lib/utils'

// const API_URL = process.env.API_URL
const API_URL = 'https://pokeapi.co'


export default {
  getListPokemon: async ({limit, offset}) => {
    const url = urlQueryData(`${API_URL}/api/v2/pokemon`, {limit, offset})
    const response = await fetchManager(url)
    return  response
  },
  getDetailPokemon: async ({pokemonId}) => {
    const response = await fetchManager(`${API_URL}/api/v2/pokemon/${pokemonId}`)
    return  response
  }
}
