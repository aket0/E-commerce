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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card/Card */ \"(app-pages-browser)/./src/app/component/Card/Card.js\");\n/* harmony import */ var _Body_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Body.css */ \"(app-pages-browser)/./src/app/component/Body/Body.css\");\n\nvar _s = $RefreshSig$();\n\n\n // Assurez-vous d'importer les styles CSS\nfunction sortAlphabetically(items) {\n    return items.sort((a, b)=>a.name.localeCompare(b.name));\n}\nfunction Body(param) {\n    let { selectedOption, addToCart, list } = param;\n    _s();\n    // Filtrer et trier les produits en fonction de l'option sélectionnée\n    const filteredItems = selectedOption ? sortAlphabetically(list.filter((item)=>item.type === selectedOption || item.weather === selectedOption)) : sortAlphabetically(list);\n    // Organiser les produits dans des groupes par option\n    const groupedItems = filteredItems.reduce((groups, item)=>{\n        const option = item.type === selectedOption ? item.type : item.weather;\n        groups[option] = groups[option] || [];\n        groups[option].push(item);\n        return groups;\n    }, {});\n    const containerRef = useRef(null);\n    const handleScroll = (event)=>{\n        containerRef.current.scrollLeft += event.deltaY;\n    };\n    // Rendu des div pour chaque option avec ses produits correspondants\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"body\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"row\",\n            children: Object.keys(groupedItems).map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"option-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: option\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"prod\",\n                            ref: containerRef,\n                            onWheel: handleScroll,\n                            children: groupedItems[option].map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    item: item,\n                                    addToCart: addToCart\n                                }, idx, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n            lineNumber: 32,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Body, \"5okL0DAk6Atnb3+Rru+wGBWyP+4=\");\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0JvZHkvQm9keS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEwQjtBQUNNO0FBQ1osQ0FBQyx5Q0FBeUM7QUFFOUQsU0FBU0UsbUJBQW1CQyxLQUFLO0lBQy9CLE9BQU9BLE1BQU1DLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFRSxJQUFJLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRUMsSUFBSTtBQUN6RDtBQUVBLFNBQVNFLEtBQUssS0FBbUM7UUFBbkMsRUFBRUMsY0FBYyxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRSxHQUFuQzs7SUFDWixxRUFBcUU7SUFDckUsTUFBTUMsZ0JBQWdCSCxpQkFDbEJSLG1CQUNFVSxLQUFLRSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxLQUFLTixrQkFBa0JLLEtBQUtFLE9BQU8sS0FBS1AsbUJBRXpFUixtQkFBbUJVO0lBRXZCLHFEQUFxRDtJQUNyRCxNQUFNTSxlQUFlTCxjQUFjTSxNQUFNLENBQUMsQ0FBQ0MsUUFBUUw7UUFDakQsTUFBTU0sU0FBU04sS0FBS0MsSUFBSSxLQUFLTixpQkFBaUJLLEtBQUtDLElBQUksR0FBR0QsS0FBS0UsT0FBTztRQUN0RUcsTUFBTSxDQUFDQyxPQUFPLEdBQUdELE1BQU0sQ0FBQ0MsT0FBTyxJQUFJLEVBQUU7UUFDckNELE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUNQO1FBQ3BCLE9BQU9LO0lBQ1QsR0FBRyxDQUFDO0lBQ0osTUFBTUcsZUFBZUMsT0FBTztJQUU1QixNQUFNQyxlQUFlLENBQUNDO1FBQ3BCSCxhQUFhSSxPQUFPLENBQUNDLFVBQVUsSUFBSUYsTUFBTUcsTUFBTTtJQUNqRDtJQUNBLG9FQUFvRTtJQUNwRSxxQkFDRSw4REFBQ0M7UUFBSUMsSUFBRztrQkFDUiw0RUFBQ0Q7WUFBSUMsSUFBRztzQkFDTEMsT0FBT0MsSUFBSSxDQUFDZixjQUFjZ0IsR0FBRyxDQUFDLENBQUNiLFFBQVFjLHNCQUN0Qyw4REFBQ0w7b0JBQWdCTSxXQUFVOztzQ0FDekIsOERBQUNDO3NDQUFJaEI7Ozs7OztzQ0FDTCw4REFBQ1M7NEJBQUlDLElBQUc7NEJBQU9PLEtBQUtmOzRCQUFjZ0IsU0FBU2Q7c0NBQ3hDUCxZQUFZLENBQUNHLE9BQU8sQ0FBQ2EsR0FBRyxDQUFDLENBQUNuQixNQUFNeUIsb0JBQy9CLDhEQUFDdkMsa0RBQUlBO29DQUFXYyxNQUFNQTtvQ0FBTUosV0FBV0E7bUNBQTVCNkI7Ozs7Ozs7Ozs7O21CQUpQTDs7Ozs7Ozs7Ozs7Ozs7O0FBWWxCO0dBckNTMUI7S0FBQUE7QUF1Q1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvQm9keS9Cb2R5LmpzP2M2YTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJkIGZyb20gJy4uL0NhcmQvQ2FyZCc7XG5pbXBvcnQgJy4vQm9keS5jc3MnOyAvLyBBc3N1cmV6LXZvdXMgZCdpbXBvcnRlciBsZXMgc3R5bGVzIENTU1xuXG5mdW5jdGlvbiBzb3J0QWxwaGFiZXRpY2FsbHkoaXRlbXMpIHtcbiAgcmV0dXJuIGl0ZW1zLnNvcnQoKGEsIGIpID0+IGEubmFtZS5sb2NhbGVDb21wYXJlKGIubmFtZSkpO1xufVxuXG5mdW5jdGlvbiBCb2R5KHsgc2VsZWN0ZWRPcHRpb24sIGFkZFRvQ2FydCwgbGlzdCB9KSB7XG4gIC8vIEZpbHRyZXIgZXQgdHJpZXIgbGVzIHByb2R1aXRzIGVuIGZvbmN0aW9uIGRlIGwnb3B0aW9uIHPDqWxlY3Rpb25uw6llXG4gIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBzZWxlY3RlZE9wdGlvblxuICAgID8gc29ydEFscGhhYmV0aWNhbGx5KFxuICAgICAgICBsaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS50eXBlID09PSBzZWxlY3RlZE9wdGlvbiB8fCBpdGVtLndlYXRoZXIgPT09IHNlbGVjdGVkT3B0aW9uKVxuICAgICAgKVxuICAgIDogc29ydEFscGhhYmV0aWNhbGx5KGxpc3QpO1xuXG4gIC8vIE9yZ2FuaXNlciBsZXMgcHJvZHVpdHMgZGFucyBkZXMgZ3JvdXBlcyBwYXIgb3B0aW9uXG4gIGNvbnN0IGdyb3VwZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXMucmVkdWNlKChncm91cHMsIGl0ZW0pID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBpdGVtLnR5cGUgPT09IHNlbGVjdGVkT3B0aW9uID8gaXRlbS50eXBlIDogaXRlbS53ZWF0aGVyO1xuICAgIGdyb3Vwc1tvcHRpb25dID0gZ3JvdXBzW29wdGlvbl0gfHwgW107XG4gICAgZ3JvdXBzW29wdGlvbl0ucHVzaChpdGVtKTtcbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9LCB7fSk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoZXZlbnQpID0+IHtcbiAgICBjb250YWluZXJSZWYuY3VycmVudC5zY3JvbGxMZWZ0ICs9IGV2ZW50LmRlbHRhWTtcbiAgfTtcbiAgLy8gUmVuZHUgZGVzIGRpdiBwb3VyIGNoYXF1ZSBvcHRpb24gYXZlYyBzZXMgcHJvZHVpdHMgY29ycmVzcG9uZGFudHNcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGlkPVwiYm9keVwiPlxuICAgIDxkaXYgaWQ9J3Jvdyc+XG4gICAgICB7T2JqZWN0LmtleXMoZ3JvdXBlZEl0ZW1zKS5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJvcHRpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGgyPntvcHRpb259PC9oMj5cbiAgICAgICAgICA8ZGl2IGlkPVwicHJvZFwiIHJlZj17Y29udGFpbmVyUmVmfSBvbldoZWVsPXtoYW5kbGVTY3JvbGx9PlxuICAgICAgICAgICAge2dyb3VwZWRJdGVtc1tvcHRpb25dLm1hcCgoaXRlbSwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgIDxDYXJkIGtleT17aWR4fSBpdGVtPXtpdGVtfSBhZGRUb0NhcnQ9e2FkZFRvQ2FydH0gLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwic29ydEFscGhhYmV0aWNhbGx5IiwiaXRlbXMiLCJzb3J0IiwiYSIsImIiLCJuYW1lIiwibG9jYWxlQ29tcGFyZSIsIkJvZHkiLCJzZWxlY3RlZE9wdGlvbiIsImFkZFRvQ2FydCIsImxpc3QiLCJmaWx0ZXJlZEl0ZW1zIiwiZmlsdGVyIiwiaXRlbSIsInR5cGUiLCJ3ZWF0aGVyIiwiZ3JvdXBlZEl0ZW1zIiwicmVkdWNlIiwiZ3JvdXBzIiwib3B0aW9uIiwicHVzaCIsImNvbnRhaW5lclJlZiIsInVzZVJlZiIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJkZWx0YVkiLCJkaXYiLCJpZCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpbmRleCIsImNsYXNzTmFtZSIsImgyIiwicmVmIiwib25XaGVlbCIsImlkeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Body/Body.js\n"));

/***/ })

});