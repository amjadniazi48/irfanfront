"use strict";
(() => {
var exports = {};
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 4802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 3210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T5": () => (/* binding */ API_URL)
/* harmony export */ });
/* unused harmony exports NEXT_URL, PER_PAGE */
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://irfanfront.vercel.app/";
const PER_PAGE = 10;


/***/ }),

/***/ 2211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3210);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    if (req.method === "POST") {
        const { identifier , password  } = req.body;
        const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_0__/* .API_URL */ .T5}/api/auth/local`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                identifier,
                password
            })
        });
        const data = await strapiRes.json();
        //console.log(data.error.message)
        //  console.log(data)
        if (strapiRes.ok) {
            // ===Set Cookie=========
            res.setHeader("Set-Cookie", cookie__WEBPACK_IMPORTED_MODULE_1___default().serialize("token", data.jwt, {
                httpOnly: true,
                secure: "production" !== "development",
                maxAge: 60 * 60 * 24 * 7,
                sameSite: "strict",
                path: "/"
            }));
            //=====================
            res.status(200).json({
                user: data.user
            });
        } else {
            res.status(data.error.status).json({
                message: data.error.message
            });
        }
    } else {
        res.setHeader("Allow", [
            "POST"
        ]);
        res.status(405).json({
            message: `Method ${req.method} not allowed`
        });
    }
});


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2211));
module.exports = __webpack_exports__;

})();