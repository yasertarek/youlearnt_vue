(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{870:function(t,o,e){var content=e(906);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(18).default)("3512efd0",content,!0,{sourceMap:!1})},905:function(t,o,e){"use strict";e(870)},906:function(t,o,e){var n=e(17)(!1);n.push([t.i,'@font-face{font-family:Poppins,"sans-serif";src:"https://fonts.googleapis.com/css2?family=Hubballi&family=Poppins&display=swap"}.blog-post[data-v-ae044fc2]{border:1px solid #ccc;border-radius:6px;display:flex;height:260px;margin-bottom:16px;overflow:hidden;align-items:center}@media(max-width:776px){.blog-post[data-v-ae044fc2]{display:block;height:auto}}.blog-post img[data-v-ae044fc2]{width:38%;-o-object-position:center;object-position:center;-o-object-fit:cover;object-fit:cover;height:260px;border-radius:6px}@media(max-width:776px){.blog-post img[data-v-ae044fc2]{width:100%;height:auto}}.blog-post .content[data-v-ae044fc2]{padding:20px}.blog-post .content h5[data-v-ae044fc2]{font-size:20px;line-height:1.2;font-weight:500;padding:0;margin:0}.blog-post .content span[data-v-ae044fc2]{display:block;font-size:12px;margin:10px 0}.blog-post .content p[data-v-ae044fc2]{padding:0;margin:0;font-size:14px;color:#ababab!important}.blog-post .content a[data-v-ae044fc2]{font-size:14px;font-weight:400;margin-top:16px;display:block}',""]),t.exports=n},920:function(t,o,e){"use strict";e.r(o);e(9),e(54);var n={props:{data:{type:[Object],default:function(){return{}}}}},c=(e(905),e(44)),component=Object(c.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"blog-post"},[o("img",{attrs:{src:t.data.image_url}}),t._v(" "),o("div",{staticClass:"content"},[o("nuxt-link",{attrs:{to:"/blog/".concat(t.data.id)}},[o("h5",{staticClass:"primary--text"},[t._v("\n                "+t._s(t.data.title)+"\n            ")])]),t._v(" "),o("span",{staticClass:"textdark--text"},[t._v(" "+t._s(new Date(t.data.created_at).toLocaleString("en-us",{month:"long",day:"numeric",year:"numeric"}))+" ")]),t._v(" "),o("p",{staticClass:"textmuted--text",domProps:{innerHTML:t._s(t.data.description)}}),t._v(" "),o("nuxt-link",{staticClass:"primary--text",attrs:{to:"/blog/".concat(t.data.id)}},[t._v(" Continue Reading ")])],1)])}),[],!1,null,"ae044fc2",null);o.default=component.exports}}]);