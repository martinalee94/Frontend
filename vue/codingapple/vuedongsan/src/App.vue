<template>
  <div class='menu'>
    <a v-for="(m,i) in menus" :key="i">{{m}}</a>
  </div>
  <div v-for="p in products" :key="p">
    <h4>{{p}}</h4>
    <p>70 만원</p>
  </div>

</template>

<script>

export default {
  name: 'App',
  data(){ //데이터 보관함, 데이터 변경사항이 렌더링됨
    return {
      menus : ['Home', 'Products', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
    }
  },
  components: {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu{
  background: darkslateblue;
  padding : 15px;
  border-radius: 5px;
}
.menu a{
  color:white;
  padding: 10px;
}
</style>
