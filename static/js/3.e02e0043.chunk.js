(this["webpackJsonpway-of-the-samurai-course"]=this["webpackJsonpway-of-the-samurai-course"]||[]).push([[3],{290:function(t,e,s){t.exports={content:"Profile_content__2wLDD"}},291:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y"}},292:function(t,e,s){t.exports={item:"Post_item__ihtu9"}},293:function(t,e,s){t.exports={postBlock:"MyPosts_postBlock__3b6E0",posts:"MyPosts_posts__3tZ1c"}},294:function(t,e,s){"use strict";s.r(e);var n=s(5),c=s(34),o=s(35),i=s(37),a=s(36),r=s(0),u=s.n(r),j=s(290),d=s.n(j),l=s(291),p=s.n(l),b=s(48),h=s(127),f=s(1),O=function(t){var e=Object(r.useState)(!1),s=Object(h.a)(e,2),n=s[0],c=s[1],o=Object(r.useState)(t.status),i=Object(h.a)(o,2),a=i[0],u=i[1];Object(r.useEffect)((function(){u(t.status)}),[t.status]);return Object(f.jsxs)("div",{children:[!n&&Object(f.jsx)("div",{children:Object(f.jsx)("span",{onDoubleClick:function(){c(!0)},children:t.status||"-----"})}),n&&Object(f.jsx)("div",{children:Object(f.jsx)("input",{onChange:function(t){u(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(a)},value:a})})]})},x=function(t){var e=t.profile,s=t.status,n=t.updateStatus;return e?Object(f.jsx)("div",{children:Object(f.jsxs)("div",{className:p.a.descriptionBlock,children:[Object(f.jsx)("img",{src:e.photos.large}),Object(f.jsx)(O,{status:s,updateStatus:n})]})}):Object(f.jsx)(b.a,{})},m=s(94),v=s(17),g=s(292),P=s.n(g),k=function(t){return Object(f.jsxs)("div",{className:P.a.item,children:[Object(f.jsx)("img",{src:"https://www.meme-arsenal.com/memes/8ab5fe07681cd172915e9472a0a8443d.jpg"}),t.message,Object(f.jsx)("div",{children:Object(f.jsx)("span",{children:"like"})}),Object(f.jsx)("div",{children:Object(f.jsxs)("span",{children:[t.likeCount," likes"]})})]})},_=s(293),w=s.n(_),S=s(125),y=s(126),B=s(73),C=s(64),N=Object(B.a)(10),I=Object(y.a)({form:"profileAddNewPostForm"})((function(t){return Object(f.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(f.jsx)("div",{children:Object(f.jsx)(S.a,{component:C.b,name:"newPostText",placeholder:"Enter your message",validate:[B.b,N]})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Add post"})})]})})),T=function(t){var e=t.posts.map((function(t){return Object(f.jsx)(k,{message:t.message,likeCount:t.likesCount})}));return Object(f.jsxs)("div",{className:w.a.postBlock,children:[Object(f.jsx)("h3",{children:"My posts"}),Object(f.jsx)("div",{children:Object(f.jsx)(I,{onSubmit:function(e){t.addPost(e.newPostText)}})}),Object(f.jsx)("div",{className:w.a.posts,children:e})]})},A=Object(v.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),{addPost:m.a})(T),D=function(t){return Object(f.jsxs)("div",{className:d.a.content,children:[Object(f.jsx)(x,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(f.jsx)(A,{})]})},M=s(11),E=s(12),z=function(t){Object(i.a)(s,t);var e=Object(a.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"componentDidMount",value:function(){var t,e=null!==(t=this.props.match.params.userId)&&void 0!==t?t:this.props.authorizedUserId;e||this.props.history.push("/login"),this.props.getProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(f.jsx)(D,Object(n.a)({},this.props))}}]),s}(u.a.Component);e.default=Object(E.d)(Object(v.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getProfile:m.c,getStatus:m.d,updateStatus:m.e}),M.f)(z)}}]);
//# sourceMappingURL=3.e02e0043.chunk.js.map