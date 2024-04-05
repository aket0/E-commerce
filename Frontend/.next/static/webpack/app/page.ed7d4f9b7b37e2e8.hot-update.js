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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _Navbar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Navbar/NavBar */ \"(app-pages-browser)/./src/app/component/Navbar/NavBar.js\");\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Header/Header */ \"(app-pages-browser)/./src/app/component/Header/Header.js\");\n/* harmony import */ var _Body_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Body/Body */ \"(app-pages-browser)/./src/app/component/Body/Body.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Cart_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Cart/Cart */ \"(app-pages-browser)/./src/app/component/Cart/Cart.js\");\n/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Login/Login */ \"(app-pages-browser)/./src/app/component/Login/Login.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction App() {\n    _s();\n    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        fetch(\"http://localhost:4000/api/itemList\").then((res)=>res.json()).then((data)=>setList(data));\n    }, []);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            return storedCartItems;\n        }\n    });\n    const [isCartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [isLoginVisible, setLogginVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            setCartItems(storedCartItems);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n    }, [\n        cartItems\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedToken = JSON.parse(localStorage.getItem(\"jwtToken\")) || [];\n            setUser(storedUser);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        localStorage.setItem(\"\", JSON.stringify(user));\n    }, [\n        user\n    ]);\n    const toggleCart = ()=>{\n        setCartVisible(!isCartVisible);\n        setLogginVisible(false);\n    };\n    const toggleLogin = ()=>{\n        setLogginVisible(!isLoginVisible);\n        setCartVisible(false);\n    };\n    const handleSelect = (type)=>{\n        setSelectedOption(type);\n    };\n    const handleWeater = (weater)=>{\n        setSelectedOption(weater);\n    };\n    const addToCart = (item)=>{\n        const existingItem = cartItems.find((cartItem)=>cartItem.name === item.name);\n        if (existingItem) {\n            const updatedCartItems = cartItems.map((cartItem)=>{\n                if (cartItem.name === item.name) {\n                    return {\n                        ...cartItem,\n                        qte: cartItem.qte + 1\n                    };\n                }\n                return cartItem;\n            });\n            setCartItems(updatedCartItems);\n        } else {\n            const newItem = {\n                name: item.name,\n                price: item.price,\n                src: item.src,\n                qte: 1,\n                description: item.description\n            };\n            setCartItems([\n                ...cartItems,\n                newItem\n            ]);\n        }\n    };\n    const handleMinus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte > 1) {\n            updatedCartItems[index].qte--;\n            setCartItems(updatedCartItems);\n        } else if (updatedCartItems[index].qte <= 1) {\n            handleDelete(index);\n        }\n    };\n    const handlePlus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte >= 0) {\n            updatedCartItems[index].qte++;\n            setCartItems(updatedCartItems);\n        }\n    };\n    const handleDelete = (index)=>{\n        const updatedCartItems = cartItems.filter((_, i)=>i !== index);\n        alert(\"remove from cart ?\");\n        setCartItems(updatedCartItems);\n    };\n    if (cartItems && Array.isArray(cartItems)) {\n        const totalSum = cartItems.reduce((acc, item)=>acc + item.price * item.qte, 0);\n        const totalProduct = cartItems.reduce((acc, item)=>acc + item.qte, 0);\n        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n            localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n        }, [\n            cartItems\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onCartToggle: toggleCart,\n                    totalProduct: totalProduct,\n                    onLogginToggle: toggleLogin\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 145,\n                    columnNumber: 7\n                }, this),\n                isLoginVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Login_Login__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    user: user\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 146,\n                    columnNumber: 26\n                }, this),\n                isCartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Cart_Cart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    cartItems: cartItems,\n                    handleMinus: handleMinus,\n                    handlePlus: handlePlus,\n                    handleDelete: handleDelete,\n                    totalProduct: totalProduct,\n                    totalSum: totalSum\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 147,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onSelect: handleSelect,\n                    onWeaterSelect: handleWeater\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 148,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Body_Body__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    selectedOption: selectedOption,\n                    addToCart: addToCart,\n                    list: list\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n                    lineNumber: 149,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/app/App.js\",\n            lineNumber: 144,\n            columnNumber: 5\n        }, this);\n    }\n}\n_s(App, \"ksHFVXBSQ68Z7+vlV3FpeedJpj4=\");\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(_c1 = ()=>Promise.resolve(App), {\n    ssr: false\n}));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c1, \"%default%$dynamic\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L2FwcC9BcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUMyQjtBQUNXO0FBQ0E7QUFDTjtBQUNOO0FBQ007QUFDRztBQUNTO0FBQ1Q7QUFJbEMsU0FBU1M7O0lBQ1IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdSLHFEQUFjLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNTLE1BQU1DLFFBQVEsR0FBR1YscURBQWMsQ0FBQyxFQUFFO0lBS3pDSSxnREFBU0EsQ0FBQztRQUNSTyxNQUFPLHNDQUNKQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUVAsUUFBUU87SUFFMUIsR0FBRyxFQUFFO0lBSUwsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHZCwrQ0FBUUEsQ0FBQztJQUNyRCxNQUFNLENBQUNlLFdBQVdDLGFBQWEsR0FBR2hCLCtDQUFRQSxDQUFDO1FBQ3pDLElBQUksT0FBT2lCLGlCQUFpQixhQUFhO1lBQ3pDLE1BQU1DLGtCQUFrQkMsS0FBS0MsS0FBSyxDQUFDSCxhQUFhSSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDM0UsT0FBT0g7UUFFWDtJQUFDO0lBRUMsTUFBTSxDQUFDSSxlQUFlQyxlQUFlLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUVqRCxNQUFLLENBQUN3QixnQkFBZ0JDLGlCQUFpQixHQUFHekIsK0NBQVFBLENBQUM7SUFFbkRDLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxPQUFPZ0IsaUJBQWlCLGFBQWE7WUFFekMsTUFBTUMsa0JBQWtCQyxLQUFLQyxLQUFLLENBQUNILGFBQWFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUMzRUwsYUFBYUU7UUFDakI7SUFBQyxHQUFHLEVBQUU7SUFFSmpCLGdEQUFTQSxDQUFDO1FBQ1JnQixhQUFhUyxPQUFPLENBQUMsYUFBYVAsS0FBS1EsU0FBUyxDQUFD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OEJBQ2IsOERBQUNyRSxzREFBTUE7b0JBQUNzRSxjQUFjbkM7b0JBQVlnQyxjQUFjQTtvQkFBY0ksZ0JBQWdCbkM7Ozs7OztnQkFDN0VQLGdDQUFrQiw4REFBQ3pCLG9EQUFLQTtvQkFBQ08sTUFBTUE7Ozs7OztnQkFDL0JnQiwrQkFBaUIsOERBQUN4QixrREFBSUE7b0JBQUNpQixXQUFXQTtvQkFBV2tDLGFBQWFBO29CQUFhRyxZQUFZQTtvQkFBWUQsY0FBY0E7b0JBQWNXLGNBQWNBO29CQUFjSCxVQUFVQTs7Ozs7OzhCQUNsSyw4REFBQ2pFLHNEQUFNQTtvQkFBQ3lFLFVBQVVuQztvQkFBY29DLGdCQUFnQmxDOzs7Ozs7OEJBQ2hELDhEQUFDdEMsa0RBQUlBO29CQUFDaUIsZ0JBQWdCQTtvQkFBZ0J1QixXQUFXQTtvQkFBV2hDLE1BQU1BOzs7Ozs7Ozs7Ozs7SUFJeEU7QUFDQTtHQTVJVUQ7S0FBQUE7QUE2SVYsK0RBQWUsTUFBQUQsd0RBQU9BLE9BQUUsSUFBTW1FLFFBQVFDLE9BQU8sQ0FBQ25FLE1BQUs7SUFBQ29FLEtBQUs7QUFBSyxJQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L2FwcC9BcHAuanM/MDI5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0ICcuLi8uLi9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL05hdmJhci9OYXZCYXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4uL0JvZHkvQm9keSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vQ2FydC9DYXJ0JztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9Mb2dpbi9Mb2dpbic7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuXG5cbiBmdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvaXRlbUxpc3RgKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldExpc3QoZGF0YSkpXG4gICBcbiAgfSwgW10pO1xuXG4gICAgIFxuXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3Qgc3RvcmVkQ2FydEl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRJdGVtc1wiKSkgfHwgW107XG4gICAgcmV0dXJuIHN0b3JlZENhcnRJdGVtcztcbiAgXG59fSk7XG4gIFxuICBjb25zdCBbaXNDYXJ0VmlzaWJsZSwgc2V0Q2FydFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0W2lzTG9naW5WaXNpYmxlLCBzZXRMb2dnaW5WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgIFxuICAgIGNvbnN0IHN0b3JlZENhcnRJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0SXRlbXNcIikpIHx8IFtdO1xuICAgIHNldENhcnRJdGVtcyhzdG9yZWRDYXJ0SXRlbXMpO1xufX0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydEl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xuICAgIFxuICB9LCBbY2FydEl0ZW1zXSk7XG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xuICAgXG4gICAgY29uc3Qgc3RvcmVkVG9rZW4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiand0VG9rZW5cIikpIHx8IFtdO1xuICAgIHNldFVzZXIoc3RvcmVkVXNlcik7XG59fSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJcIiwgSlNPTi5zdHJpbmdpZnkodXNlcikpO1xuICAgIFxuICB9LCBbdXNlcl0pO1xuICBcbiAgY29uc3QgdG9nZ2xlQ2FydCA9ICgpID0+IHtcbiAgICAgIHNldENhcnRWaXNpYmxlKCFpc0NhcnRWaXNpYmxlKTtcbiAgICAgIHNldExvZ2dpblZpc2libGUoZmFsc2UpXG4gICAgICBcbiAgfTtcbiAgY29uc3QgdG9nZ2xlTG9naW4gPSAoKSA9PiB7XG4gICAgc2V0TG9nZ2luVmlzaWJsZSghaXNMb2dpblZpc2libGUpO1xuICAgIHNldENhcnRWaXNpYmxlKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVNlbGVjdCA9ICh0eXBlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRPcHRpb24odHlwZSk7XG4gIH07XG4gIGNvbnN0IGhhbmRsZVdlYXRlciA9ICh3ZWF0ZXIpID0+IHtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbih3ZWF0ZXIpO1xuICB9O1xuICBjb25zdCBhZGRUb0NhcnQgPSAoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGV4aXN0aW5nSXRlbSA9IGNhcnRJdGVtcy5maW5kKGNhcnRJdGVtID0+IGNhcnRJdGVtLm5hbWUgPT09IGl0ZW0ubmFtZSk7XG5cbiAgICBpZiAoZXhpc3RpbmdJdGVtKSB7XG4gICAgICBjb25zdCB1cGRhdGVkQ2FydEl0ZW1zID0gY2FydEl0ZW1zLm1hcChjYXJ0SXRlbSA9PiB7XG4gICAgICAgIGlmIChjYXJ0SXRlbS5uYW1lID09PSBpdGVtLm5hbWUpIHtcbiAgICAgICAgICByZXR1cm4geyAuLi5jYXJ0SXRlbSwgcXRlOiBjYXJ0SXRlbS5xdGUgKyAxIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhcnRJdGVtO1xuICAgICAgfSk7XG4gIFxuICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdJdGVtID0ge1xuICAgICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICAgIHByaWNlOiBpdGVtLnByaWNlLFxuICAgICAgICBzcmM6IGl0ZW0uc3JjLFxuICAgICAgICBxdGU6IDEsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBpdGVtLmRlc2NyaXB0aW9uXG4gICAgICB9O1xuICBcbiAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCBuZXdJdGVtXSk7XG4gICAgfVxuICB9O1xuXG5cbiAgY29uc3QgaGFuZGxlTWludXMgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkQ2FydEl0ZW1zID0gWy4uLmNhcnRJdGVtc107XG4gICAgaWYgKHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZSA+IDEpIHtcbiAgICAgIHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZS0tO1xuICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xuICAgIH0gZWxzZSBpZiAodXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlIDw9IDEpIHtcbiAgICAgIFxuICAgICAgaGFuZGxlRGVsZXRlKGluZGV4KTtcbiAgICB9XG4gIH07ICBcblxuICBjb25zdCBoYW5kbGVQbHVzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZENhcnRJdGVtcyA9IFsuLi5jYXJ0SXRlbXNdO1xuICAgIGlmICh1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUgPj0gMCkge1xuICAgICAgdXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlKys7XG4gICAgICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnRJdGVtcyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkQ2FydEl0ZW1zID0gY2FydEl0ZW1zLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpO1xuICAgIGFsZXJ0KFwicmVtb3ZlIGZyb20gY2FydCA/XCIpO1xuICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgfTtcbiAgaWYgKGNhcnRJdGVtcyAmJiBBcnJheS5pc0FycmF5KGNhcnRJdGVtcykpIHtcbiAgY29uc3QgdG90YWxTdW0gPSBjYXJ0SXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ucHJpY2UgKiBpdGVtLnF0ZSwgMClcbiAgY29uc3QgdG90YWxQcm9kdWN0ID0gY2FydEl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnF0ZSwgMClcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1zKSk7XG4gIH0sIFtjYXJ0SXRlbXNdKTtcblxuICBcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8SGVhZGVyIG9uQ2FydFRvZ2dsZT17dG9nZ2xlQ2FydH0gdG90YWxQcm9kdWN0PXt0b3RhbFByb2R1Y3R9IG9uTG9nZ2luVG9nZ2xlPXt0b2dnbGVMb2dpbn0gLz5cbiAgICAgIHtpc0xvZ2luVmlzaWJsZSAmJiA8TG9naW4gdXNlcj17dXNlcn0gLz4gfVxuICAgICAge2lzQ2FydFZpc2libGUgJiYgPENhcnQgY2FydEl0ZW1zPXtjYXJ0SXRlbXN9IGhhbmRsZU1pbnVzPXtoYW5kbGVNaW51c30gaGFuZGxlUGx1cz17aGFuZGxlUGx1c30gaGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9IHRvdGFsUHJvZHVjdD17dG90YWxQcm9kdWN0fSB0b3RhbFN1bT17dG90YWxTdW19ICAvPn1cbiAgICAgIDxOYXZiYXIgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0gb25XZWF0ZXJTZWxlY3Q9e2hhbmRsZVdlYXRlcn0gLz5cbiAgICAgIDxCb2R5IHNlbGVjdGVkT3B0aW9uPXtzZWxlY3RlZE9wdGlvbn0gYWRkVG9DYXJ0PXthZGRUb0NhcnR9IGxpc3Q9e2xpc3R9Lz5cbiAgICA8L2Rpdj5cbiAgKTtcblxufVxufVxuZXhwb3J0IGRlZmF1bHQgZHluYW1pYyAoKCkgPT4gUHJvbWlzZS5yZXNvbHZlKEFwcCkse3NzcjogZmFsc2V9ICkiXSwibmFtZXMiOlsiTmF2YmFyIiwiSGVhZGVyIiwiQm9keSIsIlJlYWN0IiwiQ2FydCIsIkxvZ2luIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkeW5hbWljIiwiQXBwIiwibGlzdCIsInNldExpc3QiLCJ1c2VyIiwic2V0VXNlciIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsImxvY2FsU3RvcmFnZSIsInN0b3JlZENhcnRJdGVtcyIsIkpTT04iLCJwYXJzZSIsImdldEl0ZW0iLCJpc0NhcnRWaXNpYmxlIiwic2V0Q2FydFZpc2libGUiLCJpc0xvZ2luVmlzaWJsZSIsInNldExvZ2dpblZpc2libGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic3RvcmVkVG9rZW4iLCJzdG9yZWRVc2VyIiwidG9nZ2xlQ2FydCIsInRvZ2dsZUxvZ2luIiwiaGFuZGxlU2VsZWN0IiwidHlwZSIsImhhbmRsZVdlYXRlciIsIndlYXRlciIsImFkZFRvQ2FydCIsIml0ZW0iLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiY2FydEl0ZW0iLCJuYW1lIiwidXBkYXRlZENhcnRJdGVtcyIsIm1hcCIsInF0ZSIsIm5ld0l0ZW0iLCJwcmljZSIsInNyYyIsImRlc2NyaXB0aW9uIiwiaGFuZGxlTWludXMiLCJpbmRleCIsImhhbmRsZURlbGV0ZSIsImhhbmRsZVBsdXMiLCJmaWx0ZXIiLCJfIiwiaSIsImFsZXJ0IiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWxTdW0iLCJyZWR1Y2UiLCJhY2MiLCJ0b3RhbFByb2R1Y3QiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNhcnRUb2dnbGUiLCJvbkxvZ2dpblRvZ2dsZSIsIm9uU2VsZWN0Iiwib25XZWF0ZXJTZWxlY3QiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/app/App.js\n"));

/***/ })

});