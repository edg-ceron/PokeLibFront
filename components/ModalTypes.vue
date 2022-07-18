<template>
  <div class="modal" :class="[this.show ?'is-active' : '']">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box is-flex is-flex-direction-column is-justify-content-center">
        <p class="title has-text-black">Diccionario de Tipos:</p>
        <table class="table is-striped">
          <thead>
            <tr>
              <th>Categoria</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Normal</td>
              <td :style="{'background-color': POKEMON_TYPE_COLORS.normal}"></td>
            </tr>
            <tr>
              <td>Fighting</td>
              <td :style="{'background-color': POKEMON_TYPE_COLORS.fighting}"></td>
            </tr>
            <tr>
              <td>Flying</td>
              <td :style="{'background-color': POKEMON_TYPE_COLORS.flying}"></td>
            </tr>
            <tr>
              <td>Poison</td>
              <td :style="{'background-color': POKEMON_TYPE_COLORS.poison}"></td>
            </tr>
            <tr>
              <td>Ground</td>
              <td :style="{'background-color': POKEMON_TYPE_COLORS.ground}"></td>
            </tr>
            <tr>
              <td>Rock</td>
              <td :style="{'background-color': POKEMON_TYPE_COLORS.rock}"></td>
            </tr>
            <tr>
              <td>Bug</td>
              <td :style="{'background-color': POKEMON_TYPE_COLORS.bug}"></td>
            </tr>
            <tr>
              <td>Ghost</td>
              <td :style="{'background-color': POKEMON_TYPE_COLORS.ghost}"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="this.onClose"></button>
  </div>
</template>

<script>
import { POKEMON_TYPE_COLORS } from '@/constant/general'


export default {
  name: 'ModalTypes',
  props: {
    show: {
      type: Boolean,
      required: true
    },
    onClose: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      POKEMON_TYPE_COLORS,
    }
  }
}
</script>
