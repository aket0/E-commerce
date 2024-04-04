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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.css */ \"(app-pages-browser)/./src/app/component/Login/Login.css\");\n/* harmony import */ var react_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-switch */ \"(app-pages-browser)/./node_modules/react-switch/dist/index.dev.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = (user)=>{\n    _s();\n    const [isLogged, setIsLogged] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [isSwitch, setIsSwitched] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [familyName, setFamilyName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [codePostal, setCodePostal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [jwtToken, setJwtToken] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [superUser, setsuperUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const handleSwitchChange = (checked)=>{\n        setIsSwitched(checked);\n    };\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/user\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const responseData = await response.json();\n                if (responseData.userExists) {\n                    setIsLogged(true);\n                    const token = responseData.userExists.token;\n                    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_4__.jwtDecode)(token);\n                    setJwtToken(decodedToken);\n                    console.log(decodedToken);\n                } else {\n                    setErrorMessage(\"Email or password is incorrect\");\n                }\n            } else {\n                setErrorMessage(\"Error connecting to the server\");\n            }\n        } catch (error) {\n            console.error(\"Error authenticating user:\", error);\n            setErrorMessage(\"Server error\");\n        }\n    };\n    const addNewUser = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/newUser\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name,\n                    familyName,\n                    address,\n                    codePostal,\n                    city,\n                    superUser,\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const responseData = await response.json();\n                if (responseData.userExists) {\n                    setIsSwitched(true);\n                } else {\n                    setIsLogged(false);\n                }\n            } else {\n                const errorData = await response.json();\n                setErrorMessage(errorData.message);\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de la creation de l'utilisateur :\", error);\n            setErrorMessage(\"mail deja utilis\\xe9\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"loginComponent\",\n        children: !isLogged ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"switchFrame\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"switchValue\",\n                            style: {\n                                color: isSwitch ? \"#000000\" : \"forestgreen\"\n                            },\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 111,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_switch__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            onChange: handleSwitchChange,\n                            checked: isSwitch,\n                            uncheckedIcon: false,\n                            checkedIcon: false,\n                            onHandleColor: \"#228B22\",\n                            onColor: \"#d3d3d3\",\n                            offHandleColor: \"#228B22\",\n                            offColor: \"#d3d3d3\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 114,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"switchValue\",\n                            style: {\n                                color: isSwitch ? \"forestgreen\" : \"#000000\"\n                            },\n                            children: \"Register\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 124,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 110,\n                    columnNumber: 15\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"loginFrame\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"userPhotoDiv\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 129,\n                            columnNumber: 19\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"loginFormDiv\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: handleSubmit,\n                                method: \"post\",\n                                children: [\n                                    errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            color: \"red\"\n                                        },\n                                        children: errorMessage\n                                    }, void 0, false, {\n                                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                        lineNumber: 132,\n                                        columnNumber: 40\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            \"E-mail\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"email\",\n                                                value: email,\n                                                placeholder: \"Your e-mail\",\n                                                onChange: (e)=>setEmail(e.target.value),\n                                                required: true,\n                                                name: \"email\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                                lineNumber: 135,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                        lineNumber: 133,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        children: [\n                                            \"Password\",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"password\",\n                                                name: \"password\",\n                                                placeholder: \"Password\",\n                                                onChange: (e)=>setPassword(e.target.value),\n                                                required: true,\n                                                value: password\n                                            }, void 0, false, {\n                                                fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                                lineNumber: 139,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                        lineNumber: 137,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"log in\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                            lineNumber: 142,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                        lineNumber: 141,\n                                        columnNumber: 23\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                lineNumber: 131,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 130,\n                            columnNumber: 19\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 128,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n            lineNumber: 109,\n            columnNumber: 13\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"loged\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Welcome back \",\n                        jwtToken.name,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 150,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Mes information\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 152,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Mes achat\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 153,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"ai ai ai\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 154,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            onClick: ()=>setIsLogged(false),\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 155,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 151,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n            lineNumber: 149,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n        lineNumber: 107,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"WKaRBEavSalYQ7h1SSR4hXFNt+4=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0xvZ2luL0xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQjtBQUNhO0FBQ1U7QUFDUDtBQUVyQyxNQUFNSSxRQUFRLENBQUNDOztJQUNiLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNPLFVBQVVDLGNBQWMsR0FBR1IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUyxjQUFjQyxnQkFBZ0IsR0FBR1YsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDVyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ2EsWUFBWUMsY0FBYyxHQUFHZCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNlLFNBQVNDLFdBQVcsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2lCLFlBQVlDLGNBQWMsR0FBR2xCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ21CLE1BQU1DLFFBQVEsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ3FCLE9BQU9DLFNBQVMsR0FBR3RCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ3VCLFVBQVVDLFlBQVksR0FBR3hCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ3lCLFdBQVdDLGFBQWEsR0FBRzFCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQzJCLFVBQVVDLFlBQVksR0FBRzVCLCtDQUFRQSxDQUFDO0lBSXpDLE1BQU02QixxQkFBcUIsQ0FBQ0M7UUFDMUJ0QixjQUFjc0I7SUFDaEI7SUFFQSxNQUFNQyxlQUFlLE9BQU9DO1FBQzFCQSxNQUFNQyxjQUFjO1FBRXBCLElBQUk7WUFDQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU8sa0NBQWlDO2dCQUMzREMsUUFBUTtnQkFDUkMsU0FBUztvQkFDTCxnQkFBZ0I7Z0JBQ3BCO2dCQUNBQyxNQUFNQyxL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LE9BQU8zQzs7Ozs7Ozs7Ozs7O2tEQUUvSCw4REFBQ2dEO3dDQUFPTixNQUFLO2tEQUNYLDRFQUFDTztzREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU9sQiw4REFBQ3ZCO1lBQUlDLFdBQVU7OzhCQUNmLDhEQUFDdUI7O3dCQUFHO3dCQUFjdEQsU0FBU1osSUFBSTt3QkFBQzs7Ozs7Ozs4QkFDaEMsOERBQUNtRTs7c0NBQ0csOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNBO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNBO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNKOzRCQUFPTixNQUFLOzRCQUFTVyxTQUFTLElBQU0xRSxZQUFZO3NDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF0RTtHQTdKRUg7S0FBQUE7QUErSk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvTG9naW4vTG9naW4uanM/NzNjMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL0xvZ2luLmNzc1wiO1xuaW1wb3J0IFN3aXRjaCBmcm9tIFwicmVhY3Qtc3dpdGNoXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2p3dERlY29kZX0gZnJvbSBcImp3dC1kZWNvZGVcIjtcblxuY29uc3QgTG9naW4gPSAodXNlcikgPT4ge1xuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNTd2l0Y2gsIHNldElzU3dpdGNoZWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmYW1pbHlOYW1lLCBzZXRGYW1pbHlOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2NvZGVQb3N0YWwsIHNldENvZGVQb3N0YWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaXR5LCBzZXRDaXR5XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBband0VG9rZW4sIHNldEp3dFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc3VwZXJVc2VyLCBzZXRzdXBlclVzZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG5cblxuICBjb25zdCBoYW5kbGVTd2l0Y2hDaGFuZ2UgPSAoY2hlY2tlZCkgPT4ge1xuICAgIHNldElzU3dpdGNoZWQoY2hlY2tlZCk7XG4gIH07XG4gIFxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo0MDAwL2FwaS91c2VyYCwge1xuICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCBwYXNzd29yZCB9KSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2VEYXRhLnVzZXJFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICBzZXRJc0xvZ2dlZCh0cnVlKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlRGF0YS51c2VyRXhpc3RzLnRva2VuXG4gICAgICAgICAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gand0RGVjb2RlKHRva2VuKVxuICAgICAgICAgICAgICAgIHNldEp3dFRva2VuKGRlY29kZWRUb2tlbik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGVjb2RlZFRva2VuKTsgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIkVtYWlsIG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlclwiKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhdXRoZW50aWNhdGluZyB1c2VyOlwiLCBlcnJvcik7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlNlcnZlciBlcnJvclwiKTtcbiAgICB9XG59O1xuXG4gICAgICBjb25zdCBhZGROZXdVc2VyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuXG5cbiAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvbmV3VXNlcmAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsXG4gICAgICAgICAgICAgICAgICBmYW1pbHlOYW1lLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgIGNvZGVQb3N0YWwsXG4gICAgICAgICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgICAgICAgc3VwZXJVc2VyLFxuICAgICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZCx9KSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VEYXRhLnVzZXJFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgIHNldElzU3dpdGNoZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBzZXRJc0xvZ2dlZChmYWxzZSk7XG4gICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3JEYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgY3JlYXRpb24gZGUgbCd1dGlsaXNhdGV1ciA6XCIsIGVycm9yKTtcbiAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwibWFpbCBkZWphIHV0aWxpc8OpXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgIFxuICBcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW5Db21wb25lbnRcIj5cbiAgICAgICAgICB7IWlzTG9nZ2VkID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzd2l0Y2hGcmFtZVwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN3aXRjaFZhbHVlXCIgc3R5bGU9e3sgY29sb3I6IGlzU3dpdGNoID8gXCIjMDAwMDAwXCIgOiBcImZvcmVzdGdyZWVuXCIgfX0+XG4gICAgICAgICAgICAgICAgICBMb2dpblxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8U3dpdGNoXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3dpdGNoQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17aXNTd2l0Y2h9XG4gICAgICAgICAgICAgICAgICB1bmNoZWNrZWRJY29uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWRJY29uPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIG9uSGFuZGxlQ29sb3I9XCIjMjI4QjIyXCJcbiAgICAgICAgICAgICAgICAgIG9uQ29sb3I9XCIjZDNkM2QzXCJcbiAgICAgICAgICAgICAgICAgIG9mZkhhbmRsZUNvbG9yPVwiIzIyOEIyMlwiXG4gICAgICAgICAgICAgICAgICBvZmZDb2xvcj1cIiNkM2QzZDNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3dpdGNoVmFsdWVcIiBzdHlsZT17eyBjb2xvcjogaXNTd2l0Y2ggPyBcImZvcmVzdGdyZWVuXCIgOiBcIiMwMDAwMDBcIiB9fT5cbiAgICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRnJhbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlclBob3RvRGl2XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luRm9ybURpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yTWVzc2FnZX08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEUtbWFpbFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gcGxhY2Vob2xkZXI9XCJZb3VyIGUtbWFpbFwiIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAgbmFtZT1cImVtYWlsXCIgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgIHZhbHVlPXtwYXNzd29yZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bG9nIGluPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2VkXCI+XG4gICAgICAgICAgICA8aDI+V2VsY29tZSBiYWNrIHtqd3RUb2tlbi5uYW1lfSA8L2gyPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5NZXMgaW5mb3JtYXRpb248L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5NZXMgYWNoYXQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5haSBhaSBhaTwvbGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KCkgPT4gc2V0SXNMb2dnZWQoZmFsc2UpIH0+TG9nb3V0PC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbIlN3aXRjaCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwiand0RGVjb2RlIiwiTG9naW4iLCJ1c2VyIiwiaXNMb2dnZWQiLCJzZXRJc0xvZ2dlZCIsImlzU3dpdGNoIiwic2V0SXNTd2l0Y2hlZCIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsIm5hbWUiLCJzZXROYW1lIiwiZmFtaWx5TmFtZSIsInNldEZhbWlseU5hbWUiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImNvZGVQb3N0YWwiLCJzZXRDb2RlUG9zdGFsIiwiY2l0eSIsInNldENpdHkiLCJlbWFpbCIsInNldEVtYWlsIiwiand0VG9rZW4iLCJzZXRKd3RUb2tlbiIsInN1cGVyVXNlciIsInNldHN1cGVyVXNlciIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVTd2l0Y2hDaGFuZ2UiLCJjaGVja2VkIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsInJlc3BvbnNlRGF0YSIsImpzb24iLCJ1c2VyRXhpc3RzIiwidG9rZW4iLCJkZWNvZGVkVG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhZGROZXdVc2VyIiwiZXJyb3JEYXRhIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzdHlsZSIsImNvbG9yIiwib25DaGFuZ2UiLCJ1bmNoZWNrZWRJY29uIiwiY2hlY2tlZEljb24iLCJvbkhhbmRsZUNvbG9yIiwib25Db2xvciIsIm9mZkhhbmRsZUNvbG9yIiwib2ZmQ29sb3IiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJzcGFuIiwiaDIiLCJ1bCIsImxpIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Login/Login.js\n"));

/***/ })

});