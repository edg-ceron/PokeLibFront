<template>
   <section class="container">
      <!-- <p class="title has-text-centered">
        Detalle
        poner como si fuse una pokex en dos columnas rojas
        1 columna imagen, nombre, id
        2 columna en un cuadro mas pequeños solo las especificaciones como en progress
      </p> -->
      <div class="columns is-multiline">
        <div class="column is-12-touch is-6-desktop has-background-danger pokedex-main">
        <div class="column is-12 is-flex">
          <div class="dot-main has-background-link" />
          <div class="dot-small has-background-danger" />
          <div class="dot-small has-background-warning" />
          <div class="dot-small has-background-light" />
        </div>
          <div class="pokedex-container-img">
            <img
              :src="img"
              alt="pokemon"
              :style="{'background-color': POKEMON_TYPE_COLORS[type]}"
              v-if="img"
            >
          </div>
          <div class="is-flex columns">
            <div class="column is-6">
              <p class="title is-size-4 pokedex-id">#{{id}}</p>
              <p class="title is-size-4 is-capitalized"> {{name}}</p>
              <p class="has-text-light">
                Tipo: {{type}}
              </p>
              <p class="has-text-light">
                Experiencia: {{experience}}
              </p>
            </div>
            <div class="column is-6 is-flex is-justify-content-center">
              <div class="cruz has-background-link mt-5"></div>
            </div>
          </div>
        </div>
        <div class="column is-12-touch is-6-desktop pl-0 pb-0 is-flex is-flex-direction-column is-justify-content-end pokedex-stats">
          <div class="is-hidden-touch" style="height: 150px; overflow: hidden;" ><svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;"><path d="M-8.74,6.43 C184.82,-10.35 154.91,87.34 502.54,68.59 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill: #f14668;"></path></svg></div>
          <div class="section-stats has-background-danger p-5">
            <div class="subtitle is-size">Bienvenido a la libreria de tu pokemon preferido. En esta parte podrás encontrar los detalles de tu pokemon preferido</div>
            <div class="columns is-multiline p-3 is-hidden-touch">
              <template v-for="index in 8">
                <div class="column is-3 has-background-link pokedek-ani-block" :key="index"></div>
              </template>
            </div>
            <h1 class="subtitle is-size-5">Estadísticas</h1>
            <stats
              :stats="stats"
            />
          </div>
        </div>
      </div>
  </section>
</template>

<script>

import { POKEMON_TYPE_COLORS } from '@/constant/general'

export default {
  name: 'Pokedex',
  components: {
    Stats: () => import('@/components/Stats.vue'),
  },
  props: {
    name: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    experience: {
      type: Number,
      required: true
    },
    img: {
      type: String,
      required: true
    },
    stats: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      POKEMON_TYPE_COLORS
    }
  },
}
</script>

<style scoped>
.pokedex-main {
  border-radius: 30px 30px 0px;
  border-right: 6px solid black;
}
.pokedex-stats {
}
.section-stats {
  height: 80%;
  padding-top: 80px;
  border-bottom-right-radius: 30px;
}

.pokedek-ani-block {
  border: 1px solid black;
  height: 50px;
}

.pokedex-container-img {
  background-color: #edede9;
  padding: 15px;
  max-height: 400px;
  text-align: center;
  border-radius: 20px;
}
.pokedex-container-img img {
  background-color: #90e0ef;
  height: 40px;
  height: 350px;
  border-radius: 20px;
  animation: bounce-down 3s linear infinite;
}

.pokedex-id {

}

.dot-main {
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 4px solid #90e0ef
}
.dot-small  {
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: 1px solid black
}

.cruz {
  height: 100px;
  width: 100px;
  clip-path: polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 86%, 34% 86%, 35% 50%, 10% 50%);
}

@media screen and (max-width: 1024px) {

  .section-stats {
    height: auto;
  }
}
@media screen and (max-width: 768px) {
  .pokedex-main {
    border-radius: 30px 30px 0px 0px;
    border-right: 0px;
  }
  .pokedex-stats {
    padding: 0 !important;
  }
}
</style>
