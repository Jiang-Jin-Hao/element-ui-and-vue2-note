<template>
  <div id="app">

    <!--    <img alt="Vue logo" src="./assets/logo.png"> -->
    <!--  使用HelloWorld模块  -->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->

    <!--  3.使用这个组件的模块  -->
    <!--  key很重要，得加上  -->
    <Movie v-for="movie in movies" :key="movie.id" :title="movie.title" :rating="movie.rating"/>

    <Hello/>

  </div>
</template>
<script>

/*引用了components目录下的HelloWorld.vue文件*/
/*因为用不到所以删除掉*/
// import HelloWorld from './components/HelloWorld.vue'

// 1.导入组件
import Movie from './components/Movie.vue'
import Hello from './components/Hello.vue'

// Movie.name

export default {
  name: 'App',
  data: function () {
    return {
      movies: [
        {
          id: 1001, title: "钢铁侠", rating: 9.1
        },
        {
          id: 1002, title: "金刚狼", rating: 9.2
        },
        {
          id: 1003, title: "无间道", rating: 9.3
        }
      ]
    }
  },
  components: {

    // 使用这个组件
    // HelloWorld

    // 2.注册组件
    Movie,
    Hello

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
