(this["webpackJsonphome-work-ignat"]=this["webpackJsonphome-work-ignat"]||[]).push([[0],[,,,,function(e,t,a){e.exports={hwName:"Greeting_hwName__NpQCs",wrapper:"Greeting_wrapper__3O8ON",input:"Greeting_input__zPYi_",error:"Greeting_error___A9go",errorSpan:"Greeting_errorSpan__2sTbw",btn:"Greeting_btn__1WrZT",swalButtonConfirm:"Greeting_swalButtonConfirm__1NsNj",swalModal:"Greeting_swalModal__1fO8-"}},function(e,t,a){e.exports={app:"App_app__12nlm",app__title:"App_app__title__OnMzv",hw__title:"App_hw__title__1CYsd",marginTop:"App_marginTop__2aHtX"}},,function(e,t,a){e.exports={hwName:"Affairs_hwName__7YTMD",affairs:"Affairs_affairs__TiqzI",affairBody:"Affairs_affairBody__3okaw",affair:"Affairs_affair__1RnG3",buttons:"Affairs_buttons__1vb6C",btnCont:"Affairs_btnCont__2bWNa",btn:"Affairs_btn__3eKyP",active:"Affairs_active__3AvKh",high:"Affairs_high__3IR81",middle:"Affairs_middle__16xSf",low:"Affairs_low__1m_-V"}},,function(e,t,a){e.exports={wrapper:"HW5_wrapper__p64M7",links:"HW5_links__2cWFM",active:"HW5_active__2_-7T",hidden_menu_ticker:"HW5_hidden_menu_ticker__1IS6S",btn_menu:"HW5_btn_menu__2XNXV",first:"HW5_first__1HsQ4",hidden_menu:"HW5_hidden_menu__3OA3q",third:"HW5_third__3sXae"}},,function(e,t,a){e.exports={message:"Message_message__1sCgM",avatar:"Message_avatar__11X90",messageItem:"Message_messageItem__mwQ_-",svg:"Message_svg__varc3",messageBody:"Message_messageBody__32-UL",name:"Message_name__CiVBi",text:"Message_text__2CHfy",time:"Message_time__226SV"}},,,function(e,t,a){e.exports={inputContainer:"SuperInputText_inputContainer__3-IVF",superInput:"SuperInputText_superInput__3SVgD",errorInput:"SuperInputText_errorInput__2VwDa",error:"SuperInputText_error__3tY-Y"}},function(e,t,a){e.exports={inputContainer:"MySuperInput_inputContainer__3QhJV",inputAfter:"MySuperInput_inputAfter__3uHpk",inputClass:"MySuperInput_inputClass__3wVXJ",inputLabel:"MySuperInput_inputLabel__FF9Jw",inputError:"MySuperInput_inputError__2kBCR"}},,function(e,t,a){e.exports={default:"MySuperButton_default__1Suzv",button:"MySuperButton_button__1exeK",primary:"MySuperButton_primary__1NAin",secondary:"MySuperButton_secondary__23qaz",danger:"MySuperButton_danger__1TA6_"}},,function(e,t,a){e.exports={blue:"HW4_blue__1YYwu",column:"HW4_column__3azLM",testSpanError:"HW4_testSpanError__OqeeR",altButton:"HW4_altButton__HZ5ee"}},function(e,t,a){e.exports={red:"SuperButton_red__2lIFm",button:"SuperButton_button__3yF7I",default:"SuperButton_default__os8vW",buttonActive:"SuperButton_buttonActive__3c5Y2",primary:"SuperButton_primary__1xbjJ",secondary:"SuperButton_secondary__1L_ZG",danger:"SuperButton_danger__3jqq2"}},function(e,t,a){e.exports={checkbox:"MyCheckbox_checkbox__2gDU-",text:"MyCheckbox_text__2z6gk"}},,function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__3_MoH",spanClassName:"SuperCheckbox_spanClassName__2krOX"}},,,,,,,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),s=a(26),c=a.n(s),i=(a(33),a(5)),o=a.n(i),l=a(12),u=a(2),j=a(11),d=a.n(j),b=a(0);var _=function(e){return Object(b.jsxs)("div",{className:d.a.message,children:[Object(b.jsx)("div",{className:d.a.avatar,children:Object(b.jsx)("img",{src:e.avatar,alt:""})}),Object(b.jsxs)("div",{className:d.a.messageItem,children:[Object(b.jsx)("svg",{className:d.a.svg,viewBox:"10 0 1 1",children:Object(b.jsx)("path",{d:"m 10 1 l 1 0 l 0 -1 C 11 0.3 10.3 1 10 1"})}),Object(b.jsxs)("div",{className:d.a.messageBody,children:[Object(b.jsx)("div",{className:d.a.name,children:e.name}),Object(b.jsx)("div",{className:d.a.text,children:e.message}),Object(b.jsx)("div",{className:d.a.time,children:e.time})]})]})]})},m="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Some Name",h="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, unde ut! Architecto commodi cum ea eaque eligendi eos harum hic illum itaque labore, molestias necessitatibus, qui recusandae sequi tempore voluptas!",x="22:00:21";var O=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:o.a.hw__title,children:"homeworks 1"}),Object(b.jsx)(_,{avatar:m,name:p,message:h,time:x})]})},f=a(3),v=a(7),g=a.n(v);var N=function(e){return Object(b.jsxs)("div",{className:g.a.affair,children:[Object(b.jsx)("div",{children:e.affair.name}),Object(b.jsx)("div",{className:g.a[e.affair.priority],children:e.affair.priority}),Object(b.jsx)("div",{className:g.a.btnCont,children:Object(b.jsx)("button",{className:g.a.btn,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})})]})};var C=function(e){var t=e.data.map((function(t){return Object(b.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),a=function(t){e.setFilter(t.currentTarget.value)},n=function(t){return e.filter===t?g.a.btn+" "+g.a.active:g.a.btn};return Object(b.jsxs)("div",{className:g.a.affairs,children:[Object(b.jsx)("div",{className:g.a.affairBody,children:t}),Object(b.jsxs)("div",{className:g.a.buttons,children:[Object(b.jsx)("button",{className:n("all"),value:"all",onClick:a,children:"All"}),Object(b.jsx)("button",{className:n("high"),value:"high",onClick:a,children:"High"}),Object(b.jsx)("button",{className:n("middle"),value:"middle",onClick:a,children:"Middle"}),Object(b.jsx)("button",{className:n("low"),value:"low",onClick:a,children:"Low"})]})]})},y=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var k=function(){var e=Object(n.useState)(y),t=Object(f.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)("all"),c=Object(f.a)(s,2),i=c[0],l=c[1],u=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(b.jsxs)("div",{className:o.a.marginTop,children:[Object(b.jsx)("span",{className:o.a.hw__title,children:"homeworks 2"}),Object(b.jsx)(C,{data:u,setFilter:l,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:i})]})},w=a(18),S=a(4),A=a.n(S),M=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,s=e.totalUsers,c=r?A.a.input+" "+A.a.error:A.a.input,i=!t;return Object(b.jsxs)("div",{className:A.a.wrapper,children:[Object(b.jsx)("input",{value:t,onKeyPress:function(e){return"Enter"===e.key&&n()},onChange:a,className:c}),Object(b.jsx)("button",{className:A.a.btn,disabled:i,onClick:n,children:"add"}),Object(b.jsx)("span",{children:s}),Object(b.jsx)("span",{className:A.a.errorSpan,children:r})]})},B=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),s=Object(f.a)(r,2),c=s[0],i=s[1],o=Object(n.useState)(""),l=Object(f.a)(o,2),u=l[0],j=l[1],d=t.length;return Object(b.jsx)(M,{name:c,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){console.log(u+" "+c),c.trim()?(alert("Hello ".concat(c,"!")),j(""),a(c)):j("You even didn't enter your name. What do you want from me?"),i("")},error:u,totalUsers:d})},T=a(38),I=a(27),H=a.n(I),W=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,s=e.totalUsers,c=r?A.a.input+" "+A.a.error:A.a.input,i=!t;return Object(b.jsxs)("div",{className:A.a.wrapper,children:[Object(b.jsx)("input",{value:t,onKeyPress:function(e){return"Enter"===e.key&&n()},onChange:a,className:c}),Object(b.jsx)("button",{className:A.a.btn,disabled:i,onClick:n,children:"add"}),Object(b.jsx)("span",{children:s}),Object(b.jsx)("span",{className:A.a.errorSpan,children:r})]})},E=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),s=Object(f.a)(r,2),c=s[0],i=s[1],o=Object(n.useState)(""),l=Object(f.a)(o,2),u=l[0],j=l[1],d=t.length;return Object(b.jsx)(W,{name:c,setNameCallback:function(e){i(e.currentTarget.value)},addUser:function(){console.log(u+" "+c),c.trim()?(H()({className:A.a.swalModal,title:"This is a greeting",text:"Hello ".concat(c,"!"),icon:"https://cdn2.iconfinder.com/data/icons/cat-power/256/cat_purr.png",buttons:{confirm:{text:"Meow",className:A.a.swalButtonConfirm}}}),j(""),a(c)):j("You even didn't enter your name. What do you want from me?"),i("")},error:u,totalUsers:d})};var P=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:A.a.hwName,children:"Alternative homework"}),Object(b.jsx)(E,{users:a,addUserCallback:function(e){r([].concat(Object(w.a)(a),[{_id:Object(T.a)(),name:e}]))}})]})};var U=function(){var e=Object(n.useState)([]),t=Object(f.a)(e,2),a=t[0],r=t[1];return Object(b.jsxs)("div",{className:o.a.marginTop,children:[Object(b.jsx)("span",{className:o.a.hw__title,children:" homeworks 3"}),Object(b.jsx)(B,{users:a,addUserCallback:function(e){r([].concat(Object(w.a)(a),[{_id:Object(T.a)(),name:e}]))}}),Object(b.jsx)(P,{})]})},F=a(8),q=a(10),G=a(14),K=a.n(G),Y=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],J=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,s=e.error,c=e.className,i=e.spanClassName,o=Object(q.a)(e,Y),l="".concat(K.a.error," ").concat(i||""),u="".concat(K.a.superInput," ").concat(s?K.a.errorInput:K.a.superInput," ").concat(c);return Object(b.jsxs)("div",{className:K.a.inputContainer,children:[s&&Object(b.jsx)("span",{className:l,children:s}),Object(b.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:u},o))]})},V=a(19),X=a.n(V),L=a(20),z=a.n(L),R=["red","className"],Q=function(e){var t=e.red,a=e.className,n=Object(q.a)(e,R),r="".concat(z.a.button," ").concat(t?z.a.red:z.a.default," ").concat(a);return Object(b.jsx)("button",Object(F.a)({className:r},n))},D=a(23),Z=a.n(D),$=["type","onChange","onChangeChecked","className","spanClassName","children"],ee=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),s=Object(q.a)(e,$),c="".concat(Z.a.checkbox," ").concat(n||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(F.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:c},s)),r&&Object(b.jsx)("span",{className:Z.a.spanClassName,children:r})]})},te=a(17),ae=a.n(te),ne=["primary","secondary","danger","children","className","svg","type"],re=function(e){e.primary;var t=e.secondary,a=e.danger,n=e.children,r=e.className,s=e.svg,c=(e.type,Object(q.a)(e,ne)),i="".concat(ae.a.default," ").concat(t?ae.a.secondary:ae.a.primary," ").concat(a?ae.a.danger:""," ").concat(r);return Object(b.jsxs)("button",Object(F.a)(Object(F.a)({type:"button",className:i},c),{},{children:[s&&Object(b.jsx)("svg",{children:Object(b.jsx)("rect",{x:"0",y:"0",fill:"none",width:"100%",rx:"5",ry:"5",height:"100%"})}),n]}))},se=a(15),ce=a.n(se),ie=["type","onChange","onChangeText","onKeyPress","className","error","placeholder","onEnter","spanClassName","errorClassName","inputClassName"],oe=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=(e.className,e.error),s=e.placeholder,c=e.onEnter,i=e.spanClassName,o=e.errorClassName,l=e.inputClassName,u=Object(q.a)(e,ie),j=i||"";return Object(b.jsxs)("div",{className:ce.a.inputContainer,children:[Object(b.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),c&&"Enter"===e.key&&c()},className:"".concat(ce.a.inputClass," ").concat(l||"")},u)),Object(b.jsx)("div",{className:ce.a.inputAfter}),s&&Object(b.jsx)("label",{className:"".concat(ce.a.inputLabel," ").concat(j),children:s}),r&&Object(b.jsx)("div",{className:"".concat(ce.a.inputError," ").concat(o||""),children:r})]})},le=a(21),ue=a.n(le),je=function(e){var t=e.text;return Object(b.jsxs)("div",{className:ue.a.checkContainer,children:[Object(b.jsx)("input",{className:ue.a.checkbox,id:"checkbox",type:"checkbox"}),Object(b.jsx)("label",{className:ue.a.text,htmlFor:"checkbox",children:t||"check me"})]})};var de=function(){var e=Object(n.useState)(""),t=Object(f.a)(e,2),a=t[0],r=t[1],s=a?"":"error",c=function(){s?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),l=Object(f.a)(i,2),u=l[0],j=l[1];return Object(b.jsxs)("div",{className:o.a.marginTop,children:[Object(b.jsx)("span",{className:o.a.hw__title,children:"homeworks 4"}),Object(b.jsxs)("div",{className:X.a.column,children:[Object(b.jsx)(J,{value:a,onChangeText:r,onEnter:c,error:s,spanClassName:X.a.testSpanError}),Object(b.jsx)(J,{className:X.a.blue}),Object(b.jsx)(Q,{children:"default"}),Object(b.jsx)(Q,{red:!0,onClick:c,children:"delete"}),Object(b.jsx)(Q,{disabled:!0,children:"disabled"}),Object(b.jsx)(ee,{checked:u,onChangeChecked:j,children:"some text"}),Object(b.jsx)(ee,{checked:u,onChange:function(e){return j(e.currentTarget.checked)}}),Object(b.jsx)(re,{svg:!0,children:"Button"}),Object(b.jsx)(re,{svg:!0,secondary:!0,children:"Button 2"}),Object(b.jsx)(oe,{placeholder:"Input something",error:s,value:a,onChangeText:r}),Object(b.jsx)(je,{text:"check me"})]})]})};var be=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(O,{}),Object(b.jsx)(k,{}),Object(b.jsx)(U,{}),Object(b.jsx)(de,{})]})};var _e=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var me=function(){return Object(b.jsx)("div",{children:"Something will be here soon"})};var pe=function(){return Object(b.jsx)("div",{children:"Something will be here soon"})},he="/pre-junior",xe="/junior",Oe="/junior-plus";var fe=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(u.d,{children:[Object(b.jsx)(u.b,{path:he,element:Object(b.jsx)(be,{})}),Object(b.jsx)(u.b,{path:xe,element:Object(b.jsx)(me,{})}),Object(b.jsx)(u.b,{path:Oe,element:Object(b.jsx)(pe,{})}),Object(b.jsx)(u.b,{path:"/",element:Object(b.jsx)(u.a,{to:he,replace:!0})}),Object(b.jsx)(u.b,{path:"*",element:Object(b.jsx)(_e,{})})]})})},ve=a(9),ge=a.n(ve);var Ne=function(){var e=function(e){return e.isActive?ge.a.active:""};return Object(b.jsxs)("div",{className:ge.a.links,children:[Object(b.jsx)("input",{type:"checkbox",id:"input",className:ge.a.hidden_menu_ticker}),Object(b.jsxs)("label",{className:ge.a.btn_menu,htmlFor:"input",children:[Object(b.jsx)("span",{className:ge.a.first}),Object(b.jsx)("span",{className:ge.a.second}),Object(b.jsx)("span",{className:ge.a.third})]}),Object(b.jsxs)("ul",{className:ge.a.hidden_menu,children:[Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{className:e,to:he,children:"PreJunior"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{className:e,to:xe,children:"Junior"})}),Object(b.jsx)("li",{children:Object(b.jsx)(l.b,{className:e,to:Oe,children:"JuniorPlus"})})]})]})};var Ce=function(){return Object(b.jsx)("div",{className:ge.a.wrapper,children:Object(b.jsxs)(l.a,{children:[Object(b.jsx)(Ne,{}),Object(b.jsx)(fe,{})]})})};var ye=function(){return Object(b.jsxs)("div",{className:o.a.app,children:[Object(b.jsx)("div",{className:o.a.app__title,children:"React homeworks"}),Object(b.jsx)(Ce,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(ye,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.b520d36e.chunk.js.map