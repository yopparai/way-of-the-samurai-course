(this["webpackJsonpway-of-the-samurai-course"]=this["webpackJsonpway-of-the-samurai-course"]||[]).push([[0],{124:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(42),a=n(5),s="way-of-the-samurai-course/dialogs/ADD_MESSAGE",c={dialogs:[{id:1,name:"Andrey"},{id:2,name:"Masha"},{id:3,name:"Sasha"},{id:4,name:"Misha"},{id:5,name:"Jenny"},{id:6,name:"Ivan"}],messages:[{id:1,message:"Hi"},{id:2,message:"How are you"},{id:3,message:"Yo"}]},o=function(e){return{type:s,newMessageText:e}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n={id:4,message:t.newMessageText};return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[n])});default:return e}}},131:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__17MJB"}},15:function(e,t,n){"use strict";n.d(t,"d",(function(){return u})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return f}));var r=n(6),a=n.n(r),s=n(10),c=n(129),o=n.n(c).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0",withCredentials:!0,headers:{"api-key":"61af85e9-a575-440a-b080-b7f6a6c72d1f"}}),u={getUsers:function(e,t){return Object(s.a)(a.a.mark((function n(){var r;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.get("/users?page=".concat(e,"&count=").concat(t));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})))()}},i={authorize:function(){return Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.get("/auth/me");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},login:function(e,t,n){return Object(s.a)(a.a.mark((function r(){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.post("/auth/login",{email:e,password:t,rememberMe:n});case 2:return s=r.sent,r.abrupt("return",s.data);case 4:case"end":return r.stop()}}),r)})))()},logout:function(){return Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.delete("/auth/login");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()}},l={getProfile:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("/profile/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},getStatus:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.get("/profile/status/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()},updateStatus:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.put("/profile/status",{status:e});case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))()}},f={follow:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.post("/follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.resultCode);case 4:case"end":return t.stop()}}),t)})))()},unfollow:function(e){return Object(s.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.delete("/follow/".concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.resultCode);case 4:case"end":return t.stop()}}),t)})))()}}},159:function(e,t,n){},164:function(e,t,n){},23:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE"}},288:function(e,t,n){"use strict";n.r(t);n(159);var r=n(63),a=n.n(r),s=n(0),c=n.n(s),o=n(34),u=n(35),i=n(37),l=n(36),f=(n(164),n(23)),p=n.n(f),d=n(21),j=n(1),b=function(){return Object(j.jsxs)("nav",{className:p.a.nav,children:[Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(d.b,{to:"/profile",activeClassName:p.a.activeLink,children:"Profile"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(d.b,{to:"/dialogs",activeClassName:p.a.activeLink,children:"Messages"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(d.b,{to:"/users",activeClassName:p.a.activeLink,children:"Users"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)("a",{children:"News"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)("a",{children:"Music"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)("a",{children:"Settings"})})]})},h=n(11),g=n(17),O=n(6),m=n.n(O),v=n(10),x=n(42),w=n(5),y=n(15),P=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)(Object(w.a)({},e),r):e}))},_="way-of-the-samurai-course/users/FOLLOW",S="way-of-the-samurai-course/users/UNFOLLOW",C="way-of-the-samurai-course/users/SET_USERS",k="way-of-the-samurai-course/users/SET_CURRENT_PAGE",I="way-of-the-samurai-course/users/SET_TOTAL_USERS_COUNT",E="way-of-the-samurai-course/users/TOGGLE_IS_FETCHING",N="way-of-the-samurai-course/users/TOGGLE_IS_FOLLOWING_PROGRESS",U={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},T=function(e){return{type:_,userId:e}},F=function(e){return{type:S,userId:e}},z=function(e){return{type:C,users:e}},L=function(e){return{type:k,currentPage:e}},A=function(e){return{type:I,totalUsersCount:e}},M=function(e){return{type:E,isFetching:e}},R=function(e,t){return{type:N,isFetching:e,userId:t}},D=function(){var e=Object(v.a)(m.a.mark((function e(t,n,r,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(R(!0,n)),e.next=3,r(n);case 3:0===e.sent&&t(a(n)),t(R(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(w.a)(Object(w.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:!0})});case S:return Object(w.a)(Object(w.a)({},e),{},{users:P(e.users,t.userId,"id",{followed:!1})});case C:return Object(w.a)(Object(w.a)({},e),{},{users:t.users});case k:return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case I:return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.totalUsersCount});case E:return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case N:return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(x.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},B=n(67),H=n(127),J=n(69),W=n.n(J),K=n(130),V=n.n(K),q=function(e){for(var t=e.onPageChanged,n=e.currentPage,r=e.totalItemsCount,a=e.pageSize,c=e.portionSize,o=void 0===c?10:c,u=Math.ceil(r/a),i=[],l=1;l<=u;l++)i.push(l);var f=Math.ceil(u/o),p=Object(s.useState)(1),d=Object(H.a)(p,2),b=d[0],h=d[1],g=(b-1)*o+1,O=b*o;return Object(j.jsxs)("div",{className:W.a.paginator,children:[b>1&&Object(j.jsx)("button",{onClick:function(){return h(b-1)},children:"PREV"}),i.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(j.jsx)("span",{className:V()(Object(B.a)({},W.a.selectedPage,n===e),W.a.pageNumber),onClick:function(){return t(e)},children:e},e)})),f>b&&Object(j.jsx)("button",{onClick:function(){return h(b+1)},children:"NEXT"})]})},X=n(131),Y=n.n(X),Z=n.p+"static/media/default-user-avatar.e8dbe401.png",Q=function(e){var t,n=e.user,r=e.follow,a=e.followingInProgress,s=e.unfollow;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(d.b,{to:"/profile/".concat(n.id),children:Object(j.jsx)("img",{src:null!==(t=n.photos.small)&&void 0!==t?t:Z,className:Y.a.userPhoto})})}),Object(j.jsx)("div",{children:n.followed?Object(j.jsx)("button",{disabled:a.some((function(e){return n.id===e})),onClick:function(){s(n.id)},children:"Unfollow"}):Object(j.jsx)("button",{disabled:a.some((function(e){return n.id===e})),onClick:function(){r(n.id)},children:"Follow"})})]}),Object(j.jsx)("span",{children:Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:n.name}),Object(j.jsx)("div",{children:n.status})]})})]},n.id)},$=function(e){var t=e.users,n=e.pageSize,r=e.follow,a=e.followingInProgress,s=e.totalUsersCount,c=e.unfollow,o=e.currentPage,u=e.onPageChanged;return Object(j.jsxs)("div",{children:[Object(j.jsx)(q,{onPageChanged:u,currentPage:o,totalItemsCount:s,pageSize:n}),Object(j.jsx)("div",{children:t.map((function(e){return Object(j.jsx)(Q,{user:e,follow:r,followingInProgress:a,unfollow:c})}))})]})},ee=n(48),te=n(12),ne=function(e){return e.usersPage.users},re=function(e){return e.usersPage.pageSize},ae=function(e){return e.usersPage.totalUsersCount},se=function(e){return e.usersPage.currentPage},ce=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[this.props.isFetching?Object(j.jsx)(ee.a,{}):null,Object(j.jsx)($,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,unfollow:this.props.unfollow,follow:this.props.follow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(c.a.Component),ie=Object(te.d)(Object(g.b)((function(e){return{users:ne(e),pageSize:re(e),totalUsersCount:ae(e),currentPage:se(e),isFetching:ce(e),followingInProgress:oe(e)}}),{follow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(n,e,y.b.follow.bind(y.b),T);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(n,e,y.b.unfollow.bind(y.b),F);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setUsers:z,setCurrentPage:L,setTotalUsersCount:A,toggleIsFetching:M,toggleFollowingProgress:R,getUsers:function(e,t){return function(){var n=Object(v.a)(m.a.mark((function n(r){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(M(!0)),r(L(e)),n.next=4,y.d.getUsers(e,t);case 4:a=n.sent,r(M(!1)),r(z(a.items)),r(A(a.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ue),le=n(90),fe=n.n(le),pe=function(e){return Object(j.jsxs)("header",{className:fe.a.header,children:[Object(j.jsx)("img",{src:"https://www.strunkmedia.com/wp-content/uploads/2018/05/bigstock-221516158.jpg"}),Object(j.jsx)("div",{className:fe.a.loginBlock,children:e.isAuth?Object(j.jsxs)("div",{children:[e.login," - ",Object(j.jsx)("button",{onClick:e.logout,children:"Logout"})]}):Object(j.jsx)(d.b,{to:"/login",children:"Login"})})]})},de=n(54),je="way-of-the-samurai-course/auth/SET_USER_DATA",be={userId:null,email:null,login:null,isAuth:!1},he=function(e,t,n,r){return{type:je,data:{userId:e,email:t,login:n,isAuth:r}}},ge=function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,a,s,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.authorize();case 2:0===(n=e.sent).resultCode&&(r=n.data,a=r.id,s=r.email,c=r.login,t(he(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case je:return Object(w.a)(Object(w.a)({},e),t.data);default:return e}},me=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsx)(pe,Object(w.a)({},this.props))}}]),n}(s.Component),ve=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.logout();case 2:0===e.sent.resultCode&&t(he(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(me),xe=n(125),we=n(126),ye=n(64),Pe=n(73),_e=n(51),Se=n.n(_e),Ce=Object(we.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(j.jsx)("div",{children:Object(j.jsx)(xe.a,{placeholder:"Email",name:"email",component:ye.a,validate:[Pe.b]})}),Object(j.jsx)("div",{children:Object(j.jsx)(xe.a,{placeholder:"Password",name:"password",type:"password",component:ye.a,validate:[Pe.b]})}),Object(j.jsxs)("div",{children:[Object(j.jsx)(xe.a,{type:"checkbox",name:"rememberMe",component:ye.a})," Remember me"]}),n&&Object(j.jsx)("div",{className:Se.a.formSummaryError,children:n}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Login"})})]})})),ke=Object(g.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(v.a)(m.a.mark((function r(a){var s,c;return m.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,y.a.login(e,t,n);case 2:0===(s=r.sent).resultCode?a(ge()):(c=s.messages.length>0?s.messages[0]:"Some error",a(Object(de.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(j.jsx)(h.a,{to:"profile"}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)(Ce,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Ie="way-of-the-samurai-course/app/INITIALIZED_SUCCESS",Ee={initialized:!1},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ie:return Object(w.a)(Object(w.a)({},e),{},{initialized:!0});default:return e}},Ue=n(94),Te=n(124),Fe={friends:[{id:1,name:"Sergey",avatar:"https://wallpaperaccess.com/full/2020287.jpg"},{id:2,name:"Benjamin",avatar:"https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__340.jpg"},{id:3,name:"Fran",avatar:"https://www.un.org/sites/un2.un.org/files/ourbeautifulocean-12x.png"}]},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return e},Le=n(133),Ae=n(128),Me=Object(te.c)({profilePage:Ue.b,dialogsPage:Te.b,navbar:ze,usersPage:G,auth:Oe,form:Ae.a,app:Ne}),Re=Object(te.e)(Me,Object(te.a)(Le.a)),De=Object(s.lazy)((function(){return n.e(4).then(n.bind(null,295))})),Ge=Object(s.lazy)((function(){return n.e(3).then(n.bind(null,294))})),Be=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(j.jsx)(d.a,{children:Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(ve,{}),Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"app-wrapper-content",children:[Object(j.jsxs)(s.Suspense,{fallback:Object(j.jsx)(ee.a,{}),children:[Object(j.jsx)(h.b,{path:"/profile/:userId?",render:function(){return Object(j.jsx)(Ge,{})}}),Object(j.jsx)(h.b,{path:"/dialogs",render:function(){return Object(j.jsx)(De,{})}})]}),Object(j.jsx)(h.b,{path:"/users",render:function(){return Object(j.jsx)(ie,{})}}),Object(j.jsx)(h.b,{path:"/login",render:function(){return Object(j.jsx)(ke,{})}})]})]})}):Object(j.jsx)(ee.a,{})}}]),n}(s.Component),He=Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(ge());case 2:t({type:Ie});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Be),Je=function(){return Object(j.jsx)(g.a,{store:Re,children:Object(j.jsx)(He,{})})};a.a.render(Object(j.jsx)(Je,{}),document.getElementById("root"))},48:function(e,t,n){"use strict";var r=n.p+"static/media/loader.ac07c54b.svg",a=(n(0),n(1));t.a=function(){return Object(a.jsx)("img",{src:r})}},51:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p}));var r=n(5),a=n(93),s=n(51),c=n.n(s),o=n(1),u=["input","meta","child"],i=["input","meta","child"],l=function(e){var t=e.meta,n=t.touched,r=t.error,a=e.children,s=n&&r;return Object(o.jsxs)("div",{className:c.a.formControl+" "+(s?c.a.error:""),children:[Object(o.jsx)("div",{children:a}),s&&Object(o.jsx)("span",{children:r})]})},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(o.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,i));return Object(o.jsx)(l,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))}},69:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki",paginator:"Paginator_paginator__18P4_"}},73:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},90:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return O}));var r=n(6),a=n.n(r),s=n(10),c=n(42),o=n(5),u=n(15),i="way-of-the-samurai-course/profile/ADD_POST",l="way-of-the-samurai-course/profile/DELETE_POST",f="way-of-the-samurai-course/profile/SET_USER_PROFILE",p="way-of-the-samurai-course/profile/SET_USER_STATUS",d={posts:[{id:1,message:"Hello!",likesCount:24},{id:2,message:"How are you?",likesCount:10}],profile:null,status:""},j=function(e){return{type:i,newPostText:e}},b=function(e){return{type:p,status:e}},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n({type:f,profile:r});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getStatus(e);case 2:r=t.sent,n(b(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.updateStatus(e);case 2:0===t.sent.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n={id:3,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case l:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case f:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case p:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});default:return e}}}},[[288,1,2]]]);
//# sourceMappingURL=main.8854ebac.chunk.js.map