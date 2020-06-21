<template>
 <div id="app" style="height: 100% !important;">
    <page-header></page-header>
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'
//import $ from "jquery"
export default {
  name: 'App',
  components: { PageHeader },
}
</script>

<style>
body {
    width:100% !important; 
    height:100% !important; 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100% !important;
  padding: 0px;
  margin: 0px;
  /*background-color: rgb(231, 231, 231);*/
  /*background-color: #eef5ff;*/
}
body {
  margin: 0px;
}
</style>