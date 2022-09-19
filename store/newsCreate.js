export const state = () =>{
  return{
    newsPost:{
      id:0,
      imgSrc:'',
      title:'',
      date:'',
      text:''
    },
  }
}
export const mutations={
  setNewsPost(state,payload){
    state.newsPost.id = payload.id
    state.newsPost.imgSrc = payload.img
    state.newsPost.title = payload.title
    state.newsPost.date = payload.date
    state.newsPost.text = payload.text
    console.log(state.newsPost)
  }
}
export const getters = {
  getNewsPost(state){
    console.log(state.newsPost)
    return state.newsPost
  }
}
export const actions={
  doNewsPost({state,commit,dispatch,getters}, payload){
    console.log('in do new Post')
    console.log(payload)
    commit('setNewsPost', payload)
    dispatch('newsItems/addNewsItem', getters.getNewsPost, {root:true})
  }
}
