(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[357],{9169:function(e,s,t){"use strict";t.d(s,{Z:function(){return v}});var r=t(5893),n=t(1664),a=t(9008),i=t(6940),c=t(6156),o=t(1163),l=t(9669),d=t.n(l),u=t(8961),h=t(2025);function p(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}var f=function(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?p(Object(t),!0).forEach((function(s){(0,c.Z)(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}({},{register:function(e,s){var t=e.firstname,r=e.lastname,n=e.mobile_no,a=e.email_id,i=e.password,c=e.confirm_password;if("register"!==s)throw new Error("Wrong API call!");return function(e){d().post("".concat(h.API,"/").concat(s),{firstname:t,lastname:r,mobile_no:n,email_id:a,password:i,confirm_password:c}).then((function(e){o.default.push("/signin"),console.log(e.data.meta.message)})).catch((function(e){switch(error.response.status){case 422:case 401:alert(error.response.data.meta.message);break;case 500:alert("Interval server error! Try again!");break;default:alert(error.response.data.meta.message)}}))}},authenticate:function(e,s){var t=e.email_id,r=e.password;if("login"!==s)throw new Error("Wrong API call!");return function(e){console.log(t),d().post("".concat(h.API,"/").concat(s),{email_id:t,password:r}).then((function(s){console.log(s.data.data.user.token),setCookie("token",s.data.data.user.token),o.default.push("/users"),e({type:u.eK,payload:s.data.data.user.token})})).catch((function(e){switch(console.log(e),error.response.status){case 422:case 401:alert(error.response.data.meta.message);break;case 500:alert("Interval server error! Try again!");break;default:alert(error.response.data.meta.message)}}))}},reauthenticate:function(e){return function(s){s({type:u.eK,payload:e})}},deauthenticate:function(){return function(e){removeCookie("token"),o.default.push("/"),e({type:u.GZ})}},getUser:function(e,s){var t=e.token;return console.log(t),function(e){d().get("".concat(h.API,"/").concat(s),{headers:{Authorization:"bearer "+t}}).then((function(s){e({type:u.xR,payload:s.data.data.user})})).catch((function(e){switch(e.response.status){case 401:o.default.push("/");break;case 422:alert(e.response.data.meta.message);break;case 500:alert("Interval server error! Try again!");case 503:alert(e.response.data.meta.message),o.default.push("/");break;default:alert(e.response.data.meta.message)}}))}}}),j=(t(7294),function(){var e=(0,o.useRouter)();return(0,r.jsx)("header",{class:"header_area",children:(0,r.jsx)("div",{class:"main_menu",children:(0,r.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light",children:(0,r.jsxs)("div",{class:"container py-2 py-md-3",children:[(0,r.jsx)(n.default,{href:"/",children:(0,r.jsx)("a",{class:"navbar-brand logo_h",href:"/",children:(0,r.jsx)("img",{src:"/logo.png",alt:""})})}),(0,r.jsxs)("ul",{class:"nav-shop pb-0 ml-auto mr-3 d-flex align-items-center",children:[[{icon:"house",href:"/"},{icon:"pin-map",href:"/track"},{icon:"bag",href:"/cart"}].map((function(s){var t=e.route===s.href;return(0,r.jsx)("li",{class:"nav-item",children:(0,r.jsx)(n.default,{href:s.href,children:(0,r.jsx)("a",{href:s.href,children:(0,r.jsx)("button",{className:"btn shadow-lg px-2 py-1 rounded-circle ".concat(t?"bg-primary text-white":""),children:(0,r.jsx)("i",{className:"bi bi-".concat(s.icon," ").concat(t?"text-white":""," font-weight-bold")})})})})})})),(0,r.jsx)("li",{class:"nav-item d-none d-md-block",children:(0,r.jsx)(n.default,{href:"/checkout",children:(0,r.jsx)("a",{class:"button button-header",href:"/checkout",children:"Buy Now"})})})]})]})})})})}),x=function(){return(0,r.jsxs)("footer",{class:"footer",children:[(0,r.jsx)("div",{class:"footer-area",children:(0,r.jsx)("div",{class:"container",children:(0,r.jsxs)("div",{class:"row section_gap",children:[(0,r.jsx)("div",{class:"col-lg-3 col-md-6 col-sm-6",children:(0,r.jsxs)("div",{class:"single-footer-widget tp_widgets",children:[(0,r.jsx)("h4",{class:"footer_title large_title",children:"Our Mission"}),(0,r.jsx)("p",{children:"The Nazrana is about showcasing affection, care, and gratitude for the institute which had played a vital role in one's learning curve. The store is an effort to bring those memories back through select souvenir products. The products can be used as a unique gifting solution for inspiring others and showing your eternal bond with your alma-mate."})]})}),(0,r.jsx)("div",{class:"offset-lg-1 col-lg-2 col-md-6 col-sm-6",children:(0,r.jsxs)("div",{class:"single-footer-widget tp_widgets",children:[(0,r.jsx)("h4",{class:"footer_title",children:"Quick Links"}),(0,r.jsxs)("ul",{class:"list",children:[(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/",children:"Home"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"/checkout",children:"Buy"})}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"mailto:support@nazrana.in",children:"Contact"})})]})]})}),(0,r.jsx)("div",{class:"offset-lg-1 col-lg-3 col-md-6 col-sm-6",children:(0,r.jsxs)("div",{class:"single-footer-widget tp_widgets",children:[(0,r.jsx)("h4",{class:"footer_title",children:"Contact Us"}),(0,r.jsxs)("div",{class:"ml-40",children:[(0,r.jsxs)("p",{class:"sm-head",children:[(0,r.jsx)("span",{class:"bi bi-geo"}),"Head Office"]}),(0,r.jsx)("p",{children:"PLOT No 15, Krishna Colony, IIM Road LKO, LUCKNOW, Lucknow, Uttar Pradesh, 226020"}),(0,r.jsxs)("p",{class:"sm-head",children:[(0,r.jsx)("span",{class:"bi bi-phone"}),"Phone Number"]}),(0,r.jsx)("p",{children:"+91040-48523191"}),(0,r.jsxs)("p",{class:"sm-head",children:[(0,r.jsx)("span",{class:"bi bi-envelope"}),"Email"]}),(0,r.jsx)("p",{children:"support@thenazrana.in"})]})]})})]})})}),(0,r.jsx)("div",{class:"footer-bottom",children:(0,r.jsx)("div",{class:"container",children:(0,r.jsx)("div",{class:"row d-flex",children:(0,r.jsx)("p",{class:"col-lg-12 footer-text text-center",children:"\xa9 THE NAZRANA, ALL RIGHTS RESERVED"})})})})]})},m=t(8279),v=(0,i.$j)((function(e){return{isAuthenticated:!!e.authentication.token}}),f)((function(e){var s=e.children,t=e.title;e.isAuthenticated,e.deauthenticate;return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:t}),(0,r.jsx)("meta",{charset:"utf-8"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/vendors/nice-select/nice-select.css"})]}),(0,r.jsxs)("div",{className:"site-wrap",children:[(0,r.jsx)(j,{}),s,(0,r.jsx)(x,{}),(0,r.jsx)(m.x7,{toastOptions:{className:"",style:{borderRadius:"2px",fontSize:"13px",minWidth:"250px"},position:"top-center"}})]}),(0,r.jsx)("link",{rel:"stylesheet",href:"/vendors/owl-carousel/owl.theme.default.min.css"}),(0,r.jsx)("link",{rel:"stylesheet",href:"/vendors/owl-carousel/owl.carousel.min.css"}),(0,r.jsx)("script",{src:"/vendors/jquery/jquery-3.2.1.min.js"}),(0,r.jsx)("script",{src:"/vendors/bootstrap/bootstrap.bundle.min.js"}),(0,r.jsx)("script",{src:"/vendors/skrollr.min.js"}),(0,r.jsx)("script",{src:"/vendors/owl-carousel/owl.carousel.min.js"}),(0,r.jsx)("script",{src:"/vendors/nice-select/jquery.nice-select.min.js"}),(0,r.jsx)("script",{src:"/vendors/jquery.ajaxchimp.min.js"}),(0,r.jsx)("script",{src:"/vendors/mail-script.js"}),(0,r.jsx)("script",{src:"/js/main.js"})]})}))},1905:function(e,s,t){"use strict";t.d(s,{B:function(){return l},T:function(){return d}});var r=t(5893),n=t(9669),a=t.n(n),i=(t(1163),t(7294)),c=t(6570),o=t(1664),l=function(e){var s,t=e.title,n=e.p,l=e.category,d=l.replace(/\s/g,""),u=(0,i.useState)(!1),h=u[0],p=u[1],f=(0,i.useState)(),j=f[0],x=f[1];(0,i.useEffect)((function(){a()(c.dU+"/api/home/ProductByCategory/"+l).then((function(e){return x(e.data)}))}),[]);var m=function(e){var s=e.data;return(0,r.jsx)("div",{class:"col-md-6 col-lg-4 col-xl-3",children:(0,r.jsxs)("div",{class:"card text-center card-product",children:[(0,r.jsxs)("div",{class:"card-product__img",children:[(0,r.jsx)("img",{class:"card-img",src:"https://advasset.blob.core.windows.net/thenazrana/".concat(null===s||void 0===s?void 0:s.images),alt:""}),(0,r.jsxs)("ul",{class:"card-product__imgOverlay",children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{onClick:function(){return(0,c.o4)(null===s||void 0===s?void 0:s.id,1)},children:(0,r.jsx)("i",{class:"bi bi-bag"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{children:(0,r.jsx)("i",{class:"bi bi-heart"})})})]})]}),(0,r.jsxs)("div",{class:"card-body",children:[(0,r.jsx)("p",{children:null===s||void 0===s?void 0:s.category}),(0,r.jsx)("h4",{class:"card-product__title",children:(0,r.jsx)(o.default,{href:"/product/"+(null===s||void 0===s?void 0:s.id),children:(0,r.jsx)("a",{href:"/product/"+(null===s||void 0===s?void 0:s.id),children:null===s||void 0===s?void 0:s.title})})}),(0,r.jsxs)("p",{class:"card-product__price",children:["\u20b9 ",null===s||void 0===s?void 0:s.price]})]})]})})};return(0,r.jsx)("section",{class:"section-margin calc-60px",id:d,children:(0,r.jsxs)("div",{class:"container",children:[(0,r.jsxs)("div",{class:"section-intro pb-60px",children:[(0,r.jsx)("p",{children:n}),(0,r.jsxs)("h2",{children:[t.split(" ")[0]," ",(0,r.jsx)("span",{class:"section-intro__style",children:t.split(" ")[1]})]})]}),(0,r.jsx)("div",{class:"row",children:null===j||void 0===j||null===(s=j.filter((function(e,s){return s<(h?999:8)})))||void 0===s?void 0:s.map((function(e){return(0,r.jsx)(m,{data:e})}))}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsxs)("button",{onClick:function(){return p(!h)},className:"button mt-3 mt-xl-4",children:["Show ",h?"Less":"More"]})})]})})},d=function(e){var s,t=e.data;return(0,r.jsxs)("div",{className:"container text-center my-4",children:[(0,r.jsx)("img",{src:"/confimation.png"}),(0,r.jsx)("h5",{children:"Thank You For Shopping With Us"}),(0,r.jsx)(o.default,{href:"/track?id=".concat(null!==(s=t.id)&&void 0!==s?s:""),children:(0,r.jsx)("button",{className:"btn py-2 px-5 font-weight- bg-primary rounded text-white my-3",style:{letterSpacing:"1px"},children:"Track Order"})}),(0,r.jsxs)("p",{className:"my-3",children:["Order Id # ",t.id]})]})}},2025:function(e){e.exports={API:"http://localhost:8000/api/v1"}},6570:function(e,s,t){"use strict";t.d(s,{dU:function(){return n},o4:function(){return a},Wn:function(){return i},R9:function(){return c},Ex:function(){return o}});var r=t(8279),n="https://thenazrana.advantasamridhi.com",a=function(e,s,t){var n=c(),a=n.find((function(s){return s.id===e}));a?a.quantity=s:(a={id:e,quantity:s,status:null!==t&&void 0!==t?t:"cart"},n.push(a),r.ZP.success("Product Added To Cart")),localStorage.setItem("CartItems",JSON.stringify(n))},i=function(e){return localStorage.setItem("CartItems",JSON.stringify(c().filter((function(s){return s.id!==e}))))},c=function(){var e;return JSON.parse(null!==(e=localStorage.getItem("CartItems"))&&void 0!==e?e:"[]")},o=["Ordered","Packed","Dispatched","InTransit","Delivered"]}}]);