(this.webpackJsonpfirenote=this.webpackJsonpfirenote||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(28),c=n.n(o),l=(n(87),n(40),n(14)),u=n(11),i=n(81),m=n(70),s={colors:{secondaryDark:"#302227",favoriteRed:"#d01616"}},f=(n(92),n(7)),d=n(8),b=n(63),E=n(73),h=n.n(E),p=n(9),v=n(18),g=n.n(v),O=n(26),j=n(35),x=n(29),y=(n(94),{apiKey:"AIzaSyAhH3F6tJ0Ey7PSoy6UkQLCxgqFhbY4Y1I",authDomain:"note-yh.firebaseapp.com",projectId:"note-yh"});x.initializeApp(y),(y.projectId?x.firestore():null)?console.log("connection to database is ok"):console.log("ERROR: no connection to database");var w=x.auth();var k=r.a.createContext();function C(e){var t=e.children,n=Object(a.useState)(),o=Object(p.a)(n,2),c=o[0],l=o[1],u=Object(a.useState)(!0),i=Object(p.a)(u,2),m=i[0],s=i[1],f=Object(a.useCallback)((function(e,t){return w.createUserWithEmailAndPassword(e,t)}),[]),d=Object(a.useCallback)((function(e,t){return w.signInWithEmailAndPassword(e,t)}),[]),b=Object(a.useCallback)((function(){return w.signOut()}),[]);Object(a.useEffect)((function(){return w.onAuthStateChanged((function(e){l(e),s(!1)}))}),[]);var E=Object(a.useMemo)((function(){return{currentUser:c,login:d,signup:f,logout:b}}),[c,d,f,b]);return r.a.createElement(k.Provider,{value:E},!m&&t)}var N=function(){return Object(a.useContext)(k)};function S(){var e=Object(f.a)(["\n   margin-right: 1em;\n   color: ",";\n   background-color: white;\n   &:hover{\n    color:",";\n    text-decoration: none;\n    background-color: white;\n    }\n"]);return S=function(){return e},e}var F=Object(d.a)(j.a)(S(),(function(e){return e.theme.colors.favoriteRed}),(function(e){return e.theme.colors.secondaryDark}));function R(e){var t=e.setOpen,n=Object(a.useState)(""),o=Object(p.a)(n,2),c=o[0],l=o[1],i=N().logout,m=Object(u.g)();function s(){return(s=Object(O.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(""),e.prev=1,e.next=4,i();case 4:m.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),l("Failed to log out");case 10:t(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{onClick:function(){return s.apply(this,arguments)}},"LOG OUT"),c)}function D(){var e=Object(f.a)(["\n  margin-right: 1em;\n  color: white;\n"]);return D=function(){return e},e}function T(){var e=Object(f.a)(["\n   list-style: none;\n   display: flex;\n   flex-flow: column nowrap;\n   background-color: ",";\n   position: fixed;\n   transform: ",";\n   top: 0;\n   right: 0;\n   height: 100vh;\n   width: 300px;\n   padding-top: 3.5rem;\n   transition: transform 0.3s ease-in-out;\n   li{\n   padding:18px 10px\n   }\n"]);return T=function(){return e},e}function L(){var e=Object(f.a)(["\n   margin-right: 1em;\n   color: white;\n   &:hover{\n    color:white;\n    text-decoration: none;\n    }\n"]);return L=function(){return e},e}var I=Object(d.a)(l.b)(L()),A=d.a.ul(T(),(function(e){return e.theme.colors.secondaryDark}),(function(e){return e.open?"translateX(0)":"translateX(100%)"})),G=d.a.p(D());function U(e){var t=e.open,n=e.setOpen,a=N().currentUser;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{open:t},r.a.createElement("li",null,r.a.createElement(G,null,"Hi, ",a.email)),r.a.createElement("li",null,r.a.createElement(I,{id:"creator",to:"/creator",onClick:function(){return n(!1)}},"NOTE CREATOR")),r.a.createElement("li",null,r.a.createElement(R,{open:t,setOpen:n}))))}function _(){var e=Object(f.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 3em;\n  right: 20px;\n  z-index: 20;\n  display: flex;\n  justify-content: space-around;\n  flex-flow: column nowrap;\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"]);return _=function(){return e},e}var B=d.a.div(_(),(function(e){return e.open?"#ccc":"#333"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),P=function(){var e=Object(a.useState)(!1),t=Object(p.a)(e,2),n=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(B,{open:n,onClick:function(){return o(!n)}},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)),r.a.createElement(U,{open:n,setOpen:o}))};function H(){var e=Object(f.a)(["\n   margin-right: 1em;\n   color: white;\n   &:hover{\n    color:white;\n    text-decoration: none;\n"]);return H=function(){return e},e}function W(){var e=Object(f.a)(["\n  background-color: ",";\n  padding: 1em;\n"]);return W=function(){return e},e}var q=Object(d.a)(b.a)(W(),(function(e){return e.theme.colors.favoriteRed})),Y=Object(d.a)(l.b)(H());function z(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{fixed:"top",expand:"lg"},r.a.createElement(b.a.Brand,null,r.a.createElement(Y,{id:"home_link",to:"/"},r.a.createElement("img",{src:h.a,alt:"",height:"75",width:"150"}))),r.a.createElement(P,null)))}var M=n(15),X=n(74),J=n.n(X),K=n(13);n(69);console.log("firestore works");var Q=Object(a.createContext)();function $(e){var t=Object(a.useState)([]),n=Object(p.a)(t,2),o=n[0],c=n[1],l=N().currentUser,u=Object(a.useCallback)((function(e){x.firestore().collection("notes").doc(e).delete()}),[]),i=Object(a.useCallback)((function(e){x.firestore().collection("notes").doc(e.id).set({id:e.id,title:e.title,text:e.text,status:e.status,category:e.category,user:e.user,date:e.date})}),[]);Object(a.useEffect)((function(){(function(){var e=Object(O.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l&&x.firestore().collection("notes").where("user","==",l.email).onSnapshot((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),c(t)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c,l]);var m=Object(a.useMemo)((function(){return{notes:o,addNote:i,deleteNote:u}}),[o,i,u]);return r.a.createElement(Q.Provider,{value:m},e.children)}var V=function(){return Object(a.useContext)(Q)};function Z(){var e=Object(f.a)(["\n font-size: 1.5em;\n color:",";\n \n"]);return Z=function(){return e},e}function ee(){var e=Object(f.a)(["\n\n"]);return ee=function(){return e},e}function te(){var e=Object(f.a)(["\n   background-color: ",";\n   color: white;\n   &:hover{\n    background-color:",";\n    text-decoration: none;\n    color: white;\n    }\n    &:focus{\n    background-color:",";\n    text-decoration: none;\n    color: white;\n    }\n"]);return te=function(){return e},e}function ne(){var e=Object(f.a)(["\n  margin-top: 5em;\n"]);return ne=function(){return e},e}var ae=d.a.h1(ne()),re=Object(d.a)(j.a)(te(),(function(e){return e.theme.colors.secondaryDark}),(function(e){return e.theme.colors.favoriteRed}),(function(e){return e.theme.colors.secondaryDark}));function oe(e){var t=e.setNote,n=e.note;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Title:"),r.a.createElement(K.a.Control,{type:"text",placeholder:"Title",id:"notesform_title",name:"notesform_title",onChange:function(e){t(Object(M.a)(Object(M.a)({},n),{},{title:e.target.value}))},value:n.title})))}function ce(e){var t=e.setNote,n=e.note;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Text:"),r.a.createElement(K.a.Control,{as:"textarea",placeholder:"Text",rows:3,id:"notesform_note",name:"notesform_note",onChange:function(e){t(Object(M.a)(Object(M.a)({},n),{},{text:e.target.value}))},value:n.text})))}function le(e){var t=e.setNote,n=e.note;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Category:"),r.a.createElement(K.a.Control,{as:"select",id:"notesform_category",name:"notesform_category",onChange:function(e){t(Object(M.a)(Object(M.a)({},n),{},{category:e.target.value}))},value:n.category},r.a.createElement("option",null,"Work"),r.a.createElement("option",null,"Groceries"),r.a.createElement("option",null,"Home"),r.a.createElement("option",null,"Family"),r.a.createElement("option",null,"Random"))))}function ue(e){var t=e.setNote,n=e.note;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Status:"),r.a.createElement(K.a.Control,{as:"select",id:"notesform_status",name:"notesform_status",onChange:function(e){t(Object(M.a)(Object(M.a)({},n),{},{status:e.target.value}))},value:n.status},r.a.createElement("option",null,"To do"),r.a.createElement("option",null,"In progress"),r.a.createElement("option",null,"On hold"),r.a.createElement("option",null,"Done"),r.a.createElement("option",null,"NA"))))}function ie(e){var t=e.setNote,n=e.note;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a.Group,null,r.a.createElement(K.a.Label,null,"Date (optional)"),r.a.createElement(K.a.Control,{type:"date",id:"notesform_date",name:"notesform_date",onChange:function(e){t(Object(M.a)(Object(M.a)({},n),{},{date:e.target.value}))},value:n.date})))}var me=d.a.p(ee()),se=d.a.span(Z(),(function(e){return e.theme.colors.favoriteRed}));function fe(){var e=Object(u.g)(),t=V().addNote,n=Object(a.useState)({id:"",title:"",text:"",category:"Work",status:"To do",user:"",date:""}),o=Object(p.a)(n,2),c=o[0],l=o[1],i=N().currentUser,m=Object(a.useState)([]),s=Object(p.a)(m,2),f=s[0],d=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae,null,"NOTE CREATOR"),r.a.createElement(K.a,{onSubmit:function(n){n.preventDefault();var a=function(e){var t=[];return 0===e.title.length&&t.push("Title can't be empty!"),0===e.text.length&&t.push("Text can't be empty!"),0===e.status.length&&t.push("Status can't be empty!"),0===e.category.length&&t.push("Category can't be empty!"),t}(c);a.length>0?d(a):(console.log(i.email),t(Object(M.a)(Object(M.a)({},c),{},{id:J()(),user:i.email})),console.log(c.title),l(Object(M.a)(Object(M.a)({},c),{},{title:"",text:""})),e.push("/"))}},f.map((function(e){return r.a.createElement(me,{key:e},r.a.createElement(se,null,"Error"),": ",e)})),r.a.createElement(oe,{setNote:l,note:c}),r.a.createElement(ce,{setNote:l,note:c}),r.a.createElement(le,{setNote:l,note:c}),r.a.createElement(ue,{setNote:l,note:c}),r.a.createElement(ie,{setNote:l,note:c}),r.a.createElement(re,{id:"submit",variant:"primary",type:"submit"},"Submit")))}var de=n(50),be=n(34),Ee=n(22),he=Object(a.createContext)();function pe(e){var t=Object(a.useState)(null),n=Object(p.a)(t,2),o=n[0],c=n[1],l=Object(a.useMemo)((function(){return{activeNote:o,setActiveNote:c}}),[o,c]);return r.a.createElement(he.Provider,{value:l},e.children)}var ve=function(){return Object(a.useContext)(he)};function ge(){var e=Object(f.a)(["\n  text-align: center;\n"]);return ge=function(){return e},e}function Oe(){var e=Object(f.a)(["\n  background-color: ",";\n"]);return Oe=function(){return e},e}function je(){var e=Object(f.a)(["\n   margin-top: 3em;\n    @media (min-width: 1000px) {\n   min-width: 45%;\n  }\n  @media (max-width: 999px) {\n    min-width: 95%;\n  }\n"]);return je=function(){return e},e}function xe(){var e=Object(f.a)(["\n  color: ",";\n  text-decoration-line: underline;\n  &:hover{\n    color: ",";\n  }\n"]);return xe=function(){return e},e}function ye(){var e=Object(f.a)(["\n   background-color: ",";\n   color: white;\n   &:hover{\n    background-color:",";\n    text-decoration: none;\n    color: white;\n    }\n    &:focus{\n    background-color:",";\n    text-decoration: none;\n    color: white;\n    }\n"]);return ye=function(){return e},e}function we(){var e=Object(f.a)(["\nwidth: 100%;\n"]);return we=function(){return e},e}function ke(){var e=Object(f.a)(["\n float: right;\n"]);return ke=function(){return e},e}function Ce(){var e=Object(f.a)(["\n  float: left;\n"]);return Ce=function(){return e},e}var Ne=d.a.span(Ce()),Se=d.a.span(ke()),Fe=d.a.p(we()),Re=Object(d.a)(j.a)(ye(),(function(e){return e.theme.colors.secondaryDark}),(function(e){return e.theme.colors.favoriteRed}),(function(e){return e.theme.colors.secondaryDark})),De=Object(d.a)(l.b)(xe(),(function(e){return e.theme.colors.secondaryDark}),(function(e){return e.theme.colors.favoriteRed})),Te=Object(d.a)(be.a)(je()),Le=Object(d.a)(be.a.Header)(Oe(),(function(e){return"NA"===e.status?"white":"To do"===e.status?"#ff4019":"In progress"===e.status?"#1899f5":"On hold"===e.status?"#f5d018":"#1ed47c"})),Ie=d.a.p(ge());function Ae(e){var t=e.note,n=Object(a.useState)(!1),o=Object(p.a)(n,2),c=o[0],l=o[1],u=Object(a.useState)(!1),i=Object(p.a)(u,2),m=i[0],s=i[1],f=ve().setActiveNote;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,{id:t.title},r.a.createElement(Le,{status:t.status},r.a.createElement(Ne,null,t.category),r.a.createElement(Se,null,t.status)),r.a.createElement(be.a.Body,{id:"body"},r.a.createElement(be.a.Title,{id:"title"},t.title),r.a.createElement(be.a.Text,null,t.text)),r.a.createElement(be.a.Footer,{id:"footer"},r.a.createElement(Fe,null,r.a.createElement(Ie,null,""!==t.date?"Due date: ".concat(t.date):"No due date!"),r.a.createElement(Ne,null,r.a.createElement(Re,{onClick:function(){f(t),s(!0)}},r.a.createElement(de.b,null))),r.a.createElement(Se,null,r.a.createElement(Re,{onClick:function(){return l(!0)}},r.a.createElement(de.a,null)))))),r.a.createElement(Ge,{show:c,handleClose:function(){return l(!1)},note:t}),r.a.createElement(Ue,{show:m,handleClose:function(){return s(!1)},note:t}))}function Ge(e){var t=e.show,n=e.handleClose,a=e.note,o=V().deleteNote;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,{show:t,onHide:n,id:"delete"},r.a.createElement(Ee.a.Header,{closeButton:!0},r.a.createElement(Ee.a.Title,null,"Delete confirmation")),r.a.createElement(Ee.a.Body,null,"You are about to delete the note ",a.title),r.a.createElement(Ee.a.Footer,null,r.a.createElement(Fe,null,r.a.createElement(Ne,null,r.a.createElement(Re,{onClick:n},"Close")),r.a.createElement(Se,null,r.a.createElement(Re,{onClick:function(){return o(a.id)}},"Yes, I am sure!"))))))}function Ue(e){var t=e.show,n=e.handleClose,a=e.note;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee.a,{show:t,onHide:n,id:"edit"},r.a.createElement(Ee.a.Header,{closeButton:!0},r.a.createElement(Ee.a.Title,null,"Edit confirmation")),r.a.createElement(Ee.a.Body,null,"You are about to edit the note ",a.title,"."),r.a.createElement(Ee.a.Footer,{id:"footerModal"},r.a.createElement(Fe,null,r.a.createElement(Ne,null,r.a.createElement(Re,{onClick:n},"Close")),r.a.createElement(Se,{id:"spanRight"},r.a.createElement(De,{to:"/editor"},"Yes, I am sure!"))))))}var _e=n(80),Be=n(79);function Pe(){var e=Object(f.a)(["\n  font-size: 3em;\n  color: ",";\n"]);return Pe=function(){return e},e}function He(){var e=Object(f.a)(["\n    &:hover{\n    color:white;\n    text-decoration: none;\n    }\n"]);return He=function(){return e},e}function We(){var e=Object(f.a)(["\n    display: block;\n    margin-top: 5em;\n"]);return We=function(){return e},e}var qe=d.a.h1(We()),Ye=Object(d.a)(l.b)(He()),ze=Object(d.a)(Be.a)(Pe(),(function(e){return e.theme.colors.secondaryDark}));function Me(){var e=V().notes;return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement(qe,null,"NOTES: "),r.a.createElement("p",null,e.length?null:"No notes to display. Why don't you make a note?",r.a.createElement(Ye,{to:"/creator"},r.a.createElement(ze,null))),r.a.createElement(Xe,null))}function Xe(){var e=V().notes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(_e.a,null,e.map((function(e){return r.a.createElement(Ae,{key:e.id,note:e})}))))}function Je(){var e=Object(f.a)(["\n   background-color: ",";\n   color: white;\n   &:hover{\n    background-color:",";\n    text-decoration: none;\n    color: white;\n    }\n    &:focus{\n    background-color:",";\n    text-decoration: none;\n    color: white;\n    }\n"]);return Je=function(){return e},e}function Ke(){var e=Object(f.a)(["\n  margin-top: 5em;\n"]);return Ke=function(){return e},e}var Qe=d.a.h1(Ke()),$e=Object(d.a)(j.a)(Je(),(function(e){return e.theme.colors.secondaryDark}),(function(e){return e.theme.colors.favoriteRed}),(function(e){return e.theme.colors.secondaryDark}));function Ve(){var e=ve().activeNote,t=V().addNote,n=Object(a.useState)(e),o=Object(p.a)(n,2),c=o[0],l=o[1],i=Object(u.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(Qe,null,"NOTE EDITOR"),r.a.createElement(K.a,{onSubmit:function(e){e.preventDefault(),t(Object(M.a)({},c)),i.push("/")}},r.a.createElement(oe,{setNote:l,note:c}),r.a.createElement(ce,{setNote:l,note:c}),r.a.createElement(le,{setNote:l,note:c}),r.a.createElement(ue,{setNote:l,note:c}),r.a.createElement(ie,{setNote:l,note:c}),r.a.createElement($e,{id:"submit",variant:"primary",type:"submit"},"Submit")))}var Ze=n(102);function et(){var e=Object(f.a)(["\n   color: ",";\n   text-decoration: none;\n   &:hover{\n    color:",";\n    text-decoration: none;\n    }\n"]);return et=function(){return e},e}function tt(){var e=Object(f.a)(["\n   background-color: ",";\n   color: white;\n   &:hover{\n    background-color:",";\n    text-decoration: none;\n    color: white;\n    }\n"]);return tt=function(){return e},e}function nt(){var e=Object(f.a)(["\n  margin-top: 5em;\n\n"]);return nt=function(){return e},e}var at=d.a.h1(nt()),rt=Object(d.a)(j.a)(tt(),(function(e){return e.theme.colors.secondaryDark}),(function(e){return e.theme.colors.favoriteRed})),ot=Object(d.a)(l.b)(et(),(function(e){return e.theme.colors.favoriteRed}),(function(e){return e.theme.colors.secondaryDark}));function ct(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=N().login,o=Object(a.useState)(""),c=Object(p.a)(o,2),l=c[0],i=c[1],m=Object(a.useState)(!1),s=Object(p.a)(m,2),f=s[0],d=s[1],b=Object(u.g)();function E(){return(E=Object(O.a)(g.a.mark((function a(r){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r.preventDefault(),a.prev=1,i(""),d(!0),a.next=6,n(e.current.value,t.current.value);case 6:b.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),i("Failed to log in");case 12:d(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(at,null),r.a.createElement(be.a,null,r.a.createElement(be.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Log In"),l&&r.a.createElement(Ze.a,{variant:"danger"},l),r.a.createElement(K.a,{onSubmit:function(e){return E.apply(this,arguments)}},r.a.createElement(K.a.Group,{id:"email"},r.a.createElement(K.a.Label,null,"Email"),r.a.createElement(K.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(K.a.Group,{id:"password"},r.a.createElement(K.a.Label,null,"Password"),r.a.createElement(K.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(rt,{disabled:f,className:"w-100",type:"submit"},"Log In")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Need an account? ",r.a.createElement(ot,{to:"/signup"},"Sign Up")))}function lt(){var e=Object(f.a)(["\n   color: ",";\n   text-decoration: none;\n   &:hover{\n    color:",";\n    text-decoration: none;\n    }\n"]);return lt=function(){return e},e}function ut(){var e=Object(f.a)(["\n   background-color: ",";\n   color: white;\n   &:hover{\n    background-color:",";\n    text-decoration: none;\n    color: white;\n    }\n"]);return ut=function(){return e},e}function it(){var e=Object(f.a)(["\n  margin-top: 5em;\n\n"]);return it=function(){return e},e}var mt=d.a.h1(it()),st=Object(d.a)(j.a)(ut(),(function(e){return e.theme.colors.secondaryDark}),(function(e){return e.theme.colors.favoriteRed})),ft=Object(d.a)(l.b)(lt(),(function(e){return e.theme.colors.favoriteRed}),(function(e){return e.theme.colors.secondaryDark}));function dt(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),o=N().signup,c=Object(a.useState)(""),l=Object(p.a)(c,2),i=l[0],m=l[1],s=Object(a.useState)(!1),f=Object(p.a)(s,2),d=f[0],b=f[1],E=Object(u.g)();function h(){return(h=Object(O.a)(g.a.mark((function a(r){return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),t.current.value===n.current.value){a.next=3;break}return a.abrupt("return",m("Passwords do not match"));case 3:return a.prev=3,m(""),b(!0),a.next=8,o(e.current.value,t.current.value);case 8:E.push("/"),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(3),m("Failed to create an account");case 14:b(!1);case 15:case"end":return a.stop()}}),a,null,[[3,11]])})))).apply(this,arguments)}return r.a.createElement(r.a.Fragment,null,r.a.createElement(mt,null),r.a.createElement(be.a,null,r.a.createElement(be.a.Body,null,r.a.createElement("h2",{className:"text-center mb-4"},"Sign Up"),i&&r.a.createElement(Ze.a,{variant:"danger"},i),r.a.createElement(K.a,{onSubmit:function(e){return h.apply(this,arguments)}},r.a.createElement(K.a.Group,{id:"email"},r.a.createElement(K.a.Label,null,"Email"),r.a.createElement(K.a.Control,{type:"email",ref:e,required:!0})),r.a.createElement(K.a.Group,{id:"password"},r.a.createElement(K.a.Label,null,"Password"),r.a.createElement(K.a.Control,{type:"password",ref:t,required:!0})),r.a.createElement(K.a.Group,{id:"password-confirm"},r.a.createElement(K.a.Label,null,"Password Confirmation"),r.a.createElement(K.a.Control,{type:"password",ref:n,required:!0})),r.a.createElement(st,{disabled:d,className:"w-100",type:"submit"},"Sign Up")))),r.a.createElement("div",{className:"w-100 text-center mt-2"},"Already have an account? ",r.a.createElement(ft,{to:"/login"},"Log In")))}function bt(){var e=N().currentUser;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{basename:"/"},r.a.createElement(i.a,null,r.a.createElement(z,null),r.a.createElement(u.d,null,r.a.createElement(u.b,{exact:!0,path:"/"},null!==e?r.a.createElement(Me,null):r.a.createElement(u.a,{to:"/login"})),r.a.createElement(u.b,{exact:!0,path:"/creator"},null!==e?r.a.createElement(fe,null):r.a.createElement(u.a,{to:"/login"})),r.a.createElement(u.b,{exact:!0,path:"/editor"},null!==e?r.a.createElement(Ve,null):r.a.createElement(u.a,{to:"/login"})),r.a.createElement(u.b,{exact:!0,path:"/login",component:ct}),r.a.createElement(u.b,{exact:!0,path:"/signup",component:dt})))))}var Et=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{theme:s},r.a.createElement(C,null,r.a.createElement(pe,null,r.a.createElement($,null,r.a.createElement(bt,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Et,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,n){e.exports=n.p+"static/media/fireLogo.3a51098a.png"},82:function(e,t,n){e.exports=n(100)},87:function(e,t,n){},92:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.a87c02dd.chunk.js.map