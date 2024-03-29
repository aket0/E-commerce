"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/[id]/page",{

/***/ "(app-pages-browser)/./src/app/products/[id]/page.js":
/*!***************************************!*\
  !*** ./src/app/products/[id]/page.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _component_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/Header/Header */ \"(app-pages-browser)/./src/app/component/Header/Header.js\");\n/* harmony import */ var _component_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Navbar/NavBar */ \"(app-pages-browser)/./src/app/component/Navbar/NavBar.js\");\n/* harmony import */ var _component_Cart_Cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Cart/Cart */ \"(app-pages-browser)/./src/app/component/Cart/Cart.js\");\n/* harmony import */ var _component_Login_Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/component/Login/Login */ \"(app-pages-browser)/./src/app/component/Login/Login.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/api/app-dynamic.js\");\n/* harmony import */ var _component_Item_Item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/Item/Item */ \"(app-pages-browser)/./src/app/component/Item/Item.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst ProductPage = ()=>{\n    _s();\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [list, setList] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [user, setUser] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"http://localhost:4000/api/itemList\").then((res)=>res.json()).then((data)=>setList(data));\n    }, []);\n    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            return storedCartItems;\n        }\n    });\n    const [isCartVisible, setCartVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isLoginVisible, setLogginVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (typeof localStorage !== \"undefined\") {\n            const storedCartItems = JSON.parse(localStorage.getItem(\"cartItems\")) || [];\n            setCartItems(storedCartItems);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n    }, [\n        cartItems\n    ]);\n    const toggleCart = ()=>{\n        setCartVisible(!isCartVisible);\n        setLogginVisible(false);\n    };\n    const toggleLogin = ()=>{\n        setLogginVisible(!isLoginVisible);\n        setCartVisible(false);\n    };\n    const handleSelect = (type)=>{\n        setSelectedOption(type);\n    };\n    const handleWeater = (weater)=>{\n        setSelectedOption(weater);\n    };\n    const addToCart = (product)=>{\n        const existingItem = cartItems.find((cartItem)=>cartItem.name === item.name);\n        if (existingItem) {\n            const updatedCartItems = cartItems.map((cartItem)=>{\n                if (cartItem.name === item.name) {\n                    return {\n                        ...cartItem,\n                        qte: cartItem.qte + 1\n                    };\n                }\n                return cartItem;\n            });\n            setCartItems(updatedCartItems);\n        } else {\n            const newItem = {\n                name: item.name,\n                price: item.price,\n                src: item.src,\n                qte: 1\n            };\n            setCartItems([\n                ...cartItems,\n                newItem\n            ]);\n        }\n    };\n    const handleMinus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte > 1) {\n            updatedCartItems[index].qte--;\n            setCartItems(updatedCartItems);\n        } else if (updatedCartItems[index].qte <= 1) {\n            handleDelete(index);\n        }\n    };\n    const handlePlus = (index)=>{\n        const updatedCartItems = [\n            ...cartItems\n        ];\n        if (updatedCartItems[index].qte >= 0) {\n            updatedCartItems[index].qte++;\n            setCartItems(updatedCartItems);\n        }\n    };\n    const handleDelete = (index)=>{\n        const updatedCartItems = cartItems.filter((_, i)=>i !== index);\n        alert(\"remove from cart ?\");\n        setCartItems(updatedCartItems);\n    };\n    if (cartItems && Array.isArray(cartItems)) {\n        const totalSum = cartItems.reduce((acc, item1)=>acc + item1.price * item1.qte, 0);\n        const totalProduct = cartItems.reduce((acc, item1)=>acc + item1.qte, 0);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            localStorage.setItem(\"cartItems\", JSON.stringify(cartItems));\n        }, [\n            cartItems\n        ]);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n            const fetchProduct = async ()=>{\n                try {\n                    // Extraire l'ID du produit de l'URL\n                    const productId = window.location.pathname.split(\"/\").pop();\n                    console.log(productId);\n                    // Envoyer une requête GET à votre API pour récupérer les détails du produit\n                    const response = await fetch(\"http://localhost:4000/api/product/\".concat(productId));\n                    if (response.ok) {\n                        const data = await response.json();\n                        setProduct(data);\n                        console.log(product);\n                    } else {\n                        console.error(\"Error fetching product data:\", response.statusText);\n                    }\n                } catch (error) {\n                    console.error(\"Error fetching product data:\", error);\n                }\n            };\n            fetchProduct();\n        }, []);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Header_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onCartToggle: toggleCart,\n                    totalProduct: totalProduct,\n                    onLogginToggle: toggleLogin,\n                    user: user\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/products/[id]/page.js\",\n                    lineNumber: 155,\n                    columnNumber: 7\n                }, undefined),\n                isLoginVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Login_Login__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/products/[id]/page.js\",\n                    lineNumber: 156,\n                    columnNumber: 26\n                }, undefined),\n                isCartVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Cart_Cart__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    cartItems: cartItems,\n                    handleMinus: handleMinus,\n                    handlePlus: handlePlus,\n                    handleDelete: handleDelete,\n                    totalProduct: totalProduct,\n                    totalSum: totalSum\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/products/[id]/page.js\",\n                    lineNumber: 157,\n                    columnNumber: 25\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Navbar_NavBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    onSelect: handleSelect,\n                    onWeaterSelect: handleWeater\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/products/[id]/page.js\",\n                    lineNumber: 158,\n                    columnNumber: 7\n                }, undefined),\n                product && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_Item_Item__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    product: product,\n                    addToCart: addToCart\n                }, void 0, false, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/products/[id]/page.js\",\n                    lineNumber: 159,\n                    columnNumber: 18\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/products/[id]/page.js\",\n            lineNumber: 154,\n            columnNumber: 5\n        }, undefined);\n    }\n    ;\n};\n_s(ProductPage, \"f2z/LPxfndxISSd+pkYtb6nchMU=\");\n_c = ProductPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_c2 = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(_c1 = ()=>Promise.resolve(ProductPage), {\n    ssr: false\n}));\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"ProductPage\");\n$RefreshReg$(_c1, \"%default%$dynamic\");\n$RefreshReg$(_c2, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvW2lkXS9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNBO0FBQ0E7QUFDTjtBQUNEO0FBQ1Q7QUFDVTtBQUU3QyxNQUFNUyxjQUFjOztJQUNsQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUM7SUFDdkMsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdiLHFEQUFjLENBQUMsRUFBRTtJQUN6QyxNQUFNLENBQUNjLE1BQU1DLFFBQVEsR0FBR2YscURBQWMsQ0FBQyxFQUFFO0lBS3pDQyxnREFBU0EsQ0FBQztRQUNSZSxNQUFPLHNDQUNKQyxJQUFJLENBQUNDLENBQUFBLE1BQU9BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQ0csQ0FBQUEsT0FBUVAsUUFBUU87SUFFMUIsR0FBRyxFQUFFO0lBSUwsTUFBTSxDQUFDQyxnQkFBZ0JDLGtCQUFrQixHQUFHcEIsK0NBQVFBLENBQUM7SUFDckQsTUFBTSxDQUFDcUIsV0FBV0MsYUFBYSxHQUFHdEIsK0NBQVFBLENBQUM7UUFDekMsSUFBSSxPQUFPdUIsaUJBQWlCLGFBQWE7WUFDekMsTUFBTUMsa0JBQWtCQyxLQUFLQyxLQUFLLENBQUNILGFBQWFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUMzRSxPQUFPSDtRQUVYO0lBQUM7SUFFQyxNQUFNLENBQUNJLGVBQWVDLGVBQWUsR0FBRzdCLCtDQUFRQSxDQUFDO0lBRWpELE1BQUssQ0FBQzhCLGdCQUFnQkMsaUJBQWlCLEdBQUcvQiwrQ0FBUUEsQ0FBQztJQUVuREQsZ0RBQVNBLENBQUM7UUFDUixJQUFJLE9BQU93QixpQkFBaUIsYUFBYTtZQUV6QyxNQUFNQyxrQkFBa0JDLEtBQUtDLEtBQUssQ0FBQ0gsYUFBYUksT0FBTyxDQUFDLGlCQUFpQixFQUFFO1lBQzNFTCxhQUFhRTtRQUNqQjtJQUFDLEdBQUcsRUFBRTtJQUVKekIsZ0RBQVNBLENBQUM7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RWYsTUFBTTFELE9BQU8sTUFBTXlELFNBQVMxRCxJQUFJO3dCQUVoQ1IsV0FBV1M7d0JBQ1h1RCxRQUFRQyxHQUFHLENBQUNsRTtvQkFFZCxPQUFPO3dCQUNMaUUsUUFBUUksS0FBSyxDQUFDLGdDQUFnQ0YsU0FBU0csVUFBVTtvQkFDbkU7Z0JBQ0YsRUFBRSxPQUFPRCxPQUFPO29CQUNkSixRQUFRSSxLQUFLLENBQUMsZ0NBQWdDQTtnQkFDaEQ7WUFDRjtZQUVBWDtRQUNGLEdBQUcsRUFBRTtRQUVMLHFCQUNFLDhEQUFDYTs7OEJBQ0MsOERBQUM5RSxnRUFBTUE7b0JBQUMrRSxjQUFjOUM7b0JBQVkrQixjQUFjQTtvQkFBY2dCLGdCQUFnQjlDO29CQUFhdkIsTUFBTUE7Ozs7OztnQkFDaEdrQixnQ0FBa0IsOERBQUMxQiw4REFBS0E7Ozs7O2dCQUN4QndCLCtCQUFpQiw4REFBQ3pCLDREQUFJQTtvQkFBQ2tCLFdBQVdBO29CQUFXK0IsYUFBYUE7b0JBQWFHLFlBQVlBO29CQUFZRCxjQUFjQTtvQkFBY1csY0FBY0E7b0JBQWNILFVBQVVBOzs7Ozs7OEJBQ2xLLDhEQUFDNUQsZ0VBQU1BO29CQUFDZ0YsVUFBVTlDO29CQUFjK0MsZ0JBQWdCN0M7Ozs7OztnQkFDaEQ5Qix5QkFBVyw4REFBQ0YsNERBQUlBO29CQUFDRSxTQUFTQTtvQkFBU2dDLFdBQVdBOzs7Ozs7Ozs7Ozs7SUFJcEQ7O0FBQ0E7R0ExSk1qQztLQUFBQTtBQTRKTiwrREFBZSxNQUFBRix3REFBT0EsT0FBRSxJQUFNK0UsUUFBUUMsT0FBTyxDQUFDOUUsY0FBYTtJQUFDK0UsS0FBSztBQUFLLElBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9kdWN0cy9baWRdL3BhZ2UuanM/YWFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudC9IZWFkZXIvSGVhZGVyJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50L05hdmJhci9OYXZCYXInO1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vLi4vY29tcG9uZW50L0NhcnQvQ2FydCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnQC9jb21wb25lbnQvTG9naW4vTG9naW4nO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCBJdGVtIGZyb20gJy4uLy4uL2NvbXBvbmVudC9JdGVtL0l0ZW0nO1xuXG5jb25zdCBQcm9kdWN0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gUmVhY3QudXNlU3RhdGUoW10pO1xuXG5cblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvaXRlbUxpc3RgKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbihkYXRhID0+IHNldExpc3QoZGF0YSkpXG4gICBcbiAgfSwgW10pO1xuXG4gICAgIFxuXG4gIGNvbnN0IFtzZWxlY3RlZE9wdGlvbiwgc2V0U2VsZWN0ZWRPcHRpb25dID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZSgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY29uc3Qgc3RvcmVkQ2FydEl0ZW1zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNhcnRJdGVtc1wiKSkgfHwgW107XG4gICAgcmV0dXJuIHN0b3JlZENhcnRJdGVtcztcbiAgXG59fSk7XG4gIFxuICBjb25zdCBbaXNDYXJ0VmlzaWJsZSwgc2V0Q2FydFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0W2lzTG9naW5WaXNpYmxlLCBzZXRMb2dnaW5WaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgIFxuICAgIGNvbnN0IHN0b3JlZENhcnRJdGVtcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJjYXJ0SXRlbXNcIikpIHx8IFtdO1xuICAgIHNldENhcnRJdGVtcyhzdG9yZWRDYXJ0SXRlbXMpO1xufX0sIFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydEl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xuICAgIFxuICB9LCBbY2FydEl0ZW1zXSk7XG4gIFxuICBjb25zdCB0b2dnbGVDYXJ0ID0gKCkgPT4ge1xuICAgICAgc2V0Q2FydFZpc2libGUoIWlzQ2FydFZpc2libGUpO1xuICAgICAgc2V0TG9nZ2luVmlzaWJsZShmYWxzZSlcbiAgICAgIFxuICB9O1xuICBjb25zdCB0b2dnbGVMb2dpbiA9ICgpID0+IHtcbiAgICBzZXRMb2dnaW5WaXNpYmxlKCFpc0xvZ2luVmlzaWJsZSk7XG4gICAgc2V0Q2FydFZpc2libGUoZmFsc2UpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKHR5cGUpID0+IHtcbiAgICBzZXRTZWxlY3RlZE9wdGlvbih0eXBlKTtcbiAgfTtcbiAgY29uc3QgaGFuZGxlV2VhdGVyID0gKHdlYXRlcikgPT4ge1xuICAgIHNldFNlbGVjdGVkT3B0aW9uKHdlYXRlcik7XG4gIH07XG4gIGNvbnN0IGFkZFRvQ2FydCA9IChwcm9kdWN0KSA9PiB7XG4gICAgY29uc3QgZXhpc3RpbmdJdGVtID0gY2FydEl0ZW1zLmZpbmQoY2FydEl0ZW0gPT4gY2FydEl0ZW0ubmFtZSA9PT0gaXRlbS5uYW1lKTtcblxuICAgIGlmIChleGlzdGluZ0l0ZW0pIHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBjYXJ0SXRlbXMubWFwKGNhcnRJdGVtID0+IHtcbiAgICAgICAgaWYgKGNhcnRJdGVtLm5hbWUgPT09IGl0ZW0ubmFtZSkge1xuICAgICAgICAgIHJldHVybiB7IC4uLmNhcnRJdGVtLCBxdGU6IGNhcnRJdGVtLnF0ZSArIDEgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FydEl0ZW07XG4gICAgICB9KTtcbiAgXG4gICAgICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnRJdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld0l0ZW0gPSB7XG4gICAgICAgIG5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgcHJpY2U6IGl0ZW0ucHJpY2UsXG4gICAgICAgIHNyYzogaXRlbS5zcmMsXG4gICAgICAgIHF0ZTogMVxuICAgICAgfTtcbiAgXG4gICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtcywgbmV3SXRlbV0pO1xuICAgIH1cbiAgfTtcblxuXG4gIGNvbnN0IGhhbmRsZU1pbnVzID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZENhcnRJdGVtcyA9IFsuLi5jYXJ0SXRlbXNdO1xuICAgIGlmICh1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUgPiAxKSB7XG4gICAgICB1cGRhdGVkQ2FydEl0ZW1zW2luZGV4XS5xdGUtLTtcbiAgICAgIHNldENhcnRJdGVtcyh1cGRhdGVkQ2FydEl0ZW1zKTtcbiAgICB9IGVsc2UgaWYgKHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZSA8PSAxKSB7XG4gICAgICBcbiAgICAgIGhhbmRsZURlbGV0ZShpbmRleCk7XG4gICAgfVxuICB9OyAgXG5cbiAgY29uc3QgaGFuZGxlUGx1cyA9IChpbmRleCkgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRDYXJ0SXRlbXMgPSBbLi4uY2FydEl0ZW1zXTtcbiAgICBpZiAodXBkYXRlZENhcnRJdGVtc1tpbmRleF0ucXRlID49IDApIHtcbiAgICAgIHVwZGF0ZWRDYXJ0SXRlbXNbaW5kZXhdLnF0ZSsrO1xuICAgICAgc2V0Q2FydEl0ZW1zKHVwZGF0ZWRDYXJ0SXRlbXMpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdXBkYXRlZENhcnRJdGVtcyA9IGNhcnRJdGVtcy5maWx0ZXIoKF8sIGkpID0+IGkgIT09IGluZGV4KTtcbiAgICBhbGVydChcInJlbW92ZSBmcm9tIGNhcnQgP1wiKTtcbiAgICBzZXRDYXJ0SXRlbXModXBkYXRlZENhcnRJdGVtcyk7XG4gIH07XG4gIGlmIChjYXJ0SXRlbXMgJiYgQXJyYXkuaXNBcnJheShjYXJ0SXRlbXMpKSB7XG4gIGNvbnN0IHRvdGFsU3VtID0gY2FydEl0ZW1zLnJlZHVjZSgoYWNjLCBpdGVtKSA9PiBhY2MgKyBpdGVtLnByaWNlICogaXRlbS5xdGUsIDApXG4gIGNvbnN0IHRvdGFsUHJvZHVjdCA9IGNhcnRJdGVtcy5yZWR1Y2UoKGFjYywgaXRlbSkgPT4gYWNjICsgaXRlbS5xdGUsIDApXG4gIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY2FydEl0ZW1zXCIsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpO1xuICB9LCBbY2FydEl0ZW1zXSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUHJvZHVjdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIEV4dHJhaXJlIGwnSUQgZHUgcHJvZHVpdCBkZSBsJ1VSTFxuICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKS5wb3AoKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdElkKTtcblxuICAgICAgICAvLyBFbnZveWVyIHVuZSByZXF1w6p0ZSBHRVQgw6Agdm90cmUgQVBJIHBvdXIgcsOpY3Vww6lyZXIgbGVzIGTDqXRhaWxzIGR1IHByb2R1aXRcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS9wcm9kdWN0LyR7cHJvZHVjdElkfWApO1xuXG4gICAgICAgIFxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgIFxuICAgICAgICAgIHNldFByb2R1Y3QoZGF0YSk7XG4gICAgICAgICAgY29uc29sZS5sb2cocHJvZHVjdCk7XG4gICAgICAgICAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvZHVjdCBkYXRhOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9kdWN0IGRhdGE6JywgZXJyb3IpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBmZXRjaFByb2R1Y3QoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgb25DYXJ0VG9nZ2xlPXt0b2dnbGVDYXJ0fSB0b3RhbFByb2R1Y3Q9e3RvdGFsUHJvZHVjdH0gb25Mb2dnaW5Ub2dnbGU9e3RvZ2dsZUxvZ2lufSB1c2VyPXt1c2VyfS8+XG4gICAgICB7aXNMb2dpblZpc2libGUgJiYgPExvZ2luIC8+fVxuICAgICAge2lzQ2FydFZpc2libGUgJiYgPENhcnQgY2FydEl0ZW1zPXtjYXJ0SXRlbXN9IGhhbmRsZU1pbnVzPXtoYW5kbGVNaW51c30gaGFuZGxlUGx1cz17aGFuZGxlUGx1c30gaGFuZGxlRGVsZXRlPXtoYW5kbGVEZWxldGV9IHRvdGFsUHJvZHVjdD17dG90YWxQcm9kdWN0fSB0b3RhbFN1bT17dG90YWxTdW19ICAvPn1cbiAgICAgIDxOYXZiYXIgb25TZWxlY3Q9e2hhbmRsZVNlbGVjdH0gb25XZWF0ZXJTZWxlY3Q9e2hhbmRsZVdlYXRlcn0gLz5cbiAgICAge3Byb2R1Y3QgJiYgPEl0ZW0gcHJvZHVjdD17cHJvZHVjdH0gYWRkVG9DYXJ0PXthZGRUb0NhcnR9Lz59XG4gICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGR5bmFtaWMgKCgpID0+IFByb21pc2UucmVzb2x2ZShQcm9kdWN0UGFnZSkse3NzcjogZmFsc2V9ICkgXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkhlYWRlciIsIk5hdmJhciIsIkNhcnQiLCJMb2dpbiIsImR5bmFtaWMiLCJJdGVtIiwiUHJvZHVjdFBhZ2UiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImxpc3QiLCJzZXRMaXN0IiwidXNlciIsInNldFVzZXIiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsInNlbGVjdGVkT3B0aW9uIiwic2V0U2VsZWN0ZWRPcHRpb24iLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJsb2NhbFN0b3JhZ2UiLCJzdG9yZWRDYXJ0SXRlbXMiLCJKU09OIiwicGFyc2UiLCJnZXRJdGVtIiwiaXNDYXJ0VmlzaWJsZSIsInNldENhcnRWaXNpYmxlIiwiaXNMb2dpblZpc2libGUiLCJzZXRMb2dnaW5WaXNpYmxlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInRvZ2dsZUNhcnQiLCJ0b2dnbGVMb2dpbiIsImhhbmRsZVNlbGVjdCIsInR5cGUiLCJoYW5kbGVXZWF0ZXIiLCJ3ZWF0ZXIiLCJhZGRUb0NhcnQiLCJleGlzdGluZ0l0ZW0iLCJmaW5kIiwiY2FydEl0ZW0iLCJuYW1lIiwiaXRlbSIsInVwZGF0ZWRDYXJ0SXRlbXMiLCJtYXAiLCJxdGUiLCJuZXdJdGVtIiwicHJpY2UiLCJzcmMiLCJoYW5kbGVNaW51cyIsImluZGV4IiwiaGFuZGxlRGVsZXRlIiwiaGFuZGxlUGx1cyIsImZpbHRlciIsIl8iLCJpIiwiYWxlcnQiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbFN1bSIsInJlZHVjZSIsImFjYyIsInRvdGFsUHJvZHVjdCIsImZldGNoUHJvZHVjdCIsInByb2R1Y3RJZCIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJzcGxpdCIsInBvcCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsIm9rIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiZGl2Iiwib25DYXJ0VG9nZ2xlIiwib25Mb2dnaW5Ub2dnbGUiLCJvblNlbGVjdCIsIm9uV2VhdGVyU2VsZWN0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJzc3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/[id]/page.js\n"));

/***/ })

});