export default function ({app, route, redirect}){

  if (route.path === '/') {
    //protected route
    if(!app.$fire.auth.currentUser) {
      //go to sign in page
      return redirect('/auth/signin')
    }
  }
  else if (route.path === '/') {
    //protected route
    if(app.$fire.auth.currentUser) {
      //go to sign in page
      return redirect('/')
    }
  }

}