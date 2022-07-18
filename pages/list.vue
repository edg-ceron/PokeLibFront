<template>
  <section class="container container-list">
    <div class="columns is-multiline is-mobile">
      <div class="column is-12">
        <h1 class="title is-size-3">Listado de pokemones</h1>
      </div>
      <div class="column is-6-touch is-6-desktop">Encontrados: <strong>{{count}}</strong></div>
      <div class="column is-6-touch is-6-desktop is-flex is-justify-content-flex-end">
        <button class=" button is-link mr-3" @click="toogleModal" >
          ❕
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

    <modal-types
      :show="showModal"
      :onClose="toogleModal"
    />
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
    LoadingPokeball: () => import('@/components/LoadingPokeball.vue'),
    ModalTypes: () => import('@/components/ModalTypes.vue')
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
      if (response?.data) {
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
