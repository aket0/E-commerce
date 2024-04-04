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

/***/ "(app-pages-browser)/./src/app/component/Login/Login.js":
/*!******************************************!*\
  !*** ./src/app/component/Login/Login.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.css */ \"(app-pages-browser)/./src/app/component/Login/Login.css\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-switch */ \"(app-pages-browser)/./node_modules/react-switch/dist/index.dev.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = (user)=>{\n    _s();\n    const [isLogged, setIsLogged] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isSwitch, setIsSwitched] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [familyName, setFamilyName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [codePostal, setCodePostal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [jwtToken, setJwtToken] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [superUser, setsuperUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSwitchChange = (checked)=>{\n        setIsSwitched(checked);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/user\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const responseData = await response.json();\n                if (responseData.userExists) {\n                    setIsLogged(true);\n                    const token = responseData.userExists.token;\n                    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_4__.jwtDecode)(token);\n                    setJwtToken(decodedToken);\n                    console.log(decodedToken);\n                } else {\n                    setErrorMessage(\"Email or password is incorrect\");\n                }\n            } else {\n                setErrorMessage(\"Error connecting to the server\");\n            }\n        } catch (error) {\n            console.error(\"Error authenticating user:\", error);\n            setErrorMessage(\"Server error\");\n        }\n    };\n    const addNewUser = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/newUser\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name,\n                    familyName,\n                    address,\n                    codePostal,\n                    city,\n                    superUser,\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const responseData = await response.json();\n                if (responseData.userExists) {\n                    setIsSwitched(true);\n                } else {\n                    setIsLogged(false);\n                }\n            } else {\n                const errorData = await response.json();\n                setErrorMessage(errorData.message);\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de la creation de l'utilisateur :\", error);\n            setErrorMessage(\"mail deja utilis\\xe9\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"loginComponent\",\n        children: !isLogged ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"loginFrame\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"userPhotoDiv\"\n                    }, void 0, false, {\n                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                        lineNumber: 112,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"loginFormDiv\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            method: \"post\",\n                            children: [\n                                errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        color: \"red\"\n                                    },\n                                    children: errorMessage\n                                }, void 0, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 40\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"E-mail\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            value: email,\n                                            placeholder: \"Your e-mail\",\n                                            onChange: (e)=>setEmail(e.target.value),\n                                            required: true,\n                                            name: \"email\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                            lineNumber: 118,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 23\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: [\n                                        \"Password\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            name: \"password\",\n                                            placeholder: \"Password\",\n                                            onChange: (e)=>setPassword(e.target.value),\n                                            required: true,\n                                            value: password\n                                        }, void 0, false, {\n                                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                            lineNumber: 122,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 23\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"log in\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                        lineNumber: 125,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 114,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                        lineNumber: 113,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                lineNumber: 111,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n            lineNumber: 109,\n            columnNumber: 13\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"loged\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Welcome back \",\n                        jwtToken.name,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 133,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Mes information\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 135,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Mes achat\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 136,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"ai ai ai\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 137,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            onClick: ()=>setIsLogged(false),\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 138,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 134,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n            lineNumber: 132,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n        lineNumber: 107,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"WKaRBEavSalYQ7h1SSR4hXFNt+4=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0xvZ2luL0xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQjtBQUNhO0FBQ1U7QUFDUDtBQUVyQyxNQUFNSSxRQUFRLENBQUNDOztJQUNiLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLFVBQVVDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDVyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2EsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2lCLFlBQVlDLGNBQWMsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ21CLE1BQU1DLFFBQVEsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ3FCLE9BQU9DLFNBQVMsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ3VCLFVBQVVDLFlBQVksR0FBR3hCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3lCLFdBQVdDLGFBQWEsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQzJCLFVBQVVDLFlBQVksR0FBRzVCLCtDQUFRQSxDQUFDO0lBSXpDLE1BQU02QixxQkFBcUIsQ0FBQ0M7UUFDMUJ0QixjQUFjc0I7SUFDaEI7SUFFQSxNQUFNQyxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU8sa0NBQWlDO2dCQUMzREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxL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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdEU7R0E1SUVIO0tBQUFBO0FBOElOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L0xvZ2luL0xvZ2luLmpzPzczYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9Mb2dpbi5jc3NcIjtcbmltcG9ydCBTd2l0Y2ggZnJvbSBcInJlYWN0LXN3aXRjaFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtqd3REZWNvZGV9IGZyb20gXCJqd3QtZGVjb2RlXCI7XG5cbmNvbnN0IExvZ2luID0gKHVzZXIpID0+IHtcbiAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzU3dpdGNoLCBzZXRJc1N3aXRjaGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmFtaWx5TmFtZSwgc2V0RmFtaWx5TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb2RlUG9zdGFsLCBzZXRDb2RlUG9zdGFsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2p3dFRva2VuLCBzZXRKd3RUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1cGVyVXNlciwgc2V0c3VwZXJVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG5cbiAgY29uc3QgaGFuZGxlU3dpdGNoQ2hhbmdlID0gKGNoZWNrZWQpID0+IHtcbiAgICBzZXRJc1N3aXRjaGVkKGNoZWNrZWQpO1xuICB9O1xuICBcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdXNlcmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS51c2VyRXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgc2V0SXNMb2dnZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZURhdGEudXNlckV4aXN0cy50b2tlblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dERlY29kZSh0b2tlbilcbiAgICAgICAgICAgICAgICBzZXRKd3RUb2tlbihkZWNvZGVkVG9rZW4pO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlY29kZWRUb2tlbik7IFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJFbWFpbCBvciBwYXNzd29yZCBpcyBpbmNvcnJlY3RcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJFcnJvciBjb25uZWN0aW5nIHRvIHRoZSBzZXJ2ZXJcIik7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgYXV0aGVudGljYXRpbmcgdXNlcjpcIiwgZXJyb3IpO1xuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJTZXJ2ZXIgZXJyb3JcIik7XG4gICAgfVxufTtcblxuICAgICAgY29uc3QgYWRkTmV3VXNlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBcbiAgICAgICAgdHJ5IHtcblxuXG4gICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjQwMDAvYXBpL25ld1VzZXJgLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLFxuICAgICAgICAgICAgICAgICAgZmFtaWx5TmFtZSxcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgICBjb2RlUG9zdGFsLFxuICAgICAgICAgICAgICAgICAgY2l0eSxcbiAgICAgICAgICAgICAgICAgIHN1cGVyVXNlcixcbiAgICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsfSksXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS51c2VyRXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBzZXRJc1N3aXRjaGVkKHRydWUpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2V0SXNMb2dnZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yRGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIGNyZWF0aW9uIGRlIGwndXRpbGlzYXRldXIgOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIm1haWwgZGVqYSB1dGlsaXPDqVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICBcbiAgXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luQ29tcG9uZW50XCI+XG4gICAgICAgICAgeyFpc0xvZ2dlZCA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRnJhbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclBob3RvRGl2XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRm9ybURpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yTWVzc2FnZX08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEUtbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJZb3VyIGUtbWFpbFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAgbmFtZT1cImVtYWlsXCIgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgIHZhbHVlPXtwYXNzd29yZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bG9nIGluPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2VkXCI+XG4gICAgICAgICAgICA8aDI+V2VsY29tZSBiYWNrIHtqd3RUb2tlbi5uYW1lfSA8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5NZXMgaW5mb3JtYXRpb248L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5NZXMgYWNoYXQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5haSBhaSBhaTwvbGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gc2V0SXNMb2dnZWQoZmFsc2UpIH0+TG9nb3V0PC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbIlN3aXRjaCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwiand0RGVjb2RlIiwiTG9naW4iLCJ1c2VyIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsImlzU3dpdGNoIiwic2V0SXNTd2l0Y2hlZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsIm5hbWUiLCJzZXROYW1lIiwiZmFtaWx5TmFtZSIsInNldEZhbWlseU5hbWUiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImNvZGVQb3N0YWwiLCJzZXRDb2RlUG9zdGFsIiwiY2l0eSIsInNldENpdHkiLCJlbWFpbCIsInNldEVtYWlsIiwiand0VG9rZW4iLCJzZXRKd3RUb2tlbiIsInN1cGVyVXNlciIsInNldHN1cGVyVXNlciIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTd2l0Y2hDaGFuZ2UiLCJjaGVja2VkIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJ1c2VyRXhpc3RzIiwidG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhZGROZXdVc2VyIiwiZXJyb3JEYXRhIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsInAiLCJzdHlsZSIsImNvbG9yIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJzcGFuIiwiaDIiLCJ1bCIsImxpIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Login/Login.js\n"));

/***/ })

});