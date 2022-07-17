import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
export const strict = false

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      ...state
    }),
    mutations: { ...mutations },
    actions: { ...actions }
  })
}

export default createStore

