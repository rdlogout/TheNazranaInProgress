(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{9169:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(5893),s=r(1664),i=r(9008),a=r(6940),c=r(6156),o=r(1163),l=r(9669),d=r.n(l),u=r(8961),h=r(2025);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var p=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},{register:function(e,t){var r=e.firstname,n=e.lastname,s=e.mobile_no,i=e.email_id,a=e.password,c=e.confirm_password;if("register"!==t)throw new Error("Wrong API call!");return function(e){d().post("".concat(h.API,"/").concat(t),{firstname:r,lastname:n,mobile_no:s,email_id:i,password:a,confirm_password:c}).then((function(e){o.default.push("/signin"),console.log(e.data.meta.message)})).catch((function(e){switch(error.response.status){case 422:case 401:alert(error.response.data.meta.message);break;case 500:alert("Interval server error! Try again!");break;default:alert(error.response.data.meta.message)}}))}},authenticate:function(e,t){var r=e.email_id,n=e.password;if("login"!==t)throw new Error("Wrong API call!");return function(e){console.log(r),d().post("".concat(h.API,"/").concat(t),{email_id:r,password:n}).then((function(t){console.log(t.data.data.user.token),setCookie("token",t.data.data.user.token),o.default.push("/users"),e({type:u.eK,payload:t.data.data.user.token})})).catch((function(e){switch(console.log(e),error.response.status){case 422:case 401:alert(error.response.data.meta.message);break;case 500:alert("Interval server error! Try again!");break;default:alert(error.response.data.meta.message)}}))}},reauthenticate:function(e){return function(t){t({type:u.eK,payload:e})}},deauthenticate:function(){return function(e){removeCookie("token"),o.default.push("/"),e({type:u.GZ})}},getUser:function(e,t){var r=e.token;return console.log(r),function(e){d().get("".concat(h.API,"/").concat(t),{headers:{Authorization:"bearer "+r}}).then((function(t){e({type:u.xR,payload:t.data.data.user})})).catch((function(e){switch(e.response.status){case 401:o.default.push("/");break;case 422:alert(e.response.data.meta.message);break;case 500:alert("Interval server error! Try again!");case 503:alert(e.response.data.meta.message),o.default.push("/");break;default:alert(e.response.data.meta.message)}}))}}}),j=(r(7294),function(){var e=(0,o.useRouter)();return(0,n.jsx)("header",{class:"header_area",children:(0,n.jsx)("div",{class:"main_menu",children:(0,n.jsx)("nav",{class:"navbar navbar-expand-lg navbar-light",children:(0,n.jsxs)("div",{class:"container py-2 py-md-3",children:[(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("a",{class:"navbar-brand logo_h",href:"/",children:(0,n.jsx)("img",{src:"/logo.png",alt:""})})}),(0,n.jsxs)("ul",{class:"nav-shop pb-0 ml-auto mr-3 d-flex align-items-center",children:[[{icon:"house",href:"/"},{icon:"pin-map",href:"/track"},{icon:"bag",href:"/cart"}].map((function(t){var r=e.route===t.href;return(0,n.jsx)("li",{class:"nav-item",children:(0,n.jsx)(s.default,{href:t.href,children:(0,n.jsx)("a",{href:t.href,children:(0,n.jsx)("button",{className:"btn shadow-lg px-2 py-1 rounded-circle ".concat(r?"bg-primary text-white":""),children:(0,n.jsx)("i",{className:"bi bi-".concat(t.icon," ").concat(r?"text-white":""," font-weight-bold")})})})})})})),(0,n.jsx)("li",{class:"nav-item d-none d-md-block",children:(0,n.jsx)(s.default,{href:"/checkout",children:(0,n.jsx)("a",{class:"button button-header",href:"/checkout",children:"Buy Now"})})})]})]})})})})}),x=function(){return(0,n.jsxs)("footer",{class:"footer",children:[(0,n.jsx)("div",{class:"footer-area",children:(0,n.jsx)("div",{class:"container",children:(0,n.jsxs)("div",{class:"row section_gap",children:[(0,n.jsx)("div",{class:"col-lg-3 col-md-6 col-sm-6",children:(0,n.jsxs)("div",{class:"single-footer-widget tp_widgets",children:[(0,n.jsx)("h4",{class:"footer_title large_title",children:"Our Mission"}),(0,n.jsx)("p",{children:"The Nazrana is about showcasing affection, care, and gratitude for the institute which had played a vital role in one's learning curve. The store is an effort to bring those memories back through select souvenir products. The products can be used as a unique gifting solution for inspiring others and showing your eternal bond with your alma-mate."})]})}),(0,n.jsx)("div",{class:"offset-lg-1 col-lg-2 col-md-6 col-sm-6",children:(0,n.jsxs)("div",{class:"single-footer-widget tp_widgets",children:[(0,n.jsx)("h4",{class:"footer_title",children:"Quick Links"}),(0,n.jsxs)("ul",{class:"list",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/",children:"Home"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"/checkout",children:"Buy"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"mailto:support@nazrana.in",children:"Contact"})})]})]})}),(0,n.jsx)("div",{class:"offset-lg-1 col-lg-3 col-md-6 col-sm-6",children:(0,n.jsxs)("div",{class:"single-footer-widget tp_widgets",children:[(0,n.jsx)("h4",{class:"footer_title",children:"Contact Us"}),(0,n.jsxs)("div",{class:"ml-40",children:[(0,n.jsxs)("p",{class:"sm-head",children:[(0,n.jsx)("span",{class:"bi bi-geo"}),"Head Office"]}),(0,n.jsx)("p",{children:"PLOT No 15, Krishna Colony, IIM Road LKO, LUCKNOW, Lucknow, Uttar Pradesh, 226020"}),(0,n.jsxs)("p",{class:"sm-head",children:[(0,n.jsx)("span",{class:"bi bi-phone"}),"Phone Number"]}),(0,n.jsx)("p",{children:"+91040-48523191"}),(0,n.jsxs)("p",{class:"sm-head",children:[(0,n.jsx)("span",{class:"bi bi-envelope"}),"Email"]}),(0,n.jsx)("p",{children:"support@thenazrana.in"})]})]})})]})})}),(0,n.jsx)("div",{class:"footer-bottom",children:(0,n.jsx)("div",{class:"container",children:(0,n.jsx)("div",{class:"row d-flex",children:(0,n.jsx)("p",{class:"col-lg-12 footer-text text-center",children:"\xa9 THE NAZRANA, ALL RIGHTS RESERVED"})})})})]})},m=r(8279),b=(0,a.$j)((function(e){return{isAuthenticated:!!e.authentication.token}}),p)((function(e){var t=e.children,r=e.title;e.isAuthenticated,e.deauthenticate;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(i.default,{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{charset:"utf-8"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/vendors/nice-select/nice-select.css"})]}),(0,n.jsxs)("div",{className:"site-wrap",children:[(0,n.jsx)(j,{}),t,(0,n.jsx)(x,{}),(0,n.jsx)(m.x7,{toastOptions:{className:"",style:{borderRadius:"2px",fontSize:"13px",minWidth:"250px"},position:"top-center"}})]}),(0,n.jsx)("link",{rel:"stylesheet",href:"/vendors/owl-carousel/owl.theme.default.min.css"}),(0,n.jsx)("link",{rel:"stylesheet",href:"/vendors/owl-carousel/owl.carousel.min.css"}),(0,n.jsx)("script",{src:"/vendors/jquery/jquery-3.2.1.min.js"}),(0,n.jsx)("script",{src:"/vendors/bootstrap/bootstrap.bundle.min.js"}),(0,n.jsx)("script",{src:"/vendors/skrollr.min.js"}),(0,n.jsx)("script",{src:"/vendors/owl-carousel/owl.carousel.min.js"}),(0,n.jsx)("script",{src:"/vendors/nice-select/jquery.nice-select.min.js"}),(0,n.jsx)("script",{src:"/vendors/jquery.ajaxchimp.min.js"}),(0,n.jsx)("script",{src:"/vendors/mail-script.js"}),(0,n.jsx)("script",{src:"/js/main.js"})]})}))},2025:function(e){e.exports={API:"http://localhost:8000/api/v1"}},7720:function(e,t,r){"use strict";r.r(t);var n=r(5893),s=r(6156),i=r(9169),a=r(1664),c=r(7294),o=r(9669),l=r.n(o),d=r(6570);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=(0,c.useState)(),t=e[0],r=e[1],s=(0,c.useState)(0),o=s[0],u=s[1];(0,c.useEffect)((function(){var e=(0,d.R9)();l().post(d.dU+"/api/home/CartProduct",(0,d.R9)().map((function(e){return e.id}))).then((function(t){var n=t.data;r(n.map((function(t){var r;return h(h({},t),{},{quantity:null===(r=e.find((function(e){return e.id===t.id})))||void 0===r?void 0:r.quantity})}))),u(n.map((function(t){var r;return(null===(r=e.find((function(e){return e.id===t.id})))||void 0===r?void 0:r.quantity)*t.price})).reduce((function(e,t){return e+t}),0))}))}),[]);var f=function(e){var r=e.data,s=e.Remove,i=(0,c.useState)(r.quantity),a=i[0],o=i[1],l=function(e){o(e),(0,d.o4)(r.id,e),t.find((function(e){return e.id===r.id})).quantity=e,u(t.map((function(e){return e.quantity*e.price})).reduce((function(e,t){return e+t}),0))};return(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsxs)("div",{class:"media",children:[(0,n.jsx)("div",{class:"d-flex",children:(0,n.jsx)("img",{style:{maxHeight:"50px"},src:"https://advasset.blob.core.windows.net/thenazrana/".concat(null===r||void 0===r?void 0:r.images),alt:""})}),(0,n.jsx)("div",{class:"media-body",children:(0,n.jsx)("p",{children:r.title})})]})}),(0,n.jsx)("td",{children:(0,n.jsxs)("h5",{children:["\u20b9 ",r.price]})}),(0,n.jsx)("td",{children:(0,n.jsxs)("div",{className:"d-flex shadow-m rounded align-items-center bg-light",style:{maxWidth:"80px"},children:[(0,n.jsx)("button",{className:"btn shadow-none font-weight-bold",onClick:function(){return l(Number(a)-1)},disabled:1==a,children:"-"}),(0,n.jsx)("span",{className:"flex-grow-1 text-center font-sm",children:a}),(0,n.jsx)("button",{className:"btn shadow-none font-weight-bod",onClick:function(){return l(Number(a)+1)},children:"+"})]})}),(0,n.jsx)("td",{children:(0,n.jsxs)("h5",{children:["Rs ",a*r.price]})}),(0,n.jsx)("td",{children:(0,n.jsx)("button",{className:"btn shadow-none",onClick:function(){return(0,d.Wn)(r.id),void s()},children:(0,n.jsx)("i",{className:"bi bi-trash"})})})]})};return(0,n.jsx)(i.Z,{children:(0,n.jsx)("section",{class:"cart_area py-3",children:(0,n.jsx)("div",{class:"container",children:(0,n.jsxs)("div",{class:"cart_inner",children:[(0,n.jsx)("div",{class:"table-responsive",children:(0,n.jsxs)("table",{class:"table",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{scope:"col",children:"Product"}),(0,n.jsx)("th",{scope:"col",children:"Price"}),(0,n.jsx)("th",{scope:"col",children:"Quantity"}),(0,n.jsx)("th",{scope:"col",children:"Total"}),(0,n.jsx)("th",{scope:"col"})]})}),(0,n.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return(0,n.jsx)(f,{data:e,Remove:function(){return r(t.filter((function(t){return t.id!==e.id})))}})}))})]})}),(0,n.jsxs)("div",{className:"d-flex flex-column cart",children:[(0,n.jsxs)("div",{className:"d-flex border-bottom border-top py-3 mb-3 justify-content-end",children:[(0,n.jsx)("h5",{children:"Subtotal"}),(0,n.jsxs)("h5",{className:"mx-3",children:["Rs ",o]})]}),(0,n.jsxs)("div",{class:"checkout_btn_inner d-flex flex-wrap align-items-center align-self-end my-3",children:[(0,n.jsx)(a.default,{href:"/",children:(0,n.jsx)("a",{class:"gray_btn col-md-auto col-12 mx-1 mb-3 text-center",href:"/",children:"Continue Shopping"})}),(0,n.jsx)(a.default,{href:"/checkout",children:(0,n.jsx)("a",{class:"gray_btn bg-primary text-white col-md-auto col-12 primary-btn mx-1 mb-3 text-center",href:"/checkout",children:"Proceed to checkout"})})]})]})]})})})})}},6570:function(e,t,r){"use strict";r.d(t,{dU:function(){return s},o4:function(){return i},Wn:function(){return a},R9:function(){return c},Ex:function(){return o}});var n=r(8279),s="https://thenazrana.advantasamridhi.com",i=function(e,t,r){var s=c(),i=s.find((function(t){return t.id===e}));i?i.quantity=t:(i={id:e,quantity:t,status:null!==r&&void 0!==r?r:"cart"},s.push(i),n.ZP.success("Product Added To Cart")),localStorage.setItem("CartItems",JSON.stringify(s))},a=function(e){return localStorage.setItem("CartItems",JSON.stringify(c().filter((function(t){return t.id!==e}))))},c=function(){var e;return JSON.parse(null!==(e=localStorage.getItem("CartItems"))&&void 0!==e?e:"[]")},o=["Ordered","Packed","Dispatched","InTransit","Delivered"]},4701:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return r(7720)}])}},function(e){e.O(0,[124,774,888,179],(function(){return t=4701,e(e.s=t);var t}));var t=e.O();_N_E=t}]);