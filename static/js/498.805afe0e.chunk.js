"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[498],{7498:function(n,e,t){t.r(e),t.d(e,{default:function(){return L}});var r,i,s,a,o=t(7689),c=t(168),u=t(5867),l=t(1087),f=u.ZP.img(r||(r=(0,c.Z)(["\n  height: 200px;\n  border-radius: 8px;\n"]))),p=u.ZP.li(i||(i=(0,c.Z)(["\n  flex-basis: calc((100% - 36px) / 4);\n  border-radius: 8px;\n\n  box-shadow: 0px 2px 8px 1px ",";\n  transition: transform ",";\n  transform: scale(0.9);\n\n  &:hover,\n  :focus {\n    transform: scale(1);\n  }\n"])),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.animations.cubicBezier})),x=(0,u.ZP)(l.rU)(s||(s=(0,c.Z)(["\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n  align-items: center;\n  font-size: ",";\n  font-weight: 700;\n  color: ",";\n  padding-bottom: 4px;\n"])),(function(n){return n.theme.fontSizes.small}),(function(n){return n.theme.colors.dark})),m=t(184),d=function(n){var e=n.film,t=e.title,r=e.id,i=(e.poster_path,e.backdrop_path),s=(0,o.TH)();return(0,m.jsx)(p,{children:(0,m.jsxs)(x,{to:"/movies/".concat(r),state:{from:s},children:[(0,m.jsx)(f,{src:"https://image.tmdb.org/t/p/original"+i,alt:"title"}),t]})},r)},h=u.ZP.ul(a||(a=(0,c.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  justify-content: space-between;\n"]))),v=function(n){var e=n.films;return(0,m.jsx)(h,{films:e,children:e.map((function(n){return(0,m.jsx)(d,{film:n},n.id)}))})},g=t(4169),b=t(5510),j=t(6355),Z=t(3718),w=t(4165),_=t(5861),k=t(9439),y=t(2791),C=t(597),E=function(){var n=(0,y.useState)([]),e=(0,k.Z)(n,2),t=e[0],r=e[1],i=(0,y.useState)(!1),s=(0,k.Z)(i,2),a=s[0],o=s[1],c=(0,y.useState)(!1),u=(0,k.Z)(c,2),l=u[0],f=u[1];return(0,y.useEffect)((function(){var n=new AbortController,e=n.signal;f(!0);var t=function(){var n=(0,_.Z)((0,w.Z)().mark((function n(){var t,i;return(0,w.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,C.rt)(e);case 3:t=n.sent,i=t.results,r(i),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),"ERR_CANCELED"!==n.t0.code&&o(!0);case 11:return n.prev=11,f(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();return t(),function(){n.abort()}}),[t]),{films:t,error:a,isLoading:l}},S=t(9085),z=t(945);function L(){var n=E(),e=n.films,t=n.error,r=n.isLoading;return(0,m.jsx)(z.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5,ease:"easeIn"},children:(0,m.jsxs)("main",{children:[r&&(0,m.jsx)(b.a,{}),t&&S.Am.error("Something went wrong"),(0,m.jsx)(g.$0,{children:(0,m.jsxs)(g.W2,{children:[(0,m.jsxs)(g.X6,{children:[(0,m.jsx)(j.ZTc,{color:Z.r.colors.accent,size:"24px"}),"Movie trends"]}),(0,m.jsx)(v,{films:e})]})}),(0,m.jsx)(S.Ix,{pauseOnFocusLoss:!0,enableMultiContainer:!0,limit:1})]})})}}}]);
//# sourceMappingURL=498.805afe0e.chunk.js.map