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
  </section>
</template>

<script>
import { mapActions } from 'vuex'

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
      count: 0,
      list: [],
      limit: DEFAULT_SHOW_ITEMS,
      offset: 0,
      loadingData: false
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

        const format = response.data.results.map( item => {
          const splitUrl = item.url.split("/")
          return {name: item.name, id: parseInt(splitUrl[splitUrl.length - 2], 10) }
        } )
        this.list.push(...format)
        this.count = response.data.count

        // this.list.push(...response.data.results)
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
    }
  }
}
</script>

<style scoped>
  .container-list {
    margin-bottom: 100px;
  }
</style>
