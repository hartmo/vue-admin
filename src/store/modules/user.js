import { login } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  token: getToken(),
  name: '',
  id: 0
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, id) => {
    state.id = id
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password, authCode } = userInfo
    return new Promise((resolve, reject) => {
      login({ adminAccount: username.trim(), adminPwd: password, authCode: authCode }).then(response => {
        const { data } = response
        localStorage.clear()
        localStorage.setItem('user', JSON.stringify(data))
        commit('SET_NAME', data.adminAccount)
        commit('SET_AVATAR', data.id)
        setToken(data.adminAccount)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user) {
        commit('SET_NAME', user.adminAccount)
        commit('SET_AVATAR', user.id)
        resolve(user)
      } else {
        reject()
      }
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      localStorage.clear()
      commit('SET_TOKEN', '')
      removeToken()
      resetRouter()
      resolve()
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

