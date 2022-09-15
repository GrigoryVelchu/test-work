export const state = () => {
  return{
    showModal:false,
    token:false,
    loginData:{login:'qwerty',password:'123456'},
    loginInput:'',
    passwordInput:'',
  }
}
export const actions = {
  writeTokenLocal({state,commit}){
    console.log('in WriteToken')
    commit('setToken')
    localStorage.setItem('token', state.token)
  },
  doShowModal({state,commit}){
    if (state.token===false && state.showModal===false){
      commit('setShowModal',{value : true})
    }
  },
  hideModal({state,commit}){
      commit('setShowModal',{value : false})
  },
  doLoginInput({state,commit}, payload){
    commit('setLoginInput',{value : payload.target.value})
  },
  doPasswordInput({state,commit}, payload){
    commit('setPasswordInput',{value : payload.target.value})
  },
  doAuth({state, getters, dispatch}){
    if(getters.checkOut){
      dispatch('writeTokenLocal')
    }
  },
}
export const getters = {
  getShowModal(state){
    return state.showModal
  },
  getToken(state){
    return state.token
  },
  getLoginInput(state){
    return state.loginInput
  },
  getPasswordInput(state){
    return state.passwordInput
  },
  checkOut(state,dispatch){
    if(state.loginInput === state.loginData.login && state.passwordInput === state.loginData.password)
    console.log('checked!!!')
    return state.loginInput === state.loginData.login && state.passwordInput === state.loginData.password
  }
}

export const mutations = {
  setShowModal(state, payload){
    state.showModal = payload.value
  },
  setLoginInput(state, payload){
    state.loginInput = payload.value
  },
  setPasswordInput(state, payload){
    state.passwordInput = payload.value
  },
  setToken(state){
    state.token = true
  }
}
