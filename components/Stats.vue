<template>
  <section class="container container-stats">
      <template v-for="(item, index) in this.stats">
        <div class="columns is-multiline is-mobile" :key="index">
          <div class="column is-4-desktop is-6-mobile">
            <p class="is-capitalized has-text-right-desktop has-text-grey-dark">{{item.stat.name}}</p>
          </div>
          <div class="column is-1-desktop is-6-mobile is-hidden-desktop has-text-grey-dark">
            <p class="is-capitalized has-text-right">{{item.base_stat}}</p>
          </div>
          <div class="column is-7-desktop is-12-mobile">
            <progress class="progress is-danger has-text-white" :value="item.base_stat" max="100">15%</progress>
          </div>
          <div class="column is-1-desktop is-hidden-touch has-text-grey-dark">
            <p class="is-capitalized has-text-right">{{item.base_stat}}</p>
          </div>
        </div>
      </template>
  </section>
</template>

<script>

export default {
  name: 'Stats',
  props: {
    stats: {
      type: Array,
      required: true
    }
  },
  async beforeMount () {
    console.log('stats', this.stats)

  },
}
</script>

<style scoped>
.container-stats {
  background-color: #e3d5ca;
  border-radius: 10px;
  padding: 10px;
}
</style>
