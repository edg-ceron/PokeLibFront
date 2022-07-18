<template>
  <section class="container container-list">
    <div class="columns is-multiline is-mobile">
      <template v-if="!list.length">
        <template v-for="index in 6" >
        <div
            :key="index"
            class="column is-4-desktop is-12-mobile"
          >
            <skeleton-card />
        </div>
        </template>
      </template>
      <div class="column is-6-touch is-6-desktop">Encontrados: <strong>{{count}}</strong></div>
      <div class="column is-6-touch is-6-desktop is-flex is-justify-content-flex-end">
        <button class=" button is-link mr-3" @click="toogleModal" >
          ❔
        </button>
        <div class="select is-info">
          <select
            @input="onChangeLimit"
            :value="limit"
            class="is-fullwidth"
          >
            <option :value="6"> 6 </option>
            <option :value="12"> 12 </option>
            <option :value="24"> 24 </option>
          </select>
        </div>
      </div>
      <template v-for="(pokemonItem, index) in list">
        <div
          :key="index"
          class="column is-4-desktop is-6-tablet is-12-mobile"
        >
          <pokemon-card
            :name="pokemonItem.name"
            :pokemonId="pokemonItem.id"
          />
        </div>
      </template>
      <div class="column is-12 has-text-centered" >
        <loading-pokeball v-if="loadingData"/>
        <button
          v-else
          class="button is-success"
          @click="onLoadMoreData"
        >
          Cargar más
        </button>
      </div>
    </div>

    <div class="modal" :class="[this.showModal ?'is-active' : '']">
      <div class="modal-background"></div>
      <div class="modal-content">
        <div class="box is-flex is-flex-direction-column is-justify-content-center">
          <p class="title has-text-black">Diccionario de Tipos:</p>
          <table class="table is-striped">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Normal</td>
                <td :style="{'background-color': POKEMON_TYPE_COLORS.normal}"></td>
              </tr>
              <tr>
                <td>Fighting</td>
                <td :style="{'background-color': POKEMON_TYPE_COLORS.fighting}"></td>
              </tr>
              <tr>
                <td>Flying</td>
                <td :style="{'background-color': POKEMON_TYPE_COLORS.flying}"></td>
              </tr>
              <tr>
                <td>Poison</td>
                <td :style="{'background-color': POKEMON_TYPE_COLORS.poison}"></td>
              </tr>
              <tr>
                <td>Ground</td>
                <td :style="{'background-color': POKEMON_TYPE_COLORS.ground}"></td>
              </tr>
              <tr>
                <td>Rock</td>
                <td :style="{'background-color': POKEMON_TYPE_COLORS.rock}"></td>
              </tr>
              <tr>
                <td>Bug</td>
                <td :style="{'background-color': POKEMON_TYPE_COLORS.bug}"></td>
              </tr>
              <tr>
                <td>Ghost</td>
                <td :style="{'background-color': POKEMON_TYPE_COLORS.ghost}"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button class="modal-close is-large" aria-label="close" @click="toogleModal"></button>
    </div>

  </section>
</template>

<script>
import { mapActions } from 'vuex'
import { POKEMON_TYPE_COLORS } from '@/constant/general'


const DEFAULT_SHOW_ITEMS = 6
export default {
  name: 'ListPokemon',
  layout: 'initial',
  components: {
    PokemonCard: () => import('@/components/PokemonCard.vue'),
    SkeletonCard: () => import('@/components/SkeletonCard.vue'),
    LoadingPokeball: () => import('@/components/LoadingPokeball.vue')
  },
  data () {
    return {
      POKEMON_TYPE_COLORS,
      count: 0,
      list: [],
      limit: DEFAULT_SHOW_ITEMS,
      offset: 0,
      loadingData: false,
      showModal: false
    }
  },
  async beforeMount () {
    await this.onGetListPokemon()

  },
  methods: {
    ...mapActions(['getListPokemon']),
    async onGetListPokemon () {
      const response = await this.getListPokemon({limit: this.limit, offset: this.offset})
        console.log('response', response )
      if (response?.data) {

        // const format = response.data.results.map( item => {
        //   const splitUrl = item.url.split("/")
        //   return {name: item.name, id: parseInt(splitUrl[splitUrl.length - 2], 10) }
        // } )
        // this.list.push(...format)
        this.list.push(...response.data.results)
        this.count = response.data.count

      }
    },
    async onLoadMoreData () {
      this.loadingData = true
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        })
      this.offset = this.offset + parseInt(this.limit, 10)
      await this.onGetListPokemon()
      this.loadingData = false
    },
    async onChangeLimit ({target}) {
      console.log('e', target.value)
      this.list = []
      this.limit = target.value
      this.offset = 0
      await this.onGetListPokemon()
    },
    toogleModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style scoped>
  .container-list {
    margin-bottom: 100px;
  }
</style>
