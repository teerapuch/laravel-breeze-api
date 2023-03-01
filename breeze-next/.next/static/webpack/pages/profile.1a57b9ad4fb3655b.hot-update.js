"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/profile",{

/***/ "./src/pages/profile.js":
/*!******************************!*\
  !*** ./src/pages/profile.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layouts/AppLayout */ \"./src/components/Layouts/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Profile = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setLoading(true);\n        fetch(\"http://localhost:8000/profile\").then((res)=>res.json()).then((data)=>{\n            setData(data);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n        lineNumber: 19,\n        columnNumber: 25\n    }, undefined);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data\"\n    }, void 0, false, {\n        fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n        lineNumber: 20,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"font-semibold text-xl text-gray-800 leading-tight\",\n            children: \"Profile\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Laravel - Profile\"\n                }, void 0, false, {\n                    fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto sm:px-6 lg:px-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white overflow-hidden shadow-sm sm:rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-6 bg-white border-b border-gray-200\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: [\n                                        \"My title is \",\n                                        data[1].firstname ? data[1].firstname : \"Default firstname\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                                    lineNumber: 37,\n                                    columnNumber: 21\n                                }, undefined),\n                                \"No. \",\n                                data[1].id\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                            lineNumber: 36,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                        lineNumber: 35,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"YJka7g7FkKqEfFVhCypLPmREhdE=\");\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFzRDtBQUMxQjtBQUNlO0FBRTNDLE1BQU1JLFVBQVUsSUFBTTs7SUFDcEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDLElBQUk7SUFDckMsTUFBTSxDQUFDSyxXQUFXQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUNDLGdEQUFTQSxDQUFDLElBQU07UUFDZEssV0FBVyxJQUFJO1FBQ2ZDLE1BQU0saUNBQ0hDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0wsT0FBUztZQUNkQyxRQUFRRDtZQUNSRyxXQUFXLEtBQUs7UUFDbEI7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFJRCxXQUFXLHFCQUFPLDhEQUFDTTtrQkFBRTs7Ozs7O0lBQ3pCLElBQUksQ0FBQ1IsTUFBTSxxQkFBTyw4REFBQ1E7a0JBQUU7Ozs7OztJQUVyQixxQkFDRSw4REFBQ2IscUVBQVNBO1FBQ0ZjLHNCQUNJLDhEQUFDQztZQUFHQyxXQUFVO3NCQUFvRDs7OzBCQUk1RSw4REFBQ2Ysa0RBQUlBOzBCQUNELDRFQUFDZ0I7OEJBQU07Ozs7Ozs7Ozs7OzBCQUdYLDhEQUFDQztnQkFBSUYsV0FBVTswQkFDWCw0RUFBQ0U7b0JBQUlGLFdBQVU7OEJBQ1gsNEVBQUNFO3dCQUFJRixXQUFVO2tDQUNYLDRFQUFDRTs0QkFBSUYsV0FBVTs7OENBQ2IsOERBQUNHOzt3Q0FBRzt3Q0FBYWQsSUFBSSxDQUFDLEVBQUUsQ0FBQ2UsU0FBUyxHQUFHZixJQUFJLENBQUMsRUFBRSxDQUFDZSxTQUFTLEdBQUcsbUJBQW1COzs7Ozs7O2dDQUFNO2dDQUM1RWYsSUFBSSxDQUFDLEVBQUUsQ0FBQ2dCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRcEM7R0F6Q01qQjtLQUFBQTtBQTJDTiwrREFBZUEsT0FBT0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcHJvZmlsZS5qcz9lYjMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMYXlvdXQgZnJvbSAnQC9jb21wb25lbnRzL0xheW91dHMvQXBwTGF5b3V0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JyBcblxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL3Byb2ZpbGUnKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldERhdGEoZGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICBpZiAoaXNMb2FkaW5nKSByZXR1cm4gPHA+TG9hZGluZy4uLjwvcD47XG4gIGlmICghZGF0YSkgcmV0dXJuIDxwPk5vIHByb2ZpbGUgZGF0YTwvcD47XG5cbiAgcmV0dXJuIChcbiAgICA8QXBwTGF5b3V0XG4gICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1ncmF5LTgwMCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5MYXJhdmVsIC0gUHJvZmlsZTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctc20gc206cm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMT5NeSB0aXRsZSBpcyB7ZGF0YVsxXS5maXJzdG5hbWUgPyBkYXRhWzFdLmZpcnN0bmFtZSA6ICdEZWZhdWx0IGZpcnN0bmFtZSd9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgTm8uIHsgZGF0YVsxXS5pZCB9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvQXBwTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVxuXG4vKlxuXG5jb25zdCBQcm9maWxlID0gKHsgZ2V0VXNlciB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFwcExheW91dFxuICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHRleHQtZ3JheS04MDAgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgICAgICAgICBQcm9maWxlXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIH0+XG5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5MYXJhdmVsIC0gUHJvZmlsZTwvdGl0bGU+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktMTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTd4bCBteC1hdXRvIHNtOnB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctc20gc206cm91bmRlZC1sZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTYgYmctd2hpdGUgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldFVzZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9BcHBMYXlvdXQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlXG4qLyJdLCJuYW1lcyI6WyJBcHBMYXlvdXQiLCJIZWFkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJQcm9maWxlIiwiZGF0YSIsInNldERhdGEiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsInAiLCJoZWFkZXIiLCJoMiIsImNsYXNzTmFtZSIsInRpdGxlIiwiZGl2IiwiaDEiLCJmaXJzdG5hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/profile.js\n"));

/***/ })

});