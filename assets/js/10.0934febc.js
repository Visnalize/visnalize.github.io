(window.webpackJsonp=window.webpackJsonp||[]).push([[10,12,34,35],{283:function(t,e,n){},285:function(t,e,n){},287:function(t,e,n){"use strict";n(283)},289:function(t,e,n){"use strict";n.r(e);n(47);var s={props:{format:{type:String,default:"auto"}},mounted(){(window.adsbygoogle=window.adsbygoogle||[]).push({})}},o=(n(287),n(16)),a=Object(o.a)(s,(function(){return(0,this._self._c)("ins",{staticClass:"adsbygoogle",staticStyle:{display:"block"},attrs:{"data-ad-slot":"3336580675","data-ad-client":"ca-pub-5904323684803247","data-ad-format":this.format,"data-full-width-responsive":"true"}})}),[],!1,null,"18b37b7d",null);e.default=a.exports},291:function(t,e,n){"use strict";n(285)},295:function(t,e,n){"use strict";n.r(e);var s={data(){return{path:this.$route.path,interval:null}},mounted(){this.interval=setInterval(this.hideAds,2e3)},beforeDestroy(){clearInterval(this.interval)},methods:{hideAds(){const t=this.$el.querySelector("#disqus_thread").querySelector("iframe:first-child");null==t||t.style.setProperty("display","none","important")}}},o=(n(291),n(16)),a=Object(o.a)(s,(function(){var t=this._self._c;return t("section",[t("h2",{attrs:{id:"comments"}},[this._v("Comments")]),this._v(" "),t("disqus",{attrs:{identifier:this.path}})],1)}),[],!1,null,"2fa9e9ea",null);e.default=a.exports},299:function(t,e,n){"use strict";n.r(e);var s=n(305),o=n(295),a=n(289),l={props:{noSideAds:Boolean,noComments:Boolean},components:{ParentLayout:s.default,CommentSection:o.default,GoogleAds:a.default}},i=n(16),r=Object(i.a)(l,(function(){var t=this,e=t._self._c;return e("parent-layout",{scopedSlots:t._u([t.noSideAds?null:{key:"sidebar-bottom",fn:function(){return[e("div",{staticClass:"googleads"},[e("google-ads")],1)]},proxy:!0},t.noComments?null:{key:"page-bottom",fn:function(){return[e("google-ads"),t._v(" "),e("comment-section")]},proxy:!0}],null,!0)})}),[],!1,null,null,null);e.default=r.exports},442:function(t,e,n){"use strict";n.r(e);var s={components:{Visnalize:n(299).default}},o=n(16),a=Object(o.a)(s,(function(){return(0,this._self._c)("visnalize",{attrs:{noSideAds:""}})}),[],!1,null,null,null);e.default=a.exports}}]);