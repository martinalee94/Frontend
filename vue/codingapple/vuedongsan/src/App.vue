<template>
  <div class="black-bg" v-if="modal == true">
    <div class='white-bg'>
        <h4>상세페이지</h4>
        <p>상세 페이지 내용</p>
        <button @click='modal = false'>닫기</button>
    </div>
  </div>
  <div class='menu'>
    <a v-for="(m,i) in menus" :key="i">{{m}}</a>
  </div>

  <div v-for="(p, i) in products" :key="i">
    <img :src="'./assets/room' + i + '.jpg'" class='room-img' alt="방이미지">
    <h4 @click='modal = true'>{{p}}</h4>
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
      modal: false, //false close,true open modal status 

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
body{
  margin:0;
}
div{
  box-sizing:border-box;
}
.black-bg{
  width: 100%;
  height:100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding:20px;
}
.white-bg{
  width:100%;
  background: white;
  border-radius: 8px;
  padding:20px;
}

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
.room-img{
  margin-top:40px;
  width:100%;
}
</style>
