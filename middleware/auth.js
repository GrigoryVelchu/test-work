export default function({store,redirect,route}){
  if (route.path === '/news/create'&&!store.state.login.token){
    return redirect('/')
  }
}
