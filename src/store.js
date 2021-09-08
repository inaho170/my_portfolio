import Vue from 'vue'
import Vuex from 'vuex'

// プラグインを使用するためのインストール
Vue.use(Vuex);

export default new Vuex.Store({
  // 全体で使用する値（すべてのコンポーネントからアクセスできるdateオプションみたいなもの）
  state:{

  },
  // stateを更新するための関数（唯一stateを更新する関数）
  mutations: {

  },
  // 変更があった、ということをmutationsにコミットして、mutationsの関数を使うところ
  actions:{

  }
})