(this.webpackJsonptodo_2021=this.webpackJsonptodo_2021||[]).push([[0],{104:function(t,e,n){},105:function(t,e,n){},111:function(t,e,n){},112:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),r=n(15),i=n.n(r),a=(n(52),n(3)),d=n(4),s=(n(53),n(0));function u(t){var e=t.dispatch,n=t.digit;return Object(s.jsx)("button",{onClick:function(){return e({type:j.ADD_DIGIT,payload:{digit:n}})},children:n})}function l(t){var e=t.dispatch,n=t.operation;return Object(s.jsx)("button",{onClick:function(){return e({type:j.CHOOSE_OPERATION,payload:{operation:n}})},children:n})}var j={ADD_DIGIT:"add-digit",CHOOSE_OPERATION:"choose-operation",CLEAR:"clear",DELETE_DIGIT:"delete-digit",EVALUATE:"evaluate"};function O(t,e){var n=e.type,c=e.payload;switch(n){case j.ADD_DIGIT:return t.overwrite?Object(d.a)(Object(d.a)({},t),{},{currentOperand:c.digit,overwrite:!1}):"0"===c.digit&&"0"===t.currentOperand||"."===c.digit&&t.currentOperand.includes(".")?t:Object(d.a)(Object(d.a)({},t),{},{currentOperand:"".concat(t.currentOperand||"").concat(c.digit)});case j.CHOOSE_OPERATION:return null==t.currentOperand&&null==t.previousOperand?t:null==t.currentOperand?Object(d.a)(Object(d.a)({},t),{},{operation:c.operation}):null==t.previousOperand?Object(d.a)(Object(d.a)({},t),{},{operation:c.operation,previousOperand:t.currentOperand,currentOperand:null}):Object(d.a)(Object(d.a)({},t),{},{previousOperand:p(t),operation:c.operation,currentOperand:null});case j.CLEAR:return{};case j.DELETE_DIGIT:return t.overwrite?Object(d.a)(Object(d.a)({},t),{},{overwrite:!1,currentOperand:null}):null==t.currentOperand?t:1===t.currentOperand.length?Object(d.a)(Object(d.a)({},t),{},{currentOperand:null}):Object(d.a)(Object(d.a)({},t),{},{currentOperand:t.currentOperand.slice(0,-1)});case j.EVALUATE:return null==t.operation||null==t.currentOperand||null==t.previousOperand?t:Object(d.a)(Object(d.a)({},t),{},{overwrite:!0,previousOperand:null,operation:null,currentOperand:p(t)})}}function p(t){var e=t.currentOperand,n=t.previousOperand,c=t.operation,o=parseInt(n),r=parseFloat(e);if(isNaN(o)||isNaN(r))return"";var i="";switch(c){case"+":i=o+r;break;case"-":i=o-r;break;case"*":i=o*r;break;case"\xf7":i=o/r}return i.toString()}var b=new Intl.NumberFormat("en-us",{maximumFractionDigits:0});function h(t){if(null!=t){var e=t.split("."),n=Object(a.a)(e,2),c=n[0],o=n[1];return null==o?b.format(c):"".concat(b.format(c),".").concat(o)}}var x=function(){var t=Object(c.useReducer)(O,{}),e=Object(a.a)(t,2),n=e[0],o=n.currentOperand,r=n.previousOperand,i=n.operation,d=e[1];return Object(s.jsxs)("div",{className:"calculator-grid",children:[Object(s.jsxs)("div",{className:"output",children:[Object(s.jsxs)("div",{className:"previous-operand",children:[h(r),i]}),Object(s.jsx)("div",{className:"current-operand",children:h(o)})]}),Object(s.jsx)("button",{className:"span-two",onClick:function(){return d({type:j.CLEAR})},children:"AC"}),Object(s.jsx)("button",{onClick:function(){return d({type:j.DELETE_DIGIT})},children:"DEL"}),Object(s.jsx)(l,{operation:"\xf7",dispatch:d}),Object(s.jsx)(u,{digit:"1",dispatch:d}),Object(s.jsx)(u,{digit:"2",dispatch:d}),Object(s.jsx)(u,{digit:"3",dispatch:d}),Object(s.jsx)(l,{operation:"*",dispatch:d}),Object(s.jsx)(u,{digit:"4",dispatch:d}),Object(s.jsx)(u,{digit:"5",dispatch:d}),Object(s.jsx)(u,{digit:"6",dispatch:d}),Object(s.jsx)(l,{operation:"+",dispatch:d}),Object(s.jsx)(u,{digit:"7",dispatch:d}),Object(s.jsx)(u,{digit:"8",dispatch:d}),Object(s.jsx)(u,{digit:"9",dispatch:d}),Object(s.jsx)(l,{operation:"-",dispatch:d}),Object(s.jsx)(u,{digit:".",dispatch:d}),Object(s.jsx)(u,{digit:"0",dispatch:d}),Object(s.jsx)("button",{className:"span-two",onClick:function(){return d({type:j.EVALUATE})},children:"="})]})},g=n(6);function f(t){var e=t.todo,n=t.todos,c=t.toggleTodo,o=t.setTodos,r=t.todoEditing,i=t.setTodoEditing,a=t.editingText,d=t.setEditingText;return Object(s.jsx)("div",{children:Object(s.jsxs)("label",{children:[Object(s.jsx)("input",{type:"checkbox",checked:e.complete,onChange:function(){c(e.id)}}),console.log(e.text),e.name,Object(s.jsx)("button",{onClick:function(){return function(t){var e=Object(g.a)(n).filter((function(e){return e.id!==t}));o(e)}(e.id)},children:"delete"}),r===e.id?Object(s.jsx)("input",{type:"text",onChange:function(t){return d(t.target.value)}}):Object(s.jsx)("div",{children:null}),r===e.id?Object(s.jsx)("button",{onClick:function(){return function(t){var e=Object(g.a)(n).map((function(e){return e.id===t&&(e.name=a),e}));o(e),i(null),d("")}(e.id)},children:"Submit Edit"}):Object(s.jsx)("button",{onClick:function(){return i(e.id)},children:"edit"})]})})}function v(t){var e=t.todos,n=t.toggleTodo,c=t.setTodos,o=t.todoEditing,r=t.setTodoEditing,i=t.editingText,a=t.setEditingText;return e.map((function(t){return Object(s.jsx)(f,{toggleTodo:n,todos:e,todo:t,setTodos:c,todoEditing:o,setTodoEditing:r,editingText:i,setEditingText:a},t.id)}))}var m=n(114);n(39);n(104);var T="todoApp.todos";function E(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],o=e[1],r=Object(c.useRef)(),i=Object(c.useState)(null),d=Object(a.a)(i,2),u=d[0],l=d[1],j=Object(c.useState)(""),O=Object(a.a)(j,2),p=O[0],b=O[1];return Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem(T));t&&o(t)}),[]),Object(c.useEffect)((function(){localStorage.setItem(T,JSON.stringify(n))}),[n]),Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"todo",children:[Object(s.jsx)("h1",{children:"Todo function"}),Object(s.jsx)("input",{ref:r,type:"text"}),Object(s.jsx)("button",{onClick:function(t){var e=r.current.value;""!==e&&(o((function(t){return[].concat(Object(g.a)(t),[{id:Object(m.a)(),name:e,completed:!1}])})),console.log(e),r.current.value=null)},children:"Add todo"}),Object(s.jsx)("button",{onClick:function(){var t=n.filter((function(t){return!t.completed}));o(t)},children:"clear complete"}),Object(s.jsx)(v,{todos:n,toggleTodo:function(t){var e=Object(g.a)(n),c=e.find((function(e){return e.id===t}));c.complete=!c.complete,o(e)},setTodos:o,todoEditing:u,setTodoEditing:l,editingText:p,setEditingText:b}),Object(s.jsxs)("div",{children:[n.filter((function(t){return!t.complete})).length," left to do "]})]})})}var k=n(40),D=n(41),C=n(47),I=n(46),N=function(t){Object(C.a)(n,t);var e=Object(I.a)(n);function n(){var t;Object(k.a)(this,n),t=e.call(this);var c=new Date,o=c.getFullYear()+"-"+(c.getMonth()+1)+"-"+c.getDate();return t.state={currentTime:Date().toLocaleUpperCase(),currentDate:o,time:(new Date).toLocaleString()},t}return Object(D.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.intervalID=setInterval((function(){return t.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"tick",value:function(){this.setState({time:(new Date).toLocaleString()})}},{key:"render",value:function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:" Home Page"}),Object(s.jsxs)("h2",{children:[this.state.currentDate," ",this.state.time," "]}),Object(s.jsx)("h2",{children:"Weather"}),Object(s.jsx)("h2",{children:" google bookmark"})]})}}]),n}(o.a.Component),A=n(11),y=n(10),L=(n(105),function(){return Object(s.jsxs)("div",{className:"header_container",children:[Object(s.jsx)(y.b,{to:"/reactTodoHook/",className:"option",children:"HOME "}),Object(s.jsx)(y.b,{className:"option",to:"/reactTodoHook/calculator",children:"CALCULATOR "}),Object(s.jsx)(y.b,{className:"option",to:"/reactTodoHook/todo",children:"TODO "}),Object(s.jsx)(y.b,{className:"option",to:"/reactTodoHook/carloan",children:"CAR LOAN "}),Object(s.jsx)(y.b,{className:"option",to:"/reactTodoHook/mortage",children:"MORTGAGE "})]})}),S=n(44),w=n.n(S),H=n(45),_=n.n(H);n(111);var R=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)(A.c,{children:[Object(s.jsx)(A.a,{exact:!0,path:"/reactTodoHook/",component:N}),Object(s.jsx)(A.a,{path:"/reactTodoHook/calculator",component:x}),Object(s.jsx)(A.a,{path:"/reactTodoHook/todo",component:E}),Object(s.jsx)(A.a,{path:"/reactTodoHook/todo",component:w.a}),Object(s.jsx)(A.a,{path:"/reactTodoHook/todo",component:_.a})]}),Object(s.jsx)(L,{})]})},F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(s.jsx)(y.a,{children:Object(s.jsx)(R,{})}),document.getElementById("root")),F()},44:function(t,e){},45:function(t,e){},52:function(t,e,n){},53:function(t,e,n){}},[[112,1,2]]]);
//# sourceMappingURL=main.89e48b9d.chunk.js.map