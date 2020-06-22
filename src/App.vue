<template>
 <div id="app" style="height: 100% !important;">
    <page-header></page-header>
    <router-view></router-view>
    <div class="btn-scrollup-gradient-blue scrollup"><i class="fa fa-chevron-up"></i></div>
  </div>
</template>

<script>
import PageHeader from './components/Header.vue'
import $ from "jQuery"
export default {
  name: 'App',
  components: { PageHeader },

  mounted(){
    $(function() {
        $('.scrollup').click(function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })
    })
    $(window).scroll(function() {
        if ($(this).scrollTop()>200) {
            $('.scrollup').fadeIn();
        }
        else {
            $('.scrollup').fadeOut();
        }
    });

  },
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