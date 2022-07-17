<template>
  <section class="container">
    <div class="columns is-multiline">
      <div class="column is-12 is-flex is-justify-content-flex-end">
        <router-link to="list">Regresar</router-link>
      </div>
      <div class="column is-12">
        <pokedex
          :name="name"
          :id="id"
          :img="img"
          :type="type"
          :experience="experience"
          :stats="stats"
        />
      </div>
    </div>
  </section>
</template>

<script>

import { POKEMON_TYPE_COLORS } from '@/constant/general'

export default {
  name: 'Detail',
  layout: 'initial',
  components: {
    Pokedex: () => import('@/components/Pokedex.vue'),
  },
  data () {
    return {
      POKEMON_TYPE_COLORS,
      name: "",
      id: null,
      type: "",
      experience: "",
      stats: [], 
    }
  },
  beforeMount () {
    const { data } = this.$route.params
    if (!data) this.$router.push( { name: 'list'} )
    this.name= data.name
    this.id= data.id
    this.img = data.sprites.other.home.front_default
    this.type = data.types[0].type.name
    this.experience= data.base_experience
    this.stats= data.stats
  },
}
</script>

<style scoped>
</style>
