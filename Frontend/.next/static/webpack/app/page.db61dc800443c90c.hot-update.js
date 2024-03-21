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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card/Card */ \"(app-pages-browser)/./src/app/component/Card/Card.js\");\n/* harmony import */ var _Body_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Body.css */ \"(app-pages-browser)/./src/app/component/Body/Body.css\");\n\nvar _s = $RefreshSig$();\n\n\n // Assurez-vous d'importer les styles CSS\nfunction sortAlphabetically(items) {\n    return items.sort((a, b)=>a.name.localeCompare(b.name));\n}\nfunction Body(param) {\n    let { selectedOption, addToCart, list } = param;\n    _s();\n    // Filtrer et trier les produits en fonction de l'option sélectionnée\n    const filteredItems = selectedOption ? sortAlphabetically(list.filter((item)=>item.type === selectedOption || item.weater === selectedOption)) : sortAlphabetically(list);\n    // Organiser les produits dans des groupes par option\n    const groupedItems = list.reduce((groups, item)=>{\n        const { type, weater } = item;\n        groups[\"all\"] = groups[\"all\"] || [];\n        groups[\"all\"].push(item);\n        groups[type] = groups[type] || [];\n        groups[type].push(item);\n        groups[weater] = groups[weater] || [];\n        groups[weater].push(item);\n        return groups;\n    }, {});\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleScroll = (event)=>{\n        const container = containerRef.current;\n        const delta = Math.sign(event.deltaY) * 500; // Ajustez la vitesse de défilement ici\n        container.scrollLeft += delta;\n    };\n    // Rendu des div pour chaque option avec ses produits correspondants\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"body\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            id: \"row\",\n            children: Object.keys(groupedItems).map((option, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"option-container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: option.firstLetterToUpper\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            id: \"prod\",\n                            ref: containerRef,\n                            onWheel: (event)=>handleScroll(event),\n                            children: groupedItems[option].map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    item: item,\n                                    addToCart: addToCart\n                                }, idx, false, {\n                                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n            lineNumber: 38,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/aketo/TryNext/e-commerce/Frontend/src/app/component/Body/Body.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Body, \"5okL0DAk6Atnb3+Rru+wGBWyP+4=\");\n_c = Body;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Body);\nvar _c;\n$RefreshReg$(_c, \"Body\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L0JvZHkvQm9keS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvQztBQUNKO0FBQ1osQ0FBQyx5Q0FBeUM7QUFFOUQsU0FBU0csbUJBQW1CQyxLQUFLO0lBQy9CLE9BQU9BLE1BQU1DLElBQUksQ0FBQyxDQUFDQyxHQUFHQyxJQUFNRCxFQUFFRSxJQUFJLENBQUNDLGFBQWEsQ0FBQ0YsRUFBRUMsSUFBSTtBQUN6RDtBQUVBLFNBQVNFLEtBQUssS0FBbUM7UUFBbkMsRUFBRUMsY0FBYyxFQUFFQyxTQUFTLEVBQUVDLElBQUksRUFBRSxHQUFuQzs7SUFDWixxRUFBcUU7SUFDckUsTUFBTUMsZ0JBQWdCSCxpQkFDbEJSLG1CQUNFVSxLQUFLRSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsSUFBSSxLQUFLTixrQkFBa0JLLEtBQUtFLE1BQU0sS0FBS1AsbUJBRXhFUixtQkFBbUJVO0lBRXZCLHFEQUFxRDtJQUNyRCxNQUFNTSxlQUFlTixLQUFLTyxNQUFNLENBQUMsQ0FBQ0MsUUFBUUw7UUFDeEMsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLE1BQU0sRUFBRSxHQUFHRjtRQUN6QkssTUFBTSxDQUFDLE1BQU0sR0FBR0EsTUFBTSxDQUFDLE1BQU0sSUFBSSxFQUFFO1FBQ25DQSxNQUFNLENBQUMsTUFBTSxDQUFDQyxJQUFJLENBQUNOO1FBQ25CSyxNQUFNLENBQUNKLEtBQUssR0FBR0ksTUFBTSxDQUFDSixLQUFLLElBQUksRUFBRTtRQUNqQ0ksTUFBTSxDQUFDSixLQUFLLENBQUNLLElBQUksQ0FBQ047UUFDbEJLLE1BQU0sQ0FBQ0gsT0FBTyxHQUFHRyxNQUFNLENBQUNILE9BQU8sSUFBSSxFQUFFO1FBQ3JDRyxNQUFNLENBQUNILE9BQU8sQ0FBQ0ksSUFBSSxDQUFDTjtRQUNwQixPQUFPSztJQUNULEdBQUcsQ0FBQztJQUNKLE1BQU1FLGVBQWV0Qiw2Q0FBTUEsQ0FBQztJQUU1QixNQUFNdUIsZUFBZSxDQUFDQztRQUNwQixNQUFNQyxZQUFZSCxhQUFhSSxPQUFPO1FBQ3RDLE1BQU1DLFFBQVFDLEtBQUtDLElBQUksQ0FBQ0wsTUFBTU0sTUFBTSxJQUFJLEtBQUssdUNBQXVDO1FBQ3BGTCxVQUFVTSxVQUFVLElBQUlKO0lBQzFCO0lBQ0Esb0VBQW9FO0lBQ3BFLHFCQUNFLDhEQUFDSztRQUFJQyxJQUFHO2tCQUNSLDRFQUFDRDtZQUFJQyxJQUFHO3NCQUNMQyxPQUFPQyxJQUFJLENBQUNqQixjQUFja0IsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUN0Qyw4REFBQ047b0JBQWdCTyxXQUFVOztzQ0FDekIsOERBQUNDO3NDQUFJSCxPQUFPSSxrQkFBa0I7Ozs7OztzQ0FDOUIsOERBQUNUOzRCQUFJQyxJQUFHOzRCQUFPUyxLQUFLcEI7NEJBQWNxQixTQUFTLENBQUNuQixRQUFVRCxhQUFhQztzQ0FDaEVOLFlBQVksQ0FBQ21CLE9BQU8sQ0FBQ0QsR0FBRyxDQUFDLENBQUNyQixNQUFNNkIsb0JBQy9CLDhEQUFDM0Msa0RBQUlBO29DQUFXYyxNQUFNQTtvQ0FBTUosV0FBV0E7bUNBQTVCaUM7Ozs7Ozs7Ozs7O21CQUpQTjs7Ozs7Ozs7Ozs7Ozs7O0FBYWxCO0dBNUNTN0I7S0FBQUE7QUE4Q1QsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnQvQm9keS9Cb2R5LmpzP2M2YTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlUmVmfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9DYXJkL0NhcmQnO1xuaW1wb3J0ICcuL0JvZHkuY3NzJzsgLy8gQXNzdXJlei12b3VzIGQnaW1wb3J0ZXIgbGVzIHN0eWxlcyBDU1NcblxuZnVuY3Rpb24gc29ydEFscGhhYmV0aWNhbGx5KGl0ZW1zKSB7XG4gIHJldHVybiBpdGVtcy5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKTtcbn1cblxuZnVuY3Rpb24gQm9keSh7IHNlbGVjdGVkT3B0aW9uLCBhZGRUb0NhcnQsIGxpc3QgfSkge1xuICAvLyBGaWx0cmVyIGV0IHRyaWVyIGxlcyBwcm9kdWl0cyBlbiBmb25jdGlvbiBkZSBsJ29wdGlvbiBzw6lsZWN0aW9ubsOpZVxuICBjb25zdCBmaWx0ZXJlZEl0ZW1zID0gc2VsZWN0ZWRPcHRpb25cbiAgICA/IHNvcnRBbHBoYWJldGljYWxseShcbiAgICAgICAgbGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0udHlwZSA9PT0gc2VsZWN0ZWRPcHRpb24gfHwgaXRlbS53ZWF0ZXIgPT09IHNlbGVjdGVkT3B0aW9uKVxuICAgICAgKVxuICAgIDogc29ydEFscGhhYmV0aWNhbGx5KGxpc3QpO1xuXG4gIC8vIE9yZ2FuaXNlciBsZXMgcHJvZHVpdHMgZGFucyBkZXMgZ3JvdXBlcyBwYXIgb3B0aW9uXG4gIGNvbnN0IGdyb3VwZWRJdGVtcyA9IGxpc3QucmVkdWNlKChncm91cHMsIGl0ZW0pID0+IHtcbiAgICBjb25zdCB7IHR5cGUsIHdlYXRlciB9ID0gaXRlbTtcbiAgICBncm91cHNbJ2FsbCddID0gZ3JvdXBzWydhbGwnXSB8fCBbXTtcbiAgICBncm91cHNbJ2FsbCddLnB1c2goaXRlbSk7XG4gICAgZ3JvdXBzW3R5cGVdID0gZ3JvdXBzW3R5cGVdIHx8IFtdO1xuICAgIGdyb3Vwc1t0eXBlXS5wdXNoKGl0ZW0pO1xuICAgIGdyb3Vwc1t3ZWF0ZXJdID0gZ3JvdXBzW3dlYXRlcl0gfHwgW107XG4gICAgZ3JvdXBzW3dlYXRlcl0ucHVzaChpdGVtKTtcbiAgICByZXR1cm4gZ3JvdXBzO1xuICB9LCB7fSk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBjb250YWluZXJSZWYuY3VycmVudDtcbiAgICBjb25zdCBkZWx0YSA9IE1hdGguc2lnbihldmVudC5kZWx0YVkpICogNTAwOyAvLyBBanVzdGV6IGxhIHZpdGVzc2UgZGUgZMOpZmlsZW1lbnQgaWNpXG4gICAgY29udGFpbmVyLnNjcm9sbExlZnQgKz0gZGVsdGE7XG4gIH07XG4gIC8vIFJlbmR1IGRlcyBkaXYgcG91ciBjaGFxdWUgb3B0aW9uIGF2ZWMgc2VzIHByb2R1aXRzIGNvcnJlc3BvbmRhbnRzXG4gIHJldHVybiAoXG4gICAgPGRpdiBpZD1cImJvZHlcIj5cbiAgICA8ZGl2IGlkPSdyb3cnPlxuICAgICAge09iamVjdC5rZXlzKGdyb3VwZWRJdGVtcykubWFwKChvcHRpb24sIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwib3B0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMj57b3B0aW9uLmZpcnN0TGV0dGVyVG9VcHBlcn08L2gyPlxuICAgICAgICAgIDxkaXYgaWQ9XCJwcm9kXCIgcmVmPXtjb250YWluZXJSZWZ9IG9uV2hlZWw9eyhldmVudCkgPT4gaGFuZGxlU2Nyb2xsKGV2ZW50KX0+XG4gICAgICAgICAgICB7Z3JvdXBlZEl0ZW1zW29wdGlvbl0ubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICAgICAgPENhcmQga2V5PXtpZHh9IGl0ZW09e2l0ZW19IGFkZFRvQ2FydD17YWRkVG9DYXJ0fSAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwiQ2FyZCIsInNvcnRBbHBoYWJldGljYWxseSIsIml0ZW1zIiwic29ydCIsImEiLCJiIiwibmFtZSIsImxvY2FsZUNvbXBhcmUiLCJCb2R5Iiwic2VsZWN0ZWRPcHRpb24iLCJhZGRUb0NhcnQiLCJsaXN0IiwiZmlsdGVyZWRJdGVtcyIsImZpbHRlciIsIml0ZW0iLCJ0eXBlIiwid2VhdGVyIiwiZ3JvdXBlZEl0ZW1zIiwicmVkdWNlIiwiZ3JvdXBzIiwicHVzaCIsImNvbnRhaW5lclJlZiIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiY29udGFpbmVyIiwiY3VycmVudCIsImRlbHRhIiwiTWF0aCIsInNpZ24iLCJkZWx0YVkiLCJzY3JvbGxMZWZ0IiwiZGl2IiwiaWQiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwib3B0aW9uIiwiaW5kZXgiLCJjbGFzc05hbWUiLCJoMiIsImZpcnN0TGV0dGVyVG9VcHBlciIsInJlZiIsIm9uV2hlZWwiLCJpZHgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/Body/Body.js\n"));

/***/ })

});