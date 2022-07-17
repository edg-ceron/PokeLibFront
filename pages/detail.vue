<template>
   <section class="container">
      <p class="title has-text-centered">
        Detalle
        poner como si fuse una pokex en dos columnas rojas
        1 columna imagen, nombre, id
        2 columna en un cuadro mas pequeños solo las especificaciones como en progress
      </p>
  </section>
</template>

<script>

export default {
  name: 'Detail',
  layout: 'initial',
  beforeMount () {
    const { type } = this.$route.params
    console.log("type", type);
    // const { page = DEFAULT_INITIAL_PAGE } = this.$route.query
  },
}
</script>

<style scoped>
</style>
