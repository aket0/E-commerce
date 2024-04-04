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

/***/ "(app-pages-browser)/./src/app/component/Login/Login.js":
/*!******************************************!*\
  !*** ./src/app/component/Login/Login.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.css */ \"(app-pages-browser)/./src/app/component/Login/Login.css\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-switch */ \"(app-pages-browser)/./node_modules/react-switch/dist/index.dev.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Login = (user)=>{\n    _s();\n    const [isLogged, setIsLogged] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isSwitch, setIsSwitched] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [familyName, setFamilyName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [codePostal, setCodePostal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [jwtToken, setJwtToken] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [superUser, setsuperUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSwitchChange = (checked)=>{\n        setIsSwitched(checked);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/user\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const responseData = await response.json();\n                if (responseData.userExists) {\n                    setIsLogged(true);\n                    const token = responseData.userExists.token;\n                    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_4__.jwtDecode)(token);\n                    setJwtToken(decodedToken);\n                    console.log(decodedToken);\n                } else {\n                    setErrorMessage(\"Email or password is incorrect\");\n                }\n            } else {\n                setErrorMessage(\"Error connecting to the server\");\n            }\n        } catch (error) {\n            console.error(\"Error authenticating user:\", error);\n            setErrorMessage(\"Server error\");\n        }\n    };\n    const addNewUser = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/newUser\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name,\n                    familyName,\n                    address,\n                    codePostal,\n                    city,\n                    superUser,\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const responseData = await response.json();\n                if (responseData.userExists) {\n                    setIsSwitched(true);\n                } else {\n                    setIsLogged(false);\n                }\n            } else {\n                const errorData = await response.json();\n                setErrorMessage(errorData.message);\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de la creation de l'utilisateur :\", error);\n            setErrorMessage(\"mail deja utilis\\xe9\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"loginComponent\",\n        children: !isLogged ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"loginFrame\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"userPhotoDiv\"\n                    }, void 0, false, {\n                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                        lineNumber: 107,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"loginFormDiv\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit,\n                                method: \"post\",\n                                children: [\n                                    errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            color: \"red\"\n                                        },\n                                        children: errorMessage\n                                    }, void 0, false, {\n                                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                        lineNumber: 110,\n                                        columnNumber: 40\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            \"E-mail\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"email\",\n                                                value: email,\n                                                placeholder: \"Your e-mail\",\n                                                onChange: (e)=>setEmail(e.target.value),\n                                                required: true,\n                                                name: \"email\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                                lineNumber: 113,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                        lineNumber: 111,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            \"Password\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"password\",\n                                                name: \"password\",\n                                                placeholder: \"Password\",\n                                                onChange: (e)=>setPassword(e.target.value),\n                                                required: true,\n                                                value: password\n                                            }, void 0, false, {\n                                                fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                                lineNumber: 117,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                        lineNumber: 115,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"log in\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                            lineNumber: 120,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                        lineNumber: 119,\n                                        columnNumber: 23\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                lineNumber: 109,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                href: \"http://\",\n                                children: \"not a tribe member ? Register now !\"\n                            }, void 0, false, {\n                                fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                lineNumber: 123,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                        lineNumber: 108,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                lineNumber: 106,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n            lineNumber: 105,\n            columnNumber: 13\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"loged\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Welcome back \",\n                        jwtToken.name,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 129,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Mes information\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 131,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Mes achat\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 132,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"ai ai ai\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 133,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            onClick: ()=>setIsLogged(false),\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 134,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 130,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n            lineNumber: 128,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n        lineNumber: 103,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"WKaRBEavSalYQ7h1SSR4hXFNt+4=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0xvZ2luL0xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUI7QUFDYTtBQUNVO0FBQ1A7QUFDUjtBQUU3QixNQUFNSyxRQUFRLENBQUNDOztJQUNiLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFVBQVVDLGNBQWMsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxjQUFjQyxnQkFBZ0IsR0FBR1gsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDWSxNQUFNQyxRQUFRLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2MsWUFBWUMsY0FBYyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNrQixZQUFZQyxjQUFjLEdBQUduQiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNvQixNQUFNQyxRQUFRLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNzQixPQUFPQyxTQUFTLEdBQUd2QiwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUN3QixVQUFVQyxZQUFZLEdBQUd6QiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUMwQixXQUFXQyxhQUFhLEdBQUczQiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUM0QixVQUFVQyxZQUFZLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUl6QyxNQUFNOEIscUJBQXFCLENBQUNDO1FBQzFCdEIsY0FBY3NCO0lBQ2hCO0lBRUEsTUFBTUMsZUFBZSxPQUFPQztRQUMxQkEsTUFBTUMsY0FBYztRQUVwQixJQUFJO1lBQ0EsTUFBTUMsV0FBVyxNQUFNQyxNQUFPLGtDQUFpQztnQkFDM0RDLFFBQVE7Z0JBQ1JDLFNBQVM7b0JBQ0wsZ0JBQWdCO2dCQUNwQjtnQkFDQUMs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LDhEQUFDTDs0QkFBT1AsTUFBSzs0QkFBU2EsU0FBUyxJQUFNckUsWUFBWTtzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEU7R0F2SUVIO0tBQUFBO0FBeUlOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L0xvZ2luL0xvZ2luLmpzPzczYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9Mb2dpbi5jc3NcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtqd3REZWNvZGV9IGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IExvZ2luID0gKHVzZXIpID0+IHtcbiAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzU3dpdGNoLCBzZXRJc1N3aXRjaGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmFtaWx5TmFtZSwgc2V0RmFtaWx5TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb2RlUG9zdGFsLCBzZXRDb2RlUG9zdGFsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2p3dFRva2VuLCBzZXRKd3RUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1cGVyVXNlciwgc2V0c3VwZXJVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG5cbiAgY29uc3QgaGFuZGxlU3dpdGNoQ2hhbmdlID0gKGNoZWNrZWQpID0+IHtcbiAgICBzZXRJc1N3aXRjaGVkKGNoZWNrZWQpO1xuICB9O1xuICBcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdXNlcmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS51c2VyRXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgc2V0SXNMb2dnZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZURhdGEudXNlckV4aXN0cy50b2tlblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dERlY29kZSh0b2tlbilcbiAgICAgICAgICAgICAgICBzZXRKd3RUb2tlbihkZWNvZGVkVG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlY29kZWRUb2tlbik7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJFbWFpbCBvciBwYXNzd29yZCBpcyBpbmNvcnJlY3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJFcnJvciBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXJcIik7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYXV0aGVudGljYXRpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJTZXJ2ZXIgZXJyb3JcIik7XG4gICAgfVxufTtcblxuICAgICAgY29uc3QgYWRkTmV3VXNlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcblxuXG4gICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL25ld1VzZXJgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLFxuICAgICAgICAgICAgICAgICAgZmFtaWx5TmFtZSxcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICBjb2RlUG9zdGFsLFxuICAgICAgICAgICAgICAgICAgY2l0eSxcbiAgICAgICAgICAgICAgICAgIHN1cGVyVXNlcixcbiAgICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsfSksXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS51c2VyRXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgIHNldElzU3dpdGNoZWQodHJ1ZSk7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHNldElzTG9nZ2VkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShlcnJvckRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSBjcmVhdGlvbiBkZSBsJ3V0aWxpc2F0ZXVyIDpcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJtYWlsIGRlamEgdXRpbGlzw6lcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgXG4gIFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD1cImxvZ2luQ29tcG9uZW50XCI+XG4gICAgICAgICAgeyFpc0xvZ2dlZCA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvZ2luRnJhbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ1c2VyUGhvdG9EaXZcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dpbkZvcm1EaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntlcnJvck1lc3NhZ2V9PC9wPn1cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBFLW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IHBsYWNlaG9sZGVyPVwiWW91ciBlLW1haWxcIiBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgIG5hbWU9XCJlbWFpbFwiICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkICB2YWx1ZT17cGFzc3dvcmR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPmxvZyBpbjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgaHR0cDovL2B9Pm5vdCBhIHRyaWJlIG1lbWJlciA/IFJlZ2lzdGVyIG5vdyAhPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGRpdiBpZD1cImxvZ2VkXCI+XG4gICAgICAgICAgICA8aDI+V2VsY29tZSBiYWNrIHtqd3RUb2tlbi5uYW1lfSA8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5NZXMgaW5mb3JtYXRpb248L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5NZXMgYWNoYXQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5haSBhaSBhaTwvbGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gc2V0SXNMb2dnZWQoZmFsc2UpIH0+TG9nb3V0PC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbIlN3aXRjaCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwiand0RGVjb2RlIiwiTGluayIsIkxvZ2luIiwidXNlciIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJpc1N3aXRjaCIsInNldElzU3dpdGNoZWQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJuYW1lIiwic2V0TmFtZSIsImZhbWlseU5hbWUiLCJzZXRGYW1pbHlOYW1lIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJjb2RlUG9zdGFsIiwic2V0Q29kZVBvc3RhbCIsImNpdHkiLCJzZXRDaXR5IiwiZW1haWwiLCJzZXRFbWFpbCIsImp3dFRva2VuIiwic2V0Snd0VG9rZW4iLCJzdXBlclVzZXIiLCJzZXRzdXBlclVzZXIiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3dpdGNoQ2hhbmdlIiwiY2hlY2tlZCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJyZXNwb25zZURhdGEiLCJqc29uIiwidXNlckV4aXN0cyIsInRva2VuIiwiZGVjb2RlZFRva2VuIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWRkTmV3VXNlciIsImVycm9yRGF0YSIsIm1lc3NhZ2UiLCJkaXYiLCJpZCIsImZvcm0iLCJvblN1Ym1pdCIsInAiLCJzdHlsZSIsImNvbG9yIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJzcGFuIiwiaHJlZiIsImgyIiwidWwiLCJsaSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Login/Login.js\n"));

/***/ })

});