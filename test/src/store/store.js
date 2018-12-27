import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const ADD = 'ADD'
const LOD = 'LOD'
const state = {
	count:0
}
const mutations = {
	[ADD](state){
		state.count++
	},
	[LOD](state){
		state.count--
	}
}
const actions = {
	add({commit}){
		commit('ADD')
	},
	lod({commit}){
		if(state.count>0){
			commit('LOD')
		}
	}
}
const getters = {
	
}


export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
