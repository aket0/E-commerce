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

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./src/app/globals.css\");\n/* harmony import */ var _component_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/Navbar/NavBar */ \"(app-pages-browser)/./src/app/component/Navbar/NavBar.js\");\n/* harmony import */ var _component_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/Header/Header */ \"(app-pages-browser)/./src/app/component/Header/Header.js\");\n/* harmony import */ var _component_Body_Body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/Body/Body */ \"(app-pages-browser)/./src/app/component/Body/Body.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _component_Cart_Cart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/Cart/Cart */ \"(app-pages-browser)/./src/app/component/Cart/Cart.js\");\n/* harmony import */ var _component_Login_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/Login/Login */ \"(app-pages-browser)/./src/app/component/Login/Login.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_5___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        fetch(\"http://localhost:4000/item\") // Changez l'URL en fonction de votre configuration\n        .then((res)=>res.json()).then((data)=>setList(data)).catch((error)=>console.error(\"Error fetching products:\", error));\n    }, []);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(()=>{\n        if (true) {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            return storedCartItems;\n        }\n    });\n    const [isCartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const [isLoginVisible, setLogginVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n        setCartItems(storedCartItems);\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n    }, [\n        cartItems\n    ]);\n    const toggleCart = ()=>{\n        setCartVisible(!isCartVisible);\n    };\n    const toggleLogin = ()=>{\n        setLogginVisible(!isLoginVisible);\n    };\n    const handleSelect = (type)=>{\n        setSelectedOption(type);\n    };\n    const handleWeater = (weater)=>{\n        setSelectedOption(weater);\n    };\n    const addToCart = (item)=>{\n        const existingItem = cartItems.find((cartItem)=>cartItem.name === item.name);\n        if (existingItem) {\n            const updatedCartItems = cartItems.map((cartItem)=>{\n                if (cartItem.name === item.name) {\n                    return {\n                        ...cartItem,\n                        qte: cartItem.qte + 1\n                    };\n                }\n                return cartItem;\n            });\n            setCartItems(updatedCartItems);\n        } else {\n            const newItem = {\n                name: item.name,\n                price: item.price,\n                src: item.src,\n                qte: 1\n            };\n            setCartItems([\n                ...cartItems,\n                newItem\n            ]);\n        }\n    };\n    const handleMinus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte > 1) {\n            updatedCartItems[index].qte--;\n            setCartItems(updatedCartItems);\n        } else if (updatedCartItems[index].qte <= 1) {\n            handleDelete(index);\n        }\n    };\n    const handlePlus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte >= 0) {\n            updatedCartItems[index].qte++;\n            setCartItems(updatedCartItems);\n        }\n    };\n    const handleDelete = (index)=>{\n        const updatedCartItems = cartItems.filter((_, i)=>i !== index);\n        alert(\"remove from cart ?\");\n        setCartItems(updatedCartItems);\n    };\n    if (cartItems && Array.isArray(cartItems)) {\n        const totalSum = cartItems.reduce((acc, item)=>acc + item.price * item.qte, 0);\n        const totalProduct = cartItems.reduce((acc, item)=>acc + item.qte, 0);\n        (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n            localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n        }, [\n            cartItems\n        ]);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"App\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Header_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onCartToggle: toggleCart,\n                    totalProduct: totalProduct,\n                    onLogginToggle: toggleLogin,\n                    user: user\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/Frontend/src/app/page.js\",\n                    lineNumber: 130,\n                    columnNumber: 7\n                }, this),\n                isLoginVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Login_Login__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/Frontend/src/app/page.js\",\n                    lineNumber: 131,\n                    columnNumber: 26\n                }, this),\n                isCartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Cart_Cart__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    cartItems: cartItems,\n                    handleMinus: handleMinus,\n                    handlePlus: handlePlus,\n                    handleDelete: handleDelete,\n                    totalProduct: totalProduct,\n                    totalSum: totalSum\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/Frontend/src/app/page.js\",\n                    lineNumber: 132,\n                    columnNumber: 25\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onSelect: handleSelect,\n                    onWeaterSelect: handleWeater\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/Frontend/src/app/page.js\",\n                    lineNumber: 133,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Body_Body__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    selectedOption: selectedOption,\n                    addToCart: addToCart,\n                    list: list\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/Frontend/src/app/page.js\",\n                    lineNumber: 134,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/Frontend/src/app/page.js\",\n            lineNumber: 129,\n            columnNumber: 5\n        }, this);\n    }\n}\n_s(Home, \"/7IXSJ7fFNl9nFDiEuJfW/FdY3A=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEM7b0JBQWNtQyxnQkFBZ0JqQzs7Ozs7OzhCQUNoRCw4REFBQ3RDLDREQUFJQTtvQkFBQ21CLGdCQUFnQkE7b0JBQWdCcUIsV0FBV0E7b0JBQVdqQyxNQUFNQTs7Ozs7Ozs7Ozs7O0lBSXhFO0FBQ0E7R0E5SHdCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UuanM/MmIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0ICcuL2dsb2JhbHMuY3NzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnQvTmF2YmFyL05hdkJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50L0hlYWRlci9IZWFkZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi9jb21wb25lbnQvQm9keS9Cb2R5JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FydCBmcm9tICcuL2NvbXBvbmVudC9DYXJ0L0NhcnQnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4vY29tcG9uZW50L0xvZ2luL0xvZ2luJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbGlzdCwgc2V0TGlzdF0gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2l0ZW1gKSAvLyBDaGFuZ2V6IGwnVVJMIGVuIGZvbmN0aW9uIGRlIHZvdHJlIGNvbmZpZ3VyYXRpb25cbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oZGF0YSA9PiBzZXRMaXN0KGRhdGEpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2R1Y3RzOicsIGVycm9yKSk7XG4gIH0sIFtdKTtcbiBcblxuXG5cbiAgICAgXG5cbiAgY29uc3QgW3NlbGVjdGVkT3B0aW9uLCBzZXRTZWxlY3RlZE9wdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NhcnRJdGVtcywgc2V0Q2FydEl0ZW1zXSA9IHVzZVN0YXRlKCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCBzdG9yZWRDYXJ0SXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY2FydEl0ZW1zXCIpKSB8fCBbXTtcbiAgICByZXR1cm4gc3RvcmVkQ2FydEl0ZW1zO1xuICAgIH1cbiAgfSk7XG4gIFxuICBjb25zdCBbaXNDYXJ0VmlzaWJsZSwgc2V0Q2FydFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0W2lzTG9naW5WaXNpYmxlLCBzZXRMb2dnaW5WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgIFxuICAgIGNvbnN0IHN0b3JlZENhcnRJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0SXRlbXNcIikpIHx8IFtdO1xuICAgIHNldENhcnRJdGVtcyhzdG9yZWRDYXJ0SXRlbXMpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNhcnRJdGVtc1wiLCBKU09OLnN0cmluZ2lmeShjYXJ0SXRlbXMpKTtcbiAgICBcbiAgfSwgW2NhcnRJdGVtc10pO1xuICBcbiAgY29uc3QgdG9nZ2xlQ2FydCA9ICgpID0+IHtcbiAgICAgIHNldENhcnRWaXNpYmxlKCFpc0NhcnRWaXNpYmxlKTtcbiAgICAgIFxuICB9O1xuICBjb25zdCB0b2dnbGVMb2dpbiA9ICgpID0+IHtcbiAgICBzZXRMb2dnaW5WaXNpYmxlKCFpc0xvZ2luVmlzaWJsZSk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVTZWxlY3QgPSAodHlwZSkgPT4ge1xuICAgIHNldFNlbGVjdGVkT3B0aW9uKHR5cGUpO1xuICB9O1xuICBjb25zdCBoYW5kbGVXZWF0ZXIgPSAod2VhdGVyKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRPcHRpb24od2VhdGVyKTtcbiAgfTtcbiAgY29uc3QgYWRkVG9DYXJ0ID0gKGl0ZW0pID0+IHtcbiAgICBjb25zdCBleGlzdGluZ0l0ZW0gPSBjYXJ0SXRlbXMuZmluZChjYXJ0SXRlbSA9PiBjYXJ0SXRlbS5uYW1lID09PSBpdGVtLm5hbWUpO1xuXG4gICAgaWYgKGV4aXN0aW5nSXRlbSkge1xuICAgICAgY29uc3QgdXBkYXRlZENhcnRJdGVtcyA9IGNhcnRJdGVtcy5tYXAoY2FydEl0ZW0gPT4ge1xuICAgICAgICBpZiAoY2FydEl0ZW0ubmFtZSA9PT0gaXRlbS5uYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHsgLi4uY2FydEl0ZW0sIHF0ZTogY2FydEl0ZW0ucXRlICsgMSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYXJ0SXRlbTtcbiAgICAgIH0pO1xuICBcbiAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbmV3SXRlbSA9IHtcbiAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgICBwcmljZTogaXRlbS5wcmljZSxcbiAgICAgICAgc3JjOiBpdGVtLnNyYyxcbiAgICAgICAgcXRlOiAxXG4gICAgICB9O1xuICBcbiAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCBuZXdJdGVtXSk7XG4gICAgfVxuICB9O1xuXG5cbiAgY29uc3QgaGFuZGxlTWludXMgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkQ2FydEl0ZW1zID0gWy4uLmNhcnRJdGVtc107XG4gICAgaWYgKHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZSA+IDEpIHtcbiAgICAgIHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZS0tO1xuICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xuICAgIH0gZWxzZSBpZiAodXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlIDw9IDEpIHtcbiAgICAgIFxuICAgICAgaGFuZGxlRGVsZXRlKGluZGV4KTtcbiAgICB9XG4gIH07ICBcblxuICBjb25zdCBoYW5kbGVQbHVzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZENhcnRJdGVtcyA9IFsuLi5jYXJ0SXRlbXNdO1xuICAgIGlmICh1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUgPj0gMCkge1xuICAgICAgdXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlKys7XG4gICAgICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnRJdGVtcyk7XG4gICAgfVxuICB9O1xuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaW5kZXgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVkQ2FydEl0ZW1zID0gY2FydEl0ZW1zLmZpbHRlcigoXywgaSkgPT4gaSAhPT0gaW5kZXgpO1xuICAgIGFsZXJ0KFwicmVtb3ZlIGZyb20gY2FydCA/XCIpO1xuICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgfTtcbiAgaWYgKGNhcnRJdGVtcyAmJiBBcnJheS5pc0FycmF5KGNhcnRJdGVtcykpIHtcbiAgY29uc3QgdG90YWxTdW0gPSBjYXJ0SXRlbXMucmVkdWNlKChhY2MsIGl0ZW0pID0+IGFjYyArIGl0ZW0ucHJpY2UgKiBpdGVtLnF0ZSwgMClcbiAgY29uc3QgdG90YWxQcm9kdWN0ID0gY2FydEl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnF0ZSwgMClcbiAgXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjYXJ0SXRlbXNcIiwgSlNPTi5zdHJpbmdpZnkoY2FydEl0ZW1zKSk7XG4gIH0sIFtjYXJ0SXRlbXNdKTtcblxuICBcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8SGVhZGVyIG9uQ2FydFRvZ2dsZT17dG9nZ2xlQ2FydH0gdG90YWxQcm9kdWN0PXt0b3RhbFByb2R1Y3R9IG9uTG9nZ2luVG9nZ2xlPXt0b2dnbGVMb2dpbn0gdXNlcj17dXNlcn0vPlxuICAgICAge2lzTG9naW5WaXNpYmxlICYmIDxMb2dpbiAvPn1cbiAgICAgIHtpc0NhcnRWaXNpYmxlICYmIDxDYXJ0IGNhcnRJdGVtcz17Y2FydEl0ZW1zfSBoYW5kbGVNaW51cz17aGFuZGxlTWludXN9IGhhbmRsZVBsdXM9e2hhbmRsZVBsdXN9IGhhbmRsZURlbGV0ZT17aGFuZGxlRGVsZXRlfSB0b3RhbFByb2R1Y3Q9e3RvdGFsUHJvZHVjdH0gdG90YWxTdW09e3RvdGFsU3VtfSAgLz59XG4gICAgICA8TmF2YmFyIG9uU2VsZWN0PXtoYW5kbGVTZWxlY3R9IG9uV2VhdGVyU2VsZWN0PXtoYW5kbGVXZWF0ZXJ9IC8+XG4gICAgICA8Qm9keSBzZWxlY3RlZE9wdGlvbj17c2VsZWN0ZWRPcHRpb259IGFkZFRvQ2FydD17YWRkVG9DYXJ0fSBsaXN0PXtsaXN0fS8+XG4gICAgPC9kaXY+XG4gICk7XG5cbn1cbn1cblxuIl0sIm5hbWVzIjpbIk5hdmJhciIsIkhlYWRlciIsIkJvZHkiLCJSZWFjdCIsIkNhcnQiLCJMb2dpbiIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSG9tZSIsImxpc3QiLCJzZXRMaXN0IiwidXNlciIsInNldFVzZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwic2VsZWN0ZWRPcHRpb24iLCJzZXRTZWxlY3RlZE9wdGlvbiIsImNhcnRJdGVtcyIsInNldENhcnRJdGVtcyIsInN0b3JlZENhcnRJdGVtcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpc0NhcnRWaXNpYmxlIiwic2V0Q2FydFZpc2libGUiLCJpc0xvZ2luVmlzaWJsZSIsInNldExvZ2dpblZpc2libGUiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidG9nZ2xlQ2FydCIsInRvZ2dsZUxvZ2luIiwiaGFuZGxlU2VsZWN0IiwidHlwZSIsImhhbmRsZVdlYXRlciIsIndlYXRlciIsImFkZFRvQ2FydCIsIml0ZW0iLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiY2FydEl0ZW0iLCJuYW1lIiwidXBkYXRlZENhcnRJdGVtcyIsIm1hcCIsInF0ZSIsIm5ld0l0ZW0iLCJwcmljZSIsInNyYyIsImhhbmRsZU1pbnVzIiwiaW5kZXgiLCJoYW5kbGVEZWxldGUiLCJoYW5kbGVQbHVzIiwiZmlsdGVyIiwiXyIsImkiLCJhbGVydCIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsU3VtIiwicmVkdWNlIiwiYWNjIiwidG90YWxQcm9kdWN0IiwiZGl2IiwiY2xhc3NOYW1lIiwib25DYXJ0VG9nZ2xlIiwib25Mb2dnaW5Ub2dnbGUiLCJvblNlbGVjdCIsIm9uV2VhdGVyU2VsZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});