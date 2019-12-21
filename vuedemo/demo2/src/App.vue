<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <Counter v-bind:num ="num" v-on:incre="increment" v-on:decre="decrement"></Counter>
    <p><span>{{num}}</span></p>
    <router-view></router-view>
    <router-link to="/img">图片</router-link>
    <router-link to="/title">标题</router-link>
    <button v-on:click="showImg">点击出现图片页面</button>
    <button v-on:click="showTitle">点击出现标题页面</button>
  </div>
</template>

<script>

  import Counter from "./components/Counter";
  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
          num:11
      }
    },
    components:{
        Counter
    },
    methods:{
        increment(){
            this.num++;
        },
        decrement(){
            this.num--;
        },
        showImg(){
            this.$router.push("Img");
        },
        showTitle(){
            this.$router.push({path:"/title",query:{a:"123"}});
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
