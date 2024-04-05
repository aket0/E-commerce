"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/component/app/App.js":
/*!**************************************!*\
  !*** ./src/app/component/app/App.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _Navbar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/NavBar */ \"(app-pages-browser)/./src/app/component/Navbar/NavBar.js\");\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/Header */ \"(app-pages-browser)/./src/app/component/Header/Header.js\");\n/* harmony import */ var _Body_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Body/Body */ \"(app-pages-browser)/./src/app/component/Body/Body.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Cart_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Cart/Cart */ \"(app-pages-browser)/./src/app/component/Cart/Cart.js\");\n/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Login/Login */ \"(app-pages-browser)/./src/app/component/Login/Login.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction App() {\n    _s();\n    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_5___default().useState(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        fetch(\"http://localhost:4000/api/itemList\").then((res)=>res.json()).then((data)=>setList(data));\n    }, []);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            return storedCartItems;\n        }\n    });\n    const [isCartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [isLoginVisible, setLogginVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            setCartItems(storedCartItems);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n    }, [\n        cartItems\n    ]);\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        // Check if user is logged in on component mount\n        const token = localStorage.getItem(\"jwtToken\");\n        if (token) {\n            setIsLoggedIn(true);\n        }\n    }, []);\n    const handleLogout = ()=>{\n        // Clear token from localStorage\n        localStorage.removeItem(\"jwtToken\");\n        setIsLoggedIn(false);\n    };\n    const toggleCart = ()=>{\n        setCartVisible(!isCartVisible);\n        setLogginVisible(false);\n    };\n    const toggleLogin = ()=>{\n        setLogginVisible(!isLoginVisible);\n        setCartVisible(false);\n    };\n    const handleSelect = (type)=>{\n        setSelectedOption(type);\n    };\n    const handleWeater = (weater)=>{\n        setSelectedOption(weater);\n    };\n    const addToCart = (item)=>{\n        const existingItem = cartItems.find((cartItem)=>cartItem.name === item.name);\n        if (existingItem) {\n            const updatedCartItems = cartItems.map((cartItem)=>{\n                if (cartItem.name === item.name) {\n                    return {\n                        ...cartItem,\n                        qte: cartItem.qte + 1\n                    };\n                }\n                return cartItem;\n            });\n            setCartItems(updatedCartItems);\n        } else {\n            const newItem = {\n                name: item.name,\n                price: item.price,\n                src: item.src,\n                qte: 1,\n                description: item.description\n            };\n            setCartItems([\n                ...cartItems,\n                newItem\n            ]);\n        }\n    };\n    const handleMinus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte > 1) {\n            updatedCartItems[index].qte--;\n            setCartItems(updatedCartItems);\n        } else if (updatedCartItems[index].qte <= 1) {\n            handleDelete(index);\n        }\n    };\n    const handlePlus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte >= 0) {\n            updatedCartItems[index].qte++;\n            setCartItems(updatedCartItems);\n        }\n    };\n    const handleDelete = (index)=>{\n        const updatedCartItems = cartItems.filter((_, i)=>i !== index);\n        alert(\"remove from cart ?\");\n        setCartItems(updatedCartItems);\n    };\n    if (cartItems && Array.isArray(cartItems)) {\n        const totalSum = cartItems.reduce((acc, item)=>acc + item.price * item.qte, 0);\n        const totalProduct = cartItems.reduce((acc, item)=>acc + item.qte, 0);\n        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n            localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n        }, [\n            cartItems\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onCartToggle: toggleCart,\n                    totalProduct: totalProduct,\n                    onLogginToggle: toggleLogin\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 151,\n                    columnNumber: 7\n                }, this),\n                isLoginVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login_Login__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    user: user\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 152,\n                    columnNumber: 26\n                }, this),\n                isCartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart_Cart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    cartItems: cartItems,\n                    handleMinus: handleMinus,\n                    handlePlus: handlePlus,\n                    handleDelete: handleDelete,\n                    totalProduct: totalProduct,\n                    totalSum: totalSum\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 153,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onSelect: handleSelect,\n                    onWeaterSelect: handleWeater\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 154,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Body_Body__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    selectedOption: selectedOption,\n                    addToCart: addToCart,\n                    list: list\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 155,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n            lineNumber: 150,\n            columnNumber: 5\n        }, this);\n    }\n}\n_s(App, \"Dk0DJ6r7XzFSKl4rUKBnpfn85LY=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_c1 = ()=>Promise.resolve(App), {\n    ssr: false\n}));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c1, \"%default%$dynamic\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L2FwcC9BcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMyQjtBQUNXO0FBQ0E7QUFDTjtBQUNOO0FBQ007QUFDRztBQUNTO0FBQ1Q7QUFJbEMsU0FBU1M7O0lBQ1IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLHFEQUFjLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1YscURBQWMsQ0FBQztJQUt2Q0ksZ0RBQVNBLENBQUM7UUFDUk8sTUFBTyxzQ0FDSkMsSUFBSSxDQUFDQyxDQUFBQSxNQUFPQSxJQUFJQyxJQUFJLElBQ3BCRixJQUFJLENBQUNHLENBQUFBLE9BQVFQLFFBQVFPO0lBRTFCLEdBQUcsRUFBRTtJQUlMLE1BQU0sQ0FBQ0MsZ0JBQWdCQyxrQkFBa0IsR0FBR2QsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDZSxXQUFXQyxhQUFhLEdBQUdoQiwrQ0FBUUEsQ0FBQztRQUN6QyxJQUFJLE9BQU9pQixpQkFBaUIsYUFBYTtZQUN6QyxNQUFNQyxrQkFBa0JDLEtBQUtDLEtBQUssQ0FBQ0gsYUFBYUksT0FBTyxDQUFDLGlCQUFpQixFQUFFO1lBQzNFLE9BQU9IO1FBRVg7SUFBQztJQUVDLE1BQU0sQ0FBQ0ksZUFBZUMsZUFBZSxHQUFHdkIsK0NBQVFBLENBQUM7SUFFakQsTUFBSyxDQUFDd0IsZ0JBQWdCQyxpQkFBaUIsR0FBR3pCLCtDQUFRQSxDQUFDO0lBRW5EQyxnREFBU0EsQ0FBQztRQUNSLElBQUksT0FBT2dCLGlCQUFpQixhQUFhO1lBRXpDLE1BQU1DLGtCQUFrQkMsS0FBS0MsS0FBSyxDQUFDSCxhQUFhSSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDM0VMLGFBQWFFO1FBQ2pCO0lBQUMsR0FBRyxFQUFFO0lBRUpqQixnREFBU0EsQ0FBQztRQUNSZ0IsYUFBYVMsT0FBTyxDQUFDLGFBQWFQLEtBQUtRLFNBQVMsQ0FBQ1o7SUFF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REFBQ3hFLHNEQUFNQTtvQkFBQ3lFLGNBQWNuQztvQkFBWWdDLGNBQWNBO29CQUFjSSxnQkFBZ0JuQzs7Ozs7O2dCQUM3RVYsZ0NBQWtCLDhEQUFDekIsb0RBQUtBO29CQUFDTyxNQUFNQTs7Ozs7O2dCQUMvQmdCLCtCQUFpQiw4REFBQ3hCLGtEQUFJQTtvQkFBQ2lCLFdBQVdBO29CQUFXcUMsYUFBYUE7b0JBQWFHLFlBQVlBO29CQUFZRCxjQUFjQTtvQkFBY1csY0FBY0E7b0JBQWNILFVBQVVBOzs7Ozs7OEJBQ2xLLDhEQUFDcEUsc0RBQU1BO29CQUFDNEUsVUFBVW5DO29CQUFjb0MsZ0JBQWdCbEM7Ozs7Ozs4QkFDaEQsOERBQUN6QyxrREFBSUE7b0JBQUNpQixnQkFBZ0JBO29CQUFnQjBCLFdBQVdBO29CQUFXbkMsTUFBTUE7Ozs7Ozs7Ozs7OztJQUl4RTtBQUNBO0dBbEpVRDtLQUFBQTtBQW1KViwrREFBZSxNQUFBRCx3REFBT0EsT0FBRSxJQUFNc0UsUUFBUUMsT0FBTyxDQUFDdEUsTUFBSztJQUFDdUUsS0FBSztBQUFLLElBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvYXBwL0FwcC5qcz8wMjljIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgJy4uLy4uL2dsb2JhbHMuY3NzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vTmF2YmFyL05hdkJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi4vQm9keS9Cb2R5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FydCBmcm9tICcuLi9DYXJ0L0NhcnQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL0xvZ2luL0xvZ2luJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xuXG5cblxuIGZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL2l0ZW1MaXN0YClcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBzZXRMaXN0KGRhdGEpKVxuICAgXG4gIH0sIFtdKTtcblxuICAgICBcblxuICBjb25zdCBbc2VsZWN0ZWRPcHRpb24sIHNldFNlbGVjdGVkT3B0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnN0IHN0b3JlZENhcnRJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0SXRlbXNcIikpIHx8IFtdO1xuICAgIHJldHVybiBzdG9yZWRDYXJ0SXRlbXM7XG4gIFxufX0pO1xuICBcbiAgY29uc3QgW2lzQ2FydFZpc2libGUsIHNldENhcnRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdFtpc0xvZ2luVmlzaWJsZSwgc2V0TG9nZ2luVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICBcbiAgICBjb25zdCBzdG9yZWRDYXJ0SXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydEl0ZW1zXCIpKSB8fCBbXTtcbiAgICBzZXRDYXJ0SXRlbXMoc3RvcmVkQ2FydEl0ZW1zKTtcbn19LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcbiAgICBcbiAgfSwgW2NhcnRJdGVtc10pO1xuICBcbiAgY29uc3QgW2lzTG9nZ2VkSW4sIHNldElzTG9nZ2VkSW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdXNlciBpcyBsb2dnZWQgaW4gb24gY29tcG9uZW50IG1vdW50XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFRva2VuXCIpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgc2V0SXNMb2dnZWRJbih0cnVlKTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgLy8gQ2xlYXIgdG9rZW4gZnJvbSBsb2NhbFN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImp3dFRva2VuXCIpO1xuICAgIHNldElzTG9nZ2VkSW4oZmFsc2UpO1xuICB9O1xuXG4gXG4gIFxuICBjb25zdCB0b2dnbGVDYXJ0ID0gKCkgPT4ge1xuICAgICAgc2V0Q2FydFZpc2libGUoIWlzQ2FydFZpc2libGUpO1xuICAgICAgc2V0TG9nZ2luVmlzaWJsZShmYWxzZSlcbiAgICAgIFxuICB9O1xuICBjb25zdCB0b2dnbGVMb2dpbiA9ICgpID0+IHtcbiAgICBzZXRMb2dnaW5WaXNpYmxlKCFpc0xvZ2luVmlzaWJsZSk7XG4gICAgc2V0Q2FydFZpc2libGUoZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHR5cGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbih0eXBlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlV2VhdGVyID0gKHdlYXRlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkT3B0aW9uKHdlYXRlcik7XG4gIH07XG4gIGNvbnN0IGFkZFRvQ2FydCA9IChpdGVtKSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdJdGVtID0gY2FydEl0ZW1zLmZpbmQoY2FydEl0ZW0gPT4gY2FydEl0ZW0ubmFtZSA9PT0gaXRlbS5uYW1lKTtcblxuICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBjYXJ0SXRlbXMubWFwKGNhcnRJdGVtID0+IHtcbiAgICAgICAgaWYgKGNhcnRJdGVtLm5hbWUgPT09IGl0ZW0ubmFtZSkge1xuICAgICAgICAgIHJldHVybiB7IC4uLmNhcnRJdGVtLCBxdGU6IGNhcnRJdGVtLnF0ZSArIDEgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FydEl0ZW07XG4gICAgICB9KTtcbiAgXG4gICAgICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnRJdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UsXG4gICAgICAgIHNyYzogaXRlbS5zcmMsXG4gICAgICAgIHF0ZTogMSxcbiAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgIH07XG4gIFxuICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXMsIG5ld0l0ZW1dKTtcbiAgICB9XG4gIH07XG5cblxuICBjb25zdCBoYW5kbGVNaW51cyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBbLi4uY2FydEl0ZW1zXTtcbiAgICBpZiAodXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlID4gMSkge1xuICAgICAgdXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlLS07XG4gICAgICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnRJdGVtcyk7XG4gICAgfSBlbHNlIGlmICh1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUgPD0gMSkge1xuICAgICAgXG4gICAgICBoYW5kbGVEZWxldGUoaW5kZXgpO1xuICAgIH1cbiAgfTsgIFxuXG4gIGNvbnN0IGhhbmRsZVBsdXMgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkQ2FydEl0ZW1zID0gWy4uLmNhcnRJdGVtc107XG4gICAgaWYgKHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZSA+PSAwKSB7XG4gICAgICB1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUrKztcbiAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBjYXJ0SXRlbXMuZmlsdGVyKChfLCBpKSA9PiBpICE9PSBpbmRleCk7XG4gICAgYWxlcnQoXCJyZW1vdmUgZnJvbSBjYXJ0ID9cIik7XG4gICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xuICB9O1xuICBpZiAoY2FydEl0ZW1zICYmIEFycmF5LmlzQXJyYXkoY2FydEl0ZW1zKSkge1xuICBjb25zdCB0b3RhbFN1bSA9IGNhcnRJdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5wcmljZSAqIGl0ZW0ucXRlLCAwKVxuICBjb25zdCB0b3RhbFByb2R1Y3QgPSBjYXJ0SXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ucXRlLCAwKVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcbiAgfSwgW2NhcnRJdGVtc10pO1xuXG4gIFxuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxIZWFkZXIgb25DYXJ0VG9nZ2xlPXt0b2dnbGVDYXJ0fSB0b3RhbFByb2R1Y3Q9e3RvdGFsUHJvZHVjdH0gb25Mb2dnaW5Ub2dnbGU9e3RvZ2dsZUxvZ2lufSAvPlxuICAgICAge2lzTG9naW5WaXNpYmxlICYmIDxMb2dpbiB1c2VyPXt1c2VyfSAvPiB9XG4gICAgICB7aXNDYXJ0VmlzaWJsZSAmJiA8Q2FydCBjYXJ0SXRlbXM9e2NhcnRJdGVtc30gaGFuZGxlTWludXM9e2hhbmRsZU1pbnVzfSBoYW5kbGVQbHVzPXtoYW5kbGVQbHVzfSBoYW5kbGVEZWxldGU9e2hhbmRsZURlbGV0ZX0gdG90YWxQcm9kdWN0PXt0b3RhbFByb2R1Y3R9IHRvdGFsU3VtPXt0b3RhbFN1bX0gIC8+fVxuICAgICAgPE5hdmJhciBvblNlbGVjdD17aGFuZGxlU2VsZWN0fSBvbldlYXRlclNlbGVjdD17aGFuZGxlV2VhdGVyfSAvPlxuICAgICAgPEJvZHkgc2VsZWN0ZWRPcHRpb249e3NlbGVjdGVkT3B0aW9ufSBhZGRUb0NhcnQ9e2FkZFRvQ2FydH0gbGlzdD17bGlzdH0vPlxuICAgIDwvZGl2PlxuICApO1xuXG59XG59XG5leHBvcnQgZGVmYXVsdCBkeW5hbWljICgoKSA9PiBQcm9taXNlLnJlc29sdmUoQXBwKSx7c3NyOiBmYWxzZX0gKSJdLCJuYW1lcyI6WyJOYXZiYXIiLCJIZWFkZXIiLCJCb2R5IiwiUmVhY3QiLCJDYXJ0IiwiTG9naW4iLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImR5bmFtaWMiLCJBcHAiLCJsaXN0Iiwic2V0TGlzdCIsInVzZXIiLCJzZXRVc2VyIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzZWxlY3RlZE9wdGlvbiIsInNldFNlbGVjdGVkT3B0aW9uIiwiY2FydEl0ZW1zIiwic2V0Q2FydEl0ZW1zIiwibG9jYWxTdG9yYWdlIiwic3RvcmVkQ2FydEl0ZW1zIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsImlzQ2FydFZpc2libGUiLCJzZXRDYXJ0VmlzaWJsZSIsImlzTG9naW5WaXNpYmxlIiwic2V0TG9nZ2luVmlzaWJsZSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsInRva2VuIiwiaGFuZGxlTG9nb3V0IiwicmVtb3ZlSXRlbSIsInRvZ2dsZUNhcnQiLCJ0b2dnbGVMb2dpbiIsImhhbmRsZVNlbGVjdCIsInR5cGUiLCJoYW5kbGVXZWF0ZXIiLCJ3ZWF0ZXIiLCJhZGRUb0NhcnQiLCJpdGVtIiwiZXhpc3RpbmdJdGVtIiwiZmluZCIsImNhcnRJdGVtIiwibmFtZSIsInVwZGF0ZWRDYXJ0SXRlbXMiLCJtYXAiLCJxdGUiLCJuZXdJdGVtIiwicHJpY2UiLCJzcmMiLCJkZXNjcmlwdGlvbiIsImhhbmRsZU1pbnVzIiwiaW5kZXgiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVQbHVzIiwiZmlsdGVyIiwiXyIsImkiLCJhbGVydCIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsU3VtIiwicmVkdWNlIiwiYWNjIiwidG90YWxQcm9kdWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DYXJ0VG9nZ2xlIiwib25Mb2dnaW5Ub2dnbGUiLCJvblNlbGVjdCIsIm9uV2VhdGVyU2VsZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzc3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/app/App.js\n"));

/***/ })

});