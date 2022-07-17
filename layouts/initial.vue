<template>
  <div class="hero is-fullheight is-primary">
    <section class="hero-head">
      <Header />
    </section>
    <section class="hero-body">
      <nuxt />
    </section>
    <Footer />
  </div>
</template>

<script>

export default {
  name: "Layout",
  components: {
    Header: () => import('@/components/Header'),
  },
  methods: {
  }
}
</script>

<style>
</style>
