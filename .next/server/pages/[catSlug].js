"use strict";
(() => {
var exports = {};
exports.id = 663;
exports.ids = [663];
exports.modules = {

/***/ 6179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _catSlug_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./i18n.json
var i18n = __webpack_require__(608);
// EXTERNAL MODULE: external "next-translate/loadNamespaces"
var loadNamespaces_ = __webpack_require__(7462);
var loadNamespaces_default = /*#__PURE__*/__webpack_require__.n(loadNamespaces_);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(6691);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(543);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(8027);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/CategoryItem.js





const ArticleItem = ({ item  })=>{
    const { locale  } = (0,router_.useRouter)();
    const imageSrc = null;
    try {
        imageSrc = item.attributes.image.data[0].attributes.formats.medium.url;
    } catch  {
        imageSrc = "/images/pentwo.jpg";
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: "card card-full hover-a py-4 post-1305 post type-post status-publish format-video has-post-thumbnail hentry category-video tag-science tag-starvation post_format-post-format-video",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-sm-12 col-md-12 col-lg-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "image-wrapper",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: `/posts/${item.attributes.slug}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: item.attributes.image.data[0].attributes.formats.thumbnail.url,
                                    width: 150,
                                    height: 150
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("figcaption", {
                            children: item.attributes.title
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-sm-12 col-md-12 col-lg-12",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "card-body pt-3 pt-sm-0 pt-md-3 pt-lg-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "card-title h2 h3-sm h2-md",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: `/posts/${item.attributes.slug}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: item.attributes.title
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "card-text mb-2 text-muted small",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "fw-bold d-none d-sm-inline me-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: "#",
                                        title: "Posts by aribudin",
                                        rel: "author",
                                        children: "aribudin"
                                    })
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("time", {
                                    className: "news-date",
                                    children: [
                                        new Date(item.attributes.createdAt).toLocaleDateString(locale),
                                        " "
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "card-text",
                            children: item.attributes.description.slice(0, 250) + "..."
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const CategoryItem = (ArticleItem);

;// CONCATENATED MODULE: ./pages/[catSlug].js








const CategoryPage = ()=>{
    const router = (0,router_.useRouter)();
    const locale = router.locale;
    const { catSlug  } = router.query;
    let imageSrc = null;
    const QUERY = client_.gql`query  getPosts($catSlug: String,$locale : I18NLocaleCode!){
        posts(filters: {categories: {catSlug: {eq: $catSlug}}},locale:$locale) {
           data {
             id
             attributes {
               title
               slug
               description
               image {
                 data{
                    attributes{
                     formats
                   }
                 }
               }
               categories{
                  data{
                    attributes{
                      name
                      catSlug
                    }
               }
             }
             }
           }
         }
       }  
     
      `;
    const { data , loading , error  } = (0,client_.useQuery)(QUERY, {
        variables: {
            catSlug,
            locale
        }
    });
    console.log(data);
    try {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "col-12 mt-5 ",
            style: {
                marginLeft: "10px"
            },
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "block-title-4 text-center ",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: catSlug.charAt(0).toUpperCase() + catSlug.substring(1)
                        })
                    })
                }),
                data.posts && data.posts.data.map((item)=>{
                    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "entry-content post-content post-page",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(CategoryItem, {
                                    item: item
                                }, item.id)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("hr", {})
                        ]
                    }, item.id);
                })
            ]
        });
    } catch  {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            style: {
                marginTop: "10px"
            },
            children: [
                "Oops! No Data please return to ",
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: "Home Page"
                    })
                })
            ]
        });
    }
};
/* harmony default export */ const _catSlug_ = (CategoryPage);
async function getServerSideProps(ctx) {
    return {
        props: {
            ...await loadNamespaces_default()({
                ...ctx,
                pathname: "/[catSlug]",
                loaderName: "getServerSideProps",
                ...i18n,
                loadLocaleFrom: (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default)
            })
        }
    };
}


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 7462:
/***/ ((module) => {

module.exports = require("next-translate/loadNamespaces");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [350,543,27,388], () => (__webpack_exec__(6179)));
module.exports = __webpack_exports__;

})();