(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{15:function(e,t,a){e.exports=a(27)},20:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(3),r=a.n(l),c=a(9),i=a(10),o=a(14),u=a(13);a(20);var k=a(4),m=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).submitData=function(){if(n.state.taskName&&n.state.taskLabel&&!n.state.id){var e={id:Math.floor(900*Math.random()+100),taskName:n.state.taskName,taskLabel:n.state.taskLabel};n.props.addTask(e)}else if(n.state.taskName&&n.state.taskLabel&&n.state.id){var t={id:n.state.id,taskName:n.state.taskName,taskLabel:n.state.taskLabel};n.props.editTask(t)}else alert("Enter Task Details.");n.clearData()},n.editDetails=function(e){n.setState({id:e.id,taskName:e.taskName,taskLabel:e.taskLabel})},n.deleteTask=function(e){n.clearData(),window.confirm("delete the task?")&&n.props.deleteTask(e)},n.handleNameChange=function(e){n.setState({taskName:e.target.value})},n.handleLabelChange=function(e){n.setState({taskLabel:e.target.value})},n.clearData=function(){n.setState({id:0,taskName:"",taskLabel:""})},n.state={id:0,taskName:"",taskDescription:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.getTask()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("h1",{className:"App-title"},"Todo Application")),s.a.createElement("p",{className:"App-intro"},s.a.createElement("div",{className:"leftsection"},"Task Name : ",s.a.createElement("input",{onChange:this.handleNameChange,value:this.state.taskName,type:"text",placeholder:"Task Name"})," ",s.a.createElement("br",null),"Task Label :  ",s.a.createElement("input",{onChange:this.handleLabelChange,value:this.state.taskLabel,type:"text",placeholder:"Task Description"}),s.a.createElement("br",null),this.state.id?s.a.createElement("button",{onClick:this.submitData},"UPDATE TASK"):s.a.createElement("button",{onClick:this.submitData},"ADD TASK"),"   ",s.a.createElement("button",{onClick:this.clearData},"CLEAR TASK")),s.a.createElement("div",{className:"rightsection"},s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"ID"),s.a.createElement("th",null,"Tasks"),s.a.createElement("th",null,"Description"),s.a.createElement("th",null,"Action"))),s.a.createElement("tbody",null,this.props.tasks&&this.props.tasks.map((function(t,a){return s.a.createElement("tr",{key:a+1},s.a.createElement("td",null,a+1),s.a.createElement("td",null,t.taskName),s.a.createElement("td",null,t.taskLabel),s.a.createElement("td",null,s.a.createElement("button",{onClick:function(){return e.editDetails(t)}},"EDIT TASK")," ",s.a.createElement("button",{onClick:function(){return e.deleteTask(t.id)}},"DELETE TASK")," "))})))))))}}]),a}(n.Component),d=Object(k.b)((function(e){return{tasks:e.tasks}}),{getTask:function(){return function(e){return e({type:"GET_TASK"})}},addTask:function(e){return function(t){return t({type:"ADD_TASK",payload:e})}},editTask:function(e){return function(t){return t({type:"EDIT_TASK",payload:e})}},deleteTask:function(e){return function(t){return t({type:"DELETE_TASK",payload:e})}}})(m),p=a(2),h=a(12);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=a(1),E={tasks:[{id:1,taskName:"Sleep",taskLabel:"High Priority"}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TASK":return Object(b.a)({},e);case"ADD_TASK":return Object(b.a)(Object(b.a)({},e),{},{tasks:e.tasks.concat(t.payload)});case"EDIT_TASK":return Object(b.a)(Object(b.a)({},e),{},{tasks:e.tasks.map((function(e,a){return e.id===t.payload.id?Object(b.a)(Object(b.a)({},e),{},{taskName:t.payload.taskName,taskLabel:t.payload.taskLabel}):e}))});case"DELETE_TASK":return Object(b.a)(Object(b.a)({},e),{},{tasks:e.tasks.filter((function(e){return e.id!==t.payload}))});default:return e}},f=Object(p.c)(T,Object(p.a)(h.a));r.a.render(s.a.createElement(k.a,{store:f},s.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[15,1,2]]]);
//# sourceMappingURL=main.6d5d6dd5.chunk.js.map