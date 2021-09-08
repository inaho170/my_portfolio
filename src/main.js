// 最初に実行される JavaScript ファイル
// Vue のオブジェクトを生成して、index.html に適用しています。

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

// axios 使用のための設定
Vue.use(VueAxios, axios)

// Vueを使用するための設定（Vueを使用します、という宣言のようなもの）
new Vue({

  // Vue Router や Vuexを使用するための設定
  store,   // vuexのstoreを使
  router,
  vuetify,

  render: h => h(App) // 最初に表示する App コンポーネントを指定（App.vueファイルの拡張子を除いたファイル名）
}).$mount('#app')     // index.html の <div id="app"></div> に Vue を適用する旨の記述（上記で指定したファイルをindex.htmlと紐づける）
