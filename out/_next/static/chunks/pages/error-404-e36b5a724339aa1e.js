(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[133],{7942:function(e,r,n){"use strict";var t=n(5696);r.default=void 0;var a,o=(a=n(7294))&&a.__esModule?a:{default:a},c=n(4957),s=n(9898),i=n(639);var l={};function u(e,r,n,t){if(e&&c.isLocalURL(r)){e.prefetch(r,n,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;l[r+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var r,n=!1!==e.prefetch,a=s.useRouter(),f=o.default.useMemo((function(){var r=c.resolveHref(a,e.href,!0),n=t(r,2),o=n[0],s=n[1];return{href:o,as:e.as?c.resolveHref(a,e.as):s||o}}),[a,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var y=(r=o.default.Children.only(v))&&"object"===typeof r&&r.ref,x=i.useIntersection({rootMargin:"200px"}),j=t(x,2),N=j[0],_=j[1],k=o.default.useCallback((function(e){N(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,N]);o.default.useEffect((function(){var e=_&&n&&c.isLocalURL(d),r="undefined"!==typeof g?g:a&&a.locale,t=l[d+"%"+p+(r?"%"+r:"")];e&&!t&&u(a,d,p,{locale:r})}),[p,d,_,g,n,a]);var E={ref:k,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,a,o,s,i){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),r[a?"replace":"push"](n,t,{shallow:o,locale:i,scroll:s}))}(e,a,d,p,h,m,b,g)},onMouseEnter:function(e){r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),c.isLocalURL(d)&&u(a,d,p,{priority:!0})}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var w="undefined"!==typeof g?g:a&&a.locale,L=a&&a.isLocaleDomain&&c.getDomainLocale(p,w,a&&a.locales,a&&a.domainLocales);E.href=L||c.addBasePath(c.addLocale(p,w,a&&a.defaultLocale))}return o.default.cloneElement(r,E)};r.default=f},639:function(e,r,n){"use strict";var t=n(5696);Object.defineProperty(r,"__esModule",{value:!0}),r.useIntersection=function(e){var r=e.rootRef,n=e.rootMargin,l=e.disabled||!c,u=a.useRef(),f=a.useState(!1),d=t(f,2),p=d[0],v=d[1],h=a.useState(r?r.current:null),m=t(h,2),b=m[0],g=m[1],y=a.useCallback((function(e){u.current&&(u.current(),u.current=void 0),l||p||e&&e.tagName&&(u.current=function(e,r,n){var t=function(e){var r,n={root:e.root||null,margin:e.rootMargin||""},t=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));t?r=s.get(t):(r=s.get(n),i.push(n));if(r)return r;var a=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var r=a.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return s.set(n,r={id:n,observer:o,elements:a}),r}(n),a=t.id,o=t.observer,c=t.elements;return c.set(e,r),o.observe(e),function(){if(c.delete(e),o.unobserve(e),0===c.size){o.disconnect(),s.delete(a);var r=i.findIndex((function(e){return e.root===a.root&&e.margin===a.margin}));r>-1&&i.splice(r,1)}}}(e,(function(e){return e&&v(e)}),{root:b,rootMargin:n}))}),[l,b,n,p]);return a.useEffect((function(){if(!c&&!p){var e=o.requestIdleCallback((function(){return v(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[p]),a.useEffect((function(){r&&g(r.current)}),[r]),[y,p]};var a=n(7294),o=n(6286),c="undefined"!==typeof IntersectionObserver;var s=new Map,i=[]},371:function(e,r,n){"use strict";n.r(r);var t=n(2507),a=n(8423),o=n(1664),c=n(5893);r.default=function(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Z,{}),(0,c.jsxs)("div",{className:"page-content bg-white",children:[(0,c.jsx)("div",{className:"dlab-bnr-inr style-1 bg-primary",style:{backgroundImage:"url(images/banner/bnr2.png), var(--gradient-sec)",backgroundSize:"cover, 200%"},children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"dlab-bnr-inr-entry",children:[(0,c.jsx)("h1",{children:"404"}),(0,c.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-row style-1",children:(0,c.jsxs)("ul",{className:"breadcrumb",children:[(0,c.jsx)("li",{className:"breadcrumb-item",children:(0,c.jsx)(o.default,{href:"/",children:(0,c.jsx)("a",{children:"Home"})})}),(0,c.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"404"})]})})]})})}),(0,c.jsx)("div",{className:"section-full",style:{backgroundImage:"url(images/background/bg1.png)"},children:(0,c.jsx)("div",{className:"container",children:(0,c.jsxs)("div",{className:"error-page text-center",children:[(0,c.jsx)("div",{className:"dlab_error",children:"404"}),(0,c.jsx)("h2",{className:"error-head",children:"We are sorry. But the page you are looking for cannot be found."}),(0,c.jsx)(o.default,{href:"/",children:(0,c.jsx)("a",{className:"btn btn-primary radius-no",children:(0,c.jsx)("span",{className:"p-lr15",children:"Back to Homepage"})})})]})})})]}),(0,c.jsx)(t.Z,{})]})}},9451:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/error-404",function(){return n(371)}])},1664:function(e,r,n){e.exports=n(7942)}},function(e){e.O(0,[846,774,888,179],(function(){return r=9451,e(e.s=r);var r}));var r=e.O();_N_E=r}]);