import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Calendar from './components/Calendar.vue'

// プラグインを使用するためのインストール
Vue.use(Router)

// URLの path と App.vue内 router-viewタグ に表示する Vueコンポーネント（表示したいページ）を紐づける設定
export default new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Calendar',
      name: 'calendar',
      component: Calendar
    }
  ]
})