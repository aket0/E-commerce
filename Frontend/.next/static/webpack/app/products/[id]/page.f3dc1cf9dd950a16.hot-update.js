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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.css */ \"(app-pages-browser)/./src/app/component/Login/Login.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = (param)=>{\n    let { user } = param;\n    _s();\n    const [isLogged, setIsLogged] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isSwitch, setIsSwitched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [familyName, setFamilyName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [codePostal, setCodePostal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [jwtToken, setJwtToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [superUser, setsuperUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSwitchChange = (checked)=>{\n        setIsSwitched(checked);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/user\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const responseData = await response.json();\n                if (responseData.userExists) {\n                    setIsLogged(true);\n                    const token = responseData.userExists.token;\n                    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.jwtDecode)(token);\n                    setJwtToken(decodedToken);\n                    localStorage.setItem(\"jwtToken\", token);\n                } else {\n                    setErrorMessage(\"Email or password is incorrect\");\n                }\n            } else {\n                setErrorMessage(\"Error connecting to the server\");\n            }\n        } catch (error) {\n            console.error(\"Error authenticating user:\", error);\n            setErrorMessage(\"Server error\");\n        }\n    };\n    const addNewUser = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/newUser\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name,\n                    familyName,\n                    address,\n                    codePostal,\n                    city,\n                    superUser,\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const responseData = await response.json();\n                if (responseData.userExists) {\n                    setIsSwitched(true);\n                } else {\n                    setIsLogged(false);\n                }\n            } else {\n                const errorData = await response.json();\n                setErrorMessage(errorData.message);\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de la creation de l'utilisateur :\", error);\n            setErrorMessage(\"mail deja utilis\\xe9\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"loginComponent\",\n        children: !isLoggedi ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"loginFrame\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"userPhotoDiv\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            id: \"title\",\n                            children: \"Login to the jungle.\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 107,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                        lineNumber: 106,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"loginFormDivi\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            id: \"formi\",\n                            onSubmit: handleSubmit,\n                            method: \"post\",\n                            children: [\n                                errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        color: \"red\"\n                                    },\n                                    children: errorMessage\n                                }, void 0, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 111,\n                                    columnNumber: 40\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    id: \"email\",\n                                    children: [\n                                        \"E-mail\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            value: email,\n                                            placeholder: \"Your e-mail\",\n                                            onChange: (e)=>setEmail(e.target.value),\n                                            required: true,\n                                            name: \"email\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                            lineNumber: 114,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 23\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    id: \"password\",\n                                    children: [\n                                        \"Password\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            name: \"password\",\n                                            placeholder: \"Your password\",\n                                            onChange: (e)=>setPassword(e.target.value),\n                                            required: true,\n                                            value: password\n                                        }, void 0, false, {\n                                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                            lineNumber: 118,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 23\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    id: \"link\",\n                                    href: \"http://localhost:3000/register\",\n                                    children: \"not a tribe member ? Register now !\"\n                                }, void 0, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 23\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"button\",\n                                    type: \"submit\",\n                                    children: \"Log in\"\n                                }, void 0, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 110,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                        lineNumber: 109,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                lineNumber: 105,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n            lineNumber: 104,\n            columnNumber: 13\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"loged\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Welcome back \",\n                        jwtToken.name,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 129,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"My personal information\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 131,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Mes achat\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 132,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"ai ai ai\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 133,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            onClick: ()=>{\n                                setIsLogged(false);\n                                setJwtToken(null);\n                                localStorage.removeItem(\"jwtToken\");\n                            },\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 134,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 130,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n            lineNumber: 128,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n        lineNumber: 102,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"WKaRBEavSalYQ7h1SSR4hXFNt+4=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0xvZ2luL0xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQjtBQUN1QjtBQUNQO0FBQ1I7QUFFN0IsTUFBTUksUUFBUTtRQUFDLEVBQUNDLElBQUksRUFBQzs7SUFDbkIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsVUFBVUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNVLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNZLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYyxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2tCLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ29CLE1BQU1DLFFBQVEsR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ3NCLE9BQU9DLFNBQVMsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ3dCLFVBQVVDLFlBQVksR0FBR3pCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQzBCLFdBQVdDLGFBQWEsR0FBRzNCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQzRCLFVBQVVDLFlBQVksR0FBRzdCLCtDQUFRQSxDQUFDO0lBSXpDLE1BQU04QixxQkFBcUIsQ0FBQ0M7UUFDMUJ0QixjQUFjc0I7SUFDaEI7SUFFQSxNQUFNQyxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU8sa0NBQWlDO2dCQUMzREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JB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OzhCQUNoQyw4REFBQytEOztzQ0FDRyw4REFBQ0M7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0E7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0E7c0NBQUc7Ozs7OztzQ0FDSiw4REFBQ0Y7NEJBQVFSLE1BQUs7NEJBQ2hCVyxTQUFTO2dDQUNQdEUsWUFBWTtnQ0FDWmtCLFlBQVk7Z0NBQ1p1QixhQUFhOEIsVUFBVSxDQUFDOzRCQUMxQjtzQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRZDtHQTdJRTFFO0tBQUFBO0FBK0lOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L0xvZ2luL0xvZ2luLmpzPzczYzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9Mb2dpbi5jc3NcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7and0RGVjb2RlfSBmcm9tIFwiand0LWRlY29kZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBMb2dpbiA9ICh7dXNlcn0pID0+IHtcbiAgY29uc3QgW2lzTG9nZ2VkLCBzZXRJc0xvZ2dlZF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2lzU3dpdGNoLCBzZXRJc1N3aXRjaGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmFtaWx5TmFtZSwgc2V0RmFtaWx5TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb2RlUG9zdGFsLCBzZXRDb2RlUG9zdGFsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2p3dFRva2VuLCBzZXRKd3RUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1cGVyVXNlciwgc2V0c3VwZXJVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG5cbiAgY29uc3QgaGFuZGxlU3dpdGNoQ2hhbmdlID0gKGNoZWNrZWQpID0+IHtcbiAgICBzZXRJc1N3aXRjaGVkKGNoZWNrZWQpO1xuICB9O1xuICBcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdXNlcmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS51c2VyRXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgc2V0SXNMb2dnZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZURhdGEudXNlckV4aXN0cy50b2tlblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dERlY29kZSh0b2tlbilcbiAgICAgICAgICAgICAgICBzZXRKd3RUb2tlbihkZWNvZGVkVG9rZW4pO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiand0VG9rZW5cIiwgdG9rZW4pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIkVtYWlsIG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlclwiKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhdXRoZW50aWNhdGluZyB1c2VyOlwiLCBlcnJvcik7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlNlcnZlciBlcnJvclwiKTtcbiAgICB9XG59O1xuXG4gICAgICBjb25zdCBhZGROZXdVc2VyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuXG5cbiAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvbmV3VXNlcmAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsXG4gICAgICAgICAgICAgICAgICBmYW1pbHlOYW1lLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgIGNvZGVQb3N0YWwsXG4gICAgICAgICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgICAgICAgc3VwZXJVc2VyLFxuICAgICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZCx9KSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VEYXRhLnVzZXJFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgc2V0SXNTd2l0Y2hlZCh0cnVlKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2V0SXNMb2dnZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yRGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIGNyZWF0aW9uIGRlIGwndXRpbGlzYXRldXIgOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIm1haWwgZGVqYSB1dGlsaXPDqVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICBcbiAgXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwibG9naW5Db21wb25lbnRcIj5cbiAgICAgICAgICB7IWlzTG9nZ2VkaSA/IChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImxvZ2luRnJhbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ1c2VyUGhvdG9EaXZcIj5cbiAgICAgICAgICAgICAgICAgIDxoMiBpZD1cInRpdGxlXCI+TG9naW4gdG8gdGhlIGp1bmdsZS48L2gyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9naW5Gb3JtRGl2aVwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBpZD1cImZvcm1pXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgPHAgc3R5bGU9e3sgY29sb3I6ICdyZWQnIH19PntlcnJvck1lc3NhZ2V9PC9wPn1cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaWQ9XCJlbWFpbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgRS1tYWlsXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBwbGFjZWhvbGRlcj1cIllvdXIgZS1tYWlsXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkICBuYW1lPVwiZW1haWxcIiAgLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBpZD1cInBhc3N3b3JkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAgdmFsdWU9e3Bhc3N3b3JkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaWQ9XCJsaW5rXCIgaHJlZj17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWdpc3RlcmB9Pm5vdCBhIHRyaWJlIG1lbWJlciA/IFJlZ2lzdGVyIG5vdyAhPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCI+TG9nIGluPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwibG9nZWRcIj5cbiAgICAgICAgICAgIDxoMj5XZWxjb21lIGJhY2sge2p3dFRva2VuLm5hbWV9IDwvaDI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPk15IHBlcnNvbmFsIGluZm9ybWF0aW9uPC9saT5cbiAgICAgICAgICAgICAgICA8bGk+TWVzIGFjaGF0PC9saT5cbiAgICAgICAgICAgICAgICA8bGk+YWkgYWkgYWk8L2xpPlxuICAgICAgICAgICAgICAgIDxidXR0b24gIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0SXNMb2dnZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHNldEp3dFRva2VuKG51bGwpO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwiand0VG9rZW5cIik7XG4gICAgICAgICAgICAgIH19ID5Mb2dvdXQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJqd3REZWNvZGUiLCJMaW5rIiwiTG9naW4iLCJ1c2VyIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsImlzU3dpdGNoIiwic2V0SXNTd2l0Y2hlZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsIm5hbWUiLCJzZXROYW1lIiwiZmFtaWx5TmFtZSIsInNldEZhbWlseU5hbWUiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImNvZGVQb3N0YWwiLCJzZXRDb2RlUG9zdGFsIiwiY2l0eSIsInNldENpdHkiLCJlbWFpbCIsInNldEVtYWlsIiwiand0VG9rZW4iLCJzZXRKd3RUb2tlbiIsInN1cGVyVXNlciIsInNldHN1cGVyVXNlciIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTd2l0Y2hDaGFuZ2UiLCJjaGVja2VkIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJ1c2VyRXhpc3RzIiwidG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZXJyb3IiLCJjb25zb2xlIiwiYWRkTmV3VXNlciIsImVycm9yRGF0YSIsIm1lc3NhZ2UiLCJkaXYiLCJpZCIsImlzTG9nZ2VkaSIsImgyIiwiZm9ybSIsIm9uU3VibWl0IiwicCIsInN0eWxlIiwiY29sb3IiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsImhyZWYiLCJidXR0b24iLCJ1bCIsImxpIiwib25DbGljayIsInJlbW92ZUl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Login/Login.js\n"));

/***/ })

});