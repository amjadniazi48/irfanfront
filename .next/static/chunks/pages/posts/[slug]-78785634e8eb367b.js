(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[922],{843:function(t,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[slug]",function(){return r(6089)}])},6089:function(t,n,r){"use strict";r.r(n),r.d(n,{__N_SSP:function(){return h}});var s=r(9825),a=r(8014),e=(r(2136),r(5775),r(5657)),i=r.n(e),u=r(241),l=r.n(u),o=r(5332),c=r(4003),d=r(2775);function p(){var t=(0,s.Z)(["query  getPosts($slug: String!,$locale : I18NLocaleCode!){\n    posts(filters: { slug: { eq: $slug } },locale:$locale) {\n      data {\n        id\n        attributes {\n          title\n          slug\n          description\n          image {\n            data{\n               attributes{\n                formats\n              }\n            }\n          }\n    \n        }\n      }\n    }\n  }  \n    "]);return p=function(){return t},t}var h=!0;n.default=function(){var t=(0,o.useRouter)(),n=t.locale,r=t.query.slug,s=null,e=(0,c.Ps)(p()),u=(0,d.a)(e,{variables:{slug:r,locale:n}}),h=u.data;u.loading;if(u.error||!h)return(0,a.jsx)("p",{children:"No Data"});try{s=h.posts.data[0].attributes.image.data[0].attributes.formats.medium.url}catch(f){s="/images/pentwo.jpg"}try{return(0,a.jsxs)("div",{className:"card p-1",dir:"ur-PK"===n?"rtl":"ltr",children:[(0,a.jsx)(l(),{src:s,width:800,height:600}),(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsx)("h3",{children:void 0!=h.posts.data[0].attributes?h.posts.data[0].attributes.title:""}),(0,a.jsx)("p",{children:void 0!=h.posts.data[0].attributes?h.posts.data[0].attributes.description:""})]})]})}catch(g){return(0,a.jsxs)("p",{style:{marginTop:"10px"},children:["Oops! No Data please return to ",(0,a.jsx)(i(),{href:"/",children:(0,a.jsx)("a",{children:"Home Page"})})]})}}}},function(t){t.O(0,[241,186,774,888,179],(function(){return n=843,t(t.s=n);var n}));var n=t.O();_N_E=n}]);