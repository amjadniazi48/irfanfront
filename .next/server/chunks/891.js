"use strict";
exports.id = 891;
exports.ids = [891];
exports.modules = {

/***/ 7891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthProvider),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6691);




const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const AuthProvider = ({ children  })=>{
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>checkUserLoggedIn(), []);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    // Register user
    const registerme = async (user)=>{
        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__/* .NEXT_URL */ .TP}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        // console.log(res)
        const data = await res.json();
        // console.log(data.user.username)
        if (data.user.confirmed) {
            setUser(data.user);
            router.push("/account/register");
        } else {
            setError(data.message);
            setError(null);
        }
    };
    //email to admin
    const emailtoadmin = async (user)=>{
        console.log(user);
        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__/* .NEXT_URL */ .TP}/api/adminemail`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });
        const data = await res.json();
        if (res.ok) {
            setUser(data.user);
            router.push("/account/register");
        } else {
            setError(data.message);
            setError(null);
        }
    };
    //Login User
    const login = async ({ email: identifier , password  })=>{
        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__/* .NEXT_URL */ .TP}/api/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                identifier,
                password
            })
        });
        const data = await res.json();
        //console.log(data)
        if (res.ok) {
            setUser(data.user);
            router.push("/posts/add");
        //console.log(data)
        } else {
            setError(data.message);
            setError(null);
        }
    };
    //Logout User
    const logout = async ()=>{
        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__/* .NEXT_URL */ .TP}/api/logout`, {
            method: "POST"
        });
        if (res.ok) {
            setUser(null);
            router.push("/");
        }
    };
    // Check if user is logged in
    const checkUserLoggedIn = async (user)=>{
        const res = await fetch(`${_config_index__WEBPACK_IMPORTED_MODULE_3__/* .NEXT_URL */ .TP}/api/user`);
        const data = await res.json();
        if (res.ok) {
            setUser(data.user);
        } else {
            setUser(null);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            error,
            registerme,
            emailtoadmin,
            login,
            logout
        },
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);


/***/ })

};
;