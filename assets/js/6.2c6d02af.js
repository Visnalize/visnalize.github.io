(window.webpackJsonp=window.webpackJsonp||[]).push([[6,38,40,58],{284:function(t,e,n){},285:function(t,e,n){},287:function(t,e,n){"use strict";n(284)},289:function(t,e,n){"use strict";n.r(e);n(48);var i={props:{format:{type:String,default:"auto"}},mounted(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}},a=(n(287),n(13)),s=Object(a.a)(i,(function(){return(0,this._self._c)("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-slot":"3336580675","data-ad-client":"ca-pub-5904323684803247","data-ad-format":this.format,"data-full-width-responsive":"true"}})}),[],!1,null,"18b37b7d",null);e.default=s.exports},291:function(t,e,n){"use strict";n(285)},293:function(t,e,n){"use strict";n.r(e);var i={data(){return{path:this.$route.path,interval:null}},mounted(){this.interval=setInterval(this.hideAds,2e3)},beforeDestroy(){clearInterval(this.interval)},methods:{hideAds(){const t=this.$el.querySelector("#disqus_thread").querySelector("iframe:first-child");null==t||t.style.setProperty("display","none","important")}}},a=(n(291),n(13)),s=Object(a.a)(i,(function(){var t=this._self._c;return t("section",[t("h2",{attrs:{id:"comments"}},[this._v("Comments")]),this._v(" "),t("disqus",{attrs:{identifier:this.path}})],1)}),[],!1,null,"2fa9e9ea",null);e.default=s.exports},297:function(t,e,n){"use strict";function i(t,e="-"){return t.split(e).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" ")}function a(t){return t.charAt(0).toLowerCase()+t.slice(1)}n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}))},340:function(t,e,n){},363:function(t,e,n){"use strict";n.r(e);var i={props:{v:String,p:{type:String,default:"win7simu",validator:t=>["win7simu","brick1100"].includes(t)}},computed:{to(){let t=`/${this.p}/changelog.html`;const e=this.$site.pages.find(e=>e.path.includes(t));if(e){const n=e.headers.find(t=>t.title.includes(this.v));if(n)return{path:t,hash:"#"+n.slug}}return t}}},a=n(13),s=Object(a.a)(i,(function(){return(0,this._self._c)("router-link",{attrs:{to:this.to}},[this._v(this._s(this.v))])}),[],!1,null,null,null);e.default=s.exports},390:function(t,e,n){"use strict";n(340)},469:function(t,e,n){"use strict";n.r(e);var i=n(363),a=n(293),s=n(289),o=n(301),r=n(297),u={components:{ParentLayout:o.default,CommentSection:a.default,GoogleAds:s.default,AChangelog:i.default},computed:{data(){return{...this.$page,...this.$frontmatter}}},methods:{lowerFirst:r.a}},l=(n(390),n(13)),c=Object(l.a)(u,(function(){var t=this,e=t._self._c;return e("parent-layout",{scopedSlots:t._u([{key:"page-top",fn:function(){return[e("div",{staticClass:"theme-default-content content__default"},[e("h1",[t._v(t._s(t.data.title))]),t._v(" "),e("a-social"),t._v(" "),e("p",[e("img",{attrs:{src:t.data.image,alt:t.data.title}})]),t._v(" "),e("p",[e("b",[t._v(t._s(t.data.title))]),t._v(" is a simulated application in\n        "),e("router-link",{attrs:{to:"/win7simu/about"}},[t._v("Win7 Simu")]),t._v(" that\n        "+t._s(t.lowerFirst(t.data.description))+".\n      ")],1),t._v(" "),e("p",[t._v("\n        It was introduced in version\n        "),e("a-changelog",{attrs:{v:t.data.version}}),t._v(".\n      ")],1),t._v(" "),e("h2",[t._v("Check it out in action")]),t._v(" "),e("p",[t._v("\n        Explore "+t._s(t.data.title)+" and other cool features of Win7 Simu on your\n        preferred platform. Simply click a button below to download the\n        Android app or access directly from your web browser.\n      ")]),t._v(" "),e("m-access-links")],1)]},proxy:!0},{key:"page-bottom",fn:function(){return[e("div",{staticClass:"ad-wrapper"},[e("google-ads")],1),t._v(" "),e("comment-section")]},proxy:!0}])})}),[],!1,null,"36ea03e7",null);e.default=c.exports}}]);