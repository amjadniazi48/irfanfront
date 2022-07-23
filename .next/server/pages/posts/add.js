"use strict";
(() => {
var exports = {};
exports.id = 554;
exports.ids = [554];
exports.modules = {

/***/ 7985:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddPostPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(608);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7462);
/* harmony import */ var next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6511);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(866);
/* harmony import */ var next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6810);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8907);
/* harmony import */ var react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5226);
/* harmony import */ var react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(7511);
/* harmony import */ var react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5641);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6691);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_14__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_14__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
















function AddPostPage({ token  }) {
    const { t , lang  } = next_translate_useTranslation__WEBPACK_IMPORTED_MODULE_5___default()("common");
    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("");
    const { 0: slug , 1: setSlug  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("");
    const { 0: description , 1: setDescription  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)("");
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { register , handleSubmit , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_14__.useForm)();
    const onSubmit = async (e)=>{
        const myPost = {
            data: {
                title,
                slug,
                description
            }
        };
        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(myPost)
        };
        const response = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_15__/* .API_URL */ .T5}/api/posts`, requestOptions);
        const post = await response.json();
        if (!response.ok) {
            console.error("Something Went Wrong"), {};
            return;
        } else {
            console.log("Record has been added");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_10___default()), {
        className: "mt-3 mb-3",
        dir: router.locale === "ur-PK" ? "rtl" : "ltr",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Row__WEBPACK_IMPORTED_MODULE_11___default()), {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    className: "h1 mt-2",
                    style: {
                        "fontWeight": "bolder"
                    },
                    children: [
                        "\xa0",
                        t("common:addPost")
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Col__WEBPACK_IMPORTED_MODULE_13___default()), {
                    md: 12,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7___default()), {
                        className: "bg-light pb-3",
                        style: {
                            width: "70%",
                            "text-align": "left"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_7___default().Body), {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12___default()), {
                                onSubmit: handleSubmit(onSubmit),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12___default().Group), {
                                        className: "mb-3",
                                        controlId: "formBasicEmail",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12___default().Control), {
                                                type: "text",
                                                placeholder: t("common:formTitle"),
                                                value: title,
                                                ...register("title", {
                                                    required: true
                                                }),
                                                onChange: (e)=>setTitle(e.target.value)
                                            }),
                                            errors.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-danger",
                                                children: "Title is required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12___default().Group), {
                                        className: "mb-3",
                                        controlId: "formBasicEmail",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12___default().Control), {
                                                type: "text",
                                                placeholder: t("common:formSlug"),
                                                value: slug,
                                                ...register("slug", {
                                                    required: true
                                                }),
                                                onChange: (e)=>setSlug(e.target.value)
                                            }),
                                            errors.slug && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-danger",
                                                children: "Slug is required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12___default().Group), {
                                        className: "mb-3",
                                        controlId: "formBasicPassword",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12___default().Control), {
                                                as: "textarea",
                                                placeholder: t("common:formDescripton"),
                                                style: {
                                                    height: "400px"
                                                },
                                                value: description,
                                                ...register("description", {
                                                    required: true
                                                }),
                                                onChange: (e)=>setDescription(e.target.value)
                                            }),
                                            errors.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-danger",
                                                children: "Description is required"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Form__WEBPACK_IMPORTED_MODULE_12___default().Group), {
                                        className: "mb-3",
                                        controlId: "formBasicCheckbox"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "d-grid gap-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            varient: "primary",
                                            size: "lg",
                                            type: "submit",
                                            children: t("common:submitPost")
                                        })
                                    })
                                ]
                            })
                        })
                    })
                })
            ]
        })
    });
};
;
async function getStaticProps(ctx) {
    return {
        props: {
            ...await next_translate_loadNamespaces__WEBPACK_IMPORTED_MODULE_2___default()({
                ...ctx,
                pathname: "/posts/add",
                loaderName: "getStaticProps",
                ..._next_translate_root_i18n__WEBPACK_IMPORTED_MODULE_1__,
                loadLocaleFrom: (l, n)=>__webpack_require__(7655)(`./${l}/${n}`).then((m)=>m.default)
            })
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7462:
/***/ ((module) => {

module.exports = require("next-translate/loadNamespaces");

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

/***/ 1937:
/***/ ((module) => {

module.exports = require("react-bootstrap/Button");

/***/ }),

/***/ 6810:
/***/ ((module) => {

module.exports = require("react-bootstrap/Card");

/***/ }),

/***/ 7511:
/***/ ((module) => {

module.exports = require("react-bootstrap/Col");

/***/ }),

/***/ 4678:
/***/ ((module) => {

module.exports = require("react-bootstrap/Container");

/***/ }),

/***/ 5226:
/***/ ((module) => {

module.exports = require("react-bootstrap/Form");

/***/ }),

/***/ 8907:
/***/ ((module) => {

module.exports = require("react-bootstrap/Row");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5641:
/***/ ((module) => {

module.exports = import("react-hook-form");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [350,543,388,891,511], () => (__webpack_exec__(7985)));
module.exports = __webpack_exports__;

})();