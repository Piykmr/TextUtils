(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(4),r=n.n(s),l=(n(9),n(2)),o=(n(10),n(0));function i(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:Object(o.jsx)("h1",{children:e.websiteName})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:Object(o.jsx)("h5",{children:"Home"})})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:Object(o.jsx)("h5",{children:"About Us"})})})]})}),Object(o.jsx)("button",{type:"button",className:"btn btn-light",onClick:e.toggleMode,children:e.dMode})]})})})}function b(e){var t=Object(c.useState)("Enter text here"),n=Object(l.a)(t,2),a=n[0],s=n[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("div",{className:"form-group",style:{color:"dark"===e.mode?"white":"black"},children:Object(o.jsx)("textarea",{className:"form-control",id:"exampleFormControlTextarea1",value:a,style:{backgroundcolor:"dark"===e.mode?"black":"white"},onChange:function(e){s(e.target.value)},rows:"8"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{type:"button",onClick:function(){var t=a.toUpperCase();s(t),a.length>0&&e.showAlert("Changed in uppercase","Success")},className:"btn btn-secondary btn-lg mx-2",children:"UpperCase"}),Object(o.jsx)("button",{type:"button",onClick:function(){var t=a.toLowerCase();s(t),a.length>0&&e.showAlert("Changed in lowercase","Success")},className:"btn btn-secondary btn-lg mx-2",children:"LowerCase"}),Object(o.jsx)("button",{type:"button",onClick:function(){s(""),a.length>0&&e.showAlert("TextBox is empty","Success")},className:"btn btn-danger btn-lg mx-2",children:"Clear"}),Object(o.jsx)("button",{type:"button",onClick:function(){var t=a.split(/[ ]+/);s(t.join(" ")),a.length>0&&e.showAlert("Extra space has been removed","Success")},className:"btn btn-Success btn-lg mx-2",children:"Remove Extra Space"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("hr",{}),Object(o.jsx)("h2",{children:"Your Text Preview"}),Object(o.jsx)("p",{children:a.length>0?a:"Enter Text To Preview"}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:[a.length," characters and ",a.split(" ").length," words"]})]})]})}var d=function(e){return e.alert&&Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"container alert alert-success",role:"alert",children:Object(o.jsxs)("h5",{children:[e.alert.type,"\xa0:\xa0",e.alert.msg]})})})};var j=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)("Enable Dark Mode"),r=Object(l.a)(s,2),j=r[0],h=r[1],u=Object(c.useState)(null),m=Object(l.a)(u,2),x=m[0],O=m[1],g=function(e,t){O({msg:e,type:t})};return setTimeout((function(){O(null)}),2e3),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{websiteName:"TextUtils",mode:n,toggleMode:function(){"light"===n?(a("dark"),document.body.style.backgroundColor="#232324",g("Dark mode has been enabled","Success"),h("Disable Dark Mode")):(a("light"),document.body.style.backgroundColor="white",g("Light mode has been enabled","Success"),h("Enable Dark Mode"))},dMode:j}),Object(o.jsx)(d,{alert:x}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(b,{mode:n,showAlert:g})})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),h()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.f650242f.chunk.js.map