(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{11:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__Gt1e9",ImageGalleryItem__image:"ImageGalleryItem_ImageGalleryItem__image__2vC2Q"}},23:function(e,t,a){e.exports={container:"Container_container__3K1SH"}},24:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3taVM"}},25:function(e,t,a){e.exports={Button:"Button_Button__37Kxr"}},31:function(e,t,a){},32:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(22),c=a.n(o),i=(a(31),a(13)),l=a(4),s=a(5),u=a(7),h=a(6),m=(a(32),a(8)),d=a.n(m),g=a(0),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleInput=function(t){e.setState({value:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.value)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("header",{className:d.a.Searchbar,children:Object(g.jsxs)("form",{className:d.a.SearchForm,children:[Object(g.jsx)("button",{type:"submit",className:d.a.SearchForm__button,onClick:this.handleSubmit,children:Object(g.jsx)("span",{className:d.a.SearchForm__button__label,children:"Search"})}),Object(g.jsx)("input",{className:d.a.SearchForm__input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.handleInput})]})})}}]),a}(r.a.Component),p=a(23),_=a.n(p),f=function(e){e.title;var t=e.children;return Object(g.jsx)("div",{className:_.a.container,children:t})},j=a(11),O=a.n(j),y=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleImgClick=function(){e.props.onClick(e.props.largeImageURL)},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("li",{className:O.a.ImageGalleryItem,onClick:this.handleImgClick,children:Object(g.jsx)("img",{src:this.props.webformatURL,alt:"",className:O.a.ImageGalleryItem__image})})}}]),a}(r.a.Component),v=a(24),I=a.n(v),S=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return Object(g.jsx)("ul",{className:I.a.ImageGallery,children:this.props.images.map((function(t){var a=t.id,n=t.webformatURL,r=t.largeImageURL;return Object(g.jsx)(y,{webformatURL:n,largeImageURL:r,onClick:e.props.onClick},a)}))})}}]),a}(r.a.Component),x=a(25),C=a.n(x),k=function(e){var t=e.onLoadMore;return Object(g.jsx)("button",{type:"button",onClick:t,className:C.a.Button,children:"Load more"})},w=a(12),M=a.n(w);M.a.defaults.baseURL="https://pixabay.com/api/?key=".concat("19701765-66040315454630f125fe17080","&");var L=function(e,t){var a=e.replace(/ /g,"+");return M.a.get("&q=".concat(a,"&image_type=photo&page=").concat(t,"&per_page=12")).then((function(e){return e.data.hits}))},F=(a(52),a(26)),G=a.n(F),N=a(9),U=a.n(N),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){window.addEventListener("keydown",e.handleEscape)},e.componentWillUnmount=function(){window.removeEventListener("keydown",e.handleEscape)},e.handleEscape=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(s.a)(a,[{key:"render",value:function(){return Object(g.jsx)("div",{className:U.a.Overlay,onClick:this.handleBackdropClick,children:Object(g.jsx)("div",{className:U.a.Modal,children:Object(g.jsx)("img",{className:U.a.ModalImg,src:this.props.currImg,alt:""})})})}}]),a}(r.a.Component),D=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],currentPage:1,currentQuery:"",needLoader:!1,showModal:!1,modalImg:""},e.handleSearchSubmit=function(t){e.setState({currentQuery:t,currentPage:1,images:[]})},e.fetchImages=function(){e.setState({needLoader:!0});var t=e.state,a=t.currentQuery,n=t.currentPage;L(a,n).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t)),currentPage:e.currentPage+1}}))})).catch((function(e){return console.log(e)})).finally(e.setState({needLoader:!1}))},e.handleLoadMore=function(){e.fetchImages()},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal,modalImg:t}}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.currentQuery!==this.state.currentQuery&&this.fetchImages(),0!==t.images.length&&t.images!==this.state.images&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=0!==this.state.images.length;return Object(g.jsxs)(g.Fragment,{children:[this.state.showModal&&Object(g.jsx)(B,{currImg:this.state.modalImg,onClose:this.toggleModal}),Object(g.jsxs)(f,{children:[Object(g.jsx)(b,{onSubmit:this.handleSearchSubmit}),Object(g.jsx)(S,{images:this.state.images,onClick:this.toggleModal}),this.state.needLoader&&Object(g.jsx)(G.a,{type:"ThreeDots",color:"#DCDCDC",height:100,width:100,timeout:3e3}),e&&Object(g.jsx)(k,{onLoadMore:this.handleLoadMore})]})]})}}]),a}(r.a.Component),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,74)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(g.jsx)(r.a.StrictMode,{children:Object(g.jsx)(D,{})}),document.getElementById("root")),E()},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1UyAI",SearchForm:"Searchbar_SearchForm__KvQ95",SearchForm__button:"Searchbar_SearchForm__button__3Pr1V",SearchForm__button__label:"Searchbar_SearchForm__button__label__3dSCK",SearchForm__input:"Searchbar_SearchForm__input__lCmeU"}},9:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2Tif-",Modal:"Modal_Modal__1YxWG",ModalImg:"Modal_ModalImg__XAV3U"}}},[[73,1,2]]]);
//# sourceMappingURL=main.1a6e9fdb.chunk.js.map