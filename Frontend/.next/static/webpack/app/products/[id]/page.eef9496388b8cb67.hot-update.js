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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Login_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.css */ \"(app-pages-browser)/./src/app/component/Login/Login.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ \"(app-pages-browser)/./node_modules/jwt-decode/build/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Login = (param)=>{\n    let { user } = param;\n    _s();\n    const [isLogged, setIsLogged] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [isSwitch, setIsSwitched] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [familyName, setFamilyName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [codePostal, setCodePostal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [jwtToken, setJwtToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [superUser, setsuperUser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleSwitchChange = (checked)=>{\n        setIsSwitched(checked);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const storedToken = localStorage.getItem(\"jwtToken\");\n        if (storedToken) {\n            // S'il y a un token JWT dans le localStorage, l'utilisateur est considéré comme connecté\n            const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.jwtDecode)(storedToken);\n            setJwtToken(decodedToken);\n            setIsLogged(true);\n        }\n    }, []);\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/user\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const responseData = await response.json();\n                if (responseData.userExists) {\n                    setIsLogged(true);\n                    const token = responseData.userExists.token;\n                    const decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_3__.jwtDecode)(token);\n                    setJwtToken(decodedToken);\n                    localStorage.setItem(\"jwtToken\", token);\n                } else {\n                    setErrorMessage(\"Email or password is incorrect\");\n                }\n            } else {\n                setErrorMessage(\"Error connecting to the server\");\n            }\n        } catch (error) {\n            console.error(\"Error authenticating user:\", error);\n            setErrorMessage(\"Server error\");\n        }\n    };\n    const addNewUser = async (event)=>{\n        event.preventDefault();\n        try {\n            const response = await fetch(\"http://localhost:4000/api/newUser\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    name,\n                    familyName,\n                    address,\n                    codePostal,\n                    city,\n                    superUser,\n                    email,\n                    password\n                })\n            });\n            if (response.ok) {\n                const responseData = await response.json();\n                if (responseData.userExists) {\n                    setIsSwitched(true);\n                } else {\n                    setIsLogged(false);\n                }\n            } else {\n                const errorData = await response.json();\n                setErrorMessage(errorData.message);\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de la creation de l'utilisateur :\", error);\n            setErrorMessage(\"mail deja utilis\\xe9\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"loginComponent\",\n        children: !isLogged ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"loginFrame\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"userPhotoDiv\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            id: \"title\",\n                            children: \"Login to the jungle.\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 116,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                        lineNumber: 115,\n                        columnNumber: 19\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"loginFormDivi\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            id: \"formi\",\n                            onSubmit: handleSubmit,\n                            method: \"post\",\n                            children: [\n                                errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    style: {\n                                        color: \"red\"\n                                    },\n                                    children: errorMessage\n                                }, void 0, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 40\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    id: \"email\",\n                                    children: [\n                                        \"E-mail\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            value: email,\n                                            placeholder: \"Your e-mail\",\n                                            onChange: (e)=>setEmail(e.target.value),\n                                            required: true,\n                                            name: \"email\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                            lineNumber: 123,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 23\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    id: \"password\",\n                                    children: [\n                                        \"Password\",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            name: \"password\",\n                                            placeholder: \"Your password\",\n                                            onChange: (e)=>setPassword(e.target.value),\n                                            required: true,\n                                            value: password\n                                        }, void 0, false, {\n                                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                            lineNumber: 127,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 125,\n                                    columnNumber: 23\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    id: \"link\",\n                                    href: \"http://localhost:3000/register\",\n                                    children: \"not a tribe member ? Register now !\"\n                                }, void 0, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 129,\n                                    columnNumber: 23\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    id: \"button\",\n                                    type: \"submit\",\n                                    children: \"Log in\"\n                                }, void 0, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 23\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 119,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                        lineNumber: 118,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                lineNumber: 114,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n            lineNumber: 113,\n            columnNumber: 13\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"loged\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: [\n                        \"Welcome back \",\n                        jwtToken.name,\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 138,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"My personal information\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 140,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"Mes achat\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 141,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: \"ai ai ai\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 142,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            id: \"\",\n                            type: \"submit\",\n                            onClick: ()=>{\n                                setIsLogged(false);\n                                setJwtToken(null);\n                                localStorage.removeItem(\"jwtToken\");\n                            },\n                            children: \"Logout\"\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                            lineNumber: 143,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n                    lineNumber: 139,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n            lineNumber: 137,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Login/Login.js\",\n        lineNumber: 111,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Login, \"BAd7Y/GAVeZpCAvlKESYMKj4uY0=\");\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0xvZ2luL0xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxQjtBQUN1QjtBQUNQO0FBQ1I7QUFFN0IsTUFBTUksUUFBUTtRQUFDLEVBQUNDLElBQUksRUFBRTs7SUFDcEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1EsVUFBVUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLENBQUNVLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNZLE1BQU1DLFFBQVEsR0FBR2IsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYyxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2tCLFlBQVlDLGNBQWMsR0FBR25CLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ29CLE1BQU1DLFFBQVEsR0FBR3JCLCtDQUFRQSxDQUFDO0lBQ2pDLE1BQU0sQ0FBQ3NCLE9BQU9DLFNBQVMsR0FBR3ZCLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ3dCLFVBQVVDLFlBQVksR0FBR3pCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQzBCLFdBQVdDLGFBQWEsR0FBRzNCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQzRCLFVBQVVDLFlBQVksR0FBRzdCLCtDQUFRQSxDQUFDO0lBSXpDLE1BQU04QixxQkFBcUIsQ0FBQ0M7UUFDMUJ0QixjQUFjc0I7SUFDaEI7SUFDQTlCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTStCLGNBQWNDLGFBQWFDLE9BQU8sQ0FBQztRQUN6QyxJQUFJRixhQUFhO1lBQ2YseUZBQXlGO1lBQ3pGLE1BQU1HLGVBQWVqQyxxREFBU0EsQ0FBQzhCO1lBQy9CUCxZQUFZ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QUFPOzhDQUFpQzs7Ozs7OzhDQUN4RCw4REFBQ0M7b0NBQU9qQixJQUFHO29DQUFTUyxNQUFLOzhDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTzVDLDhEQUFDVjtZQUFJQyxJQUFHOzs4QkFDUiw4REFBQ0M7O3dCQUFHO3dCQUFjbkMsU0FBU1osSUFBSTt3QkFBQzs7Ozs7Ozs4QkFDaEMsOERBQUNnRTs7c0NBQ0csOERBQUNDO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNBO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNBO3NDQUFHOzs7Ozs7c0NBQ0osOERBQUNGOzRCQUFPakIsSUFBRzs0QkFBSVMsTUFBSzs0QkFDdEJXLFNBQVM7Z0NBQ1B2RSxZQUFZO2dDQUNaa0IsWUFBWTtnQ0FDWlEsYUFBYThDLFVBQVUsQ0FBQzs0QkFDMUI7c0NBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUWQ7R0F0SkUzRTtLQUFBQTtBQXdKTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9Mb2dpbi9Mb2dpbi5qcz83M2MxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vTG9naW4uY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2p3dERlY29kZX0gZnJvbSBcImp3dC1kZWNvZGVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTG9naW4gPSAoe3VzZXIsfSkgPT4ge1xuICBjb25zdCBbaXNMb2dnZWQsIHNldElzTG9nZ2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzU3dpdGNoLCBzZXRJc1N3aXRjaGVkXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZmFtaWx5TmFtZSwgc2V0RmFtaWx5TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2FkZHJlc3MsIHNldEFkZHJlc3NdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb2RlUG9zdGFsLCBzZXRDb2RlUG9zdGFsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbY2l0eSwgc2V0Q2l0eV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2p3dFRva2VuLCBzZXRKd3RUb2tlbl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3N1cGVyVXNlciwgc2V0c3VwZXJVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuXG5cbiAgY29uc3QgaGFuZGxlU3dpdGNoQ2hhbmdlID0gKGNoZWNrZWQpID0+IHtcbiAgICBzZXRJc1N3aXRjaGVkKGNoZWNrZWQpO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RUb2tlblwiKTtcbiAgICBpZiAoc3RvcmVkVG9rZW4pIHtcbiAgICAgIC8vIFMnaWwgeSBhIHVuIHRva2VuIEpXVCBkYW5zIGxlIGxvY2FsU3RvcmFnZSwgbCd1dGlsaXNhdGV1ciBlc3QgY29uc2lkw6lyw6kgY29tbWUgY29ubmVjdMOpXG4gICAgICBjb25zdCBkZWNvZGVkVG9rZW4gPSBqd3REZWNvZGUoc3RvcmVkVG9rZW4pO1xuICAgICAgc2V0Snd0VG9rZW4oZGVjb2RlZFRva2VuKTtcbiAgICAgIHNldElzTG9nZ2VkKHRydWUpO1xuICAgIH1cbiAgfSwgW10pO1xuICBcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvdXNlcmAsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbCwgcGFzc3dvcmQgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlRGF0YS51c2VyRXhpc3RzKSB7XG4gICAgICAgICAgICAgICAgc2V0SXNMb2dnZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZURhdGEudXNlckV4aXN0cy50b2tlblxuICAgICAgICAgICAgICAgIGNvbnN0IGRlY29kZWRUb2tlbiA9IGp3dERlY29kZSh0b2tlbilcbiAgICAgICAgICAgICAgICBzZXRKd3RUb2tlbihkZWNvZGVkVG9rZW4pO1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiand0VG9rZW5cIiwgdG9rZW4pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIkVtYWlsIG9yIHBhc3N3b3JkIGlzIGluY29ycmVjdFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIkVycm9yIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlclwiKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBhdXRoZW50aWNhdGluZyB1c2VyOlwiLCBlcnJvcik7XG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlNlcnZlciBlcnJvclwiKTtcbiAgICB9XG59O1xuXG4gICAgICBjb25zdCBhZGROZXdVc2VyID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFxuICAgICAgICB0cnkge1xuXG5cbiAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9hcGkvbmV3VXNlcmAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IG5hbWUsXG4gICAgICAgICAgICAgICAgICBmYW1pbHlOYW1lLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgIGNvZGVQb3N0YWwsXG4gICAgICAgICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgICAgICAgc3VwZXJVc2VyLFxuICAgICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZCx9KSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VEYXRhLnVzZXJFeGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgc2V0SXNTd2l0Y2hlZCh0cnVlKTtcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2V0SXNMb2dnZWQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgc2V0RXJyb3JNZXNzYWdlKGVycm9yRGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGxhIGNyZWF0aW9uIGRlIGwndXRpbGlzYXRldXIgOlwiLCBlcnJvcik7XG4gICAgICAgICAgICAgIHNldEVycm9yTWVzc2FnZShcIm1haWwgZGVqYSB1dGlsaXPDqVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICBcbiAgXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwibG9naW5Db21wb25lbnRcIj5cbiAgICAgICAgICB7IWlzTG9nZ2VkID8gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibG9naW5GcmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInVzZXJQaG90b0RpdlwiPlxuICAgICAgICAgICAgICAgICAgPGgyIGlkPVwidGl0bGVcIj5Mb2dpbiB0byB0aGUganVuZ2xlLjwvaDI+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dpbkZvcm1EaXZpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIGlkPVwiZm9ybWlcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiA8cCBzdHlsZT17eyBjb2xvcjogJ3JlZCcgfX0+e2Vycm9yTWVzc2FnZX08L3A+fVxuICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBpZD1cImVtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBFLW1haWxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiB2YWx1ZT17ZW1haWx9IHBsYWNlaG9sZGVyPVwiWW91ciBlLW1haWxcIiBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgIG5hbWU9XCJlbWFpbFwiICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGlkPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkICB2YWx1ZT17cGFzc3dvcmR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICA8TGluayBpZD1cImxpbmtcIiBocmVmPXtgaHR0cDovL2xvY2FsaG9zdDozMDAwL3JlZ2lzdGVyYH0+bm90IGEgdHJpYmUgbWVtYmVyID8gUmVnaXN0ZXIgbm93ICE8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5Mb2cgaW48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJsb2dlZFwiPlxuICAgICAgICAgICAgPGgyPldlbGNvbWUgYmFjayB7and0VG9rZW4ubmFtZX0gPC9oMj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+TXkgcGVyc29uYWwgaW5mb3JtYXRpb248L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5NZXMgYWNoYXQ8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5haSBhaSBhaTwvbGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIlwiICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldElzTG9nZ2VkKGZhbHNlKTtcbiAgICAgICAgICAgICAgICBzZXRKd3RUb2tlbihudWxsKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImp3dFRva2VuXCIpO1xuICAgICAgICAgICAgICB9fSA+TG9nb3V0PC9idXR0b24+XG5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwiand0RGVjb2RlIiwiTGluayIsIkxvZ2luIiwidXNlciIsImlzTG9nZ2VkIiwic2V0SXNMb2dnZWQiLCJpc1N3aXRjaCIsInNldElzU3dpdGNoZWQiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJuYW1lIiwic2V0TmFtZSIsImZhbWlseU5hbWUiLCJzZXRGYW1pbHlOYW1lIiwiYWRkcmVzcyIsInNldEFkZHJlc3MiLCJjb2RlUG9zdGFsIiwic2V0Q29kZVBvc3RhbCIsImNpdHkiLCJzZXRDaXR5IiwiZW1haWwiLCJzZXRFbWFpbCIsImp3dFRva2VuIiwic2V0Snd0VG9rZW4iLCJzdXBlclVzZXIiLCJzZXRzdXBlclVzZXIiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiaGFuZGxlU3dpdGNoQ2hhbmdlIiwiY2hlY2tlZCIsInN0b3JlZFRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRlY29kZWRUb2tlbiIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJyZXNwb25zZURhdGEiLCJqc29uIiwidXNlckV4aXN0cyIsInRva2VuIiwic2V0SXRlbSIsImVycm9yIiwiY29uc29sZSIsImFkZE5ld1VzZXIiLCJlcnJvckRhdGEiLCJtZXNzYWdlIiwiZGl2IiwiaWQiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsInAiLCJzdHlsZSIsImNvbG9yIiwibGFiZWwiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJocmVmIiwiYnV0dG9uIiwidWwiLCJsaSIsIm9uQ2xpY2siLCJyZW1vdmVJdGVtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Login/Login.js\n"));

/***/ })

});