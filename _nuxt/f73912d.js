(window.webpackJsonp=window.webpackJsonp||[]).push([[23,22],{855:function(t,e,n){var content=n(874);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("7c08402c",content,!0,{sourceMap:!1})},873:function(t,e,n){"use strict";n(855)},874:function(t,e,n){var r=n(17)(!1);r.push([t.i,'@font-face{font-family:Poppins,"sans-serif";src:"https://fonts.googleapis.com/css2?family=Hubballi&family=Poppins&display=swap"}.faq-item[data-v-e86b6a12]{background:#f2f2f2;padding:18px;cursor:pointer;border-radius:6px;border:1px solid #ddd}.faq-item p[data-v-e86b6a12]{display:none}.faq-item.active p[data-v-e86b6a12]{display:block}',""]),t.exports=r},885:function(t,e,n){"use strict";n.r(e);var r={props:{faq:null},data:function(){return{isActive:!1}}},c=(n(873),n(44)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"faq-item mt-2",class:{active:t.isActive},on:{click:function(e){t.isActive=!t.isActive}}},[e("span",{staticClass:"textdark--text font-weight-medium"},[t._v(t._s(t.faq.question))]),t._v(" "),e("p",{staticClass:"textmuted--text mt-4"},[t._v("\n        "+t._s(t.faq.answer)+"\n    ")])])}),[],!1,null,"e86b6a12",null);e.default=component.exports},914:function(t,e,n){"use strict";n.r(e);var r=n(823),c=n(28),o=(n(88),{components:{FaqItem:n(885).default},data:function(){return{faqs:null}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("/get/faqs?type=general");case 2:data=e.sent,t.faqs=data.object;case 4:case"end":return e.stop()}}),e)})))()}}),f=n(44),component=Object(f.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"my-10"},[e("h2",{staticClass:"mb-6 text-center font-weight-medium"},[t._v("\n        "+t._s(t.$t("Frequently Asked Questions"))+"\n    ")]),t._v(" "),t._l(t.faqs,(function(t,n){return e("FaqItem",{key:"faq-".concat(n),attrs:{faq:t}})}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);