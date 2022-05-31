self["webpackHotUpdate_N_E"]("pages/profiles/[userId]",{

/***/ "./components/ProfileInfo/index.tsx":
/*!******************************************!*\
  !*** ./components/ProfileInfo/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/theme */ "./libs/theme.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProfileDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileDetail */ "./components/ProfileInfo/ProfileDetail/index.tsx");
/* harmony import */ var _ProfileSummary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileSummary */ "./components/ProfileInfo/ProfileSummary/index.tsx");
/* harmony import */ var _ProfileHead__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProfileHead */ "./components/ProfileInfo/ProfileHead/index.tsx");
/* harmony import */ var _ProfileDetail2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProfileDetail2 */ "./components/ProfileInfo/ProfileDetail2/index.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "/root/personal/CV-ts/components/ProfileInfo/index.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var ProfileInfo = function ProfileInfo(_ref) {
  _s();

  var data = _ref.data;
  var theme = (0,_libs_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mt-10",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileHead__WEBPACK_IMPORTED_MODULE_5__.default, {
      user: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-2/3 ".concat(theme.detail.bg),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileDetail__WEBPACK_IMPORTED_MODULE_3__.default, {
          user: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileDetail2__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "w-1/3 ".concat(theme.summary.bg),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileSummary__WEBPACK_IMPORTED_MODULE_4__.default, {
          user: data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, _this);
};

_s(ProfileInfo, "VrMvFCCB9Haniz3VCRPNUiCauHs=", false, function () {
  return [_libs_theme__WEBPACK_IMPORTED_MODULE_1__.useTheme];
});

_c = ProfileInfo;
/* harmony default export */ __webpack_exports__["default"] = (ProfileInfo);

var _c;

$RefreshReg$(_c, "ProfileInfo");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qcm9maWxlSW5mby9pbmRleC50c3giXSwibmFtZXMiOlsiUHJvZmlsZUluZm8iLCJkYXRhIiwidGhlbWUiLCJ1c2VUaGVtZSIsImRldGFpbCIsImJnIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsT0FBNEI7QUFBQTs7QUFBQSxNQUF6QkMsSUFBeUIsUUFBekJBLElBQXlCO0FBQzlDLE1BQU1DLEtBQUssR0FBR0MscURBQVEsRUFBdEI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUEsNEJBQ0UsOERBQUMsaURBQUQ7QUFBYSxVQUFJLEVBQUVGO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLGtCQUFXQyxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsRUFBeEIsQ0FBZDtBQUFBLGdDQUNFLDhEQUFDLG1EQUFEO0FBQWUsY0FBSSxFQUFFSjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUUsOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFO0FBQUssaUJBQVMsa0JBQVdDLEtBQUssQ0FBQ0ksT0FBTixDQUFjRCxFQUF6QixDQUFkO0FBQUEsK0JBQ0UsOERBQUMsb0RBQUQ7QUFBZ0IsY0FBSSxFQUFFSjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0FoQkQ7O0dBQU1ELFc7VUFDVUcsaUQ7OztLQURWSCxXO0FBa0JOLCtEQUFlQSxXQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGVzL1t1c2VySWRdLmZmOTZmYWFmMWQ4ZGU1YzhiMzk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVXNlciB9IGZyb20gXCJAL2xpYnMvbW9kZWxzL1VzZXJcIjtcbmltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSBcIkAvbGlicy90aGVtZVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb2ZpbGVEZXRhaWwgZnJvbSBcIi4vUHJvZmlsZURldGFpbFwiO1xuaW1wb3J0IFByb2ZpbGVTdW1tYXJ5IGZyb20gXCIuL1Byb2ZpbGVTdW1tYXJ5XCI7XG5pbXBvcnQgUHJvZmlsZUhlYWQgZnJvbSBcIi4vUHJvZmlsZUhlYWRcIjtcbmltcG9ydCBQcm9maWxlRGV0YWlsMiBmcm9tIFwiLi9Qcm9maWxlRGV0YWlsMlwiO1xuXG50eXBlIFByb2ZpbGVQcm9wcyA9IHtcbiAgZGF0YTogSVVzZXI7XG59O1xuXG5jb25zdCBQcm9maWxlSW5mbyA9ICh7IGRhdGEgfTogUHJvZmlsZVByb3BzKSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICA8UHJvZmlsZUhlYWQgdXNlcj17ZGF0YX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMi8zICR7dGhlbWUuZGV0YWlsLmJnfWB9PlxuICAgICAgICAgIDxQcm9maWxlRGV0YWlsIHVzZXI9e2RhdGF9IC8+XG4gICAgICAgICAgPFByb2ZpbGVEZXRhaWwyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHctMS8zICR7dGhlbWUuc3VtbWFyeS5iZ31gfT5cbiAgICAgICAgICA8UHJvZmlsZVN1bW1hcnkgdXNlcj17ZGF0YX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVJbmZvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==