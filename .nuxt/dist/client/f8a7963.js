(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{488:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{snackbar:!1,snackbarText:"No error message",auth:{email:"",password:""}}},methods:{login:function(){var t=this;this.$fire.auth.signInWithEmailAndPassword(this.auth.email,this.auth.password).catch((function(e){t.snackbarText=e.message,t.snackbar=!0})).then((function(t){$nuxt.$router.push("/")}))},forgotPassword:function(){var t=this;this.$fire.auth.sendPasswordResetEmail(this.auth.email).then((function(){t.snackbarText="reset link sent to "+t.auth.email,t.snackbar=!0})).catch((function(e){t.snackbarText=e.message,t.snackbar=!0}))}}},o=n(91),c=n(149),l=n.n(c),d=n(271),h=n(432),v=n(427),m=n(481),f=n(482),k=n(483),w=n(484),x=n(487),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4",align:"center"}},[n("v-card",{staticClass:"elevation-4 text-left",attrs:{width:"500",shaped:"",color:"yellow"}},[n("v-card-title",[t._v("Login")]),t._v(" "),n("v-card-subtitle",[t._v("Login to your dashboard")]),t._v(" "),n("v-card-text",[n("v-form",[n("v-text-field",{attrs:{label:"Login",name:"login","prepend-icon":"mdi-account",type:"text"},model:{value:t.auth.email,callback:function(e){t.$set(t.auth,"email",e)},expression:"auth.email"}}),t._v(" "),n("v-text-field",{attrs:{label:"Password",name:"password","prepend-icon":"mdi-lock",type:"password"},model:{value:t.auth.password,callback:function(e){t.$set(t.auth,"password",e)},expression:"auth.password"}})],1)],1),t._v(" "),n("v-card-actions",{staticClass:"text-center"},[n("v-btn",{staticClass:"login-button",attrs:{depressed:"",large:""},on:{click:t.login}},[t._v("Login")]),t._v(" "),n("v-btn",{staticClass:"reset-button",attrs:{depressed:"",large:""},on:{click:t.forgotPassword}},[t._v("Forgot Password")])],1)],1),t._v(" "),n("v-snackbar",{attrs:{timeout:4e3,absolute:"",bottom:"",center:""},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n      "+t._s(t.snackbarText)+"\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardSubtitle:v.b,VCardText:v.c,VCardTitle:v.d,VCol:m.a,VForm:f.a,VRow:k.a,VSnackbar:w.a,VTextField:x.a})}}]);