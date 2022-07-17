import api from '@/lib/api'


export default {
  async getListPokemon({ commit, dispatch, state }, {limit = 10, offset = 0}) {
    const reponse = await api.getListPokemon({limit, offset})
    return reponse
  },
  async getDetailPokemon({ commit, dispatch, state }, {pokemonId}) {
    const reponse = await api.getDetailPokemon({pokemonId})
    return reponse
  },
}
