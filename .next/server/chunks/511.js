exports.id = 511;
exports.ids = [511];
exports.modules = {

/***/ 3250:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(9684)


/***/ }),

/***/ 6511:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./config/index.js
var config = __webpack_require__(6691);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(543);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header.js




function Header() {
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: "header",
        dir: router.locale === "ur-PK" ? "rtl" : "ltr",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "top-menu bg-dark",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container p-2",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "btn-group",
                        role: "group",
                        "aria-label": "Basic outlined example",
                        children: router.locales && router.locales.map((loc)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: router.asPath,
                                    locale: loc,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        style: {
                                            color: "white"
                                        },
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: loc == "en" ? " English |" : "  اردو"
                                            }),
                                            "\xa0\xa0"
                                        ]
                                    })
                                })
                            });
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "second-header",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-6 order-lg-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    id: "main-logo",
                                    className: "main-logo my-2 my-lg-4 text-center",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        href: config/* NEXT_URL */.TP,
                                        className: "navbar-brand custom-logo-link",
                                        rel: "home",
                                        "aria-current": "page",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            width: "271",
                                            height: "60",
                                            src: "https://demo.bootstrap.news/personal/wp-content/uploads/2019/11/cropped-qwigley.regular.png",
                                            className: "img-fluid",
                                            alt: "Personal Blog"
                                        })
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 order-lg-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "text-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                        className: "list-unstyled social-top-start",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "me-2 text-facebook",
                                                    rel: "noreferrer",
                                                    href: "https://facebook.com",
                                                    target: "_blank",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "2rem",
                                                            height: "2rem",
                                                            fill: "currentColor",
                                                            className: "bi bi-facebook",
                                                            viewBox: "0 0 16 16",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "visually-hidden",
                                                            children: "Facebook"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "me-2 text-twitter",
                                                    rel: "noreferrer",
                                                    href: "https://twitter.com",
                                                    target: "_blank",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "2rem",
                                                            height: "2rem",
                                                            fill: "currentColor",
                                                            className: "bi bi-twitter",
                                                            viewBox: "0 0 16 16",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "visually-hidden",
                                                            children: "Twitter"
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "nav-item",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                    className: "me-2 text-youtube",
                                                    rel: "noreferrer",
                                                    href: "https://youtube.com",
                                                    target: "_blank",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            width: "2rem",
                                                            height: "2rem",
                                                            fill: "currentColor",
                                                            className: "bi bi-youtube",
                                                            viewBox: "0 0 16 16",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                d: "M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.122C.002 7.343.01 6.6.064 5.78l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                            className: "visually-hidden",
                                                            children: "Youtube"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-lg-3 order-lg-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                    className: "form-inline search-top-end d-none d-lg-block",
                                    method: "get",
                                    action: "https://demo.bootstrap.news/personal/",
                                    role: "search",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "input-group w-100",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "form-control rounded-start",
                                                name: "s",
                                                type: "text",
                                                placeholder: router.locale == "ur-PK" ? "تلا ش..." : "Search..."
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "input-group-append",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    className: "submit btn btn-primary rounded-end",
                                                    id: "searchsubmit",
                                                    name: "submit",
                                                    type: "submit",
                                                    value: router.locale == "ur-PK" ? "تلا ش" : "Search"
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Footer.js


