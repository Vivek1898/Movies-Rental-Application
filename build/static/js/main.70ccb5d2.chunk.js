(this["webpackJsonpproject-tidly"]=this["webpackJsonpproject-tidly"]||[]).push([[0],{49:function(e,t,n){},88:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),s=n(29),c=n.n(s),o=n(95),i=(n(49),n(3)),l=n(5),u=n(6),d=n(8),h=n(7),j=n(96),m=n(44),p=n(94),b=n(18),v=n(31),f=n(4),O=n.n(f),g=n(10),x=n(30),y=n(42),k=n.n(y),w=n(16),S=n.n(w);var N={init:function(){},log:function(e){console.error(e)}};S.a.defaults.baseURL="https://v-movies-data.herokuapp.com/api",S.a.interceptors.response.use(null,(function(e){return e.response&&e.response.status>=400&&e.response.status<500||(N.log(e),b.toast.error("An unexpected error occurs")),Promise.reject(e)}));var C={get:S.a.get,post:S.a.post,put:S.a.put,delete:S.a.delete,setJwt:function(e){S.a.defaults.headers.common["x-auth-token"]=e}},I="/auth",R="token";function _(){return(_=Object(g.a)(O.a.mark((function e(t,n){var r,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.post(I,{email:t,password:n});case 2:r=e.sent,a=r.data,localStorage.setItem(R,a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(g.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem(R,t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return localStorage.getItem(R)}C.setJwt(D());var M={login:function(e,t){return _.apply(this,arguments)},loginWithJwt:function(e){return P.apply(this,arguments)},logout:function(){localStorage.removeItem(R)},getCurrenUser:function(){try{var e=localStorage.getItem(R);return k()(e)}catch(t){return null}},getJwt:D},A=n(0),F=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).raiseSort=function(t){var n=Object(i.a)({},e.props.sortColumn);n.path===t?n.order="asc"===n.order?"desc":"asc":(n.path=t,n.order="asc"),e.props.onSort(n)},e.renderSortIcon=function(t){var n=e.props.sortColumn;return t.path!==n.path?null:"asc"===n.order?Object(A.jsx)("i",{className:"fa fa-sort-asc"}):Object(A.jsx)("i",{className:"fa fa-sort-desc"})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(A.jsx)("thead",{children:Object(A.jsx)("tr",{children:this.props.columns.map((function(t){return Object(A.jsxs)("th",{className:"clickable ",onClick:function(){return e.raiseSort(t.path)},children:[t.label," ",e.renderSortIcon(t)]},t.path||t.key)}))})})}}]),n}(a.a.Component),L=F,T=n(14),q=n.n(T),U=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).rendercell=function(e,t){return t.content?t.content(e):q.a.get(e,t.path)},e.creteKey=function(e,t){return e._id+(t.path||t.key)},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.data,r=t.columns;return Object(A.jsx)("tbody",{children:n.map((function(t){return Object(A.jsx)("tr",{children:r.map((function(n){return Object(A.jsx)("td",{children:e.rendercell(t,n)},e.creteKey(t,n))}))},t._id)}))})}}]),n}(a.a.Component),B=U,J=function(e){var t=e.columns,n=e.sortColumn,r=e.onSort,a=e.data;return Object(A.jsxs)("table",{className:"table",children:[Object(A.jsx)(L,{columns:t,sortColumn:n,onSort:r}),Object(A.jsx)(B,{columns:t,data:a})]})},G=function(e){var t="fa fa-heart";return e.liked||(t+="-o"),Object(A.jsx)("i",{onClick:e.onClick,style:{cursor:"pointer"},className:t,"aria-hidden":"true"})},z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n),(e=t.call(this)).columns=[{path:"title",label:"Title",content:function(e){return Object(A.jsx)(x.a,{to:"/movies/".concat(e._id),children:e.title})}},{path:"genre.name",label:"Genre"},{path:"numberInStock",label:"Stock"},{path:"dailyRentalRate",label:"Rate"},{key:"like",content:function(t){return Object(A.jsx)(G,{liked:t.liked,onClick:function(){return e.props.onLike(t)}})}}],e.deleteColumn={key:"delete",content:function(t){return Object(A.jsx)("button",{onClick:function(){return e.props.onDelete(t)},className:"btn btn-danger btn-sm",children:"Delete"})}};var r=M.getCurrenUser();return r&&r.isAdmin&&e.columns.push(e.deleteColumn),e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.movies,n=e.onSort,r=e.sortColumn;return Object(A.jsx)(J,{columns:this.columns,data:t,sortColumn:r,onSort:n})}}]),n}(a.a.Component),Q=function(e){var t=e.items,n=e.textProperty,r=e.valueProperty,a=e.onitemSelect,s=e.selecteditem;return Object(A.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(A.jsx)("li",{onClick:function(){return a(e)},className:e===s?"list-group-item active":"list-group-item",children:e[n]},e[r])}))})};Q.defaultProps={textProperty:"name",valueProperty:"_id"};var W=Q,E="/movies";function K(e){return C.get("/movies/"+e)}function V(e){if(e._id){var t=Object(i.a)({},e);return delete t._id,C.put("/movies/"+e._id,t)}return C.post(E,e)}function H(e){return C.delete("/movies/"+e)}function X(){return C.get("/genres")}var Y=function(e){var t=e.itemscount,n=e.pagesize,r=e.onPagechange,a=e.currentpage;console.log(a);var s=Math.ceil(t/n);if(1===s)return null;var c=q.a.range(1,s+1);return Object(A.jsx)("nav",{children:Object(A.jsx)("ul",{className:"pagination",children:c.map((function(e){return Object(A.jsx)("li",{className:e===a?"page-item active":"page-item",children:Object(A.jsx)("a",{className:"page-link",onClick:function(){return r(e)},children:e})},e)}))})})};function Z(e,t,n){var r=(t-1)*n;return q()(e).slice(r).take(n).value()}var $=function(e){var t=e.value,n=e.onChange;return Object(A.jsx)("input",{type:"text",name:"query",className:"form-control my-3",placeholder:"Search...",value:t,onChange:function(e){return n(e.currentTarget.value)}})},ee=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={movies:[],genres:[],currentpage:1,searchQuery:"",selectedgenre:null,pagesize:4,sortColumn:{path:"title",order:"asc"}},e.handleDelete=function(){var t=Object(g.a)(O.a.mark((function t(n){var r,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.state.movies,a=r.filter((function(e){return e._id!==n._id})),e.setState({movies:a}),t.prev=3,t.next=6,H(n._id);case 6:t.next=12;break;case 8:t.prev=8,t.t0=t.catch(3),t.t0.response&&404===t.t0.response.status&&b.toast.error("Movie already been deleted"),e.setState({movies:r});case 12:case"end":return t.stop()}}),t,null,[[3,8]])})));return function(e){return t.apply(this,arguments)}}(),e.handlelike=function(t){console.log(t);var n=Object(v.a)(e.state.movies),r=n.indexOf(t);n[r]=Object(i.a)({},n[r]),n[r].liked=!n[r].liked,e.setState({movies:n})},e.handlepagechange=function(t){e.setState({currentpage:t})},e.handlegenreselect=function(t){e.setState({selectedgenre:t,searchQuery:"",currentpage:1})},e.handleSearch=function(t){e.setState({searchQuery:t,selectedgenre:null,currentpage:1})},e.handleSort=function(t){e.setState({sortColumn:t})},e.getPagedData=function(){var t=e.state,n=t.pagesize,r=t.currentpage,a=t.sortColumn,s=t.selectedgenre,c=t.searchQuery,o=t.movies,i=o;c?i=o.filter((function(e){return e.title.toLowerCase().startsWith(c.toLowerCase())})):s&&s._id&&(i=o.filter((function(e){return e.genre._id===s._id})));var l=Z(q.a.orderBy(i,[a.path],[a.order]),r,n);return{totalCount:i.length,data:l}},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,n,r,a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:return t=e.sent,n=t.data,r=[{_id:"",name:"All Genres"}].concat(Object(v.a)(n)),e.next=7,C.get(E);case 7:a=e.sent,s=a.data,this.setState({movies:s,genres:r});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.state.movies.length;var e=this.state,t=e.pagesize,n=e.currentpage,r=e.sortColumn,a=e.searchQuery,s=this.props.user,c=this.getPagedData(),o=c.totalCount,i=c.data;return Object(A.jsxs)("div",{className:"row",children:[Object(A.jsx)("div",{className:"col-3",children:Object(A.jsx)(W,{items:this.state.genres,selecteditem:this.state.selectedgenre,onitemSelect:this.handlegenreselect})}),Object(A.jsxs)("div",{className:"col",children:[s&&Object(A.jsx)(x.a,{to:"/movies/new",className:"btn btn-primary",style:{marginBottom:20},children:"New Movie"}),Object(A.jsxs)("p",{children:["Showing ",o," movies in database."]}),Object(A.jsx)($,{value:a,onChange:this.handleSearch}),Object(A.jsx)(z,{movies:i,sortColumn:r,onLike:this.handlelike,onDelete:this.handleDelete,onSort:this.handleSort}),Object(A.jsx)(Y,{itemscount:o,pagesize:t,currentpage:n,onPagechange:this.handlepagechange})]})]})}}]),n}(a.a.Component),te=ee,ne=n(9),re=n.n(ne),ae=n(20),se=n(43),ce=n(19),oe=["name","label","error"],ie=function(e){var t=e.name,n=e.label,r=e.error,a=Object(ce.a)(e,oe);return Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("label",{htmlFor:t,children:n}),Object(A.jsx)("input",Object(i.a)(Object(i.a)({},a),{},{name:t,id:t,className:"form-control"})),r&&Object(A.jsx)("div",{className:"alert alert-danger",children:r}),Object(A.jsx)("br",{})]})},le=["name","label","options","error"],ue=function(e){var t=e.name,n=e.label,r=e.options,a=e.error,s=Object(ce.a)(e,le);return Object(A.jsxs)("div",{className:"form-group",children:[Object(A.jsx)("label",{htmlFor:t,children:n}),Object(A.jsxs)("select",Object(i.a)(Object(i.a)({name:t,id:t},s),{},{className:"form-control",children:[Object(A.jsx)("option",{value:""}),r.map((function(e){return Object(A.jsx)("option",{value:e._id,children:e.name},e._id)}))]})),a&&Object(A.jsx)("div",{className:"alert alert-danger",children:a})]})},de=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{},errors:{}},e.schema={username:re.a.string().required().label("Username"),password:re.a.string().required().label("Password")},e.validate=function(){var t=re.a.validate(e.state.data,e.schema,{abortEarly:!1});if(!t.error)return null;var n,r={},a=Object(se.a)(t.error.details);try{for(a.s();!(n=a.n()).done;){var s=n.value;r[s.path[0]]=s.message}}catch(c){a.e(c)}finally{a.f()}return r},e.validateProperty=function(t){var n=t.name,r=t.value,a=Object(ae.a)({},n,r),s=Object(ae.a)({},n,e.schema[n]),c=re.a.validate(a,s).error;return c?c.details[0].message:null},e.handleSubmit=function(t){t.preventDefault();var n=e.validate();e.setState({errors:n||{}}),n||e.doSubmit()},e.handleChange=function(t){var n=t.currentTarget,r=Object(i.a)({},e.state.errors),a=e.validateProperty(n);a?r[n.name]=a:delete r[n.name];var s=Object(i.a)({},e.state.data);s[n.name]=n.value,e.setState({data:s,errors:r})},e}return Object(u.a)(n,[{key:"renderButton",value:function(e){return Object(A.jsx)("button",{disabled:this.validate(),className:"btn btn-primary",children:e})}},{key:"renderSelect",value:function(e,t,n){var r=this.state,a=r.data,s=r.errors;return Object(A.jsx)(ue,{name:e,value:a[e],label:t,options:n,onChange:this.handleChange,error:s[e]})}},{key:"renderInput",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text",r=this.state,a=r.data,s=r.errors;return Object(A.jsx)(ie,{type:n,name:e,value:a[e],label:t,onChange:this.handleChange,error:s[e]})}}]),n}(a.a.Component),he=de,je=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{title:"",genreId:"",numberInStock:"",dailyRentalRate:""},genres:[],errors:{}},e.schema={_id:re.a.string(),title:re.a.string().required().label("Title"),genreId:re.a.string().required().label("Genre"),numberInStock:re.a.number().required().min(0).max(100).label("Number in Stock"),dailyRentalRate:re.a.number().required().min(0).max(10).label("Daily Rental Rate")},e.doSubmit=Object(g.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V(e.state.data);case 2:e.props.history.push("/movies");case 3:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(n,[{key:"fillGenres",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X();case 2:t=e.sent,n=t.data,this.setState({genres:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"fillMovie",value:function(){var e=Object(g.a)(O.a.mark((function e(){var t,n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"new"!==(t=this.props.match.params.id)){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,K(t);case 6:n=e.sent,r=n.data,this.setState({data:this.mapToViewModel(r)}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&this.props.history.replace("/not-found");case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(g.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fillGenres();case 2:return e.next=4,this.fillMovie();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"mapToViewModel",value:function(e){return{_id:e._id,title:e.title,genreId:e.genre._id,numberInStock:e.numberInStock,dailyRentalRate:e.dailyRentalRate}}},{key:"render",value:function(){return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Movie Form"}),Object(A.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("title","Title"),this.renderSelect("genreId","Genre",this.state.genres),this.renderInput("numberInStock","Number in Stock","number"),this.renderInput("dailyRentalRate","Rate"),this.renderButton("Save")]})]})}}]),n}(he),me=je,pe=function(){return Object(A.jsx)("h1",{children:"Customers"})},be=function(){return Object(A.jsx)("h1",{children:"Not Found"})},ve=function(){return Object(A.jsx)("h1",{children:"Rentals"})},fe=n(93),Oe=function(e){var t=e.user;return Object(A.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(A.jsx)(x.a,{className:"navbar-brand",to:"/",children:"v-Movies"}),Object(A.jsx)("button",{className:"navbar-toggler ",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(A.jsx)("span",{className:"navbar-toggler-icon"})}),Object(A.jsx)("div",{className:" navbar-collapse ",id:"navbarNav",children:Object(A.jsxs)("ul",{className:"navbar-nav",children:[Object(A.jsx)("li",{className:"nav-item active",children:Object(A.jsxs)(fe.a,{className:"nav-link",to:"/movies",children:["Movie ",Object(A.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(fe.a,{className:"nav-link",to:"/customers",children:"Customers"})}),Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(fe.a,{className:"nav-link",to:"/rentals",children:"Rentals"})}),!t&&Object(A.jsxs)(a.a.Fragment,{children:[Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(fe.a,{className:"nav-link",to:"/login",children:"Login"})}),Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(fe.a,{className:"nav-link",to:"/register",children:"Register"})})]}),t&&Object(A.jsxs)(a.a.Fragment,{children:[Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(fe.a,{className:"nav-link",to:"/profile",children:t.name})}),Object(A.jsx)("li",{className:"nav-item",children:Object(A.jsx)(fe.a,{className:"nav-link",to:"/logout",children:"Logout"})})]})]})})]})},ge=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{username:"",password:""},errors:{}},e.doSubmit=Object(g.a)(O.a.mark((function t(){var n,r,a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=e.state.data,t.next=4,M.login(n.username,n.password);case 4:r=e.props.location.state,window.location=r?r.from.pathname:"/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((a=Object(i.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:a}));case 11:console.log("Submitted");case 12:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(u.a)(n,[{key:"render",value:function(){return M.getCurrenUser()?Object(A.jsx)(p.a,{to:"/"}):Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Login"}),Object(A.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderButton("Login")]})]})}}]),n}(he),xe=ge,ye=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){M.logout(),window.location="/"}},{key:"render",value:function(){return null}}]),n}(a.a.Component),ke=ye;function we(e){return C.post("/users",{email:e.username,password:e.password,name:e.name})}var Se=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={data:{username:"",password:"",name:""},errors:{}},e.schema={username:re.a.string().required().email().label("Username"),password:re.a.string().required().min(5).label("Password"),name:re.a.string().required().label("Name")},e.doSubmit=Object(g.a)(O.a.mark((function t(){var n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,we(e.state.data);case 3:n=t.sent,M.loginWithJwt(n.headers["x-auth-token"]),window.location="/",t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&400===t.t0.response.status&&((r=Object(i.a)({},e.state.errors)).username=t.t0.response.data,e.setState({errors:r}));case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e}return Object(u.a)(n,[{key:"render",value:function(){return Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"Register"}),Object(A.jsxs)("form",{onSubmit:this.handleSubmit,children:[this.renderInput("username","Username"),this.renderInput("password","Password","password"),this.renderInput("name","Name"),this.renderButton("Register")]})]})}}]),n}(he),Ne=Se,Ce=(n(87),n(88),["path","component","render"]),Ie=function(e){e.path;var t=e.component,n=e.render,r=Object(ce.a)(e,Ce);return Object(A.jsx)(m.a,Object(i.a)(Object(i.a)({},r),{},{render:function(e){return M.getCurrenUser()?t?Object(A.jsx)(t,Object(i.a)({},e)):n(e):Object(A.jsx)(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Re=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=M.getCurrenUser();this.setState({user:e})}},{key:"render",value:function(){var e=this;this.state.user;return Object(A.jsxs)(a.a.Fragment,{children:[Object(A.jsx)(b.ToastContainer,{}),Object(A.jsx)(Oe,{user:this.state.user}),Object(A.jsx)("main",{className:"container",children:Object(A.jsxs)(j.a,{children:[Object(A.jsx)(m.a,{path:"/register",component:Ne}),Object(A.jsx)(m.a,{path:"/login",component:xe}),Object(A.jsx)(m.a,{path:"/logout",component:ke}),Object(A.jsx)(Ie,{path:"/movies/:id",component:me}),Object(A.jsx)(m.a,{path:"/movies",render:function(t){return Object(A.jsx)(te,Object(i.a)(Object(i.a)({},t),{},{user:e.state.user}))}}),Object(A.jsx)(m.a,{path:"/customers",component:pe}),Object(A.jsx)(m.a,{path:"/rentals",component:ve}),Object(A.jsx)(m.a,{path:"/not-found",component:be}),Object(A.jsx)(p.a,{from:"/",exact:!0,to:"/movies"}),Object(A.jsx)(p.a,{exact:!0,to:"/not-found"})]})})]})}}]),n}(r.Component),_e=Re,Pe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,97)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};n(89),n(90);c.a.render(Object(A.jsx)(o.a,{children:Object(A.jsx)(_e,{})}),document.getElementById("root")),Pe()}},[[91,1,2]]]);
//# sourceMappingURL=main.70ccb5d2.chunk.js.map