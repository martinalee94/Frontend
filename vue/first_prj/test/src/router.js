import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import About from './views/About';

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [{
        path : '/', 
        component : Home, //기본패스일때는 홈으로 간다
    },
    {
        path : '/about',
        component : About,
    }
    ]
});