import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    rcConnectStatus: false,
    chatList: [],
  },
  mutations: {
    setRongCloudToken (state, token) {
      state.token = token;
    },
    setRongCloudConnect (state, bool) {
      state.rcConnectStatus = bool
    },
    addChatList (state, chatDetail) {
      state.addChatList.push(chatDetail);
    }
  },
  actions: {

  }
})
