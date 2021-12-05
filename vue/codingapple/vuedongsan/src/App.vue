<template>
  
  <Modal :products='products' :modal='modal' :clickedDetail='clickedDetail' /> <!--pros 생성-->

  <div class='menu'>
    <a v-for="(m,i) in menus" :key="i">{{m}}</a>
  </div>

  <Discount />

  <div v-for="(room, i) in products" :key="i">
    <img :src='room.image' class='room-img' alt="방이미지">
    <h4 @click='roomDetail(room.id)'>{{room.title}}</h4>
    <p>{{room.price}} 만원</p>
  </div>

</template>

<script>
import room_data from './assets/data.js';
import Discount from './components/Discount.vue'; 
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  data(){ //데이터 보관함, 데이터 변경사항이 렌더링됨
    return {
      menus : ['Home', 'Products', 'About'],
      products : room_data,
      modal: false, //false close,true open modal status 
      clickedDetail: 0,
    }
  },
  methods:{
    increase(i){
      this.reportSum[i] += 1 //data를 가져올때는 this.~~
    },
    roomDetail(id){
      this.modal = true
      this.clickedDetail = id
    }

  },
  components: {
    Discount : Discount,
    Modal: Modal,
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
