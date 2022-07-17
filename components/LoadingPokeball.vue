<template>
   <div class="loading-poke">
    <img src="/pokeball.png" alt="pokeball">
  </div>
</template>

<script>

export default {
  name: 'LoadingPokeball',
}
</script>

<style scoped>
  .loading-poke img {
    width: 75px;
    height: 75px;
    animation: rotation 2s infinite linear;
  }
</style>
