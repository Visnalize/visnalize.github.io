(window.webpackJsonp=window.webpackJsonp||[]).push([[15,41],{283:function(t,s,e){},287:function(t,s,e){"use strict";e(283)},288:function(t,s,e){"use strict";e.r(s);e(47);var i={props:{tagId:{type:String,default:"5206"},format:{type:String,default:"responsive",validator:t=>["siderail","anchor","responsive"].indexOf(t)>-1}},mounted(){(window.stpdwrapper=window.stpdwrapper||[]).push({})}},n=(e(287),e(16)),a=Object(n.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"adwrapper"},[t("ins",{staticClass:"stpdwrapper",staticStyle:{display:"inline-block"},attrs:{id:"siderail"===this.format?"siderail":null,"data-tag-id":this.tagId,"data-lazyload":"responsive"===this.format,"data-lazyloadMargin":"responsive"===this.format?"200px":null}})])}),[],!1,null,"6071f92c",null);s.default=a.exports},340:function(t,s,e){},414:function(t,s,e){"use strict";e(340)},432:function(t,s,e){"use strict";e.r(s);var i=e(334),n=e(428);const a={any:0,all:1};var r=e(430),o={components:{SetupadAds:e(288).default},mounted(){const t=this.$root.$el.querySelector(".navbar"),s=t.scrollHeight;!function(t,s,{root:e,margin:r,amount:o="any"}={}){if("undefined"==typeof IntersectionObserver)return()=>{};const l=Object(i.a)(t),c=new WeakMap,u=new IntersectionObserver(t=>{t.forEach(t=>{const e=c.get(t.target);if(t.isIntersecting!==Boolean(e))if(t.isIntersecting){const e=s(t);Object(n.a)(e)?c.set(t.target,e):u.unobserve(t.target)}else e&&(e(t),c.delete(t.target))})},{root:e,rootMargin:r,threshold:"number"==typeof o?o:a[o]});l.forEach(t=>u.observe(t))}(this.$el,()=>(Object(r.a)(t,{y:-s,opacity:0}),()=>{Object(r.a)(t,{y:0,opacity:1})}))},methods:{scroll(){window.scrollTo({top:this.$el.scrollHeight})}}},l=(e(414),e(16)),c=Object(l.a)(o,(function(){var t=this._self._c;return t("section",[t("button",{on:{click:this.scroll}},[this._m(0),this._v(" "),t("span",[this._v("Visnalize")])]),this._v(" "),this._m(1),this._v(" "),t("button",{staticClass:"indicator",attrs:{"aria-label":"scroll down"},on:{click:this.scroll}})])}),[function(){var t=this._self._c;return t("span",[t("img",{attrs:{src:"/assets/logo.png"}})])},function(){var t=this._self._c;return t("h1",[this._v("Recreating "),t("b",[this._v("Nostalgia")]),this._v(" for "),t("b",[this._v("Entertainment")])])}],!1,null,"279a13d0",null);s.default=c.exports}}]);