(this.webpackJsonptodo_2021=this.webpackJsonptodo_2021||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){},33:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},45:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(22),o=n.n(r),a=(n(30),n(7)),s=n(2),d=(n(31),n(0));function l(t){var e=t.dispatch,n=t.digit;return Object(d.jsx)("button",{onClick:function(){return e({type:g.ADD_DIGIT,payload:{digit:n}})},children:n})}function j(t){var e=t.dispatch,n=t.operation;return Object(d.jsx)("button",{onClick:function(){return e({type:g.CHOOSE_OPERATION,payload:{operation:n}})},children:n})}var u=n(15),O=n(16),b=n(18),p=n(17),h=(i.a.Component,n(33),function(){return Object(d.jsxs)("div",{className:"car_loan",children:[Object(d.jsx)("h1",{children:"CarLoan"}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Loan Amount"}),Object(d.jsx)("input",{})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Interest rate (%)"}),Object(d.jsx)("input",{})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{children:"Loan Period (months)"}),Object(d.jsx)("input",{})]}),Object(d.jsx)("div",{children:Object(d.jsx)("h4",{children:"Total cost of car loan"})}),Object(d.jsx)("div",{children:Object(d.jsx)("h4",{children:"Monthly Payments"})})]})});var x=n(23),v=n.n(x),g={ADD_DIGIT:"add-digit",CHOOSE_OPERATION:"choose-operation",CLEAR:"clear",DELETE_DIGIT:"delete-digit",EVALUATE:"evaluate"};function f(t,e){var n=e.type,c=e.payload;switch(n){case g.ADD_DIGIT:return t.overwrite?Object(s.a)(Object(s.a)({},t),{},{currentOperand:c.digit,overwrite:!1}):"0"===c.digit&&"0"===t.currentOperand||"."===c.digit&&t.currentOperand.includes(".")?t:Object(s.a)(Object(s.a)({},t),{},{currentOperand:"".concat(t.currentOperand||"").concat(c.digit)});case g.CHOOSE_OPERATION:return null==t.currentOperand&&null==t.previousOperand?t:null==t.currentOperand?Object(s.a)(Object(s.a)({},t),{},{operation:c.operation}):null==t.previousOperand?Object(s.a)(Object(s.a)({},t),{},{operation:c.operation,previousOperand:t.currentOperand,currentOperand:null}):Object(s.a)(Object(s.a)({},t),{},{previousOperand:m(t),operation:c.operation,currentOperand:null});case g.CLEAR:return{};case g.DELETE_DIGIT:return t.overwrite?Object(s.a)(Object(s.a)({},t),{},{overwrite:!1,currentOperand:null}):null==t.currentOperand?t:1===t.currentOperand.length?Object(s.a)(Object(s.a)({},t),{},{currentOperand:null}):Object(s.a)(Object(s.a)({},t),{},{currentOperand:t.currentOperand.slice(0,-1)});case g.EVALUATE:return null==t.operation||null==t.currentOperand||null==t.previousOperand?t:Object(s.a)(Object(s.a)({},t),{},{overwrite:!0,previousOperand:null,operation:null,currentOperand:m(t)})}}function m(t){var e=t.currentOperand,n=t.previousOperand,c=t.operation,i=parseInt(n),r=parseFloat(e);if(isNaN(i)||isNaN(r))return"";var o="";switch(c){case"+":o=i+r;break;case"-":o=i-r;break;case"*":o=i*r;break;case"\xf7":o=i/r}return o.toString()}var T=new Intl.NumberFormat("en-us",{maximumFractionDigits:0});function E(t){if(null!=t){var e=t.split("."),n=Object(a.a)(e,2),c=n[0],i=n[1];return null==i?T.format(c):"".concat(T.format(c),".").concat(i)}}var k=function(){var t=Object(c.useReducer)(f,{}),e=Object(a.a)(t,2),n=e[0],i=n.currentOperand,r=n.previousOperand,o=n.operation,s=e[1],u=Object(c.useState)(!1),O=Object(a.a)(u,2),b=O[0],p=O[1],x=b?"visible":"hidden";return Object(d.jsxs)("div",{className:"calculator_container",children:[Object(d.jsxs)("div",{className:"calculator-grid",children:[Object(d.jsxs)("div",{className:"output",children:[Object(d.jsxs)("div",{className:"previous-operand",children:[E(r),o]}),Object(d.jsx)("div",{className:"current-operand",children:E(i)})]}),Object(d.jsx)("button",{className:"span-two",onClick:function(){return s({type:g.CLEAR})},children:"AC"}),Object(d.jsx)("button",{onClick:function(){return s({type:g.DELETE_DIGIT})},children:"DEL"}),Object(d.jsx)(j,{operation:"\xf7",dispatch:s}),Object(d.jsx)(l,{digit:"1",dispatch:s}),Object(d.jsx)(l,{digit:"2",dispatch:s}),Object(d.jsx)(l,{digit:"3",dispatch:s}),Object(d.jsx)(j,{operation:"*",dispatch:s}),Object(d.jsx)(l,{digit:"4",dispatch:s}),Object(d.jsx)(l,{digit:"5",dispatch:s}),Object(d.jsx)(l,{digit:"6",dispatch:s}),Object(d.jsx)(j,{operation:"+",dispatch:s}),Object(d.jsx)(l,{digit:"7",dispatch:s}),Object(d.jsx)(l,{digit:"8",dispatch:s}),Object(d.jsx)(l,{digit:"9",dispatch:s}),Object(d.jsx)(j,{operation:"-",dispatch:s}),Object(d.jsx)(l,{digit:".",dispatch:s}),Object(d.jsx)(l,{digit:"0",dispatch:s}),Object(d.jsx)("button",{className:"span-two",onClick:function(){return s({type:g.EVALUATE})},children:"="})]}),Object(d.jsxs)("div",{className:"carloan_calculator",children:[Object(d.jsxs)("h2",{children:["Toggle to ","".concat(b?"Hide":"Show")," CARLOAN Calculator"]}),Object(d.jsx)(v.a,{onChange:function(t){p(t)},checked:b,width:68,height:40,handleDiameter:40}),Object(d.jsx)("div",{style:{visibility:x},children:Object(d.jsx)(h,{})})]})]})},C=n(11);function D(t){var e=t.todo,n=t.todos,c=t.toggleTodo,i=t.setTodos,r=t.todoEditing,o=t.setTodoEditing,a=t.editingText,s=t.setEditingText;return Object(d.jsx)("div",{children:Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){c(e.id)}}),console.log(e.text),e.name,Object(d.jsx)("button",{onClick:function(){return function(t){var e=Object(C.a)(n).filter((function(e){return e.id!==t}));i(e)}(e.id)},children:"delete"}),r===e.id?Object(d.jsx)("input",{type:"text",onChange:function(t){return s(t.target.value)}}):Object(d.jsx)("div",{children:null}),r===e.id?Object(d.jsx)("button",{onClick:function(){return function(t){var e=Object(C.a)(n).map((function(e){return e.id===t&&(e.name=a),e}));i(e),o(null),s("")}(e.id)},children:"Submit Edit"}):Object(d.jsx)("button",{onClick:function(){return o(e.id)},children:"edit"})]})})}function N(t){var e=t.todos,n=t.toggleTodo,c=t.setTodos,i=t.todoEditing,r=t.setTodoEditing,o=t.editingText,a=t.setEditingText;return e.map((function(t){return Object(d.jsx)(D,{toggleTodo:n,todos:e,todo:t,setTodos:c,todoEditing:i,setTodoEditing:r,editingText:o,setEditingText:a},t.id)}))}var A=n(48),I=(n(35),"todoApp.todos");function y(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],i=e[1],r=Object(c.useRef)(),o=Object(c.useState)(null),s=Object(a.a)(o,2),l=s[0],j=s[1],u=Object(c.useState)(""),O=Object(a.a)(u,2),b=O[0],p=O[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(I));t&&i(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(I,JSON.stringify(n))}),[n]),Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("h1",{children:"Todo function"}),Object(d.jsx)("input",{ref:r,type:"text"}),Object(d.jsx)("button",{onClick:function(t){var e=r.current.value;""!==e&&(i((function(t){return[].concat(Object(C.a)(t),[{id:Object(A.a)(),name:e,completed:!1}])})),console.log(e),r.current.value=null)},children:"Add todo"}),Object(d.jsx)("button",{onClick:function(){var t=n.filter((function(t){return!t.completed}));i(t)},children:"clear complete"}),Object(d.jsx)(N,{todos:n,toggleTodo:function(t){var e=Object(C.a)(n),c=e.find((function(e){return e.id===t}));c.complete=!c.complete,i(e)},setTodos:i,todoEditing:l,setTodoEditing:j,editingText:b,setEditingText:p}),Object(d.jsxs)("div",{children:[n.filter((function(t){return!t.complete})).length," left to do "]})]})})}var L=function(t){Object(b.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n),t=e.call(this);var c=new Date,i=c.getFullYear()+"-"+(c.getMonth()+1)+"-"+c.getDate();return t.state={currentTime:Date().toLocaleUpperCase(),currentDate:i,time:(new Date).toLocaleString()},t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:(new Date).toLocaleString()})}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:" Home Page"}),Object(d.jsxs)("h2",{children:[this.state.currentDate," ",this.state.time," "]}),Object(d.jsx)("h2",{children:"Weather"}),Object(d.jsx)("h2",{children:" google bookmark"})]})}}]),n}(i.a.Component),S=n(9),w=n(8),_=(n(36),function(){return Object(d.jsxs)("div",{className:"header_container",children:[Object(d.jsx)(w.b,{to:"/reactTodoHook/",className:"option",children:"HOME "}),Object(d.jsx)(w.b,{className:"option",to:"/reactTodoHook/calculator",children:"CALCULATOR "}),Object(d.jsx)(w.b,{className:"option",to:"/reactTodoHook/todo",children:"TODO "}),Object(d.jsx)(w.b,{className:"option",to:"/reactTodoHook/expensemanager",children:"EXPENSE_MANAGER "})]})});n(45);var H=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)(S.c,{children:[Object(d.jsx)(S.a,{exact:!0,path:"/reactTodoHook/",component:L}),Object(d.jsx)(S.a,{path:"/reactTodoHook/calculator",component:k}),Object(d.jsx)(S.a,{path:"/reactTodoHook/todo",component:y})]}),Object(d.jsx)(_,{})]})},R=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),i(t),r(t),o(t)}))};o.a.render(Object(d.jsx)(w.a,{children:Object(d.jsx)(H,{})}),document.getElementById("root")),R()}},[[46,1,2]]]);
//# sourceMappingURL=main.a335c3a8.chunk.js.map