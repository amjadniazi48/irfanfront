"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6691);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);


const apolloClient = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({
    uri: `${_config_index__WEBPACK_IMPORTED_MODULE_0__/* .API_URL */ .T5}/graphql`,
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache()
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (apolloClient);


/***/ }),

/***/ 1172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    title: "Next Websites",
    description: "This example uses more of the available config options",
    openGraph: {
        type: "website",
        locale: "en_IE",
        url: "https://www.url.ie/",
        site_name: "SiteName"
    },
    twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "summary_large_image"
    }
});


/***/ }),

/***/ 2241:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608);
/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5668);
/* harmony import */ var next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6511);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1172);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6691);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5805);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5941);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7891);
/* harmony import */ var lib_apollo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3783);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_9__]);
swr__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];















function MyApp({ Component , pageProps  }) {
    const { locale , locales  } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
    const variables = {
        locale: `${locale}`
    };
    const fetcher = (query, variables)=>{
        //console.log(query, variables);
        return (0,graphql_request__WEBPACK_IMPORTED_MODULE_8__.request)(`${_config_index__WEBPACK_IMPORTED_MODULE_7__/* .API_URL */ .T5}/graphql`, query, variables);
    };
    const { data: menus , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_9__["default"])([
        `query ($locale : I18NLocaleCode!) {
     global(locale: $locale){
      data {
        id
        attributes {
          locale
          navigation {
                ... on ComponentGlobalNavigation {
                 panels {
                      link {
                        href
                        label
                          }
                      sublinks{
                        href
                        label
                      }  
                    }
                  }
                }
              }
            }
          }
        }`,
        variables
    ], fetcher);
    // console.log(menus)
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context_AuthContext__WEBPACK_IMPORTED_MODULE_11__/* .AuthProvider */ .H, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_apollo_client__WEBPACK_IMPORTED_MODULE_10__.ApolloProvider, {
            client: lib_apollo__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                menus: menus,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__.DefaultSeo, {
                        ..._next_seo_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        })
    });
}
const __Page_Next_Translate__ = MyApp;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_translate_appWithI18n__WEBPACK_IMPORTED_MODULE_2___default()(__Page_Next_Translate__, {
    ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,
    isLoader: true,
    skipInitialProps: true,
    loadLocaleFrom: (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default)
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 5668:
/***/ ((module) => {

module.exports = require("next-translate/appWithI18n");

/***/ }),

/***/ 866:
/***/ ((module) => {

module.exports = require("next-translate/useTranslation");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [350,543,388,891,511], () => (__webpack_exec__(2241)));
module.exports = __webpack_exports__;

})();