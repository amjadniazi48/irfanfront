"use strict";
(() => {
var exports = {};
exports.id = 541;
exports.ids = [541];
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

/***/ 4789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3210);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{
    if (req.method === "GET") {
        if (!req.headers.cookie) {
            res.status(403).json({
                message: "Not Authorized"
            });
            return;
        }
        const { token  } = cookie__WEBPACK_IMPORTED_MODULE_0___default().parse(req.headers.cookie);
        const strapiRes = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_1__/* .API_URL */ .T5}/api/users/me`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const user = await strapiRes.json();
        if (strapiRes.ok) {
            res.status(200).json({
                user
            });
        } else {
            res.status(403).json({
                message: "User forbidden"
            });
        }
    } else {
        res.setHeader("Allow", [
            "GET"
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
var __webpack_exports__ = (__webpack_exec__(4789));
module.exports = __webpack_exports__;

})();