<template>
  <div
    class="card"
    :style="{'background-color': POKEMON_TYPE_COLORS[type]}"
    @click="redirectDetail"
  >
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          :src="img"
          alt="pokemon"
          v-if="img"
        >
        <div class="skeleton skeleton-img" v-else></div>
        <p class="is-size-4 has-text-black-bis">#{{pokemonId}}</p>
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 is-capitalized"> {{name}}</p>
        </div>
      </div>

      <div class="content">
        <p class="has-text-light">
          Tipo: {{type}}
        </p>
        <p class="has-text-light">
          Experiencia: {{experience}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import { POKEMON_TYPE_COLORS } from '@/constant/general'

export default {
  name: 'PokemonCard',
  props: {
    name: {
      type: String,
      required: true
    },
    pokemonId:{
      type:Number
    },
  },
  components: {
  },
  data () {
    return {
      POKEMON_TYPE_COLORS,
      type: "",
      img: "",
      experience: "",
      fullData: null
    }
  },
  async beforeMount () {
    await this.onGetDetailPokemon()

  },
  methods: {
    ...mapActions(['getDetailPokemon']),
    async onGetDetailPokemon () {
      const response = await this.getDetailPokemon({pokemonId: this.pokemonId})
      if (response?.data) {
        this.img = response.data.sprites.other.home.front_default
        this.type = response.data.types[0].type.name
        this.experience= response.data.base_experience
        this.fullData = response.data
      }
    },
    redirectDetail () {
      this.$router.push( { name: 'detail', params: { data: this.fullData }} )
    }
  }
}
</script>

<style scoped>
.card {
  cursor: pointer;
  border-radius: 5%;
}
.card-image {
  overflow:hidden;
  background: #ffffff;
  border-radius: 5% 5% 18% 0%;
}
.card-image img:hover {
  transform: scale(1.2);
}
</style>
