export default function ({app, route, redirect}){

  if (route.path === '/') {
    //protected route
    if(!app.$fire.auth.currentUser) {
      //redirect to signin page
      return redirect('/auth/signin')
    }
  }
  else if (route.path === '/') {
    if(app.$fire.auth.currentUser) {
      //redirect to root page
      return redirect('/')
    }
  }

}