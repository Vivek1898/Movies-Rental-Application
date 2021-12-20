(this["webpackJsonpproject-tidly"]=this["webpackJsonpproject-tidly"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"a":"https://v-movies-data.herokuapp.com/api"}')},50:function(e,t,n){},89:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(30),c=n.n(s),o=n(96),i=(n(50),n(3)),l=n(5),u=n(6),d=n(8),h=n(7),j=n(97),p=n(45),m=n(95),b=n(19),v=n(32),f=n(4),O=n.n(f),g=n(10),x=n(31),y=n(43),k=n.n(y),w=n(17),S=n.n(w);var N={init:function(){},log:function(e){console.error(e)}};S.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(N.log(e),b.toast.error("An unexpected error occurs")),Promise.reject(e)}));var C={get:S.a.get,post:S.a.post,put:S.a.put,delete:S.a.delete,setJwt:function(e){S.a.defaults.headers.common["x-auth-token"]=e}},I=n(14),R=I.a+"/auth",_="token";function P(){return(P=Object(g.a)(O.a.mark((function e(t,n){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post(R,{email:t,password:n});case 2:r=e.sent,a=r.data,localStorage.setItem(_,a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem(_,t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(){return localStorage.getItem(_)}C.setJwt(M());var A={login:function(e,t){return P.apply(this,arguments)},loginWithJwt:function(e){return D.apply(this,arguments)},logout:function(){localStorage.removeItem(_)},getCurrenUser:function(){try{var e=localStorage.getItem(_);return k()(e)}catch(t){return null}},getJwt:M},F=n(0),T=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).raiseSort=function(t){var n=Object(i.a)({},e.props.sortColumn);n.path===t?n.order="asc"===n.order?"desc":"asc":(n.path=t,n.order="asc"),e.props.onSort(n)},e.renderSortIcon=function(t){var n=e.props.sortColumn;return t.path!==n.path?null:"asc"===n.order?Object(F.jsx)("i",{className:"fa fa-sort-asc"}):Object(F.jsx)("i",{className:"fa fa-sort-desc"})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(F.jsx)("thead",{children:Object(F.jsx)("tr",{children:this.props.columns.map((function(t){return Object(F.jsxs)("th",{className:"clickable ",onClick:function(){return e.raiseSort(t.path)},children:[t.label," ",e.renderSortIcon(t)]},t.path||t.key)}))})})}}]),n}(a.a.Component),q=T,L=n(15),U=n.n(L),B=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).rendercell=function(e,t){return t.content?t.content(e):U.a.get(e,t.path)},e.creteKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.columns;return Object(F.jsx)("tbody",{children:n.map((function(t){return Object(F.jsx)("tr",{children:r.map((function(n){return Object(F.jsx)("td",{children:e.rendercell(t,n)},e.creteKey(t,n))}))},t._id)}))})}}]),n}(a.a.Component),J=B,G=function(e){var t=e.columns,n=e.sortColumn,r=e.onSort,a=e.data;return Object(F.jsxs)("table",{className:"table",children:[Object(F.jsx)(q,{columns:t,sortColumn:n,onSort:r}),Object(F.jsx)(J,{columns:t,data:a})]})},z=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),Object(F.jsx)("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},Q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n),(e=t.call(this)).columns=[{path:"title",label:"Title",content:function(e){return Object(F.jsx)(x.a,{to:"/movies/".concat(e._id),children:e.title})}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return Object(F.jsx)(z,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e.deleteColumn={key:"delete",content:function(t){return Object(F.jsx)("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm",children:"Delete"})}};var r=A.getCurrenUser();return r&&r.isAdmin&&e.columns.push(e.deleteColumn),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.onSort,r=e.sortColumn;return Object(F.jsx)(G,{columns:this.columns,data:t,sortColumn:r,onSort:n})}}]),n}(a.a.Component),W=function(e){var t=e.items,n=e.textProperty,r=e.valueProperty,a=e.onitemSelect,s=e.selecteditem;return Object(F.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(F.jsx)("li",{onClick:function(){return a(e)},className:e===s?"list-group-item active":"list-group-item",children:e[n]},e[r])}))})};W.defaultProps={textProperty:"name",valueProperty:"_id"};var E=W,K=I.a+"/movies";function V(e){return C.get(K+"/"+e)}function H(e){if(e._id){var t=Object(i.a)({},e);return delete t._id,C.put(K+"/"+e._id,t)}return C.post(K,e)}function X(e){return C.delete(K+"/"+e)}function Y(){return C.get(I.a+"/genres")}var Z=function(e){var t=e.itemscount,n=e.pagesize,r=e.onPagechange,a=e.currentpage;console.log(a);var s=Math.ceil(t/n);if(1===s)return null;var c=U.a.range(1,s+1);return Object(F.jsx)("nav",{children:Object(F.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(F.jsx)("li",{className:e===a?"page-item active":"page-item",children:Object(F.jsx)("a",{className:"page-link",onClick:function(){return r(e)},children:e})},e)}))})})};function $(e,t,n){var r=(t-1)*n;return U()(e).slice(r).take(n).value()}var ee=function(e){var t=e.value,n=e.onChange;return Object(F.jsx)("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return n(e.currentTarget.value)}})},te=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={movies:[],genres:[],currentpage:1,searchQuery:"",selectedgenre:null,pagesize:4,sortColumn:{path:"title",order:"asc"}},e.handleDelete=function(){var t=Object(g.a)(O.a.mark((function t(n){var r,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state.movies,a=r.filter((function(e){return e._id!==n._id})),e.setState({movies:a}),t.prev=3,t.next=6,X(n._id);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status&&b.toast.error("Movie already been deleted"),e.setState({movies:r});case 12:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handlelike=function(t){console.log(t);var n=Object(v.a)(e.state.movies),r=n.indexOf(t);n[r]=Object(i.a)({},n[r]),n[r].liked=!n[r].liked,e.setState({movies:n})},e.handlepagechange=function(t){e.setState({currentpage:t})},e.handlegenreselect=function(t){e.setState({selectedgenre:t,searchQuery:"",currentpage:1})},e.handleSearch=function(t){e.setState({searchQuery:t,selectedgenre:null,currentpage:1})},e.handleSort=function(t){e.setState({sortColumn:t})},e.getPagedData=function(){var t=e.state,n=t.pagesize,r=t.currentpage,a=t.sortColumn,s=t.selectedgenre,c=t.searchQuery,o=t.movies,i=o;c?i=o.filter((function(e){return e.title.toLowerCase().startsWith(c.toLowerCase())})):s&&s._id&&(i=o.filter((function(e){return e.genre._id===s._id})));var l=$(U.a.orderBy(i,[a.path],[a.order]),r,n);return{totalCount:i.length,data:l}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,n,r,a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:return t=e.sent,n=t.data,r=[{_id:"",name:"All Genres"}].concat(Object(v.a)(n)),e.next=7,C.get(K);case 7:a=e.sent,s=a.data,this.setState({movies:s,genres:r});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.state.movies.length;var e=this.state,t=e.pagesize,n=e.currentpage,r=e.sortColumn,a=e.searchQuery,s=this.props.user,c=this.getPagedData(),o=c.totalCount,i=c.data;return Object(F.jsxs)("div",{className:"row",children:[Object(F.jsx)("div",{className:"col-3",children:Object(F.jsx)(E,{items:this.state.genres,selecteditem:this.state.selectedgenre,onitemSelect:this.handlegenreselect})}),Object(F.jsxs)("div",{className:"col",children:[s&&Object(F.jsx)(x.a,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20},children:"New Movie"}),Object(F.jsxs)("p",{children:["Showing ",o," movies in database."]}),Object(F.jsx)(ee,{value:a,onChange:this.handleSearch}),Object(F.jsx)(Q,{movies:i,sortColumn:r,onLike:this.handlelike,onDelete:this.handleDelete,onSort:this.handleSort}),Object(F.jsx)(Z,{itemscount:o,pagesize:t,currentpage:n,onPagechange:this.handlepagechange})]})]})}}]),n}(a.a.Component),ne=te,re=n(9),ae=n.n(re),se=n(21),ce=n(44),oe=n(20),ie=["name","label","error"],le=function(e){var t=e.name,n=e.label,r=e.error,a=Object(oe.a)(e,ie);return Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("label",{htmlFor:t,children:n}),Object(F.jsx)("input",Object(i.a)(Object(i.a)({},a),{},{name:t,id:t,className:"form-control"})),r&&Object(F.jsx)("div",{className:"alert alert-danger",children:r}),Object(F.jsx)("br",{})]})},ue=["name","label","options","error"],de=function(e){var t=e.name,n=e.label,r=e.options,a=e.error,s=Object(oe.a)(e,ue);return Object(F.jsxs)("div",{className:"form-group",children:[Object(F.jsx)("label",{htmlFor:t,children:n}),Object(F.jsxs)("select",Object(i.a)(Object(i.a)({name:t,id:t},s),{},{className:"form-control",children:[Object(F.jsx)("option",{value:""}),r.map((function(e){return Object(F.jsx)("option",{value:e._id,children:e.name},e._id)}))]})),a&&Object(F.jsx)("div",{className:"alert alert-danger",children:a})]})},he=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{},errors:{}},e.schema={username:ae.a.string().required().label("Username"),password:ae.a.string().required().label("Password")},e.validate=function(){var t=ae.a.validate(e.state.data,e.schema,{abortEarly:!1});if(!t.error)return null;var n,r={},a=Object(ce.a)(t.error.details);try{for(a.s();!(n=a.n()).done;){var s=n.value;r[s.path[0]]=s.message}}catch(c){a.e(c)}finally{a.f()}return r},e.validateProperty=function(t){var n=t.name,r=t.value,a=Object(se.a)({},n,r),s=Object(se.a)({},n,e.schema[n]),c=ae.a.validate(a,s).error;return c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),n||e.doSubmit()},e.handleChange=function(t){var n=t.currentTarget,r=Object(i.a)({},e.state.errors),a=e.validateProperty(n);a?r[n.name]=a:delete r[n.name];var s=Object(i.a)({},e.state.data);s[n.name]=n.value,e.setState({data:s,errors:r})},e}return Object(u.a)(n,[{key:"renderButton",value:function(e){return Object(F.jsx)("button",{disabled:this.validate(),className:"btn btn-primary",children:e})}},{key:"renderSelect",value:function(e,t,n){var r=this.state,a=r.data,s=r.errors;return Object(F.jsx)(de,{name:e,value:a[e],label:t,options:n,onChange:this.handleChange,error:s[e]})}},{key:"renderInput",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",r=this.state,a=r.data,s=r.errors;return Object(F.jsx)(le,{type:n,name:e,value:a[e],label:t,onChange:this.handleChange,error:s[e]})}}]),n}(a.a.Component),je=he,pe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},e.schema={_id:ae.a.string(),title:ae.a.string().required().label("Title"),genreId:ae.a.string().required().label("Genre"),numberInStock:ae.a.number().required().min(0).max(100).label("Number in Stock"),dailyRentalRate:ae.a.number().required().min(0).max(10).label("Daily Rental Rate")},e.doSubmit=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,H(e.state.data);case 2:e.props.history.push("/movies");case 3:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"fillGenres",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y();case 2:t=e.sent,n=t.data,this.setState({genres:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fillMovie",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,V(t);case 6:n=e.sent,r=n.data,this.setState({data:this.mapToViewModel(r)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fillGenres();case 2:return e.next=4,this.fillMovie();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"Movie Form"}),Object(F.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")]})]})}}]),n}(je),me=pe,be=function(){return Object(F.jsx)("h1",{children:"Customers"})},ve=function(){return Object(F.jsx)("h1",{children:"Not Found"})},fe=function(){return Object(F.jsx)("h1",{children:"Rentals"})},Oe=n(94),ge=function(e){var t=e.user;return Object(F.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(F.jsx)(x.a,{className:"navbar-brand",to:"/",children:"v-Movies"}),Object(F.jsx)("button",{className:"navbar-toggler ",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(F.jsx)("span",{className:"navbar-toggler-icon"})}),Object(F.jsx)("div",{className:" navbar-collapse ",id:"navbarNav",children:Object(F.jsxs)("ul",{className:"navbar-nav",children:[Object(F.jsx)("li",{className:"nav-item active",children:Object(F.jsxs)(Oe.a,{className:"nav-link",to:"/movies",children:["Movie ",Object(F.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(Oe.a,{className:"nav-link",to:"/customers",children:"Customers"})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(Oe.a,{className:"nav-link",to:"/rentals",children:"Rentals"})}),!t&&Object(F.jsxs)(a.a.Fragment,{children:[Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(Oe.a,{className:"nav-link",to:"/login",children:"Login"})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(Oe.a,{className:"nav-link",to:"/register",children:"Register"})})]}),t&&Object(F.jsxs)(a.a.Fragment,{children:[Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(Oe.a,{className:"nav-link",to:"/profile",children:t.name})}),Object(F.jsx)("li",{className:"nav-item",children:Object(F.jsx)(Oe.a,{className:"nav-link",to:"/logout",children:"Logout"})})]})]})})]})},xe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{username:"",password:""},errors:{}},e.doSubmit=Object(g.a)(O.a.mark((function t(){var n,r,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.state.data,t.next=4,A.login(n.username,n.password);case 4:r=e.props.location.state,window.location=r?r.from.pathname:"/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((a=Object(i.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:a}));case 11:console.log("Submitted");case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(u.a)(n,[{key:"render",value:function(){return A.getCurrenUser()?Object(F.jsx)(m.a,{to:"/"}):Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"Login"}),Object(F.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")]})]})}}]),n}(je),ye=xe,ke=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){A.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),n}(a.a.Component),we=ke,Se=I.a+"/users";function Ne(e){return C.post(Se,{email:e.username,password:e.password,name:e.name})}var Ce=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={username:ae.a.string().required().email().label("Username"),password:ae.a.string().required().min(5).label("Password"),name:ae.a.string().required().label("Name")},e.doSubmit=Object(g.a)(O.a.mark((function t(){var n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Ne(e.state.data);case 3:n=t.sent,A.loginWithJwt(n.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(i.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:r}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(u.a)(n,[{key:"render",value:function(){return Object(F.jsxs)("div",{children:[Object(F.jsx)("h1",{children:"Register"}),Object(F.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")]})]})}}]),n}(je),Ie=Ce,Re=(n(88),n(89),["path","component","render"]),_e=function(e){e.path;var t=e.component,n=e.render,r=Object(oe.a)(e,Re);return Object(F.jsx)(p.a,Object(i.a)(Object(i.a)({},r),{},{render:function(e){return A.getCurrenUser()?t?Object(F.jsx)(t,Object(i.a)({},e)):n(e):Object(F.jsx)(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Pe=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=A.getCurrenUser();this.setState({user:e})}},{key:"render",value:function(){var e=this;this.state.user;return Object(F.jsxs)(a.a.Fragment,{children:[Object(F.jsx)(b.ToastContainer,{}),Object(F.jsx)(ge,{user:this.state.user}),Object(F.jsx)("main",{className:"container",children:Object(F.jsxs)(j.a,{children:[Object(F.jsx)(p.a,{path:"/register",component:Ie}),Object(F.jsx)(p.a,{path:"/login",component:ye}),Object(F.jsx)(p.a,{path:"/logout",component:we}),Object(F.jsx)(_e,{path:"/movies/:id",component:me}),Object(F.jsx)(p.a,{path:"/movies",render:function(t){return Object(F.jsx)(ne,Object(i.a)(Object(i.a)({},t),{},{user:e.state.user}))}}),Object(F.jsx)(p.a,{path:"/customers",component:be}),Object(F.jsx)(p.a,{path:"/rentals",component:fe}),Object(F.jsx)(p.a,{path:"/not-found",component:ve}),Object(F.jsx)(m.a,{from:"/",exact:!0,to:"/movies"}),Object(F.jsx)(m.a,{exact:!0,to:"/not-found"})]})})]})}}]),n}(r.Component),De=Pe,Me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,98)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};n(90),n(91);c.a.render(Object(F.jsx)(o.a,{children:Object(F.jsx)(De,{})}),document.getElementById("root")),Me()}},[[92,1,2]]]);
//# sourceMappingURL=main.b8d17274.chunk.js.map