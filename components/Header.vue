<template>
  <section>
    <nav class="navbar has-background-info">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item is-size-2" :to="{ name: 'list' }">
            <img src="/pokeball.png" alt="Logo">
            PokeLib
          </router-link>
          <span class="navbar-burger burger" @click="menu" data-target="navbarMenuHeroB">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroB" class="navbar-menu">
          <div class="navbar-end">
            <router-link class="navbar-item" :to="{ name: 'list' }">Diccionario</router-link>
            <router-link class="navbar-item" :to="{ name: 'generation' }">Generaciones</router-link>
            <a class="navbar-item" href="https://pokeapi.co/">
              Documentation
            </a>
            <span class="navbar-item">
              <a class="button is-info is-inverted" href="https://www.linkedin.com/in/e-ceron/" target="_blank">
                <span>Linkedin</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script>

export default {
  name: "Header",
  methods: {
    menu () {
      let burger = document.querySelector('.burger')
      let nav = document.querySelector('#'+burger.dataset.target)
      burger.classList.toggle('is-active')
      nav.classList.toggle('is-active')
    },

  }
}
</script>

<style>
.navbar {
  border-bottom: 1px solid #f5f5f58a;
}
</style>
