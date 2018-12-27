<template>
  <div id="app">
     click{{$store.state.count}} 
     <button @click="add">+</button>
     <button @click="lod">-</button>
  </div>
</template>

<script>

import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'App',
  methods:{
  	...mapActions(['add']),
  	...mapActions(['lod'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
