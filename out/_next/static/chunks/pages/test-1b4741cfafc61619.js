(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[378],{4184:function(e,n){var t;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],n=0;n<arguments.length;n++){var t=arguments[n];if(t){var o=typeof t;if("string"===o||"number"===o)e.push(t);else if(Array.isArray(t)&&t.length){var i=a.apply(null,t);i&&e.push(i)}else if("object"===o)for(var c in t)r.call(t,c)&&t[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(n,[]))||(e.exports=t)}()},1143:function(e){"use strict";e.exports=function(e,n,t,r,a,o,i,c){if(!e){var s;if(void 0===n)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[t,r,a,o,i,c],l=0;(s=new Error(n.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},7935:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return ye}});var r=t(7294),a=t(7462),o=t(3366),i=t(4184),c=t.n(i);t(1143);function s(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function u(e){var n=function(e,n){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===typeof n?n:String(n)}function l(e,n){return Object.keys(n).reduce((function(t,i){var c,l=t,d=l[s(i)],f=l[i],v=(0,o.Z)(l,[s(i),i].map(u)),m=n[i],p=function(e,n,t){var a=(0,r.useRef)(void 0!==e),o=(0,r.useState)(n),i=o[0],c=o[1],s=void 0!==e,u=a.current;return a.current=s,!s&&u&&i!==n&&c(n),[s?e:i,(0,r.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];t&&t.apply(void 0,[e].concat(r)),c(e)}),[t])]}(f,d,e[m]),h=p[0],y=p[1];return(0,a.Z)({},v,((c={})[i]=h,c[m]=y,c))}),e)}function d(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function f(e){this.setState(function(n){var t=this.constructor.getDerivedStateFromProps(e,n);return null!==t&&void 0!==t?t:null}.bind(this))}function v(e,n){try{var t=this.props,r=this.state;this.props=e,this.state=n,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,r)}finally{this.props=t,this.state=r}}d.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0,v.__suppressDeprecationWarning=!0;var m=r.createContext({});m.Consumer,m.Provider;function p(e,n){var t=(0,r.useContext)(m);return e||t[n]||n}var h=r.createContext(null),y=r.createContext(null);y.displayName="AccordionContext";var g=y;var x=r.forwardRef((function(e,n){var t=e.as,i=void 0===t?"button":t,c=e.children,s=e.eventKey,u=e.onClick,l=(0,o.Z)(e,["as","children","eventKey","onClick"]),d=function(e,n){var t=(0,r.useContext)(g),a=(0,r.useContext)(h);return function(r){a&&a(e===t?null:e,r),n&&n(r)}}(s,u);return"button"===i&&(l.type="button"),r.createElement(i,(0,a.Z)({ref:n,onClick:d},l),c)}));function b(e){var n=function(e){return e&&e.ownerDocument||document}(e);return n&&n.defaultView||window}var E=/([A-Z])/g;var w=/^ms-/;function N(e){return function(e){return e.replace(E,"-$1").toLowerCase()}(e).replace(w,"-ms-")}var C=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var _=function(e,n){var t="",r="";if("string"===typeof n)return e.style.getPropertyValue(N(n))||function(e,n){return b(e).getComputedStyle(e,n)}(e).getPropertyValue(N(n));Object.keys(n).forEach((function(a){var o=n[a];o||0===o?!function(e){return!(!e||!C.test(e))}(a)?t+=N(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(N(a))})),r&&(t+="transform: "+r+";"),e.style.cssText+=";"+t},P=t(9325),k=!("undefined"===typeof window||!window.document||!window.document.createElement),Z=!1,A=!1;try{var j={get passive(){return Z=!0},get once(){return A=Z=!0}};k&&(window.addEventListener("test",j,j),window.removeEventListener("test",j,!0))}catch(ge){}var S=function(e,n,t,r){if(r&&"boolean"!==typeof r&&!A){var a=r.once,o=r.capture,i=t;!A&&a&&(i=t.__once||function e(r){this.removeEventListener(n,e,o),t.call(this,r)},t.__once=i),e.addEventListener(n,i,Z?r:o)}e.addEventListener(n,t,r)};var T=function(e,n,t,r){var a=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(n,t,a),t.__once&&e.removeEventListener(n,t.__once,a)};var D=function(e,n,t,r){return S(e,n,t,r),function(){T(e,n,t,r)}};function L(e,n,t){void 0===t&&(t=5);var r=!1,a=setTimeout((function(){r||function(e){var n=document.createEvent("HTMLEvents");n.initEvent("transitionend",!0,!0),e.dispatchEvent(n)}(e)}),n+t),o=D(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function F(e,n,t,r){null==t&&(t=function(e){var n=_(e,"transitionDuration")||"",t=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*t}(e)||0);var a=L(e,t,r),o=D(e,"transitionend",n);return function(){a(),o()}}function O(e,n){var t=_(e,n)||"",r=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*r}function I(e,n){var t=O(e,"transitionDuration"),r=O(e,"transitionDelay"),a=F(e,(function(t){t.target===e&&(a(),n(t))}),t+r)}var K,R=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!==typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];e.apply(this,r),n.apply(this,r)}}),null)};var M={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function q(e,n){var t=n["offset"+e[0].toUpperCase()+e.slice(1)],r=M[e];return t+parseInt(_(n,r[0]),10)+parseInt(_(n,r[1]),10)}var H=((K={})[P.Wj]="collapse",K[P.Ix]="collapsing",K[P.d0]="collapsing",K[P.cn]="collapse show",K),V={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:q},U=r.forwardRef((function(e,n){var t=e.onEnter,i=e.onEntering,s=e.onEntered,u=e.onExit,l=e.onExiting,d=e.className,f=e.children,v=e.dimension,m=void 0===v?"height":v,p=e.getDimensionValue,h=void 0===p?q:p,y=(0,o.Z)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),g="function"===typeof m?m():m,x=(0,r.useMemo)((function(){return R((function(e){e.style[g]="0"}),t)}),[g,t]),b=(0,r.useMemo)((function(){return R((function(e){var n="scroll"+g[0].toUpperCase()+g.slice(1);e.style[g]=e[n]+"px"}),i)}),[g,i]),E=(0,r.useMemo)((function(){return R((function(e){e.style[g]=null}),s)}),[g,s]),w=(0,r.useMemo)((function(){return R((function(e){e.style[g]=h(g,e)+"px",e.offsetHeight}),u)}),[u,h,g]),N=(0,r.useMemo)((function(){return R((function(e){e.style[g]=null}),l)}),[g,l]);return r.createElement(P.ZP,(0,a.Z)({ref:n,addEndListener:I},y,{"aria-expanded":y.role?y.in:null,onEnter:x,onEntering:b,onEntered:E,onExit:w,onExiting:N}),(function(e,n){return r.cloneElement(f,(0,a.Z)({},n,{className:c()(d,f.props.className,H[e],"width"===g&&"width")}))}))}));U.defaultProps=V;var B=U,W=r.forwardRef((function(e,n){var t=e.children,i=e.eventKey,c=(0,o.Z)(e,["children","eventKey"]),s=(0,r.useContext)(g);return r.createElement(h.Provider,{value:null},r.createElement(B,(0,a.Z)({ref:n,in:s===i},c),r.createElement("div",null,r.Children.only(t))))}));W.displayName="AccordionCollapse";var X=W,Y=r.forwardRef((function(e,n){var t=l(e,{activeKey:"onSelect"}),i=t.as,s=void 0===i?"div":i,u=t.activeKey,d=t.bsPrefix,f=t.children,v=t.className,m=t.onSelect,y=(0,o.Z)(t,["as","activeKey","bsPrefix","children","className","onSelect"]),x=c()(v,p(d,"accordion"));return r.createElement(g.Provider,{value:u||null},r.createElement(h.Provider,{value:m||null},r.createElement(s,(0,a.Z)({ref:n},y,{className:x}),f)))}));Y.displayName="Accordion",Y.Toggle=x,Y.Collapse=X;var $=Y,z=/-(.)/g;var G=function(e){return e[0].toUpperCase()+(n=e,n.replace(z,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function J(e,n){var t=void 0===n?{}:n,i=t.displayName,s=void 0===i?G(e):i,u=t.Component,l=t.defaultProps,d=r.forwardRef((function(n,t){var i=n.className,s=n.bsPrefix,l=n.as,d=void 0===l?u||"div":l,f=(0,o.Z)(n,["className","bsPrefix","as"]),v=p(s,e);return r.createElement(d,(0,a.Z)({ref:t,className:c()(i,v)},f))}));return d.defaultProps=l,d.displayName=s,d}var Q=function(e){return r.forwardRef((function(n,t){return r.createElement("div",(0,a.Z)({},n,{ref:t,className:c()(n.className,e)}))}))},ee=r.createContext(null);ee.displayName="CardContext";var ne=ee,te=r.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,s=e.variant,u=e.as,l=void 0===u?"img":u,d=(0,o.Z)(e,["bsPrefix","className","variant","as"]),f=p(t,"card-img");return r.createElement(l,(0,a.Z)({ref:n,className:c()(s?f+"-"+s:f,i)},d))}));te.displayName="CardImg",te.defaultProps={variant:null};var re=te,ae=Q("h5"),oe=Q("h6"),ie=J("card-body"),ce=J("card-title",{Component:ae}),se=J("card-subtitle",{Component:oe}),ue=J("card-link",{Component:"a"}),le=J("card-text",{Component:"p"}),de=J("card-header"),fe=J("card-footer"),ve=J("card-img-overlay"),me=r.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,s=e.bg,u=e.text,l=e.border,d=e.body,f=e.children,v=e.as,m=void 0===v?"div":v,h=(0,o.Z)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=p(t,"card"),g=(0,r.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return r.createElement(ne.Provider,{value:g},r.createElement(m,(0,a.Z)({ref:n},h,{className:c()(i,y,s&&"bg-"+s,u&&"text-"+u,l&&"border-"+l)}),d?r.createElement(ie,null,f):f))}));me.displayName="Card",me.defaultProps={body:!1},me.Img=re,me.Title=ce,me.Subtitle=se,me.Body=ie,me.Link=ue,me.Text=le,me.Header=de,me.Footer=fe,me.ImgOverlay=ve;var pe=me,he=t(5893),ye=function(){var e=(0,r.useState)(0),n=e[0],t=e[1];return(0,he.jsx)(he.Fragment,{children:(0,he.jsx)($,{className:"dlab-accordion",id:"accordionFaq",defaultActiveKey:"0",children:[{title:"Accordion Header One",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",bg:"primary"},{title:"Accordion Header Two",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",bg:"info"},{title:"Accordion Header Three",text:"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.",bg:"success"}].map((function(e,r){return(0,he.jsxs)("div",{className:"card",children:[(0,he.jsxs)($.Toggle,{as:pe.Text,eventKey:"".concat(r),className:"card-header",onClick:function(){return t(n===r?-1:r)},children:[(0,he.jsx)("h5",{className:"dlab-title",children:(0,he.jsxs)("a",{className:"".concat(n===r?"":"collapsed"),onClick:function(){return t(n===r?-1:r)},children:[" ",e.title]})}),(0,he.jsx)("span",{className:"accordion__header--indicator"})]}),(0,he.jsx)($.Collapse,{eventKey:"".concat(r),children:(0,he.jsx)("div",{className:"card-body",children:(0,he.jsx)("p",{className:"m-b0",children:e.text})})})]},r)}))})})}},3486:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/test",function(){return t(7935)}])}},function(e){e.O(0,[997,774,888,179],(function(){return n=3486,e(e.s=n);var n}));var n=e.O();_N_E=n}]);