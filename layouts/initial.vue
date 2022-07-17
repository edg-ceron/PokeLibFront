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
  beforeMount() {
    // Promise.all([
    //   this.validToken()
    // ])
  },
  components: {
    Header: () => import('@/components/Header'),
    // Footer: () => import('@/components/Footer/withoutText'),
  },
  methods: {
    // ...mapActions(['validToken'])
  }
}
</script>

<style>
</style>
