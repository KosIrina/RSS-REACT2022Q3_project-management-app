"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[564],{1756:function(e,n,r){r.d(n,{Dr:function(){return u},Rt:function(){return l},ku:function(){return i}});var t=r(4165),s=r(5861),a=r(4333);function i(e,n,r,t,s){return o.apply(this,arguments)}function o(){return(o=(0,s.Z)((0,t.Z)().mark((function e(n,r,s,i,o){var u,c;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a.C,"/users/").concat(r),{method:"PUT",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify({name:s,login:i,password:o})});case 2:return u=e.sent,e.next=5,u.json();case 5:if(c=e.sent,u.ok){e.next=8;break}throw new Error(c.message);case 8:return e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e,n){return c.apply(this,arguments)}function c(){return(c=(0,s.Z)((0,t.Z)().mark((function e(n,r){var s,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a.C,"/users/").concat(r),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)}});case 2:return s=e.sent,e.next=5,s.json();case 5:if(i=e.sent,s.ok){e.next=8;break}throw new Error(i.message);case 8:return e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e,n){return m.apply(this,arguments)}function m(){return(m=(0,s.Z)((0,t.Z)().mark((function e(n,r){var s,i;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(a.C,"/users/").concat(r),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)}});case 2:return s=e.sent,e.next=5,s.json();case 5:if(i=e.sent,s.ok){e.next=8;break}throw new Error(i.message);case 8:return e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5989:function(e,n,r){r.d(n,{Z:function(){return u}});r(2791);var t=r(1647),s=r(1508),a="CustomSnackbar_snackbar__HogOa",i="CustomSnackbar_alert__2Qolh",o=r(184);var u=function(e){var n=e.isOpen,r=e.onClose,u=e.type,c=e.message,l=function(e,n){"clickaway"!==n&&r()};return(0,o.jsx)(t.Z,{className:a,open:n,autoHideDuration:2e3,onClose:l,children:(0,o.jsx)(s.Z,{elevation:6,variant:"filled",className:i,onClose:l,severity:u,children:c})})}},1303:function(e,n,r){r.d(n,{Z:function(){return i}});r(2791);var t=r(8858),s="FullScreenLoader_wrapper__ijAZ7",a=r(184);var i=function(){return(0,a.jsx)("div",{className:s,children:(0,a.jsx)(t.Z,{})})}},1748:function(e,n,r){var t=r(1413),s=r(9439),a=r(2791),i=r(1134),o=r(2020),u=r(5640),c=r(8254),l=r(3811),m=r(7205),p=r(501),d=r(521),f=r(7749),g=r(3746),h=r(165),_=r(8178),x=r(184);n.Z=function(e){var n,r,y,Z=e.submitButton,v=e.onSubmit,w=(0,a.useState)(!1),j=(0,s.Z)(w,2),k=j[0],b=j[1],S=(0,o.$)("user-form").t,N=(0,i.cI)(),O=N.register,E=N.handleSubmit,C=N.formState.errors;return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)("form",{className:_.Z.form,onSubmit:E(v),noValidate:!0,children:[(0,x.jsx)(u.Z,(0,t.Z)({className:_.Z.nameInput,id:"name-input",type:"text",placeholder:S("name")||"",helperText:null!==(n=C.name)&&void 0!==n&&n.message?S("".concat(JSON.parse(C.name.message).key),JSON.parse(C.name.message).param):" ",error:!!C.name,fullWidth:!0,size:"small",InputProps:{startAdornment:(0,x.jsx)(c.Z,{position:"start",children:(0,x.jsx)(p.Z,{})})}},O("name",{required:JSON.stringify({key:"this field is required"})||"",minLength:{value:2,message:JSON.stringify({key:"minimum length symbols",param:{symbolsCount:"2"}})||""},maxLength:{value:20,message:JSON.stringify({key:"maximum length 20 symbols"})||""},pattern:{value:/^[A-Za-z\u0401\u0410-\u044F\u0451]+$/,message:JSON.stringify({key:"must contain only letters"})||""}}))),(0,x.jsx)(u.Z,(0,t.Z)({className:_.Z.loginInput,id:"login-input",type:"text",placeholder:S("login")||"",helperText:null!==(r=C.login)&&void 0!==r&&r.message?S("".concat(JSON.parse(C.login.message).key),JSON.parse(C.login.message).param):" ",error:!!C.login,fullWidth:!0,size:"small",InputProps:{startAdornment:(0,x.jsx)(c.Z,{position:"start",children:(0,x.jsx)(d.Z,{})})}},O("login",{required:JSON.stringify({key:"this field is required"})||"",minLength:{value:4,message:JSON.stringify({key:"minimum length symbols",param:{symbolsCount:"4"}})||""},maxLength:{value:20,message:JSON.stringify({key:"maximum length 20 symbols"})||""},pattern:{value:/^[a-zA-Z1-9]+$/,message:JSON.stringify({key:"must contain only latin letters or/and digits"})||""},validate:function(e){return!parseInt(e[0])||JSON.stringify({key:"must start only with a letter"})||""}}))),(0,x.jsx)(u.Z,(0,t.Z)({className:_.Z.passwordInput,id:"password-input",type:k?"text":"password",placeholder:S("password")||"",helperText:null!==(y=C.password)&&void 0!==y&&y.message?S("".concat(JSON.parse(C.password.message).key),JSON.parse(C.password.message).param):" ",error:!!C.password,size:"small",fullWidth:!0,InputProps:{startAdornment:(0,x.jsx)(c.Z,{position:"start",children:(0,x.jsx)(f.Z,{})}),endAdornment:(0,x.jsx)(c.Z,{position:"end",children:(0,x.jsx)(l.Z,{"aria-label":"toggle password visibility",onClick:function(){b(!k)},onMouseDown:function(e){e.preventDefault()},edge:"end",children:k?(0,x.jsx)(h.Z,{}):(0,x.jsx)(g.Z,{})})})}},O("password",{required:JSON.stringify({key:"this field is required"})||"",minLength:{value:8,message:JSON.stringify({key:"minimum length symbols",param:{symbolsCount:"8"}})||""},pattern:{value:/^(?=.*[0-9])(?=.*[a-z\u0430-\u044f\u0451])(?=.*[A-Z\u0410-\u042f\u0401])/,message:JSON.stringify({key:"at least one number, one uppercase and one lowercase letters"})||""}}))),(0,x.jsx)(m.Z,{className:_.Z.submitButton,type:"submit",variant:"contained",fullWidth:!0,disabled:!!C.login||!!C.name||!!C.password,children:Z})]})})}},9564:function(e,n,r){r.r(n),r.d(n,{default:function(){return O}});var t=r(1413),s=r(4165),a=r(5861),i=r(9439),o=r(2791),u=r(2020),c=r(7205),l=r(6512),m=r(5399),p=r(5450),d=r(1748),f="EditProfilePage_container__gKHwL",g="EditProfilePage_pageTitle__QkUnc",h="EditProfilePage_warning__9A66R",_="EditProfilePage_warningIcon__hu-qf",x="EditProfilePage_formContainer__Xzmm+",y="EditProfilePage_deleteButton__YgEAJ",Z="EditProfilePage_dialogContent__hQsga",v=r(1303),w=r(5989),j=r(8858),k=r(1756),b=r(8303),S=r(184),N=(0,o.lazy)((function(){return r.e(949).then(r.bind(r,3156))}));var O=function(){var e=(0,u.$)("edit-profile-page").t,n=(0,b.Z)(),r=n.user,O=n.logout,E=(0,o.useState)(!1),C=(0,i.Z)(E,2),J=C[0],P=C[1],F=(0,o.useState)(!1),A=(0,i.Z)(F,2),I=A[0],B=A[1],T=(0,o.useState)({isOpen:!1,type:"success",message:""}),z=(0,i.Z)(T,2),D=z[0],L=z[1],W=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n,t,a){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.prev=1,e.next=4,(0,k.ku)(r.token,r.id,n,t,a);case 4:L({type:"success",isOpen:!0,message:"successfulEdit"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),e.t0 instanceof Error&&L({isOpen:!0,type:"error",message:"Login already exist"===e.t0.message?"loginExists":"unknownError"});case 10:return e.prev=10,P(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(n,r,t){return e.apply(this,arguments)}}(),q=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(){return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.prev=1,e.next=4,(0,k.Dr)(r.token,r.id);case 4:O(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),L({isOpen:!0,type:"error",message:"unknownError"});case 10:return e.prev=10,P(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),H=function(){B(!1)};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:"container ".concat(f),children:[(0,S.jsx)("h2",{className:g,children:e("title")}),(0,S.jsxs)("div",{className:h,children:[(0,S.jsx)(l.Z,{className:_}),(0,S.jsx)("span",{children:e("warning")})]}),(0,S.jsx)("div",{className:x,children:(0,S.jsx)(d.Z,{submitButton:e("editButton"),onSubmit:function(e){var n=e.name,r=e.login,t=e.password;W(n,r,t)}})}),(0,S.jsx)(c.Z,{className:y,variant:"contained",onClick:function(){B(!0)},children:e("deleteButton")})]}),(0,S.jsx)(m.Z,{open:I,onClose:H,maxWidth:"xs",fullWidth:!0,children:(0,S.jsx)(p.Z,{className:Z,children:(0,S.jsx)(o.Suspense,{fallback:(0,S.jsx)(j.Z,{}),children:(0,S.jsx)(N,{itemToDelete:e("profile"),onClose:H,onDelete:q})})})}),(0,S.jsx)(w.Z,(0,t.Z)((0,t.Z)({},D),{},{onClose:function(){L((function(e){return(0,t.Z)((0,t.Z)({},e),{},{isOpen:!1})}))},message:e("".concat(D.message))})),J&&(0,S.jsx)(v.Z,{})]})}},6512:function(e,n,r){var t=r(4836);n.Z=void 0;var s=t(r(5649)),a=r(184),i=(0,s.default)([(0,a.jsx)("circle",{cx:"12",cy:"19",r:"2"},"0"),(0,a.jsx)("path",{d:"M10 3h4v12h-4z"},"1")],"PriorityHigh");n.Z=i},8178:function(e,n){n.Z={wrapper:"Forms_wrapper__7noYf",formCard:"Forms_formCard__sptrP",welcomeImage:"Forms_welcomeImage__8HZP9",imageTitle:"Forms_imageTitle__ChcXJ",imageSubtitle:"Forms_imageSubtitle__VpYQJ",title:"Forms_title__o1RWJ",serverError:"Forms_serverError__RS9mp",submitButton:"Forms_submitButton__pVD3u",redirectButton:"Forms_redirectButton__3VQAg",hiddenServerError:"Forms_hiddenServerError__M3aKf",form:"Forms_form__mT+yf",nameInput:"Forms_nameInput__NeV1b",loginInput:"Forms_loginInput__B2Bgx",passwordInput:"Forms_passwordInput__QrwHR",redirectWrapper:"Forms_redirectWrapper__PY7j7",redirectText:"Forms_redirectText__EosnD"}}}]);
//# sourceMappingURL=564.533dec94.chunk.js.map