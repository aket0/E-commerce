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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card/Card */ \"(app-pages-browser)/./src/app/component/Card/Card.js\");\n/* harmony import */ var _Body_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Body.css */ \"(app-pages-browser)/./src/app/component/Body/Body.css\");\n\nvar _s = $RefreshSig$();\n\n\n // Assurez-vous d'importer les styles CSS\nfunction sortAlphabetically(items) {\n    return items.sort((a, b)=>a.name.localeCompare(b.name));\n}\nfunction Body(param) {\n    let { selectedOption, addToCart, list } = param;\n    _s();\n    // Filtrer et trier les produits en fonction de l'option sélectionnée\n    const filteredItems = selectedOption ? sortAlphabetically(list.filter((item)=>item.type === selectedOption || item.weather === selectedOption)) : sortAlphabetically(list);\n    // Organiser les produits dans des groupes par option\n    const groupedItems = filteredItems.reduce((groups, item)=>{\n        const option = item.type === selectedOption ? item.type : item.weather;\n        groups[option] = groups[option] || [];\n        groups[option].push(item);\n        return groups;\n    }, {});\n    const containerRef = useRef(null);\n    const handleScroll = (event)=>{\n        containerRef.current.scrollLeft += event.deltaY;\n    };\n    // Rendu des div pour chaque option avec ses produits correspondants\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"body\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"row\",\n            children: Object.keys(groupedItems).map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"option-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: option\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"prod\",\n                            ref: c,\n                            children: groupedItems[option].map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    item: item,\n                                    addToCart: addToCart\n                                }, idx, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Body, \"5okL0DAk6Atnb3+Rru+wGBWyP+4=\");\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0JvZHkvQm9keS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNNO0FBQ1osQ0FBQyx5Q0FBeUM7QUFFOUQsU0FBU0UsbUJBQW1CQyxLQUFLO0lBQy9CLE9BQU9BLE1BQU1DLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFRSxJQUFJLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRUMsSUFBSTtBQUN6RDtBQUVBLFNBQVNFLEtBQUssS0FBbUM7UUFBbkMsRUFBRUMsY0FBYyxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRSxHQUFuQzs7SUFDWixxRUFBcUU7SUFDckUsTUFBTUMsZ0JBQWdCSCxpQkFDbEJSLG1CQUNFVSxLQUFLRSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxLQUFLTixrQkFBa0JLLEtBQUtFLE9BQU8sS0FBS1AsbUJBRXpFUixtQkFBbUJVO0lBRXZCLHFEQUFxRDtJQUNyRCxNQUFNTSxlQUFlTCxjQUFjTSxNQUFNLENBQUMsQ0FBQ0MsUUFBUUw7UUFDakQsTUFBTU0sU0FBU04sS0FBS0MsSUFBSSxLQUFLTixpQkFBaUJLLEtBQUtDLElBQUksR0FBR0QsS0FBS0UsT0FBTztRQUN0RUcsTUFBTSxDQUFDQyxPQUFPLEdBQUdELE1BQU0sQ0FBQ0MsT0FBTyxJQUFJLEVBQUU7UUFDckNELE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUNQO1FBQ3BCLE9BQU9LO0lBQ1QsR0FBRyxDQUFDO0lBQ0osTUFBTUcsZUFBZUMsT0FBTztJQUU1QixNQUFNQyxlQUFlLENBQUNDO1FBQ3BCSCxhQUFhSSxPQUFPLENBQUNDLFVBQVUsSUFBSUYsTUFBTUcsTUFBTTtJQUNqRDtJQUNBLG9FQUFvRTtJQUNwRSxxQkFDRSw4REFBQ0M7UUFBSUMsSUFBRztrQkFDUiw0RUFBQ0Q7WUFBSUMsSUFBRztzQkFDTEMsT0FBT0MsSUFBSSxDQUFDZixjQUFjZ0IsR0FBRyxDQUFDLENBQUNiLFFBQVFjLHNCQUN0Qyw4REFBQ0w7b0JBQWdCTSxXQUFVOztzQ0FDekIsOERBQUNDO3NDQUFJaEI7Ozs7OztzQ0FDTCw4REFBQ1M7NEJBQUlDLElBQUc7NEJBQU9PLEtBQUtDO3NDQUNqQnJCLFlBQVksQ0FBQ0csT0FBTyxDQUFDYSxHQUFHLENBQUMsQ0FBQ25CLE1BQU15QixvQkFDL0IsOERBQUN2QyxrREFBSUE7b0NBQVdjLE1BQU1BO29DQUFNSixXQUFXQTttQ0FBNUI2Qjs7Ozs7Ozs7Ozs7bUJBSlBMOzs7Ozs7Ozs7Ozs7Ozs7QUFZbEI7R0FyQ1MxQjtLQUFBQTtBQXVDVCwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudC9Cb2R5L0JvZHkuanM/YzZhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vQ2FyZC9DYXJkJztcbmltcG9ydCAnLi9Cb2R5LmNzcyc7IC8vIEFzc3VyZXotdm91cyBkJ2ltcG9ydGVyIGxlcyBzdHlsZXMgQ1NTXG5cbmZ1bmN0aW9uIHNvcnRBbHBoYWJldGljYWxseShpdGVtcykge1xuICByZXR1cm4gaXRlbXMuc29ydCgoYSwgYikgPT4gYS5uYW1lLmxvY2FsZUNvbXBhcmUoYi5uYW1lKSk7XG59XG5cbmZ1bmN0aW9uIEJvZHkoeyBzZWxlY3RlZE9wdGlvbiwgYWRkVG9DYXJ0LCBsaXN0IH0pIHtcbiAgLy8gRmlsdHJlciBldCB0cmllciBsZXMgcHJvZHVpdHMgZW4gZm9uY3Rpb24gZGUgbCdvcHRpb24gc8OpbGVjdGlvbm7DqWVcbiAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IHNlbGVjdGVkT3B0aW9uXG4gICAgPyBzb3J0QWxwaGFiZXRpY2FsbHkoXG4gICAgICAgIGxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnR5cGUgPT09IHNlbGVjdGVkT3B0aW9uIHx8IGl0ZW0ud2VhdGhlciA9PT0gc2VsZWN0ZWRPcHRpb24pXG4gICAgICApXG4gICAgOiBzb3J0QWxwaGFiZXRpY2FsbHkobGlzdCk7XG5cbiAgLy8gT3JnYW5pc2VyIGxlcyBwcm9kdWl0cyBkYW5zIGRlcyBncm91cGVzIHBhciBvcHRpb25cbiAgY29uc3QgZ3JvdXBlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcy5yZWR1Y2UoKGdyb3VwcywgaXRlbSkgPT4ge1xuICAgIGNvbnN0IG9wdGlvbiA9IGl0ZW0udHlwZSA9PT0gc2VsZWN0ZWRPcHRpb24gPyBpdGVtLnR5cGUgOiBpdGVtLndlYXRoZXI7XG4gICAgZ3JvdXBzW29wdGlvbl0gPSBncm91cHNbb3B0aW9uXSB8fCBbXTtcbiAgICBncm91cHNbb3B0aW9uXS5wdXNoKGl0ZW0pO1xuICAgIHJldHVybiBncm91cHM7XG4gIH0sIHt9KTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChldmVudCkgPT4ge1xuICAgIGNvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sbExlZnQgKz0gZXZlbnQuZGVsdGFZO1xuICB9O1xuICAvLyBSZW5kdSBkZXMgZGl2IHBvdXIgY2hhcXVlIG9wdGlvbiBhdmVjIHNlcyBwcm9kdWl0cyBjb3JyZXNwb25kYW50c1xuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJib2R5XCI+XG4gICAgPGRpdiBpZD0ncm93Jz5cbiAgICAgIHtPYmplY3Qua2V5cyhncm91cGVkSXRlbXMpLm1hcCgob3B0aW9uLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm9wdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICA8aDI+e29wdGlvbn08L2gyPlxuICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kXCIgcmVmPXtjfT5cbiAgICAgICAgICAgIHtncm91cGVkSXRlbXNbb3B0aW9uXS5tYXAoKGl0ZW0sIGlkeCkgPT4gKFxuICAgICAgICAgICAgICA8Q2FyZCBrZXk9e2lkeH0gaXRlbT17aXRlbX0gYWRkVG9DYXJ0PXthZGRUb0NhcnR9IC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2FyZCIsInNvcnRBbHBoYWJldGljYWxseSIsIml0ZW1zIiwic29ydCIsImEiLCJiIiwibmFtZSIsImxvY2FsZUNvbXBhcmUiLCJCb2R5Iiwic2VsZWN0ZWRPcHRpb24iLCJhZGRUb0NhcnQiLCJsaXN0IiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsIml0ZW0iLCJ0eXBlIiwid2VhdGhlciIsImdyb3VwZWRJdGVtcyIsInJlZHVjZSIsImdyb3VwcyIsIm9wdGlvbiIsInB1c2giLCJjb250YWluZXJSZWYiLCJ1c2VSZWYiLCJoYW5kbGVTY3JvbGwiLCJldmVudCIsImN1cnJlbnQiLCJzY3JvbGxMZWZ0IiwiZGVsdGFZIiwiZGl2IiwiaWQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJoMiIsInJlZiIsImMiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Body/Body.js\n"));

/***/ })

});