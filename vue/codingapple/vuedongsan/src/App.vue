<template>
  <div class='menu'>
    <a v-for="(m,i) in menus" :key="i">{{m}}</a>
  </div>
  <div v-for="(p, i) in products" :key="i">
    <h4>{{p}}</h4>
    <p>70 만원</p>
    <button @click="increase(i)">신고</button>
    <span>신고 수: {{reportSum[i]}}</span>

  </div>

</template>

<script>

export default {
  name: 'App',
  data(){ //데이터 보관함, 데이터 변경사항이 렌더링됨
    return {
      menus : ['Home', 'Products', 'About'],
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      reportSum : [0, 0, 0],
    }
  },
  methods:{
    increase(i){
      this.reportSum[i] += 1 //data를 가져올때는 this.~~
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
