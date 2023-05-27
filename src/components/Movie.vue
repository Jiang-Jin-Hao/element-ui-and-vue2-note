<template>
  <div>
    <h1>电影标题：{{ title }}</h1>
    <div>评分：{{ rating }}</div>
    <div>
      <button @click="collect">收藏</button>
    </div>
  </div>
</template>

<style>

</style>

<!--需求：这个文件自己提供数据-->
<script>
/*
* export default这玩意叫导出
* name:"Movie" 可以在App.vue父文件里面用到
* */
import axios from "axios";

export default {
  name: "Movie",
  props: [
    //  props是自定义的属性
    // "title" 写完后，父文件App.vue调用的时候就可以把值传进来
    "title", "rating"
  ],
  data: function () {
    return {
      // title: "钢铁侠"
    }
  },
  created: function () {
    //  一般网页请求在这做
    // axios.get("http://localhost:8081/user/").then(function (response) {
    //   console.log(response);
    // })
  },
  methods: {
    // 方法
    collect() {
      alert("收藏成功");
    }
  }
}
</script>
