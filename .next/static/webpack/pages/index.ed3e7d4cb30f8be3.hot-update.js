"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/board.tsx":
/*!******************************!*\
  !*** ./components/board.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Board\": function() { return /* binding */ Board; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profiles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profiles */ \"./components/profiles.tsx\");\n/* harmony import */ var _participents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./participents */ \"./components/participents.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Board = ()=>{\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [score, setScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [randomWinner, setRandomWinner] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setError(\"\");\n        console.log(\"hei\");\n        if (name && email) {\n            // send a request to the server.\n            try {\n                const body = {\n                    name,\n                    email,\n                    score\n                };\n                console.log(body);\n                await fetch(\"http://localhost:3000/api/createParticipant\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify(body)\n                });\n                await next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\");\n            } catch (error) {\n                console.error(error);\n            }\n        } else {\n            setError(\"All fields are required\");\n            return;\n        }\n    };\n    const handleRandom = (Leaderboard)=>{\n        var item = Leaderboard[Math.floor(Math.random() * Leaderboard.length)].name;\n        console.log(item);\n        setRandomWinner(item);\n    };\n    const sortParticipants = (Leaderboard)=>{\n        return Leaderboard.sort((a, b)=>{\n            if (a.score === b.score) {\n                return b.score - a.score;\n            } else {\n                return b.score - a.score;\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"board\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"duration\",\n                children: \"All-Time\"\n            }, void 0, false, {\n                fileName: \"/Users/annemariesamuelsen/Documents/DEV/leaderboard/components/board.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_profiles__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                Leaderboard: sortParticipants(_participents__WEBPACK_IMPORTED_MODULE_4__.Leaderboard)\n            }, void 0, false, {\n                fileName: \"/Users/annemariesamuelsen/Documents/DEV/leaderboard/components/board.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"add-player-form\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (e)=>setName(e.target.value),\n                                type: \"text\",\n                                value: name,\n                                placeholder: \"Navn\"\n                            }, void 0, false, {\n                                fileName: \"/Users/annemariesamuelsen/Documents/DEV/leaderboard/components/board.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (e)=>setEmail(e.target.value),\n                                type: \"text\",\n                                value: email,\n                                placeholder: \"Epost\"\n                            }, void 0, false, {\n                                fileName: \"/Users/annemariesamuelsen/Documents/DEV/leaderboard/components/board.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (e)=>setScore(e.target.value),\n                                type: \"text\",\n                                value: score,\n                                placeholder: \"Poeng\"\n                            }, void 0, false, {\n                                fileName: \"/Users/annemariesamuelsen/Documents/DEV/leaderboard/components/board.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                value: \"Add Player\",\n                                children: \"Legg til spiller\"\n                            }, void 0, false, {\n                                fileName: \"/Users/annemariesamuelsen/Documents/DEV/leaderboard/components/board.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined),\n                            randomWinner && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: randomWinner\n                            }, void 0, false, {\n                                fileName: \"/Users/annemariesamuelsen/Documents/DEV/leaderboard/components/board.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 28\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/annemariesamuelsen/Documents/DEV/leaderboard/components/board.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleRandom(_participents__WEBPACK_IMPORTED_MODULE_4__.Leaderboard),\n                        children: \"Trekk tilfeldigspiller\"\n                    }, void 0, false, {\n                        fileName: \"/Users/annemariesamuelsen/Documents/DEV/leaderboard/components/board.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/annemariesamuelsen/Documents/DEV/leaderboard/components/board.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/annemariesamuelsen/Documents/DEV/leaderboard/components/board.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Board, \"DL+EKCJ3eXE6AXFzWH/m0+Pvc1I=\");\n_c = Board;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\nvar _c;\n$RefreshReg$(_c, \"Board\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JvYXJkLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDUDtBQUNDO0FBQ1c7QUFFdEMsTUFBTUssUUFBUSxJQUFNOztJQUN6QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR04sK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDTyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDYSxjQUFjQyxnQkFBZ0IsR0FBR2QsK0NBQVFBO0lBRWhELE1BQU1lLGVBQWUsT0FBT0MsSUFBVztRQUNyQ0EsRUFBRUMsY0FBYztRQUNoQkwsU0FBUztRQUNUTSxRQUFRQyxHQUFHLENBQUM7UUFDWixJQUFJZCxRQUFRRSxPQUFPO1lBQ2pCLGdDQUFnQztZQUNoQyxJQUFJO2dCQUNGLE1BQU1hLE9BQU87b0JBQUVmO29CQUFNRTtvQkFBT0U7Z0JBQU07Z0JBQ2xDUyxRQUFRQyxHQUFHLENBQUNDO2dCQUNaLE1BQU1DLE1BQU8sK0NBQThDO29CQUN6REMsUUFBUTtvQkFDUkMsU0FBUzt3QkFBRSxnQkFBZ0I7b0JBQW1CO29CQUM5Q0gsTUFBTUksS0FBS0MsU0FBUyxDQUFDTDtnQkFDdkI7Z0JBQ0EsTUFBTW5CLHVEQUFXLENBQUM7WUFDcEIsRUFBRSxPQUFPVSxPQUFPO2dCQUNkTyxRQUFRUCxLQUFLLENBQUNBO1lBQ2hCO1FBQ0YsT0FBTztZQUNMQyxTQUFTO1lBQ1Q7UUFDRixDQUFDO0lBQ0g7SUFFQSxNQUFNZSxlQUFlLENBQUN4QixjQUFxQjtRQUN6QyxJQUFJeUIsT0FBT3pCLFdBQVcsQ0FBQzBCLEtBQUtDLEtBQUssQ0FBQ0QsS0FBS0UsTUFBTSxLQUFLNUIsWUFBWTZCLE1BQU0sRUFBRSxDQUFDM0IsSUFBSTtRQUMzRWEsUUFBUUMsR0FBRyxDQUFDUztRQUNaZCxnQkFBZ0JjO0lBQ2xCO0lBRUEsTUFBTUssbUJBQW1CLENBQUM5QixjQUFxQjtRQUM3QyxPQUFPQSxZQUFZK0IsSUFBSSxDQUFDLENBQUNDLEdBQVFDLElBQVc7WUFDMUMsSUFBSUQsRUFBRTFCLEtBQUssS0FBSzJCLEVBQUUzQixLQUFLLEVBQUU7Z0JBQ3ZCLE9BQU8yQixFQUFFM0IsS0FBSyxHQUFHMEIsRUFBRTFCLEtBQUs7WUFDMUIsT0FBTztnQkFDTCxPQUFPMkIsRUFBRTNCLEtBQUssR0FBRzBCLEVBQUUxQixLQUFLO1lBQzFCLENBQUM7UUFDSDtJQUNGO0lBRUEscUJBQ0UsOERBQUM0QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQVc7Ozs7OzswQkFFMUIsOERBQUNwQyxpREFBUUE7Z0JBQUNDLGFBQWE4QixpQkFBaUI5QixzREFBV0E7Ozs7OzswQkFDbkQsOERBQUNrQztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFLQyxVQUFVekI7OzBDQUNkLDhEQUFDMEI7Z0NBQ0NDLFVBQVUsQ0FBQzFCLElBQU1WLFFBQVFVLEVBQUUyQixNQUFNLENBQUNDLEtBQUs7Z0NBQ3ZDQyxNQUFLO2dDQUNMRCxPQUFPdkM7Z0NBQ1B5QyxhQUFZOzs7Ozs7MENBRWQsOERBQUNMO2dDQUNDQyxVQUFVLENBQUMxQixJQUFNUixTQUFTUSxFQUFFMkIsTUFBTSxDQUFDQyxLQUFLO2dDQUN4Q0MsTUFBSztnQ0FDTEQsT0FBT3JDO2dDQUNQdUMsYUFBWTs7Ozs7OzBDQUVkLDhEQUFDTDtnQ0FDQ0MsVUFBVSxDQUFDMUIsSUFBTU4sU0FBU00sRUFBRTJCLE1BQU0sQ0FBQ0MsS0FBSztnQ0FDeENDLE1BQUs7Z0NBQ0xELE9BQU9uQztnQ0FDUHFDLGFBQVk7Ozs7OzswQ0FFZCw4REFBQ0M7Z0NBQU9GLE1BQUs7Z0NBQVNELE9BQU07MENBQWE7Ozs7Ozs0QkFHeEMvQiw4QkFBZ0IsOERBQUNtQzswQ0FBR25DOzs7Ozs7Ozs7Ozs7a0NBRXZCLDhEQUFDa0M7d0JBQU9FLFNBQVMsSUFBTXRCLGFBQWF4QixzREFBV0E7a0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0xRCxFQUFFO0dBbkZXQztLQUFBQTtBQXFGYiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JvYXJkLnRzeD9jZWMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFByb2ZpbGVzIGZyb20gJy4vcHJvZmlsZXMnO1xuaW1wb3J0IHsgTGVhZGVyYm9hcmQgfSBmcm9tICcuL3BhcnRpY2lwZW50cyc7XG5cbmV4cG9ydCBjb25zdCBCb2FyZCA9ICgpID0+IHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3Njb3JlLCBzZXRTY29yZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcmFuZG9tV2lubmVyLCBzZXRSYW5kb21XaW5uZXJdID0gdXNlU3RhdGUoKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogYW55KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldEVycm9yKCcnKTtcbiAgICBjb25zb2xlLmxvZygnaGVpJyk7XG4gICAgaWYgKG5hbWUgJiYgZW1haWwpIHtcbiAgICAgIC8vIHNlbmQgYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBib2R5ID0geyBuYW1lLCBlbWFpbCwgc2NvcmUgfTtcbiAgICAgICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgICAgIGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL2NyZWF0ZVBhcnRpY2lwYW50YCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxuICAgICAgICB9KTtcbiAgICAgICAgYXdhaXQgUm91dGVyLnB1c2goJy8nKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRFcnJvcignQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmFuZG9tID0gKExlYWRlcmJvYXJkOiBhbnkpID0+IHtcbiAgICB2YXIgaXRlbSA9IExlYWRlcmJvYXJkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIExlYWRlcmJvYXJkLmxlbmd0aCldLm5hbWU7XG4gICAgY29uc29sZS5sb2coaXRlbSk7XG4gICAgc2V0UmFuZG9tV2lubmVyKGl0ZW0pO1xuICB9O1xuXG4gIGNvbnN0IHNvcnRQYXJ0aWNpcGFudHMgPSAoTGVhZGVyYm9hcmQ6IGFueSkgPT4ge1xuICAgIHJldHVybiBMZWFkZXJib2FyZC5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4ge1xuICAgICAgaWYgKGEuc2NvcmUgPT09IGIuc2NvcmUpIHtcbiAgICAgICAgcmV0dXJuIGIuc2NvcmUgLSBhLnNjb3JlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGIuc2NvcmUgLSBhLnNjb3JlO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JvYXJkJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdkdXJhdGlvbic+QWxsLVRpbWU8L2Rpdj5cblxuICAgICAgPFByb2ZpbGVzIExlYWRlcmJvYXJkPXtzb3J0UGFydGljaXBhbnRzKExlYWRlcmJvYXJkKX0+PC9Qcm9maWxlcz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGQtcGxheWVyLWZvcm0nPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgdmFsdWU9e25hbWV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nTmF2bidcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0Vwb3N0J1xuICAgICAgICAgIC8+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNjb3JlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICB2YWx1ZT17c2NvcmV9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj0nUG9lbmcnXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgdmFsdWU9J0FkZCBQbGF5ZXInPlxuICAgICAgICAgICAgTGVnZyB0aWwgc3BpbGxlclxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIHtyYW5kb21XaW5uZXIgJiYgPHA+e3JhbmRvbVdpbm5lcn08L3A+fVxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlUmFuZG9tKExlYWRlcmJvYXJkKX0+XG4gICAgICAgICAgVHJla2sgdGlsZmVsZGlnc3BpbGxlclxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9hcmQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJvdXRlciIsIlByb2ZpbGVzIiwiTGVhZGVyYm9hcmQiLCJCb2FyZCIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsInNjb3JlIiwic2V0U2NvcmUiLCJlcnJvciIsInNldEVycm9yIiwicmFuZG9tV2lubmVyIiwic2V0UmFuZG9tV2lubmVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwicHVzaCIsImhhbmRsZVJhbmRvbSIsIml0ZW0iLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzb3J0UGFydGljaXBhbnRzIiwic29ydCIsImEiLCJiIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwicCIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/board.tsx\n"));

/***/ })

});