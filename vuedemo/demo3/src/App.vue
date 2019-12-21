<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button v-on:click="get">按钮</button>
    <span>{{msg}}</span>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
      return {
          msg : ""
      };
  },
  methods:{
      get(){
          this.$http.get("package.json",{
              params:{
                  userId : "sss"
              },
              headers:{
                  dd:"ss"
              }
          }).then(res=>{
              this.msg = res.data;
          },error=>{
              this.msg = error
          });
      }
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
