(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{507:function(o,l,n){"use strict";n.r(l);var r={data:()=>({isScrolling:!1}),mounted(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)},methods:{scrollTop(){window.scrollTo({top:0,behavior:"smooth"})},handleScroll(){this.isScrolling=window.scrollY>0}}},s=n(16),t=Object(s.a)(r,(function(){return(0,this._self._c)("a-control",{class:{active:this.isScrolling},attrs:{icon:"ic:round-arrow-upward",label:"Back to top"},on:{click:this.scrollTop}})}),[],!1,null,"513edf60",null);l.default=t.exports}}]);