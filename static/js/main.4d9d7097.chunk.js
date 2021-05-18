(this["webpackJsonpreact-lab"]=this["webpackJsonpreact-lab"]||[]).push([[0],{284:function(e,a,t){},285:function(e,a,t){"use strict";t.r(a);var c=t(46),r=t.n(c),s=t(32),n=(t(271),t(14)),i=t(364),o=t(259),l=t(27),d=Object(o.a)({palette:{background:{default:"#F4F6F8",paper:l.a.common.white},primary:{contrastText:"#ffffff",main:"#5664d2"},text:{primary:"#172b4d",secondary:"#6b778c"}},typography:{h1:{fontWeight:500,fontSize:35,letterSpacing:"-0.24px"},h2:{fontWeight:500,fontSize:29,letterSpacing:"-0.24px"},h3:{fontWeight:500,fontSize:24,letterSpacing:"-0.06px"},h4:{fontWeight:500,fontSize:20,letterSpacing:"-0.06px"},h5:{fontWeight:500,fontSize:16,letterSpacing:"-0.05px"},h6:{fontWeight:500,fontSize:14,letterSpacing:"-0.05px"},overline:{fontWeight:500}}}),j=t(13),b=t(7),m=t(0),u=t(5),h=t(20),p=t(45),O=t(335),x=t(337),g=t(310),_=t(328),v=t(338),f=t(329),N=t(250),y=t.n(N),S=t(248),k=t.n(S),w=t(249),A=t.n(w),C=t(2),U=function(e){return Object(C.jsx)("img",Object(h.a)({alt:"Logo",src:"./static/logo.svg"},e))},P=function(e){var a=e.onMobileNavOpen,t=Object(p.a)(e,["onMobileNavOpen"]),c=Object(m.useState)([]),r=Object(j.a)(c,1)[0];return Object(C.jsx)(O.a,Object(h.a)(Object(h.a)({elevation:0},t),{},{children:Object(C.jsxs)(x.a,{className:"navbar__wrapper",children:[Object(C.jsx)(s.b,{to:"/react-labs",className:"navbar__link",children:Object(C.jsx)(U,{className:"navbar__logo"})}),Object(C.jsx)(g.a,{sx:{flexGrow:1}}),Object(C.jsxs)(_.a,{lgDown:!0,children:[Object(C.jsx)(v.a,{className:"navbar__btn-icon",color:"inherit",children:Object(C.jsx)(f.a,{badgeContent:r.length,color:"primary",variant:"dot",children:Object(C.jsx)(k.a,{})})}),Object(C.jsx)(v.a,{className:"navbar__btn-icon",color:"inherit",children:Object(C.jsx)(A.a,{})})]}),Object(C.jsx)(_.a,{lgUp:!0,children:Object(C.jsx)(v.a,{className:"navbar__btn-icon",color:"inherit",onClick:a,children:Object(C.jsx)(y.a,{})})})]})}))},D=t(136),M=t.n(D),W=t(251),z=t(332),L=t(340),E=t(341),B=t(313),F=t(314),R=t(339),G=function(e){var a=e.href,t=e.icon,c=e.title,r=Object(p.a)(e,["href","icon","title"]),i=Object(n.g)(),o=!!a&&!!Object(n.d)({path:a,end:!1},i.pathname);return Object(C.jsx)("li",Object(h.a)(Object(h.a)({className:"nav-item sidebar__nav-item"},r),{},{children:Object(C.jsxs)(R.a,{className:"nav-item__btn",component:s.c,sx:Object(h.a)(Object(h.a)({color:"text.secondary",fontWeight:"medium",justifyContent:"flex-start",letterSpacing:0,py:1.25,textTransform:"none",width:"100%"},o&&{color:"primary.main"}),{},{"& svg":{mr:1}}),to:a,children:[t&&Object(C.jsx)(t,{size:"20"}),Object(C.jsx)("span",{className:"nav-item__text",children:c})]})}))},H=function(){var e=Object(W.a)(M.a.mark((function e(a){var t;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:if(!(t=e.sent).ok){e.next=5;break}return e.abrupt("return",t.json());case 5:return e.abrupt("return",0);case 6:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),Y=[{href:"/customers",icon:B.a,title:"Customers"},{href:"/products",icon:F.a,title:"Products"}],I=function(e){var a=e.onMobileClose,t=e.openMobile,c=Object(n.g)(),r=Object(m.useState)(null),i=Object(j.a)(r,2),o=i[0],l=i[1],d=Object(m.useState)(!1),b=Object(j.a)(d,2),u=b[0],h=b[1],p=Object(m.useState)([]),O=Object(j.a)(p,2),x=O[0],v=O[1];if(Object(m.useEffect)((function(){t&&a&&a()}),[c.pathname]),Object(m.useEffect)((function(){(function(){var e="MaximSeveryn".toLowerCase(),a="https://api.github.com/users/".concat(e);return H(a).then((function(e){return[e.avatar_url,e.login]}))})().then((function(e){v(e),h(!0)}),(function(e){h(!0),l(e)}))}),[]),o)return Object(C.jsxs)("div",{children:["Error: ",o.message]});if(u){var f=Object(C.jsxs)(g.a,{className:"sidebar__wrapper",children:[Object(C.jsxs)(g.a,{className:"sidebar__content",children:[Object(C.jsx)(z.a,{className:"user-avatar",component:s.b,src:x[0],sx:{cursor:"pointer",width:64,height:64},to:"/react-labs"}),Object(C.jsx)(L.a,{color:"textPrimary",variant:"h5",children:x[1]}),Object(C.jsx)(L.a,{color:"textSecondary",variant:"body2",children:"Stydent"})]}),Object(C.jsx)("hr",{className:"sidebar__divider divider"}),Object(C.jsx)(g.a,{className:"sidebar__content",sx:{p:2},children:Object(C.jsx)("ul",{className:"nav-list sidebar__nav-list",children:Y.map((function(e){return Object(C.jsx)(G,{href:e.href,title:e.title,icon:e.icon},e.title)}))})}),Object(C.jsx)("div",{className:"sidebar__spacing spacing"})]});return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(_.a,{lgUp:!0,children:Object(C.jsx)(E.a,{anchor:"left",onClose:a,open:t,variant:"temporary",PaperProps:{sx:{width:256}},children:f})}),Object(C.jsx)(_.a,{lgDown:!0,children:Object(C.jsx)(E.a,{anchor:"left",open:!0,variant:"persistent",PaperProps:{sx:{width:256,top:64,height:"calc(100% - 64px)"}},children:f})})]})}return Object(C.jsx)("div",{children:"Loading..."})};I.defaultProps={onMobileClose:function(){},openMobile:!1};var q=I,T=Object(u.a)("div")((function(e){return{backgroundColor:e.theme.palette.background.default}})),J=Object(u.a)("div")((function(e){var a=e.theme;return Object(b.a)({},a.breakpoints.up("lg"),{paddingLeft:256})})),K=function(){var e=Object(m.useState)(!1),a=Object(j.a)(e,2),t=a[0],c=a[1];return Object(C.jsxs)(T,{className:"dashboard",children:[Object(C.jsx)(P,{className:"navbar dashboard__navbar",onMobileNavOpen:function(){return c(!0)}}),Object(C.jsx)(q,{className:"sidebar dashboard__sidebar",onMobileClose:function(){return c(!1)},openMobile:t}),Object(C.jsx)(J,{className:"wrapper dashboard__wrapper",children:Object(C.jsx)("div",{className:"container dashboard__container",children:Object(C.jsx)("div",{className:"content dashboard__content",children:Object(C.jsx)(n.b,{})})})})]})},V=t(96),Q=t(361),X=t(254),Z=t.n(X),$=t(255),ee=t.n($),ae=t(342),te=t(343),ce=t(344),re=t(345),se=t(346),ne=t(326),ie=t(347),oe=t(330),le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")},de=function(e){var a=e.customers,t=Object(p.a)(e,["customers"]),c=Object(m.useState)([]),r=Object(j.a)(c,2),s=r[0],n=r[1],i=Object(m.useState)(10),o=Object(j.a)(i,2),l=o[0],d=o[1],b=Object(m.useState)(0),u=Object(j.a)(b,2),O=u[0],x=u[1];return Object(C.jsxs)(ae.a,Object(h.a)(Object(h.a)({},t),{},{children:[Object(C.jsx)(ee.a,{children:Object(C.jsx)(g.a,{sx:{minWidth:1050},children:Object(C.jsxs)(te.a,{className:"customer-table",children:[Object(C.jsx)(ce.a,{className:"customer-table__head",children:Object(C.jsxs)(re.a,{className:"customer-table__row",children:[Object(C.jsx)(se.a,{padding:"checkbox",className:"customer-table__cell",children:Object(C.jsx)(ne.a,{checked:s.length===a.length,color:"primary",indeterminate:s.length>0&&s.length<a.length,onChange:function(e){var t;t=e.target.checked?a.map((function(e){return e.id})):[],n(t)}})}),Object(C.jsx)(se.a,{className:"customer-table__cell",children:"Name"}),Object(C.jsx)(se.a,{className:"customer-table__cell",children:"Email"}),Object(C.jsx)(se.a,{className:"customer-table__cell",children:"Location"}),Object(C.jsx)(se.a,{className:"customer-table__cell",children:"Phone"}),Object(C.jsx)(se.a,{className:"customer-table__cell",children:"Registration date"})]})}),Object(C.jsx)(ie.a,{className:"customer-table__body",children:a.slice(0,l).map((function(e){return Object(C.jsxs)(re.a,{hover:!0,selected:-1!==s.indexOf(e.id),className:"customer-table__row",children:[Object(C.jsx)(se.a,{padding:"checkbox",className:"customer-table__cell",children:Object(C.jsx)(ne.a,{className:"customer-table__checkbox",checked:-1!==s.indexOf(e.id),onChange:function(a){return function(e,a){var t=s.indexOf(a),c=[];-1===t?c=c.concat(s,a):0===t?c=c.concat(s.slice(1)):t===s.length-1?c=c.concat(s.slice(0,-1)):t>0&&(c=c.concat(s.slice(0,t),s.slice(t+1))),n(c)}(0,e.id)},value:"true"})}),Object(C.jsx)(se.a,{className:"customer-table__cell",children:Object(C.jsxs)(g.a,{sx:{alignItems:"center",display:"flex"},children:[Object(C.jsx)(z.a,{src:e.avatarUrl,sx:{mr:2},children:le(e.name)}),Object(C.jsx)(L.a,{color:"textPrimary",variant:"body1",children:e.name})]})}),Object(C.jsx)(se.a,{className:"customer-table__cell",children:e.email}),Object(C.jsx)(se.a,{className:"customer-table__cell",children:"".concat(e.address.city,", ").concat(e.address.state,", ").concat(e.address.country)}),Object(C.jsx)(se.a,{className:"customer-table__cell",children:e.phone}),Object(C.jsx)(se.a,{className:"customer-table__cell",children:Z()(e.createdAt).format("DD/MM/YYYY")})]},e.id)}))})]})})}),Object(C.jsx)(oe.a,{component:"div",count:a.length,onPageChange:function(e,a){x(a)},onRowsPerPageChange:function(e){d(e.target.value)},page:O,rowsPerPage:l,rowsPerPageOptions:[5,10,25]})]}))},je=t(355),be=t(356),me=t(360),ue=t(263),he=t(322),pe=function(e){return Object(C.jsxs)(g.a,Object(h.a)(Object(h.a)({},e),{},{children:[Object(C.jsxs)(g.a,{sx:{display:"flex",justifyContent:"flex-end"},children:[Object(C.jsx)(R.a,{children:"Import"}),Object(C.jsx)(R.a,{sx:{mx:1},children:"Export"}),Object(C.jsxs)(R.a,{color:"primary",variant:"contained",children:["Add ",e.add]})]}),Object(C.jsx)(g.a,{sx:{mt:3},children:Object(C.jsx)(ae.a,{children:Object(C.jsx)(je.a,{children:Object(C.jsx)(g.a,{sx:{maxWidth:500},children:Object(C.jsx)(be.a,{fullWidth:!0,InputProps:{startAdornment:Object(C.jsx)(me.a,{position:"start",children:Object(C.jsx)(ue.a,{fontSize:"small",color:"action",children:Object(C.jsx)(he.a,{})})})},placeholder:e.search,variant:"outlined"})})})})})]}))},Oe=t(327),xe=[{id:Object(Oe.a)(),address:{country:"USA",state:"West Virginia",city:"Parkersburg",street:"2849 Fulton Street"},avatarUrl:"./static/images/avatars/avatar_3.png",createdAt:15550164e5,email:"ekaterina.tankova@devias.io",name:"Ekaterina Tankova",phone:"304-428-3097"},{id:Object(Oe.a)(),address:{country:"USA",state:"Bristow",city:"Iowa",street:"1865  Pleasant Hill Road"},avatarUrl:"./static/images/avatars/avatar_4.png",createdAt:15550164e5,email:"cao.yu@devias.io",name:"Cao Yu",phone:"712-351-5711"},{id:Object(Oe.a)(),address:{country:"USA",state:"Georgia",city:"Atlanta",street:"4894  Lakeland Park Drive"},avatarUrl:"./static/images/avatars/avatar_2.png",createdAt:15550164e5,email:"alexa.richardson@devias.io",name:"Alexa Richardson",phone:"770-635-2682"},{id:Object(Oe.a)(),address:{country:"USA",state:"Ohio",city:"Dover",street:"4158  Hedge Street"},avatarUrl:"./static/images/avatars/avatar_5.png",createdAt:155493e7,email:"anje.keizer@devias.io",name:"Anje Keizer",phone:"908-691-3242"},{id:Object(Oe.a)(),address:{country:"USA",state:"Texas",city:"Dallas",street:"75247"},avatarUrl:"./static/images/avatars/avatar_6.png",createdAt:15547572e5,email:"clarke.gillebert@devias.io",name:"Clarke Gillebert",phone:"972-333-4106"},{id:Object(Oe.a)(),address:{country:"USA",state:"California",city:"Bakerfield",street:"317 Angus Road"},avatarUrl:"./static/images/avatars/avatar_1.png",createdAt:15546708e5,email:"adam.denisov@devias.io",name:"Adam Denisov",phone:"858-602-3409"},{id:Object(Oe.a)(),address:{country:"USA",state:"California",city:"Redondo Beach",street:"2188  Armbrester Drive"},avatarUrl:"./static/images/avatars/avatar_7.png",createdAt:15543252e5,email:"ava.gregoraci@devias.io",name:"Ava Gregoraci",phone:"415-907-2647"},{id:Object(Oe.a)(),address:{country:"USA",state:"Nevada",city:"Las Vegas",street:"1798  Hickory Ridge Drive"},avatarUrl:"./static/images/avatars/avatar_8.png",createdAt:15230484e5,email:"emilee.simchenko@devias.io",name:"Emilee Simchenko",phone:"702-661-1654"},{id:Object(Oe.a)(),address:{country:"USA",state:"Michigan",city:"Detroit",street:"3934  Wildrose Lane"},avatarUrl:"./static/images/avatars/avatar_9.png",createdAt:15547028e5,email:"kwak.seong.min@devias.io",name:"Kwak Seong-Min",phone:"313-812-8947"},{id:Object(Oe.a)(),address:{country:"USA",state:"Utah",city:"Salt Lake City",street:"368 Lamberts Branch Road"},avatarUrl:"./static/images/avatars/avatar_10.png",createdAt:15227028e5,email:"merrile.burgett@devias.io",name:"Merrile Burgett",phone:"801-301-7894"}],ge=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(V.a,{children:Object(C.jsx)("title",{children:"Customers"})}),Object(C.jsx)(g.a,{className:"customer-list",sx:{backgroundColor:"background.default"},children:Object(C.jsxs)(Q.a,{className:"customer-list__container",children:[Object(C.jsx)(pe,{add:"customer",search:"Search customer"}),Object(C.jsx)(g.a,{className:"customer-list__table-box",children:Object(C.jsx)(de,{className:"customer-list__table",customers:xe})})]})})]})},_e=t(362),ve=t(363),fe=t(257),Ne=t.n(fe),ye=t(258),Se=t.n(ye),ke=function(e){var a=e.product,t=Object(p.a)(e,["product"]);return Object(C.jsxs)(ae.a,Object(h.a)(Object(h.a)({},t),{},{children:[Object(C.jsxs)(je.a,{className:"product-card__content",children:[Object(C.jsx)(g.a,{className:"product-card__avatar-box",children:Object(C.jsx)(z.a,{className:"product-card__avatar",alt:"Product",src:a.media,variant:"square"})}),Object(C.jsx)(L.a,{className:"product-card__title",align:"center",color:"textPrimary",gutterBottom:!0,variant:"h4",children:a.title}),Object(C.jsx)(L.a,{className:"product-card__desc",align:"center",color:"textPrimary",variant:"body1",children:a.description})]}),Object(C.jsx)(g.a,{className:"spacing"}),Object(C.jsx)("div",{className:"divider"}),Object(C.jsx)(g.a,{className:"product-card__info",sx:{p:2},children:Object(C.jsxs)(_e.a,{className:"product-card__info-inner",container:!0,spacing:2,children:[Object(C.jsxs)(_e.a,{className:"product-card__info-block",item:!0,children:[Object(C.jsx)(Ne.a,{className:"product-card__info-icon",color:"action"}),Object(C.jsx)(L.a,{className:"product-card__info-desc",color:"textSecondary",display:"inline",variant:"body2",children:"Updated 2hr ago"})]}),Object(C.jsxs)(_e.a,{className:"product-card__info-block",item:!0,children:[Object(C.jsx)(Se.a,{className:"product-card__info-icon",color:"action"}),Object(C.jsxs)(L.a,{className:"product-card__info-desc",color:"textSecondary",display:"inline",variant:"body2",children:[a.totalDownloads," ","Downloads"]})]})]})})]}))},we=[{id:Object(Oe.a)(),createdAt:"27/03/2019",description:"Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.",media:"./static/images/products/product_1.png",title:"Dropbox",totalDownloads:"594"},{id:Object(Oe.a)(),createdAt:"31/03/2019",description:"Medium is an online publishing platform developed by Evan Williams, and launched in August 2012.",media:"./static/images/products/product_2.png",title:"Medium Corporation",totalDownloads:"625"},{id:Object(Oe.a)(),createdAt:"03/04/2019",description:"Slack is a cloud-based set of team collaboration tools and services, founded by Stewart Butterfield.",media:"./static/images/products/product_3.png",title:"Slack",totalDownloads:"857"},{id:Object(Oe.a)(),createdAt:"04/04/2019",description:"Lyft is an on-demand transportation company based in San Francisco, California.",media:"./static/images/products/product_4.png",title:"Lyft",totalDownloads:"406"},{id:Object(Oe.a)(),createdAt:"04/04/2019",description:"GitHub is a web-based hosting service for version control of code using Git.",media:"./static/images/products/product_5.png",title:"GitHub",totalDownloads:"835"},{id:Object(Oe.a)(),createdAt:"04/04/2019",description:"Squarespace provides software as a service for website building and hosting. Headquartered in NYC.",media:"./static/images/products/product_6.png",title:"Squarespace",totalDownloads:"835"}],Ae=function(){return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(V.a,{children:Object(C.jsx)("title",{children:"Products"})}),Object(C.jsx)(g.a,{className:"product-list",children:Object(C.jsxs)(Q.a,{className:"product-list__container",children:[Object(C.jsx)(pe,{add:"product",search:"Search product"}),Object(C.jsx)(g.a,{className:"product-list__cards",children:Object(C.jsx)(_e.a,{className:"product-list__cards-container",container:!0,spacing:3,children:we.map((function(e){return Object(C.jsx)(_e.a,{className:"product-list__card-wrapper",item:!0,lg:4,md:6,xs:12,children:Object(C.jsx)(ke,{className:"product-list__card",product:e})},e.id)}))})}),Object(C.jsx)(g.a,{className:"product-list__pagination-wrapper",children:Object(C.jsx)(ve.a,{className:"product-list__pagination",color:"primary",count:3,size:"small"})})]})})]})},Ce=[{path:"/",element:Object(C.jsx)(K,{}),children:[{path:"/",element:Object(C.jsx)(n.a,{to:"customers"})},{path:"customers",element:Object(C.jsx)(ge,{})},{path:"products",element:Object(C.jsx)(Ae,{})}]}],Ue=(t(284),function(){var e=Object(n.j)(Ce);return Object(C.jsx)(i.a,{theme:d,children:e})});r.a.render(Object(C.jsx)(s.a,{basename:"/react-labs",children:Object(C.jsx)(Ue,{})}),document.getElementById("root"))}},[[285,1,2]]]);
//# sourceMappingURL=main.4d9d7097.chunk.js.map