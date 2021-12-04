<template>
    <div>
        <h1>welcome {{title}}!</h1>
        <h1>welcome {{title2}}!</h1>
        <input type="text" v-model="input1" />
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>
        <select class="form-contorl" v-model="region" @change="changeRegion">
            <!--attr 안에서는 :으로 데이터 접근, html 안에서는 {{}}로 접근한다-->
            <option :key="i" :value="d.v" v-for="(d, i) in options">{{d.t}}</option>
        </select>
        <table class="table table-bordered" v-show="tableShow">
            <tr :key="i" v-for="(d, i) in options">
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data(){ //data 다루기
        return{
            title:'Home',
            title2: 'Seoul',
            input1: 'abc데이터바인딩',
            options: [
                {v: 's', t: 'seoul'},
                {v: 'j', t: 'jeju'},
                {v: 'b', t: 'busan'},
            ],
            region: 'B',
            tableShow: false,
        }
    },
    methods:{ //함수 다루기 
        getData(){
            alert(this.input1);
        },
        setData(){
            this.input1 = '12345';
        },
        changeRegion(){
            alert(this.region);
        }
    },
    watch:{
        input1(){ //데이터명을 가지고 함수를 만듦, 해당 데이터가 바뀌는걸 감시하고있음
            console.log(this.input1)
        },
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){ //예를 들어, 마운트 되기 전에 디비콜하고, 변수에 바인딩해줘서 값을 가져옴
        console.log('beforeMount')
    },
    mounted(){
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    beforeDestroy(){
        console.log('beforeDestroy')
    },
    destroyed(){
        console.log('destroyed')
    }
    
}
</script>