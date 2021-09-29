(this["webpackJsonpepicodus-tap-room"]=this["webpackJsonpepicodus-tap-room"]||[]).push([[0],{17:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(6),s=a.n(i),c=(a(16),a(17),a(0));var l=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark",children:Object(c.jsxs)("div",{className:"container-fluid",children:[Object(c.jsx)("a",{className:"navbar-brand float-md-right",href:"#!",children:"Boba Bar"}),Object(c.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarDark","aria-controls":"navbarDark","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(c.jsx)("span",{className:"navbar-toggler-icon"})}),Object(c.jsx)("div",{className:"collapse navbar-collapse show",id:"navbarDark",children:Object(c.jsx)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:Object(c.jsx)("li",{className:"nav-Merch",children:Object(c.jsx)("a",{className:"nav-link active","aria-current":"page",href:"./",children:"Reset"})})})})]})})})},d=a(7),o=a(8),b=a(11),j=a(10),u=a(9);var h=function(e){var t=e.tea?e.tea.name:"",a=e.tea?e.tea.brand:"",n=e.tea?e.tea.price:"",r=e.tea?e.tea.flavor:"",i=e.tea?e.tea.pints:"";return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"tea-form",children:Object(c.jsxs)("form",{onSubmit:e.formSubmissionHandler,children:[Object(c.jsx)("input",{className:"form-control",type:"text",name:"name",placeholder:"name",required:!0,defaultValue:t}),Object(c.jsx)("input",{className:"form-control",type:"text",name:"brand",placeholder:"brand",required:!0,defaultValue:a}),Object(c.jsx)("input",{className:"form-control",type:"text",name:"price",placeholder:"price",required:!0,defaultValue:n}),Object(c.jsx)("input",{className:"form-control",type:"string",name:"flavor",placeholder:"flavor",required:!0,defaultValue:r}),Object(c.jsx)("input",{className:"form-control",type:"string",name:"pints",placeholder:"pints",required:!0,defaultValue:i}),Object(c.jsx)("button",{className:"btn btn-warning",type:"submit",children:e.buttonText})]})})})};var m=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h,{formSubmissionHandler:function(t){t.preventDefault(),e.onNewTeaCreation({name:t.target.name.value,brand:t.target.brand.value,price:t.target.price.value,flavor:t.target.flavor.value,pints:t.target.pints.value,id:Object(u.v4)()})},buttonText:"Add New Tea"})})};var f=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"tea",onClick:function(){return e.whenTeaClicked(e.id)},children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)("b",{children:"Name:"})," ",e.name]}),Object(c.jsxs)("h3",{children:[Object(c.jsx)("b",{children:"Brand:"})," ",e.brand]}),Object(c.jsxs)("h3",{children:[Object(c.jsx)("b",{children:"Price:"})," ",e.price]}),Object(c.jsxs)("h3",{children:[Object(c.jsx)("b",{children:"Flavor:"})," ",e.flavor]}),Object(c.jsxs)("h3",{children:[Object(c.jsx)("b",{children:"Pints Left:"})," ",e.pints]}),Object(c.jsx)("hr",{})]})})},O=a(3),g=a.n(O);f.propTypes={teaList:g.a.array,onTeaSelection:g.a.func};var x=function(e){return Object(c.jsx)(c.Fragment,{children:e.teaList.map((function(t){return Object(c.jsx)(f,{whenTeaClicked:e.onTeaSelection,name:t.name,brand:t.brand,price:t.price,flavor:t.flavor,pints:t.pints,id:t.id},t.id)}))})};var v=function(e){var t=e.tea,a=e.onClickingSell,n=e.onClickingDelete,r=0===t.pints?"Out of Stock":t.pints;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"tea-form",children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)("b",{children:"Name:"})," ",t.name]}),Object(c.jsxs)("h3",{children:[Object(c.jsx)("b",{children:"Brand:"})," ",t.brand]}),Object(c.jsxs)("h3",{children:[Object(c.jsx)("b",{children:"Price:"})," ",t.price]}),Object(c.jsxs)("h3",{children:[Object(c.jsx)("b",{children:"Flavor:"})," ",t.flavor]}),Object(c.jsxs)("h3",{children:[Object(c.jsx)("b",{children:"Pints Left:"})," ",r]}),Object(c.jsx)("button",{className:"btn btn-warning",onClick:function(){return a(t)},children:"Sell 1 Pint"}),Object(c.jsx)("button",{className:"btn btn-success",onClick:e.onClickingEdit,children:"Update Tea"}),Object(c.jsx)("button",{className:"btn btn-danger",id:"delete",onClick:function(){return n(t.id)},children:"Delete Tea"})]})})};var p=function(e){var t=e.tea;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(h,{formSubmissionHandler:function(t){t.preventDefault(),e.onEditTea({name:t.target.name.value,brand:t.target.brand.value,price:t.target.price.value,flavor:t.target.flavor.value,pints:t.target.pints.value})},tea:t,buttonText:"Update Tea"})})},T=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleClick=function(){null!=n.state.selectedTea?n.setState({formVisibleOnPage:!1,selectedTea:null,editing:!1}):n.setState((function(e){return{formVisibleOnPage:!e.formVisibleOnPage}}))},n.handleAddingNewTea=function(e){var t=n.state.masterTeaList.concat(e);n.setState({masterTeaList:t,formVisibleOnPage:!1})},n.handleChangingSelectedTea=function(e){var t=n.state.masterTeaList.filter((function(t){return t.id===e}))[0];n.setState({selectedTea:t})},n.handleDeletingTea=function(e){var t=n.state.masterTeaList.filter((function(t){return t.id!==e}));n.setState({masterTeaList:t,selectedTea:null})},n.handleSellingTea=function(e){e.pints>0&&e.pints--,n.setState({selectedTea:e})},n.handleEditClick=function(){n.setState({editing:!0})},n.handleEditingTeaInList=function(e){var t=n.state.masterTeaList.filter((function(e){return e.id!==n.state.selectedTea.id})).concat(e);n.setState({masterTeaList:t,editing:!1,selectedTea:null})},n.state={formVisibleOnPage:!1,masterTeaList:[],selectedTea:null,editing:!1},n}return Object(o.a)(a,[{key:"render",value:function(){var e=null,t=null,a=null;return 0===this.state.masterTeaList.length&&(e=Object(c.jsx)("h3",{children:"No Teas Yet"}),t="Add new Tea"),this.state.editing?(a=Object(c.jsx)(p,{tea:this.state.selectedTea,onEditTea:this.handleEditingTeaInList}),t="Return to Tea List"):null!=this.state.selectedTea?(a=Object(c.jsx)(v,{tea:this.state.selectedTea,onClickingDelete:this.handleDeletingTea,onClickingEdit:this.handleEditClick,onClickingSell:this.handleSellingTea}),t="Return to Tea List"):this.state.formVisibleOnPage?(a=Object(c.jsx)(m,{onNewTeaCreation:this.handleAddingNewTea}),t="Return to Tea List"):(a=Object(c.jsx)(x,{teaList:this.state.masterTeaList,onTeaSelection:this.handleChangingSelectedTea}),t="Add Tea"),Object(c.jsxs)(r.a.Fragment,{children:[e,a,Object(c.jsx)("button",{className:"btn btn-primary",onClick:this.handleClick,children:t})]})}}]),a}(r.a.Component);var N=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l,{}),Object(c.jsx)(T,{})]})},k=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,24)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),i(e),s(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),k()}},[[23,1,2]]]);
//# sourceMappingURL=main.961ef3de.chunk.js.map