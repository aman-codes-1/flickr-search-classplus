(this.webpackJsonpflickr_search_classplus=this.webpackJsonpflickr_search_classplus||[]).push([[0],{13:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),i=a(8),c=a.n(i),r=a(3),o=a(4),l=a(2),h=a(6),u=a(5),p=(a(13),a(21));function m(){return(void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop)<function(){var e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)}()-window.innerHeight}function d(e){if(e.status>=200&&e.status<300)return e;throw e}function g(e){return e.json()}function f(e,t,a,n){return"https://farm".concat(e,".staticflickr.com/").concat(t,"/").concat(a,"_").concat(n,".jpg")}var j=a(0),b=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onImageClick=n.onImageClick.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"onImageClick",value:function(e){this.props.onImageClick(e)}},{key:"renderImageItem",value:function(e,t,a){var n=e.farm,s=e.server,i=e.id,c=e.secret;return Object(j.jsx)("li",{className:"image-item",onClick:function(){return a(t)},children:Object(j.jsx)("img",{src:f(n,s,i,c),alt:"",width:"300px"})},t)}},{key:"render",value:function(){var e=this;return Object(j.jsx)("ul",{className:"h-flex sb",children:this.props.images.map((function(t,a){return e.renderImageItem(t,a,e.onImageClick)}))})}}]),a}(s.a.Component),v=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={showMeta:!1},n.onImageClick=n.onImageClick.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"onImageClick",value:function(e){e.stopPropagation(),this.setState({showMeta:!this.state.showMeta})}},{key:"render",value:function(){var e=this.props.image,t=e.title,a=e.farm,n=e.server,s=e.id,i=e.secret;return Object(j.jsxs)("div",{className:"image-popup-container",onClick:this.props.onHide,children:[Object(j.jsx)("img",{className:"popup-image",src:f(a,n,s,i),alt:"",style:{marginTop:"140px"},onClick:this.onImageClick}),this.state.showMeta&&Object(j.jsxs)("ul",{className:"image-metadata",children:[Object(j.jsxs)("li",{style:{margin:"5px 0"},children:["Title: ",t]}),Object(j.jsxs)("li",{style:{margin:"5px 0"},children:["ImageId: ",s]}),Object(j.jsxs)("li",{style:{margin:"5px 0"},children:["FarmId: ",a]}),Object(j.jsxs)("li",{style:{margin:"5px 0"},children:["ServerId: ",n]}),Object(j.jsxs)("li",{style:{margin:"5px 0"},children:["SecretId: ",i]})]})]})}}]),a}(s.a.Component),O={BASE_URL:"https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=469468127506a1e76dd33836f37e0ceb&per_page=20&format=json&nojsoncallback=1",GET_RECENT_URL:"https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=469468127506a1e76dd33836f37e0ceb&extras=recent&per_page=20&page=1&format=json&nojsoncallback=1",STORAGE_KEY:"flicker_search_queries"},x=function(e){Object(h.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(r.a)(this,a),n=t.call(this,e);var s=JSON.parse(localStorage.getItem(O.STORAGE_KEY));return n.state={searchText:"",imageList:[],pageNumber:1,showPopUp:!1,popUpImage:null,queries:s||[]},n.onSearchInputChange=n.onSearchInputChange.bind(Object(l.a)(n)),n.handleImageClick=n.handleImageClick.bind(Object(l.a)(n)),n.onPopUpHide=n.onPopUpHide.bind(Object(l.a)(n)),n.handleScroll=n.handleScroll.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.onscroll=function(e,t,a){var n,s;return t||(t=250),function(){var i=a||this,c=new Date,r=arguments;n&&c<n+t?(clearTimeout(s),s=setTimeout((function(){n=c,e.apply(i,r)}),t)):(n=c,e.apply(i,r))}}((function(){m()||e.handleScroll()}),1e3),this.makeDebouncedSearch=function(e,t,a){var n;return function(){var s=this,i=arguments,c=function(){n=null,a||e.apply(s,i)},r=a&&!n;clearTimeout(n),n=setTimeout(c,t),r&&e.apply(s,i)}}((function(){e.state.queries.push(e.state.searchText),e.setState({queries:e.state.queries},e.updateLocalStorage());var t=O.BASE_URL+"&text="+e.state.searchText;fetch(t).then(d).then(g).then((function(t){var a=t.photos.photo.map((function(e){var t="https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+".jpg";return Object(j.jsx)("img",{alt:"dogs",src:t})}));e.setState({imageList:a})})).catch((function(e){console.log(e)}))}),1e3),fetch(O.GET_RECENT_URL).then(d).then(g).then(function(e){var t=e.photos.photo.map((function(e){var t="https://farm"+e.farm+".staticflickr.com/"+e.server+"/"+e.id+"_"+e.secret+".jpg";return Object(j.jsx)("img",{alt:"dogs",src:t})}));this.setState({imageList:t})}.bind(this))}},{key:"updateLocalStorage",value:function(){localStorage.setItem(O.STORAGE_KEY,JSON.stringify(this.state.queries))}},{key:"onSearchInputChange",value:function(e){var t=e.currentTarget.value;this.setState({searchText:t});var a=t.replace(/\s+$/,"");a.length&&this.makeDebouncedSearch(a)}},{key:"handleScroll",value:function(){var e=this,t=O.BASE_URL+"&text="+this.state.searchText+"&page="+(this.state.pageNumber+1);fetch(t).then(d).then(g).then((function(t){t.photos.photo.forEach((function(t){return e.state.imageList.push(t)})),e.setState({pageNumber:t.photos.page,imageList:e.state.imageList})})).catch((function(e){console.log(e)}))}},{key:"handleImageClick",value:function(e){this.setState({popUpImage:this.state.imageList[e]})}},{key:"onPopUpHide",value:function(){this.setState({popUpImage:null})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsxs)("div",{className:"app-header",children:[Object(j.jsx)("h2",{style:{margin:"1rem 0"},children:"Flickr Search Tool"}),Object(j.jsx)("div",{className:"h-flex jc ac search-bar",children:Object(j.jsx)("input",{type:"text",placeholder:"Search Image",className:"search-input",value:this.state.searchText,onChange:this.onSearchInputChange})}),this.state.queries.length>0&&Object(j.jsxs)("div",{style:{marginTop:"16px"},children:[Object(j.jsx)("h5",{style:{marginBottom:"5px"},children:"Recent Searches"}),Object(j.jsx)("ul",{className:"h-flex jc",children:this.state.queries.map((function(e,t){return Object(j.jsx)("li",{className:"query",children:e},t)}))})]})]}),Object(j.jsxs)("div",{className:"app-content",ref:"appContent",children:[this.state.imageList.length?Object(j.jsx)(b,{images:this.state.imageList,onImageClick:this.handleImageClick}):Object(j.jsx)("p",{style:{margin:"1rem 0"},children:"Try searching for some images in the search bar"}),Object(j.jsx)("ul",{className:"h-flex sb",children:this.state.imageList}),Object(j.jsx)(p.a,{transitionName:"popup-container",transitionEnterTimeout:400,transitionLeaveTimeout:200,children:this.state.popUpImage&&Object(j.jsx)(v,{image:this.state.popUpImage,onHide:this.onPopUpHide})})]})]})}},{key:"componentWillUnmount",value:function(){window.onscroll=void 0}}]),a}(s.a.Component);a(18);c.a.render(Object(j.jsx)(x,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.bc5e867d.chunk.js.map