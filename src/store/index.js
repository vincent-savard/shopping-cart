import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //data
        products: []
    },

    getters: {
        //computed properties
    },

    actions: {
        //methods
    },

    mutations: {
        //setting and updating the state
        setProducts(state, payload) {
            state.products = payload
        }
    }
})