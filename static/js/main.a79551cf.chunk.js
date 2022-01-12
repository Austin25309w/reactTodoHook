(this.webpackJsonptodo_2021=this.webpackJsonptodo_2021||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){},33:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),o=n(22),i=n.n(o),a=(n(30),n(3)),d=n(2),s=(n(31),n(0));function u(t){var e=t.dispatch,n=t.digit;return Object(s.jsx)("button",{onClick:function(){return e({type:v.ADD_DIGIT,payload:{digit:n}})},children:n})}function j(t){var e=t.dispatch,n=t.operation;return Object(s.jsx)("button",{onClick:function(){return e({type:v.CHOOSE_OPERATION,payload:{operation:n}})},children:n})}var l=n(15),O=n(16),b=n(18),p=n(17),h=(r.a.Component,n(33),function(){var t=Object(c.useState)(0),e=Object(a.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(0),i=Object(a.a)(o,2),d=i[0],u=i[1],j=Object(c.useState)(0),l=Object(a.a)(j,2),O=l[0],b=l[1],p=Object(c.useState)(),h=Object(a.a)(p,2),x=h[0],f=h[1];return Object(s.jsxs)("div",{className:"car_loan",children:[Object(s.jsx)("h1",{children:"CarLoan"}),Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Loan Amount"}),Object(s.jsx)("input",{type:"number",placeholder:"amount",onChange:function(t){return r(t.target.value)}})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Interest rate (%)"}),Object(s.jsx)("input",{type:"number",placeholder:"rate",onChange:function(t){return u(t.target.value)}})]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:"Loan Period (months)"}),Object(s.jsx)("input",{type:"number",placeholder:"month",onChange:function(t){return b(t.target.value)}})]})]}),Object(s.jsx)("div",{children:Object(s.jsx)("h4",{children:"Total cost of car loan"})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(){return function(){var t=d/100/12,e=n*t,c=t+1,r=1-1/Math.pow(c,O),o=Math.round(e)/r.toFixed(2);f(o)}()},children:"submit "}),Object(s.jsxs)("span",{children:[Object(s.jsx)("h4",{children:"Monthly Payments"}),"$",x]})]})]})}),x=n(23),f=n.n(x),v={ADD_DIGIT:"add-digit",CHOOSE_OPERATION:"choose-operation",CLEAR:"clear",DELETE_DIGIT:"delete-digit",EVALUATE:"evaluate"};function g(t,e){var n=e.type,c=e.payload;switch(n){case v.ADD_DIGIT:return t.overwrite?Object(d.a)(Object(d.a)({},t),{},{currentOperand:c.digit,overwrite:!1}):"0"===c.digit&&"0"===t.currentOperand||"."===c.digit&&t.currentOperand.includes(".")?t:Object(d.a)(Object(d.a)({},t),{},{currentOperand:"".concat(t.currentOperand||"").concat(c.digit)});case v.CHOOSE_OPERATION:return null==t.currentOperand&&null==t.previousOperand?t:null==t.currentOperand?Object(d.a)(Object(d.a)({},t),{},{operation:c.operation}):null==t.previousOperand?Object(d.a)(Object(d.a)({},t),{},{operation:c.operation,previousOperand:t.currentOperand,currentOperand:null}):Object(d.a)(Object(d.a)({},t),{},{previousOperand:m(t),operation:c.operation,currentOperand:null});case v.CLEAR:return{};case v.DELETE_DIGIT:return t.overwrite?Object(d.a)(Object(d.a)({},t),{},{overwrite:!1,currentOperand:null}):null==t.currentOperand?t:1===t.currentOperand.length?Object(d.a)(Object(d.a)({},t),{},{currentOperand:null}):Object(d.a)(Object(d.a)({},t),{},{currentOperand:t.currentOperand.slice(0,-1)});case v.EVALUATE:return null==t.operation||null==t.currentOperand||null==t.previousOperand?t:Object(d.a)(Object(d.a)({},t),{},{overwrite:!0,previousOperand:null,operation:null,currentOperand:m(t)})}}function m(t){var e=t.currentOperand,n=t.previousOperand,c=t.operation,r=parseInt(n),o=parseFloat(e);if(isNaN(r)||isNaN(o))return"";var i="";switch(c){case"+":i=r+o;break;case"-":i=r-o;break;case"*":i=r*o;break;case"\xf7":i=r/o}return i.toString()}var T=new Intl.NumberFormat("en-us",{maximumFractionDigits:0});function E(t){if(null!=t){var e=t.split("."),n=Object(a.a)(e,2),c=n[0],r=n[1];return null==r?T.format(c):"".concat(T.format(c),".").concat(r)}}var D=function(){var t=Object(c.useReducer)(g,{}),e=Object(a.a)(t,2),n=e[0],r=n.currentOperand,o=n.previousOperand,i=n.operation,d=e[1],l=Object(c.useState)(!1),O=Object(a.a)(l,2),b=O[0],p=O[1],x=b?"visible":"hidden";return Object(s.jsxs)("div",{className:"calculator_container",children:[Object(s.jsxs)("div",{className:"calculator-grid",children:[Object(s.jsxs)("div",{className:"output",children:[Object(s.jsxs)("div",{className:"previous-operand",children:[E(o),i]}),Object(s.jsx)("div",{className:"current-operand",children:E(r)})]}),Object(s.jsx)("button",{className:"span-two",onClick:function(){return d({type:v.CLEAR})},children:"AC"}),Object(s.jsx)("button",{onClick:function(){return d({type:v.DELETE_DIGIT})},children:"DEL"}),Object(s.jsx)(j,{operation:"\xf7",dispatch:d}),Object(s.jsx)(u,{digit:"1",dispatch:d}),Object(s.jsx)(u,{digit:"2",dispatch:d}),Object(s.jsx)(u,{digit:"3",dispatch:d}),Object(s.jsx)(j,{operation:"*",dispatch:d}),Object(s.jsx)(u,{digit:"4",dispatch:d}),Object(s.jsx)(u,{digit:"5",dispatch:d}),Object(s.jsx)(u,{digit:"6",dispatch:d}),Object(s.jsx)(j,{operation:"+",dispatch:d}),Object(s.jsx)(u,{digit:"7",dispatch:d}),Object(s.jsx)(u,{digit:"8",dispatch:d}),Object(s.jsx)(u,{digit:"9",dispatch:d}),Object(s.jsx)(j,{operation:"-",dispatch:d}),Object(s.jsx)(u,{digit:".",dispatch:d}),Object(s.jsx)(u,{digit:"0",dispatch:d}),Object(s.jsx)("button",{className:"span-two",onClick:function(){return d({type:v.EVALUATE})},children:"="})]}),Object(s.jsxs)("div",{className:"carloan_calculator",children:[Object(s.jsxs)("h2",{children:["Toggle to ","".concat(b?"Hide":"Show")," CARLOAN Calculator"]}),Object(s.jsx)(f.a,{onChange:function(t){p(t)},checked:b,width:68,height:40,handleDiameter:40}),Object(s.jsx)("div",{style:{visibility:x},children:Object(s.jsx)(h,{})})]})]})},y=n(10);function C(t){var e=t.todo,n=t.todos,c=t.toggleTodo,r=t.setTodos,o=t.todoEditing,i=t.setTodoEditing,a=t.editingText,d=t.setEditingText;return Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){c(e.id)}}),console.log(e.text),e.name,Object(s.jsx)("button",{onClick:function(){return function(t){var e=Object(y.a)(n).filter((function(e){return e.id!==t}));r(e)}(e.id)},children:"delete"}),o===e.id?Object(s.jsx)("input",{type:"text",onChange:function(t){return d(t.target.value)}}):Object(s.jsx)("div",{children:null}),o===e.id?Object(s.jsx)("button",{onClick:function(){return function(t){var e=Object(y.a)(n).map((function(e){return e.id===t&&(e.name=a),e}));r(e),i(null),d("")}(e.id)},children:"Submit Edit"}):Object(s.jsx)("button",{onClick:function(){return i(e.id)},children:"edit"})]})})}function k(t){var e=t.todos,n=t.toggleTodo,c=t.setTodos,r=t.todoEditing,o=t.setTodoEditing,i=t.editingText,a=t.setEditingText;return e.map((function(t){return Object(s.jsx)(C,{toggleTodo:n,todos:e,todo:t,setTodos:c,todoEditing:r,setTodoEditing:o,editingText:i,setEditingText:a},t.id)}))}var A=n(48);n(35);function N(t){var e=t.todo,n=t.dispatch;return Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{style:{color:e.complete?"#00F":"#FF0"},children:e.name}),Object(s.jsx)("button",{onClick:function(){return n({type:L.TOGGLE_TODO,payload:{id:e.id}})},children:"Toggle"}),Object(s.jsx)("button",{onClick:function(){return n({type:L.DELETE_TODO,payload:{id:e.id}})},children:"Delete"})]})}var L={ADD_TODO:"add-todo",TOGGLE_TODO:"toggle-todo",DELETE_TODO:"delete-todo"};function I(t,e){switch(e.type){case L.ADD_TODO:return[].concat(Object(y.a)(t),[(n=e.payload.name,{id:Date.now(),name:n,complete:!1})]);case L.TOGGLE_TODO:return t.map((function(t){return t.id===e.payload.id?Object(d.a)(Object(d.a)({},t),{},{complete:!t.complete}):t}));case L.DELETE_TODO:return t.filter((function(t){return t.id!==e.payload.id}));default:return t}var n}function S(){var t=Object(c.useReducer)(I,[]),e=Object(a.a)(t,2),n=e[0],r=e[1],o=Object(c.useState)(""),i=Object(a.a)(o,2),d=i[0],u=i[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"useReducerTodo"}),Object(s.jsx)("form",{onSubmit:function(t){t.preventDefault(),r({type:L.ADD_TODO,payload:{name:d}}),u("")},children:Object(s.jsx)("input",{type:"text",value:d,onChange:function(t){return u(t.target.value)}})}),n.map((function(t){return Object(s.jsx)(N,{todo:t,dispatch:r},t.id)}))]})}var _="increment",w="decrement";function R(t,e){switch(e.type){case _:return{count:t.count+1};case w:return{count:t.count-1};default:return t}}var G=function(){var t=Object(c.useReducer)(R,{count:0}),e=Object(a.a)(t,2),n=e[0],r=e[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("button",{onClick:function(){r({type:w})},children:"-"}),Object(s.jsx)("span",{children:n.count}),Object(s.jsx)("button",{onClick:function(){r({type:_})},children:"+"})]})},H="todoApp.todos";function F(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1],o=Object(c.useRef)(),i=Object(c.useState)(null),d=Object(a.a)(i,2),u=d[0],j=d[1],l=Object(c.useState)(""),O=Object(a.a)(l,2),b=O[0],p=O[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(H));t&&r(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(H,JSON.stringify(n))}),[n]),Object(s.jsxs)("div",{children:[Object(s.jsxs)("div",{className:"todo",children:[Object(s.jsx)("h1",{children:"Todo function"}),Object(s.jsx)("input",{ref:o,type:"text"}),Object(s.jsx)("button",{onClick:function(t){var e=o.current.value;""!==e&&(r((function(t){return[].concat(Object(y.a)(t),[{id:Object(A.a)(),name:e,completed:!1}])})),console.log(e),o.current.value=null)},children:"Add todo"}),Object(s.jsx)("button",{onClick:function(){var t=n.filter((function(t){return!t.completed}));r(t)},children:"clear complete"}),Object(s.jsx)(k,{todos:n,toggleTodo:function(t){var e=Object(y.a)(n),c=e.find((function(e){return e.id===t}));c.complete=!c.complete,r(e)},setTodos:r,todoEditing:u,setTodoEditing:j,editingText:b,setEditingText:p}),Object(s.jsxs)("div",{children:[n.filter((function(t){return!t.complete})).length," left to do "]})]}),Object(s.jsx)(G,{}),Object(s.jsx)(S,{})]})}var P=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n),t=e.call(this);var c=new Date,r=c.getFullYear()+"-"+(c.getMonth()+1)+"-"+c.getDate();return t.state={currentTime:Date().toLocaleUpperCase(),currentDate:r,time:(new Date).toLocaleString()},t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:(new Date).toLocaleString()})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:" Home Page"}),Object(s.jsxs)("h2",{children:[this.state.currentDate," ",this.state.time," "]}),Object(s.jsx)("h2",{children:"Weather"}),Object(s.jsx)("h2",{children:" google bookmark"})]})}}]),n}(r.a.Component),M=n(9),U=n(8),J=(n(36),function(){return Object(s.jsxs)("div",{className:"header_container",children:[Object(s.jsx)(U.b,{to:"/reactTodoHook/",className:"option",children:"HOME "}),Object(s.jsx)(U.b,{className:"option",to:"/reactTodoHook/calculator",children:"CALCULATOR "}),Object(s.jsx)(U.b,{className:"option",to:"/reactTodoHook/todo",children:"TODO "}),Object(s.jsx)(U.b,{className:"option",to:"/reactTodoHook/expensemanager",children:"EXPENSE_MANAGER "})]})});n(45);var V=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)(M.c,{children:[Object(s.jsx)(M.a,{exact:!0,path:"/reactTodoHook/",component:P}),Object(s.jsx)(M.a,{path:"/reactTodoHook/calculator",component:D}),Object(s.jsx)(M.a,{path:"/reactTodoHook/todo",component:F})]}),Object(s.jsx)(J,{})]})},B=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),o(t),i(t)}))};i.a.render(Object(s.jsx)(U.a,{children:Object(s.jsx)(V,{})}),document.getElementById("root")),B()}},[[46,1,2]]]);
//# sourceMappingURL=main.a79551cf.chunk.js.map