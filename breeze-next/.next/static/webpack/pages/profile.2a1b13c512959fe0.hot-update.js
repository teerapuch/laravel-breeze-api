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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layouts/AppLayout */ \"./src/components/Layouts/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Profile = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        setLoading(true);\n        fetch(\"http://localhost:8000/profile\").then((res)=>res.json()).then((data)=>{\n            setData(data);\n            setLoading(false);\n        });\n    }, []);\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n        lineNumber: 19,\n        columnNumber: 25\n    }, undefined);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: \"No profile data\"\n    }, void 0, false, {\n        fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n        lineNumber: 20,\n        columnNumber: 21\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"font-semibold text-xl text-gray-800 leading-tight\",\n            children: \"Profile\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Laravel - Profile\"\n                }, void 0, false, {\n                    fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"py-12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"max-w-7xl mx-auto sm:px-6 lg:px-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white overflow-hidden shadow-sm sm:rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"p-6 bg-white border-b border-gray-200\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: \"No.\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 27\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                                    children: \"Full Name\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 27\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 25\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 23\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: data[0].id\n                                            }, void 0, false, {\n                                                fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 25\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                children: [\n                                                    data[0].firstname ? data[0].firstname : \"Default full name\",\n                                                    \" \\xa0\",\n                                                    data[0].lastname ? data[0].lastname : \"Default full name\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                                                lineNumber: 46,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 23\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                                lineNumber: 37,\n                                columnNumber: 21\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                            lineNumber: 36,\n                            columnNumber: 19\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                        lineNumber: 35,\n                        columnNumber: 15\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                    lineNumber: 34,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yeswebdesignstudio/Desktop/Desktop/www/laravel-breeze-api/breeze-next/src/pages/profile.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Profile, \"YJka7g7FkKqEfFVhCypLPmREhdE=\");\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZmlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFzRDtBQUMxQjtBQUNlO0FBRTNDLE1BQU1JLFVBQVUsSUFBTTs7SUFDcEIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdKLCtDQUFRQSxDQUFDLElBQUk7SUFDckMsTUFBTSxDQUFDSyxXQUFXQyxXQUFXLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUs7SUFFOUNDLGdEQUFTQSxDQUFDLElBQU07UUFDZEssV0FBVyxJQUFJO1FBQ2ZDLE1BQU0saUNBQ0hDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0wsT0FBUztZQUNkQyxRQUFRRDtZQUNSRyxXQUFXLEtBQUs7UUFDbEI7SUFDSixHQUFHLEVBQUU7SUFFTCxJQUFJRCxXQUFXLHFCQUFPLDhEQUFDTTtrQkFBRTs7Ozs7O0lBQ3pCLElBQUksQ0FBQ1IsTUFBTSxxQkFBTyw4REFBQ1E7a0JBQUU7Ozs7OztJQUVyQixxQkFDRSw4REFBQ2IscUVBQVNBO1FBQ0ZjLHNCQUNJLDhEQUFDQztZQUFHQyxXQUFVO3NCQUFvRDs7OzBCQUk1RSw4REFBQ2Ysa0RBQUlBOzBCQUNELDRFQUFDZ0I7OEJBQU07Ozs7Ozs7Ozs7OzBCQUdYLDhEQUFDQztnQkFBSUYsV0FBVTswQkFDWCw0RUFBQ0U7b0JBQUlGLFdBQVU7OEJBQ1gsNEVBQUNFO3dCQUFJRixXQUFVO2tDQUNYLDRFQUFDRTs0QkFBSUYsV0FBVTtzQ0FDYiw0RUFBQ0c7O2tEQUNDLDhEQUFDQztrREFDQyw0RUFBQ0M7OzhEQUNDLDhEQUFDQzs4REFBRzs7Ozs7OzhEQUNKLDhEQUFDQTs4REFBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0RBR1IsOERBQUNEOzswREFDQyw4REFBQ0U7MERBQUtsQixJQUFJLENBQUMsRUFBRSxDQUFDbUIsRUFBRTs7Ozs7OzBEQUNoQiw4REFBQ0Q7O29EQUNFbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQ29CLFNBQVMsR0FBR3BCLElBQUksQ0FBQyxFQUFFLENBQUNvQixTQUFTLEdBQUcsbUJBQW1CO29EQUFDO29EQUM1RHBCLElBQUksQ0FBQyxFQUFFLENBQUNxQixRQUFRLEdBQUdyQixJQUFJLENBQUMsRUFBRSxDQUFDcUIsUUFBUSxHQUFHLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV3BGO0dBdERNdEI7S0FBQUE7QUF3RE4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2ZpbGUuanM/ZWIzMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwTGF5b3V0IGZyb20gJ0AvY29tcG9uZW50cy9MYXlvdXRzL0FwcExheW91dCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCcgXG5cbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wcm9maWxlJylcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBzZXREYXRhKGRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgaWYgKGlzTG9hZGluZykgcmV0dXJuIDxwPkxvYWRpbmcuLi48L3A+O1xuICBpZiAoIWRhdGEpIHJldHVybiA8cD5ObyBwcm9maWxlIGRhdGE8L3A+O1xuXG4gIHJldHVybiAoXG4gICAgPEFwcExheW91dFxuICAgICAgICAgICAgaGVhZGVyPXtcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHRleHQtZ3JheS04MDAgbGVhZGluZy10aWdodFwiPlxuICAgICAgICAgICAgICAgICAgICBQcm9maWxlXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIH0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+TGFyYXZlbCAtIFByb2ZpbGU8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTEyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy03eGwgbXgtYXV0byBzbTpweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBvdmVyZmxvdy1oaWRkZW4gc2hhZG93LXNtIHNtOnJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC02IGJnLXdoaXRlIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+Tm8uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkZ1bGwgTmFtZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnsgZGF0YVswXS5pZCB9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGFbMF0uZmlyc3RuYW1lID8gZGF0YVswXS5maXJzdG5hbWUgOiAnRGVmYXVsdCBmdWxsIG5hbWUnfSAmbmJzcDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGFbMF0ubGFzdG5hbWUgPyBkYXRhWzBdLmxhc3RuYW1lIDogJ0RlZmF1bHQgZnVsbCBuYW1lJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgPC9BcHBMYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlXG5cbi8qXG5cbmNvbnN0IFByb2ZpbGUgPSAoeyBnZXRVc2VyIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QXBwTGF5b3V0XG4gICAgICAgICAgICBoZWFkZXI9e1xuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQteGwgdGV4dC1ncmF5LTgwMCBsZWFkaW5nLXRpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgfT5cblxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkxhcmF2ZWwgLSBQcm9maWxlPC90aXRsZT5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS0xMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctN3hsIG14LWF1dG8gc206cHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1zbSBzbTpyb3VuZGVkLWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNiBiZy13aGl0ZSBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0VXNlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0FwcExheW91dD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVcbiovIl0sIm5hbWVzIjpbIkFwcExheW91dCIsIkhlYWQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlByb2ZpbGUiLCJkYXRhIiwic2V0RGF0YSIsImlzTG9hZGluZyIsInNldExvYWRpbmciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwicCIsImhlYWRlciIsImgyIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkaXYiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRkIiwiaWQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/profile.js\n"));

/***/ })

});