(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{1061:function(t,e,n){"use strict";n(963)},1062:function(t,e,n){var o=n(17)(!1);o.push([t.i,".v-progress-linear--rounded[data-v-86a2791a] .v-progress-linear__determinate{border-radius:inherit!important}",""]),t.exports=o},1200:function(t,e,n){"use strict";n.r(e);var o=n(302),l=n(192),r=n(306),c=n(143),d=n(811),_=n(251),v=n(254),f=n(307),m=n(810),h=(n(569),{data:function(){return{benched:8,wallet:0,total_hour:0,studentLevel:0,notifications:[],books:[{created_at:"2022-08-13T10:56:09.000000Z",type:"Arabic",title:"Bara'a Amr"},{created_at:"2022-08-13T10:56:09.000000Z",type:"Arabic",title:"Bara'a Amr"},{created_at:"2022-08-13T10:56:09.000000Z",type:"Arabic",title:"Bara'a Amr"},{created_at:"2022-08-13T10:56:09.000000Z",type:"Arabic",title:"Bara'a Amr"}],recommendations:null}},methods:{getTimeFromDate:function(t){}},fetch:function(){var t=this;this.$axios.$get("/student/profile").then((function(e){console.warn("student response = ",e),t.wallet=e.list.wallet,t.total_hour=e.list.total_hour,t.studentLevel=e.list.profile_level,t.recommendations=e.list.recommendations.data})),this.$axios.$get("/student/profile/books").then((function(e){t.books=e.list.books})),this.$axios.$get("auth/get_user_notifications").then((function(e){t.notifications=e.list}))}}),x=(n(1061),n(44)),component=Object(x.a)(h,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"index student content pa-4",attrs:{elevation:"1"}},[e("h1",{staticClass:"fs-24 font-weight-medium primary-text mb-10"},[t._v("Dashboard")]),t._v(" "),e(m.a,[e(d.a,{attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"stats rounded"},[e("div",[e("h3",{staticClass:"mytext-h6 font-weight-regular mb-2"},[t._v("\n                            "+t._s(t.$t("totalHours"))+"\n                        ")]),t._v(" "),e("p",{staticClass:"fs-40 primary-bold"},[t._v("\n                            "+t._s(t.total_hour)+"\n                        ")])]),t._v(" "),e("font-awesome-icon",{staticStyle:{opacity:"0.1"},attrs:{icon:"fa-solid fa-book fa-5x",color:"#04153B"}})],1)]),t._v(" "),e(d.a,{attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"stats rounded"},[e("div",[e("h3",{staticClass:"mytext-h6 font-weight-regular mb-2"},[t._v("\n                            "+t._s(t.$t("wallet"))+"\n                        ")]),t._v(" "),e("p",{staticClass:"fs-40 primary-bold"},[t._v("\n                            "+t._s(t.wallet)+"$\n                        ")])]),t._v(" "),e("font-awesome-icon",{staticStyle:{opacity:"0.1"},attrs:{icon:"fa-solid fa-wallet fa-5x",color:"#04153B"}})],1)]),t._v(" "),e(d.a,{attrs:{cols:"12",md:"4"}},[e("div",{staticClass:"stats rounded"},[e("div",[e("h3",{staticClass:"mytext-h6 font-weight-regular mb-2"},[t._v("\n                            Student's level\n                        ")]),t._v(" "),e(f.a,{attrs:{rounded:"",value:t.studentLevel.level_percentage,height:"5",color:"black"}}),t._v(" "),e("h4",{staticClass:"fs-13 mt-1 font-weight-regular",staticStyle:{"line-height":"1.5"}},[t._v(t._s(t.studentLevel.level)+"\n                        ")])],1),t._v(" "),e("font-awesome-icon",{staticStyle:{opacity:"0.1"},attrs:{icon:"fa-solid fa-graduation-cap fa-5x",color:"#04153B"}})],1)])],1),t._v(" "),e(m.a,{staticClass:"mt-12"},[e(d.a,{attrs:{cols:"12",md:"8"}},[e(r.a,{staticClass:"pa-4 notifications",attrs:{outlined:""}},[e("h4",{staticClass:"fs-20 pb-4 font-weight-regular"},[t._v("\n                        "+t._s(t.$t("notifications"))+"\n                    ")]),t._v(" "),t.notifications?e("div",{staticClass:"notifications-wrapper"},t._l(t.notifications,(function(n,l){return e("div",{key:l,staticClass:"notifications-block"},[e(o.a,{staticClass:"me-2"},[e(_.a,[t._v("\n                                    fas fa-star\n                                ")])],1),t._v(" "),e("div",[e("p",[t._v(" You got a "),e("b",[t._v("4.5")]),t._v(" stars and a new review on class "),e("nuxt-link",{staticClass:"text-decoration-underline",attrs:{to:"#"}},[t._v("Classname")]),t._v(" from Studentname\n                                    "),e("nuxt-link",{staticClass:"text-decoration-underline",attrs:{to:"#"}},[t._v("check here")])],1),t._v(" "),e("p",{staticClass:"subtitle-1 accent--text text--lighten-3"},[t._v("\n                                    05 Mins Ago\n                                ")])])],1)})),0):e("div",[t._v("\n                        You don't have notifications\n                    ")])])],1),t._v(" "),e(d.a,{attrs:{cols:"12",md:"4"}},[e(r.a,{staticClass:"pa-4 calender",attrs:{outlined:""}},[e("h4",{staticClass:"text-h5 primary-bold"},[t._v("\n                        "+t._s(t.$t("upcomingSchedule"))+"\n                    ")]),t._v(" "),t.$auth.user.book_by_day?[t.$auth.user.book_by_day.length>0?t._l(t.$auth.user.book_by_day,(function(n,o){return e("div",{key:o,staticClass:"calender-block"},[e("p",{staticClass:"primary--text d-flex align-center text-body-2"},[e("font-awesome-icon",{staticClass:"me-2",attrs:{icon:"fa-solid fa-clock"}}),t._v("\n                                    "+t._s(new Date(n.created_at).toLocaleTimeString().split(":")[0])+":"+t._s(new Date(n.created_at).toLocaleTimeString().split(":")[1])+" "+t._s(new Date(n.created_at).toLocaleTimeString().split(":")[2].split(" ")[1])+"\n                                ")],1),t._v(" "),e("div",{staticClass:"details ps-1 ms-1"},[e("p",[e("font-awesome-icon",{staticClass:"me-1",attrs:{icon:"fa-solid fa-user"}}),t._v("\n                                        "+t._s(n.title)+"\n                                    ")],1),t._v(" "),e("p",[e("font-awesome-icon",{staticClass:"me-1",attrs:{icon:"fa-solid fa-book"}}),t._v("\n                                        "+t._s(n.type)+"\n                                    ")],1)]),t._v(" "),e(l.a,{attrs:{icon:""}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-arrow-up-right-from-square"}})],1)],1)})):t._e()]:e("div",[t._v("\n                        You don't have scheduels\n                    ")])],2)],1),t._v(" "),e(d.a,{attrs:{cols:"12 mt-12"}},[e("h3",{staticClass:"text-h3 primary--text"},[t._v("Recommendations")]),t._v(" "),e("p",{staticClass:"text-body-1 mb-4"},[t._v("We recommend tutors based on your learning preferences. Update your profile\n                    now.\n                ")]),t._v(" "),e(m.a,t._l(t.recommendations,(function(o,f){return e(d.a,{key:"recommendition-".concat(f),attrs:{cols:"12",md:"6"}},[o?e(r.a,{attrs:{outlined:""}},[e(v.a,{attrs:{src:o.image_url,height:"220"}}),t._v(" "),e(c.c,{staticClass:"pt-0"},[e("div",{staticClass:"d-flex justify-space-between py-2 px-4 translateY-n50 white rounded shadow-sm border"},[e("h3",{staticClass:"text-h5 font-weight-medium secondary--text text--accent-4"},[t._v(t._s(o.full_name))]),t._v(" "),e("div",{staticClass:"d-flex align-center py-1 px-2 rounded",staticStyle:{"background-color":"#E3DCFF"}},[e(v.a,{staticClass:"mr-2",attrs:{src:n(909),"max-height":"25","max-width":"25"}}),t._v("\n                                        Tutor Advanced\n                                    ")],1),t._v(" "),e("div",{staticClass:"d-flex align-center text-body-1"},[e(_.a,{staticClass:"mr-1",attrs:{color:"yellow darken-2"}},[t._v("$ratingFull")]),t._v(" "),o.teachers?e("span",{staticClass:"font-weight-bold black--text",domProps:{textContent:t._s(parseFloat(o.teachers.rating).toFixed(1))}}):t._e()],1)]),t._v(" "),e("div",{staticClass:"d-flex justify-space-between"},[e("div",{staticClass:"d-flex"},[e("h5",{staticClass:"text-h5 black--text font-weight-medium mr-2"},[t._v("Speaks")]),t._v(" "),e("div",{staticClass:"d-flex align-center flex-wrap",staticStyle:{gap:"5px"}},t._l(o.user_language,(function(n,o){return e("div",{key:o,staticClass:"d-flex align-center",staticStyle:{"background-color":"#F7F7F7",padding:"3px 7px",gap:"5px"}},[e("span",{staticClass:"text-body-2 text-uppercase",domProps:{textContent:t._s(n.language.code)}}),t._v(" "),e(v.a,{attrs:{src:n.language.flag,"max-width":"18","max-height":"18"}})],1)})),0)]),t._v(" "),e(l.a,{staticClass:"text-body-2",attrs:{color:"primary",to:"/teacher/profile/".concat(o.slug)}},[t._v("\n                                        More Details\n                                        "),e(_.a,{staticClass:"font-weight-regular ml-1"},[t._v("fa fa-angle-right")])],1)],1)])],1):t._e()],1)})),1)],1),t._v(" "),e(d.a,{attrs:{cols:"12 text-center"}},[e(l.a,{staticClass:"px-8",attrs:{color:"secondary"}},[e(_.a,{staticClass:"mr-1",attrs:{"x-small":""}},[t._v("\n                        fal fa-search\n                    ")]),t._v("\n                    Find Tutors")],1)],1)],1)],1)}),[],!1,null,"86a2791a",null);e.default=component.exports},909:function(t,e,n){t.exports=n.p+"img/icon-recommendations-status.f1c59de.svg"},963:function(t,e,n){var content=n(1062);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("9462540c",content,!0,{sourceMap:!1})}}]);