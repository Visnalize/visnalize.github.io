(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{322:function(t,e){t.exports={DOMAIN:"v1.visnalize.com",ORIGIN:"https://v1.visnalize.com"}},325:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n(62);var o=n(322);function i(t,e){if(!t||!e)throw new Error("imageUrl and options are required");const n=Object.entries(e).map(([t,e])=>void 0===e?"":`${t}=${e}`).filter(Boolean).join(","),i=encodeURIComponent(/^(https?:|mailto:|tel:)/.test(t)?t:`${o.ORIGIN}${t}`);return`${o.ORIGIN}/cdn-cgi/image/${n}/${i}`}},343:function(t,e,n){},398:function(t,e,n){"use strict";n(343)},509:function(t,e,n){"use strict";n.r(e);var o=n(317),i=n(325),a={components:{ParentLayout:o.default},computed:{features(){const t=this.$site.pages.filter(({path:t})=>t.includes(this.$page.path)&&t!==this.$page.path);return t.sort((t,e)=>{const n=t.frontmatter.version||"0.0.0";return(e.frontmatter.version||"0.0.0").localeCompare(n,void 0,{numeric:!0,sensitivity:"base"})}),t}},methods:{transform:t=>Object(i.a)(t,{width:450})}},r=(n(398),n(16)),s=Object(r.a)(a,(function(){var t=this,e=t._self._c;return e("parent-layout",{scopedSlots:t._u([{key:"page-top",fn:function(){return[e("div",{staticClass:"theme-default-content content__default"},[e("h1",[t._v("Win7 Simu simulated apps")]),t._v(" "),e("a-google-ad"),t._v(" "),e("ul",{staticClass:"feature-links"},t._l(t.features,(function(n){return e("li",{key:n.path},[e("router-link",{attrs:{to:n.path}},[e("span",{staticClass:"image"},[e("a-icon",{attrs:{icon:"ic:outline-image",width:"48",height:"48"}}),t._v(" "),e("img",{attrs:{src:t.transform(n.frontmatter.image),alt:n.title}})],1),t._v(" "),e("span",[t._v(t._s(n.title))])])],1)})),0)],1)]},proxy:!0},{key:"page-bottom",fn:function(){return[e("m-footer")]},proxy:!0}])})}),[],!1,null,"2095642b",null);e.default=s.exports}}]);