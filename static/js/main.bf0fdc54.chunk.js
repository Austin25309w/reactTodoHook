(this.webpackJsonptodo_2021=this.webpackJsonptodo_2021||[]).push([[0],{105:function(t,e,n){},106:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n(15),i=n.n(r),o=(n(46),n(3)),a=n(4),d=(n(47),n(0));function s(t){var e=t.dispatch,n=t.digit;return Object(d.jsx)("button",{onClick:function(){return e({type:j.ADD_DIGIT,payload:{digit:n}})},children:n})}function u(t){var e=t.dispatch,n=t.operation;return Object(d.jsx)("button",{onClick:function(){return e({type:j.CHOOSE_OPERATION,payload:{operation:n}})},children:n})}var j={ADD_DIGIT:"add-digit",CHOOSE_OPERATION:"choose-operation",CLEAR:"clear",DELETE_DIGIT:"delete-digit",EVALUATE:"evaluate"};function l(t,e){var n=e.type,c=e.payload;switch(n){case j.ADD_DIGIT:return t.overwrite?Object(a.a)(Object(a.a)({},t),{},{currentOperand:c.digit,overwrite:!1}):"0"===c.digit&&"0"===t.currentOperand||"."===c.digit&&t.currentOperand.includes(".")?t:Object(a.a)(Object(a.a)({},t),{},{currentOperand:"".concat(t.currentOperand||"").concat(c.digit)});case j.CHOOSE_OPERATION:return null==t.currentOperand&&null==t.previousOperand?t:null==t.currentOperand?Object(a.a)(Object(a.a)({},t),{},{operation:c.operation}):null==t.previousOperand?Object(a.a)(Object(a.a)({},t),{},{operation:c.operation,previousOperand:t.currentOperand,currentOperand:null}):Object(a.a)(Object(a.a)({},t),{},{previousOperand:O(t),operation:c.operation,currentOperand:null});case j.CLEAR:return{};case j.DELETE_DIGIT:return t.overwrite?Object(a.a)(Object(a.a)({},t),{},{overwrite:!1,currentOperand:null}):null==t.currentOperand?t:1===t.currentOperand.length?Object(a.a)(Object(a.a)({},t),{},{currentOperand:null}):Object(a.a)(Object(a.a)({},t),{},{currentOperand:t.currentOperand.slice(0,-1)});case j.EVALUATE:return null==t.operation||null==t.currentOperand||null==t.previousOperand?t:Object(a.a)(Object(a.a)({},t),{},{overwrite:!0,previousOperand:null,operation:null,currentOperand:O(t)})}}function O(t){var e=t.currentOperand,n=t.previousOperand,c=t.operation,r=parseInt(n),i=parseFloat(e);if(isNaN(r)||isNaN(i))return"";var o="";switch(c){case"+":o=r+i;break;case"-":o=r-i;break;case"*":o=r*i;break;case"\xf7":o=r/i}return o.toString()}var p=new Intl.NumberFormat("en-us",{maximumFractionDigits:0});function b(t){if(null!=t){var e=t.split("."),n=Object(o.a)(e,2),c=n[0],r=n[1];return null==r?p.format(c):"".concat(p.format(c),".").concat(r)}}var h=function(){var t=Object(c.useReducer)(l,{}),e=Object(o.a)(t,2),n=e[0],r=n.currentOperand,i=n.previousOperand,a=n.operation,O=e[1];return Object(d.jsxs)("div",{className:"calculator-grid",children:[Object(d.jsxs)("div",{className:"output",children:[Object(d.jsxs)("div",{className:"previous-operand",children:[b(i),a]}),Object(d.jsx)("div",{className:"current-operand",children:b(r)})]}),Object(d.jsx)("button",{className:"span-two",onClick:function(){return O({type:j.CLEAR})},children:"AC"}),Object(d.jsx)("button",{onClick:function(){return O({type:j.DELETE_DIGIT})},children:"DEL"}),Object(d.jsx)(u,{operation:"\xf7",dispatch:O}),Object(d.jsx)(s,{digit:"1",dispatch:O}),Object(d.jsx)(s,{digit:"2",dispatch:O}),Object(d.jsx)(s,{digit:"3",dispatch:O}),Object(d.jsx)(u,{operation:"*",dispatch:O}),Object(d.jsx)(s,{digit:"4",dispatch:O}),Object(d.jsx)(s,{digit:"5",dispatch:O}),Object(d.jsx)(s,{digit:"6",dispatch:O}),Object(d.jsx)(u,{operation:"+",dispatch:O}),Object(d.jsx)(s,{digit:"7",dispatch:O}),Object(d.jsx)(s,{digit:"8",dispatch:O}),Object(d.jsx)(s,{digit:"9",dispatch:O}),Object(d.jsx)(u,{operation:"-",dispatch:O}),Object(d.jsx)(s,{digit:".",dispatch:O}),Object(d.jsx)(s,{digit:"0",dispatch:O}),Object(d.jsx)("button",{className:"span-two",onClick:function(){return O({type:j.EVALUATE})},children:"="})]})},x=n(6);function g(t){var e=t.todo,n=t.todos,c=t.toggleTodo,r=t.setTodos,i=t.todoEditing,o=t.setTodoEditing,a=t.editingText,s=t.setEditingText;return Object(d.jsx)("div",{children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){c(e.id)}}),console.log(e.text),e.name,Object(d.jsx)("button",{onClick:function(){return function(t){var e=Object(x.a)(n).filter((function(e){return e.id!==t}));r(e)}(e.id)},children:"delete"}),i===e.id?Object(d.jsx)("input",{type:"text",onChange:function(t){return s(t.target.value)}}):Object(d.jsx)("div",{children:null}),i===e.id?Object(d.jsx)("button",{onClick:function(){return function(t){var e=Object(x.a)(n).map((function(e){return e.id===t&&(e.name=a),e}));r(e),o(null),s("")}(e.id)},children:"Submit Edit"}):Object(d.jsx)("button",{onClick:function(){return o(e.id)},children:"edit"})]})})}function f(t){var e=t.todos,n=t.toggleTodo,c=t.setTodos,r=t.todoEditing,i=t.setTodoEditing,o=t.editingText,a=t.setEditingText;return e.map((function(t){return Object(d.jsx)(g,{toggleTodo:n,todos:e,todo:t,setTodos:c,todoEditing:r,setTodoEditing:i,editingText:o,setEditingText:a},t.id)}))}var v=n(108);n(39);n(98);var m="todoApp.todos";function E(){var t=Object(c.useState)([]),e=Object(o.a)(t,2),n=e[0],r=e[1],i=Object(c.useRef)(),a=Object(c.useState)(null),s=Object(o.a)(a,2),u=s[0],j=s[1],l=Object(c.useState)(""),O=Object(o.a)(l,2),p=O[0],b=O[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(m));t&&r(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(m,JSON.stringify(n))}),[n]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("h1",{children:"Todo function"}),Object(d.jsx)("input",{ref:i,type:"text"}),Object(d.jsx)("button",{onClick:function(t){var e=i.current.value;""!==e&&(r((function(t){return[].concat(Object(x.a)(t),[{id:Object(v.a)(),name:e,completed:!1}])})),console.log(e),i.current.value=null)},children:"Add todo"}),Object(d.jsx)("button",{onClick:function(){var t=n.filter((function(t){return!t.completed}));r(t)},children:"clear complete"}),Object(d.jsx)(f,{todos:n,toggleTodo:function(t){var e=Object(x.a)(n),c=e.find((function(e){return e.id===t}));c.complete=!c.complete,r(e)},setTodos:r,todoEditing:u,setTodoEditing:j,editingText:p,setEditingText:b}),Object(d.jsxs)("div",{children:[n.filter((function(t){return!t.complete})).length," left to do "]})]})})}var T=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:" Home Page"}),Object(d.jsx)("h2",{children:"Time"}),Object(d.jsx)("h2",{children:"Weather"}),Object(d.jsx)("h2",{children:" google bookmark"})]})},C=n(11),N=n(10),A=(n(99),function(){return Object(d.jsxs)("div",{className:"header_container",children:[Object(d.jsx)(N.b,{to:"/",className:"option",children:"HOME "}),Object(d.jsx)(N.b,{className:"option",to:"/calculator",children:"CALCULATOR "}),Object(d.jsx)(N.b,{className:"option",to:"/todo",children:"TODO "})]})});n(105);var I=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(C.c,{children:[Object(d.jsx)(C.a,{exact:!0,path:"/",component:T}),Object(d.jsx)(C.a,{path:"/calculator",component:h}),Object(d.jsx)(C.a,{path:"/todo",component:E})]}),Object(d.jsx)(A,{})]})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,109)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),i(t),o(t)}))};i.a.render(Object(d.jsx)(N.a,{children:Object(d.jsx)(I,{})}),document.getElementById("root")),k()},46:function(t,e,n){},47:function(t,e,n){},98:function(t,e,n){},99:function(t,e,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.bf0fdc54.chunk.js.map