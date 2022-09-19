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
    commit('setToken', {token:true})
    localStorage.setItem('token', state.token)
  },
  disableTokenLocal({state,commit}){
    commit('setToken', {token:false})
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
      dispatch('hideModal')
    }
    else{
      alert('Не правильно введен пароль. Login - qwerty, Пароль - 123456')
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
  setToken(state,payload){
    state.token = payload.token
  }
}
