<template>
    <div class="black-bg" v-if="modal == true">
    <div class='white-bg'>
        <h4>{{ products[clickedDetail].title}}</h4>
        <p>{{ products[clickedDetail].content}}</p>
        <p>{{ products[clickedDetail].price}}</p>
        <!-- <button @click='modal = false'>닫기</button> -->
    </div>
  </div>
</template>
<script>
export default {
    name:'Modal',
    props:{
        products : Array,
        modal : Boolean,
        clickedDetail : Number,
    },
}
</script>
<style>
    
</style>