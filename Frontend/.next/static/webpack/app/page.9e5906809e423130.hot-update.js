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

/***/ "(app-pages-browser)/./src/app/component/Body/Body.js":
/*!****************************************!*\
  !*** ./src/app/component/Body/Body.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card/Card */ \"(app-pages-browser)/./src/app/component/Card/Card.js\");\n/* harmony import */ var _Body_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Body.css */ \"(app-pages-browser)/./src/app/component/Body/Body.css\");\n\n\n\n // Assurez-vous d'importer les styles CSS\nfunction sortAlphabetically(items) {\n    return items.sort((a, b)=>a.name.localeCompare(b.name));\n}\nfunction Body(param) {\n    let { selectedOption, addToCart, list } = param;\n    // Filtrer et trier les produits en fonction de l'option sélectionnée\n    const filteredItems = selectedOption ? sortAlphabetically(list.filter((item)=>item.type === selectedOption || item.weather === selectedOption)) : sortAlphabetically(list);\n    // Organiser les produits dans des groupes par option\n    const groupedItems = filteredItems.reduce((groups, item)=>{\n        const option = item.type === selectedOption ? item.type : item.weather;\n        groups[option] = groups[option] || [];\n        groups[option].push(item);\n        return groups;\n    }, {});\n    // Rendu des div pour chaque option avec ses produits correspondants\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"body\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"row\",\n            children: Object.keys(groupedItems).map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"option-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: option\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"prod\",\n                            children: groupedItems[option].map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    item: item,\n                                    addToCart: addToCart\n                                }, idx, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n            lineNumber: 28,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0JvZHkvQm9keS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCO0FBQ007QUFDWixDQUFDLHlDQUF5QztBQUU5RCxTQUFTRSxtQkFBbUJDLEtBQUs7SUFDL0IsT0FBT0EsTUFBTUMsSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU1ELEVBQUVFLElBQUksQ0FBQ0MsYUFBYSxDQUFDRixFQUFFQyxJQUFJO0FBQ3pEO0FBRUEsU0FBU0UsS0FBSyxLQUFtQztRQUFuQyxFQUFFQyxjQUFjLEVBQUVDLFNBQVMsRUFBRUMsSUFBSSxFQUFFLEdBQW5DO0lBQ1oscUVBQXFFO0lBQ3JFLE1BQU1DLGdCQUFnQkgsaUJBQ2xCUixtQkFDRVUsS0FBS0UsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLElBQUksS0FBS04sa0JBQWtCSyxLQUFLRSxPQUFPLEtBQUtQLG1CQUV6RVIsbUJBQW1CVTtJQUV2QixxREFBcUQ7SUFDckQsTUFBTU0sZUFBZUwsY0FBY00sTUFBTSxDQUFDLENBQUNDLFFBQVFMO1FBQ2pELE1BQU1NLFNBQVNOLEtBQUtDLElBQUksS0FBS04saUJBQWlCSyxLQUFLQyxJQUFJLEdBQUdELEtBQUtFLE9BQU87UUFDdEVHLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHRCxNQUFNLENBQUNDLE9BQU8sSUFBSSxFQUFFO1FBQ3JDRCxNQUFNLENBQUNDLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDUDtRQUNwQixPQUFPSztJQUNULEdBQUcsQ0FBQztJQUVKLG9FQUFvRTtJQUNwRSxxQkFDRSw4REFBQ0c7UUFBSUMsSUFBRztrQkFDUiw0RUFBQ0Q7WUFBSUMsSUFBRztzQkFDTEMsT0FBT0MsSUFBSSxDQUFDUixjQUFjUyxHQUFHLENBQUMsQ0FBQ04sUUFBUU8sc0JBQ3RDLDhEQUFDTDtvQkFBZ0JNLFdBQVU7O3NDQUN6Qiw4REFBQ0M7c0NBQUlUOzs7Ozs7c0NBQ0wsOERBQUNFOzRCQUFJQyxJQUFHO3NDQUNMTixZQUFZLENBQUNHLE9BQU8sQ0FBQ00sR0FBRyxDQUFDLENBQUNaLE1BQU1nQixvQkFDL0IsOERBQUM5QixrREFBSUE7b0NBQVdjLE1BQU1BO29DQUFNSixXQUFXQTttQ0FBNUJvQjs7Ozs7Ozs7Ozs7bUJBSlBIOzs7Ozs7Ozs7Ozs7Ozs7QUFZbEI7S0FqQ1NuQjtBQW1DVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9Cb2R5L0JvZHkuanM/YzZhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZC9DYXJkJztcbmltcG9ydCAnLi9Cb2R5LmNzcyc7IC8vIEFzc3VyZXotdm91cyBkJ2ltcG9ydGVyIGxlcyBzdHlsZXMgQ1NTXG5cbmZ1bmN0aW9uIHNvcnRBbHBoYWJldGljYWxseShpdGVtcykge1xuICByZXR1cm4gaXRlbXMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG59XG5cbmZ1bmN0aW9uIEJvZHkoeyBzZWxlY3RlZE9wdGlvbiwgYWRkVG9DYXJ0LCBsaXN0IH0pIHtcbiAgLy8gRmlsdHJlciBldCB0cmllciBsZXMgcHJvZHVpdHMgZW4gZm9uY3Rpb24gZGUgbCdvcHRpb24gc8OpbGVjdGlvbm7DqWVcbiAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHNlbGVjdGVkT3B0aW9uXG4gICAgPyBzb3J0QWxwaGFiZXRpY2FsbHkoXG4gICAgICAgIGxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IHNlbGVjdGVkT3B0aW9uIHx8IGl0ZW0ud2VhdGhlciA9PT0gc2VsZWN0ZWRPcHRpb24pXG4gICAgICApXG4gICAgOiBzb3J0QWxwaGFiZXRpY2FsbHkobGlzdCk7XG5cbiAgLy8gT3JnYW5pc2VyIGxlcyBwcm9kdWl0cyBkYW5zIGRlcyBncm91cGVzIHBhciBvcHRpb25cbiAgY29uc3QgZ3JvdXBlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcy5yZWR1Y2UoKGdyb3VwcywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGl0ZW0udHlwZSA9PT0gc2VsZWN0ZWRPcHRpb24gPyBpdGVtLnR5cGUgOiBpdGVtLndlYXRoZXI7XG4gICAgZ3JvdXBzW29wdGlvbl0gPSBncm91cHNbb3B0aW9uXSB8fCBbXTtcbiAgICBncm91cHNbb3B0aW9uXS5wdXNoKGl0ZW0pO1xuICAgIHJldHVybiBncm91cHM7XG4gIH0sIHt9KTtcblxuICAvLyBSZW5kdSBkZXMgZGl2IHBvdXIgY2hhcXVlIG9wdGlvbiBhdmVjIHNlcyBwcm9kdWl0cyBjb3JyZXNwb25kYW50c1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJib2R5XCI+XG4gICAgPGRpdiBpZD0ncm93Jz5cbiAgICAgIHtPYmplY3Qua2V5cyhncm91cGVkSXRlbXMpLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm9wdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDI+e29wdGlvbn08L2gyPlxuICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kXCI+XG4gICAgICAgICAgICB7Z3JvdXBlZEl0ZW1zW29wdGlvbl0ubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPENhcmQga2V5PXtpZHh9IGl0ZW09e2l0ZW19IGFkZFRvQ2FydD17YWRkVG9DYXJ0fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNhcmQiLCJzb3J0QWxwaGFiZXRpY2FsbHkiLCJpdGVtcyIsInNvcnQiLCJhIiwiYiIsIm5hbWUiLCJsb2NhbGVDb21wYXJlIiwiQm9keSIsInNlbGVjdGVkT3B0aW9uIiwiYWRkVG9DYXJ0IiwibGlzdCIsImZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwidHlwZSIsIndlYXRoZXIiLCJncm91cGVkSXRlbXMiLCJyZWR1Y2UiLCJncm91cHMiLCJvcHRpb24iLCJwdXNoIiwiZGl2IiwiaWQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJoMiIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Body/Body.js\n"));

/***/ })

});