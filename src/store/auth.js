import axios from "axios";

export default {
  state: {
    token: null,
    userId: null
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload
    },
    setUserId(state, payload) {
      state.userId = payload
    },
  },
  actions: {
    async register() {
      try {
        axios.post('https://api.active-test.tech/api/register', {
          data: {
            "name": "сфы сыф",
            "email": "asd@dsa.dsa",
            "password": "asd@dsa.dsa"
          }
        }).then((response)=>{
          console.log('register response:', response)
        }).catch((e)=>{
          console.log('register error:', e)
        })
      } catch (e) {
        throw e
      }
    },
    async login({dispatch, commit}, payload) {
      let token = localStorage.getItem('token')
      let userId = localStorage.getItem('userId')
      if (token && userId) {
        commit('setToken', token)
        commit('setUserId', userId)
        return true
      }
      try {
        return axios.post('https://api.active-test.tech/api/login', {
          data: {
            "password": payload.password,
            "email": payload.email
          }
        })
          .then((response)=>{
            console.log('response', response)
            commit('setToken', response.data.token)
            localStorage.setItem('token', response.data.token);
            commit('setUserId', response.data.user_id)
            localStorage.setItem('userId', response.data.user_id);
          })
          .catch((e)=>{
            console.log('login error: ' + e)
          })
      } catch (e) {
        throw e
      }
    },
  }
}