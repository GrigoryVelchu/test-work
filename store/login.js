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
  writeTokenLocal({state}){
    localStorage.setItem('token', true)
  },
  doShowModal({state,commit}){
    commit('setShowModal',{value : true})
  },
  hideModal({state,commit}){
    if(state.showModal===true){
      commit('setShowModal',{value : false})
    }
  },
  doLoginInput({state,commit}, payload){
    commit('setLoginInput',{value : payload.target.value})
  },
  doPasswordInput({state,commit}, payload){
    commit('setPasswordInput',{value : payload.target.value})
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
  }
}
