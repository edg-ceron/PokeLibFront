import fetchManager from '@/lib/fetchManager'
import { urlQueryData } from '@/lib/utils'

const API_URL = process.env.API_URL

export default {
  getListPokemon: async ({limit, offset}) => {
    const url = urlQueryData(`${API_URL}/PokemonManagement/api/pokemon/list`, {limit, offset})
    const response = await fetchManager(url)
    return  response
  },
  getDetailPokemon: async ({pokemonId}) => {
    const response = await fetchManager(`${API_URL}/PokemonManagement/api/pokemon/${pokemonId}`)
    return  response
  }
}