function Footer_Header() {
    const { locale  } = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                dir: locale === "ur-Pk" ? "rtl" : "ltr",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    id: "footer",
                    className: "bg-dark py-5 px-3",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        style: {
                            color: "white",
                            textAlign: "center"
                        },
                        children: [
                            " \xa9\xa0 ",
                            new Date().getFullYear(),
                            ",\xa0irfanshehzad.org"
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "back-top btn btn-light border position-fixed r-1 b-1",
                href: "#",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                    className: "bi bi-arrow-up",
                    width: "1rem",
                    height: "1rem",
                    viewBox: "0 0 16 16",
                    fill: "currentColor",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z",
                            clipRule: "evenodd"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z",
                            clipRule: "evenodd"
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "next-translate/useTranslation"
var useTranslation_ = __webpack_require__(866);
var useTranslation_default = /*#__PURE__*/__webpack_require__.n(useTranslation_);
// EXTERNAL MODULE: ./context/AuthContext.js
var AuthContext = __webpack_require__(7891);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Menu.js






function Menu({ menus  }) {
    const { user , logout  } = (0,external_react_.useContext)(AuthContext/* default */.Z);
    const { t , lang  } = useTranslation_default()("common");
    // console.log(user)
    const router = (0,router_.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                id: "showbacktop",
                className: "mobile-sticky showbacktop full-nav bg-white border-lg-1 border-bottom shadow-b-sm border-none py-0",
                dir: router.locale === "ur-PK" ? "rtl" : "ltr",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            id: "main-menu",
                            className: "main-menu navbar navbar-expand-lg navbar-light px-2 px-lg-0 py-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    id: "showStartPush",
                                    "aria-label": "sidebar menu",
                                    className: "navbar-toggler sidebar-menu-trigger side-hamburger border-0 px-0",
                                    href: "javascript:;",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "hamburger-icon",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "navbar-toggler px-0 my-2",
                                    type: "button",
                                    "data-bs-toggle": "collapse",
                                    "data-bs-target": "#navbarTogglerDemo2",
                                    "aria-controls": "navbarTogglerDemo2",
                                    "aria-expanded": "false",
                                    "aria-label": "Toggle navigation"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    id: "navbarTogglerDemo1",
                                    className: "collapse navbar-collapse hover-mode",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "logo-showbacktop",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "#",
                                                className: "navbar-brand custom-logo-link",
                                                rel: "home",
                                                "aria-current": "page",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    width: "271",
                                                    height: "60",
                                                    src: "https://demo.bootstrap.news/personal/wp-content/uploads/2019/11/cropped-qwigley.regular.png",
                                                    className: "img-fluid",
                                                    alt: "Personal Blog"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            id: "start-main",
                                            className: "navbar-nav main-nav mx-auto navbar-uppercase first-start-lg-0",
                                            children: [
                                                menus && menus.global.data.attributes.navigation.map((menu)=>{
                                                    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                        children: menu && menu.panels.map((item)=>{
                                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                id: "menu-item",
                                                                className: "nav-item",
                                                                children: item.sublinks.length == 0 ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                    href: item.link.label == "Home" || item.link.label == "صفحہ اول" ? "/" : `/${item.link.label}`,
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                        title: item.link.label,
                                                                        href: "#",
                                                                        className: "nav-link",
                                                                        children: item.link.label
                                                                    })
                                                                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                                    children: [
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            title: "Dropdown",
                                                                            href: "#",
                                                                            "data-bs-toggle": "dropdown",
                                                                            "aria-haspopup": "true",
                                                                            "aria-expanded": "false",
                                                                            className: "dropdown-toggle nav-link",
                                                                            id: "menu-item-dropdown",
                                                                            children: item.link.label
                                                                        }),
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                                            className: "dropdown-menu",
                                                                            "aria-labelledby": "menu-item-dropdown",
                                                                            role: "menu",
                                                                            children: item && item.sublinks.map((subl)=>{
                                                                                return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                    id: "menu-item",
                                                                                    className: "nav-item",
                                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                        title: "Sub menu",
                                                                                        href: "#",
                                                                                        className: "dropdown-item",
                                                                                        children: subl.label
                                                                                    })
                                                                                }, subl.id);
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }, item.id);
                                                        })
                                                    });
                                                }),
                                                user ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        id: "menu-item",
                                                        className: "nav-item",
                                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                            href: "javascript:;",
                                                            onClick: ()=>logout(),
                                                            className: "nav-link",
                                                            style: {
                                                                color: "#F54637"
                                                            },
                                                            children: [
                                                                t("common:logout"),
                                                                "(",
                                                                user.username,
                                                                ")"
                                                            ]
                                                        })
                                                    })
                                                }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        id: "menu-item",
                                                        className: "nav-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            href: "/account/login",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "nav-link",
                                                                style: {
                                                                    color: "#F54637"
                                                                },
                                                                children: t("common:login")
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "collapse navbar-collapse col-12 py-2",
                            id: "navbarTogglerDemo2",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                className: "form-inline",
                                method: "get",
                                action: "https://demo.bootstrap.news/personal/",
                                role: "search",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "input-group w-100",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            className: "form-control border border-right-0",
                                            name: "s",
                                            type: "text",
                                            placeholder: "Search …"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "input-group-prepend bg-light-dark",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                className: "submit btn btn-primary",
                                                id: "searchmobile",
                                                name: "submit",
                                                type: "submit",
                                                value: "Search"
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mobile-side",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "back-menu",
                        className: "back-menu back-menu-start",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "hamburger-icon open",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                className: "bi bi-x",
                                width: "2rem",
                                height: "2rem",
                                viewBox: "0 0 16 16",
                                fill: "currentColor",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z",
                                        clipRule: "evenodd"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        fillRule: "evenodd",
                                        d: "M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z",
                                        clipRule: "evenodd"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        id: "mobile-menu",
                        className: "menu-mobile d-flex flex-column push push-start shadow-r-sm bg-white",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mobile-content mb-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "logo-sidenav p-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://demo.bootstrap.news/personal/",
                                            className: "navbar-brand custom-logo-link",
                                            rel: "home",
                                            "aria-current": "page",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                width: "271",
                                                height: "60",
                                                src: "https://demo.bootstrap.news/personal/wp-content/uploads/2019/11/cropped-qwigley.regular.png",
                                                className: "img-fluid",
                                                alt: "Personal Blog"
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "sidenav-menu",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            className: "navbar navbar-inverse",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                id: "side-menu",
                                                className: "nav navbar-nav list-group list-unstyled side-link",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home active menu-item-2153 nav-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            title: "Home",
                                                            href: "#",
                                                            className: "nav-link",
                                                            children: "Home"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2154 nav-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            title: "Photo",
                                                            href: "#",
                                                            className: "nav-link",
                                                            children: "Photo"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2155 nav-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            title: "Hobby",
                                                            href: "#",
                                                            className: "nav-link",
                                                            children: "Hobby"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2156 nav-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            title: "Food",
                                                            href: "#",
                                                            className: "nav-link",
                                                            children: "Food"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2157 nav-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            title: "Funny",
                                                            href: "#",
                                                            className: "nav-link",
                                                            children: "Funny"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                        className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown mega-dropdown menu-item-2179 nav-item",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                title: "Dropdown",
                                                                href: "#",
                                                                "data-bs-toggle": "dropdown",
                                                                "aria-haspopup": "true",
                                                                "aria-expanded": "false",
                                                                className: "dropdown-toggle nav-link",
                                                                id: "menu-item-dropdown-2179",
                                                                children: "Dropdown"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                className: "dropdown-menu",
                                                                "aria-labelledby": "menu-item-dropdown-2179",
                                                                role: "menu",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "menu-item",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            title: "Sub menu",
                                                                            href: "#",
                                                                            className: "dropdown-item",
                                                                            children: "Sub menu"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                        className: "menu-item",
                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                            title: "Sub menu",
                                                                            href: "#",
                                                                            className: "dropdown-item",
                                                                            children: "Sub menu"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                                                        className: "menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown mega-dropdown menu-item-2184 nav-item",
                                                                        children: [
                                                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                title: "Sub menu",
                                                                                href: "#",
                                                                                className: "dropdown-item dropdown-toggle",
                                                                                id: "menu-item-dropdown-2184",
                                                                                children: "Sub menu"
                                                                            }),
                                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                                                className: "dropdown-menu",
                                                                                "aria-labelledby": "menu-item-dropdown-2184",
                                                                                role: "menu",
                                                                                children: [
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                        className: "menu-item",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            title: "Sub menu",
                                                                                            href: "#",
                                                                                            className: "dropdown-item",
                                                                                            children: "Sub menu"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                                                        className: "menu-item",
                                                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                                            title: "Sub menu",
                                                                                            href: "#",
                                                                                            className: "dropdown-item",
                                                                                            children: "Sub menu"
                                                                                        })
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "menu-item ",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            title: "Travel",
                                                            href: "#",
                                                            className: "nav-link",
                                                            children: "Travel"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "menu-item ",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                            title: "Video",
                                                            href: "#",
                                                            className: "nav-link",
                                                            children: "Register"
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mobile-copyright mt-5 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Copyright BootNews - All rights reserved."
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(3250);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: ./components/Layout.js





const Layout = ({ title , keywords , description , children , menus  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "stylesheet",
                href: "//fonts.googleapis.com/earlyaccess/notonastaliqurdudraft.css"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Menu, {
                menus: menus
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "wrapper",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                type: "text/javascript",
                src: "/js/theme.js"
            })
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);


/***/ })

};
;