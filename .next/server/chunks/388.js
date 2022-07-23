exports.id = 388;
exports.ids = [388];
exports.modules = {

/***/ 7655:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en/common": [
		464,
		464
	],
	"./en/common.json": [
		464,
		464
	],
	"./ur-PK/common": [
		6841,
		841
	],
	"./ur-PK/common.json": [
		6841,
		841
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__.t(id, 3 | 16);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 7655;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 6691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T5": () => (/* binding */ API_URL),
/* harmony export */   "TP": () => (/* binding */ NEXT_URL)
/* harmony export */ });
/* unused harmony export PER_PAGE */
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
const NEXT_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || "https://irfanfront.vercel.app/";
const PER_PAGE = 10;


/***/ }),

/***/ 608:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"locales":["en","ur-PK"],"defaultLocale":"en","pages":{"*":["common"]}}');

/***/ })

};
;